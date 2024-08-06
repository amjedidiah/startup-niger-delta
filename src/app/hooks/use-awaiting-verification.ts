import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useSWRConfig } from "swr";
import useSWRImmutable from "swr/immutable";
import { useDebouncedCallback } from "use-debounce";

const WAIT_TIME = 60 * 3; // 5 minute

export default function useAwaitingVerification({ email, handleResend }: any) {
  const [isWaiting, setIsWaiting] = useState(false);
  const [currentWaitTime, setCurrentWaitTime] = useState(WAIT_TIME);
  const { data, isLoading, error } = useSWRImmutable(
    !isWaiting ? null : email,
    handleResend
  );
  const timerRef = useRef<any>(null);
  const { mutate } = useSWRConfig();

  const startWaiting = useDebouncedCallback(() => setIsWaiting(true), 1000);
  const startWaitCount = useDebouncedCallback(
    () =>
      (timerRef.current = setInterval(
        () => setCurrentWaitTime((prev) => prev - 1),
        1000
      )),
    1000
  );

  useEffect(() => {
    if (error && !isLoading) {
      toast.error("Error sending verification email. Please try again");
      setIsWaiting(false);
    }
  }, [error, isLoading]);

  useEffect(() => {
    if (data && !isLoading)
      toast.success("Verification email sent successfully");
  }, [data, isLoading]);

  useEffect(() => {
    if (isWaiting) {
      startWaitCount();
      return;
    }

    if (timerRef.current) {
      clearInterval(timerRef.current);
      setCurrentWaitTime(WAIT_TIME);

      mutate(
        () => true, // which cache keys are updated
        undefined, // update cache data to `undefined`
        { revalidate: false } // do not revalidate
      );
    }
  }, [isWaiting, mutate, startWaitCount]);

  useEffect(() => {
    if (currentWaitTime < 1) setIsWaiting(false);
  }, [currentWaitTime]);

  return { isWaiting, startWaiting, currentWaitTime, isLoading };
}
