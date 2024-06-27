import { cn } from "@/lib/utils";
import { MouseEventHandler, memo, useMemo } from "react";
import { QuestionType } from "@/components/home/faq/questions";
import { SNDCaretUp, SNDPlusCircle } from "@/lib/icons";

type Props = QuestionType & {
  index: number;
  isActive: boolean;
  handleSetActiveQAIndex: MouseEventHandler<HTMLSpanElement>;
};

function Question({ q, a, index, isActive, handleSetActiveQAIndex }: Props) {
  const Icon = useMemo(
    () => (isActive ? SNDCaretUp : SNDPlusCircle),
    [isActive]
  );

  return (
    <div
      className={cn(
        "py-[10px] rounded-[5px] bg-white shadow-faq-card pl-4 pr-2 flex items-center gap-3",
        {
          "items-end": isActive,
        }
      )}
    >
      <div className="flex-1 flex flex-col gap-1 text-black text-sm">
        <p>Q: {q}</p>
        <p
          className={cn("mb-[10px]", {
            hidden: !isActive,
          })}
        >
          A: {a}
        </p>
      </div>
      <span
        className="cursor-pointer"
        data-index={index}
        onClick={handleSetActiveQAIndex}
      >
        <Icon />
      </span>
    </div>
  );
}

export default memo(Question);
