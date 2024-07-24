"use client";
import { MouseEventHandler, useCallback, useState } from "react";
import Question from "@/components/home/faq/question";

const faqs = [
  {
    q: "Q: What types of training programs are available on your platform?",
    a: "A: We offer a wide range of training programs tailored to enhance digital skills, including technical training, leadership development, and industry-specific workshops.",
  },
  {
    q: "Q: How does your platform support startups in scaling up their ventures?",
    a: "A: We provide targeted support and strategic guidance to help startups navigate the complexities of scaling up, offering resources, mentorship, & connections to accelerate growth.",
  },
  {
    q: "Q: What opportunities are there for innovation and idea development on your platform?",
    a: "A: Our platform serves as an innovation incubator, providing a nurturing environment and resources to cultivate and grow tech innovations from concept to reality.",
  },
  {
    q: "Q: How does your platform empower entrepreneurs in their journey?",
    a: "A: We offer mentorship opportunities, funding connections, and essential resources to empower entrepreneurs to succeed in the fast-paced tech industry.",
  },
  {
    q: "Q: What role does your platform play in fostering the next generation of tech leaders?",
    a: "A: We provide programs and initiatives aimed at mentoring and guiding emerging tech talent, contributing to the development of future leaders in the digital technology space.",
  },
  {
    q: "Q: Can individuals at varying stages of their tech careers benefit from your platform?",
    a: "A: Yes, our platform caters to individuals at all career stages, from aspiring professionals looking to enhance their skills to seasoned entrepreneurs seeking to scale their ventures.",
  },
  {
    q: "Q: Are your training programs led by industry experts and professionals?",
    a: "A: Absolutely. Our training programs are curated and delivered by industry experts and professionals with extensive experience in the digital technology sector.",
  },
  {
    q: "Q: How can I get involved with your platform and access these resources and opportunities?",
    a: "A: Joining our platform is simple. Sign up for an account to unlock access to our training programs, mentorship opportunities, funding connections, and a vibrant community of tech enthusiasts and innovators.",
  },
];

export type QuestionType = (typeof faqs)[number];

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
