import { maxFileSize } from "@/lib/constants";
import { CldUploadWidgetProps } from "next-cloudinary";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { toast } from "sonner";

type UploadMessage = {
  type: "success" | "error";
  text: string;
  data: string | null;
};

export default function useFileComponent({ options, name }: any) {
  const allowedFormatsString = options.clientAllowedFormats.join(", ");
  const [uploadMessage, setUploadMessage] = useState<UploadMessage>();
  const { setValue } = useFormContext();

  const handleSuccess: CldUploadWidgetProps["onSuccess"] = ({ info }) => {
    if (!info || typeof info === "string") return;

    setValue(name, info.secure_url, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setUploadMessage({
      type: "success",
      text: "Image uploaded successfully",
      data: info.secure_url,
    });
  };

  const handleUploadAdded: CldUploadWidgetProps["onUploadAdded"] = ({
    info,
  }) => {
    if (!info || typeof info === "string") return;

    const fileSize = (info as any).file.size;
    const fileExt = (info as any).file.type.split("/").at(-1);
    const maxSize = options.maxFileSize || maxFileSize;

    if (fileSize > maxSize || !options.clientAllowedFormats.includes(fileExt)) {
      setValue(name, "", { shouldDirty: true, shouldValidate: true });
      setUploadMessage({
        type: "error",
        text: `Max size is ${(maxSize / 1024 / 1024).toFixed(
          2
        )}MB of ${allowedFormatsString}`,
        data: null,
      });
      setTimeout(
        () => toast.info("Close the upload dialog and try again..."),
        2500
      );
    }
  };

  useEffect(() => {
    if (uploadMessage)
      setTimeout(() => toast[uploadMessage.type](uploadMessage.text), 2500);
  }, [uploadMessage]);

  return { handleSuccess, handleUploadAdded, uploadMessage };
}
