"use client";
import { MouseEventHandler, useCallback, useState } from "react";
import Question from "@/components/home/faq/question";

const faq = {
  q: "Lorem ipsum dolor sit amet consectetur. Commodo aliquam pelle ntesq vehicula nulla?",
  a: "Lorem ipsum dolor sit amet consectetur. Commodo aliquam pelle ntesq vehicula nulla aliquam.  Lorem ipsum dolor sit amet consectetur. Commodo aliquam pellentesq...",
};

export type QuestionType = typeof faq;

const faqs: QuestionType[] = Array(8).fill(faq);

export default function Questions() {
  const [activeQAIndex, setActiveQAIndex] = useState<number>();

  const handleSetActiveQAIndex: MouseEventHandler<HTMLSpanElement> =
    useCallback((e) => {
      e.preventDefault();

      const { index } = e.currentTarget.dataset;
      if (!index) return;

      setActiveQAIndex((prev) => (prev === +index ? undefined : +index));
    }, []);

  return (
    <div className="flex flex-col gap-4 lg:gap-7">
      {faqs.map((qa, i) => (
        <Question
          key={`faq-${i}`}
          index={i}
          isActive={activeQAIndex === i}
          handleSetActiveQAIndex={handleSetActiveQAIndex}
          {...qa}
        />
      ))}
    </div>
  );
}
