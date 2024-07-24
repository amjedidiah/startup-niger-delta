import { cn } from "@/lib/utils";
import {
  MouseEventHandler,
  ReactNode,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import { QuestionType } from "@/components/home/faq/questions";
import { SNDCaretUp, SNDPlusCircle } from "@/lib/icons";

type Props = QuestionType & {
  index: number;
  isActive: boolean;
  handleSetActiveQAIndex: MouseEventHandler<HTMLSpanElement>;
};

function Question({ q, a, index, isActive, handleSetActiveQAIndex }: Props) {
  const [Icon, setIcon] = useState<ReactNode | null>(null);
  const ref = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (ref.current)
      ref.current.style.height = isActive
        ? `${ref.current.scrollHeight}px`
        : "0px";
    setTimeout(
      () => setIcon(isActive ? <SNDCaretUp /> : <SNDPlusCircle />),
      500
    );
  }, [isActive]);

  return (
    <div
      className={cn(
        "items-end py-[10px] rounded-[5px] bg-white shadow-faq-card pl-4 pr-2 flex gap-3"
      )}
    >
      <div className="flex-1 flex flex-col gap-1 text-black text-sm">
        <p>{q}</p>
        <p className="duration-[0.75s] overflow-hidden h-0" ref={ref}>
          {a}
        </p>
      </div>
      <span
        className="cursor-pointer"
        data-index={index}
        onClick={handleSetActiveQAIndex}
      >
        {Icon}
      </span>
    </div>
  );
}

export default memo(Question);
