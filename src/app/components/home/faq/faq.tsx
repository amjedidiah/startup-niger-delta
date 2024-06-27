import { SNDAt, SNDCall, SNDEmail } from "@/lib/icons";
import Questions from "@/components/home/faq/questions";
import Image from "next/image";

const faqActions = [
  { icon: SNDCall, text: "Call" },
  { icon: SNDEmail, text: "Email" },
  { icon: SNDAt, text: "DM" },
];

export default function FAQ() {
  return (
    <section>
      <article className="py-10 lg:pt-[60px] lg:pb-[52px] bg-green-pattern md:bg-green-pattern-question-mark max-h-[360px] overflow-y-visible">
        <div className="container grid lg:grid-cols-[1fr,auto] gap-10">
          <div className="flex flex-col gap-7">
            <h2 className="after:left-0 after:-bottom-4 after:bg-laurel-green-100 text-white">
              FAQ.
            </h2>
            <div className="flex flex-col gap-4">
              <h4 className="flex flex-col">
                <span className="text-white">Do You Have Questions?</span>

                <span className="text-unknown-300 text-[1.44em]">
                  Get in Touch.
                </span>
              </h4>
              <div className="flex gap-6 md:gap-8 lg:gap-10 xl:gap-[50px]">
                {faqActions.map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="p-4 sm:p-5 md:px-10 lg:px-14 xl:px-[72px] md:pt-10 lg:pt-14 xl:pt-[76px] flex flex-col justify-between lg:gap-4 rounded-[5px] bg-white-smoke-100 shadow-faq-action-card"
                  >
                    <span className="[&_svg]:scale-50 md:[&_svg]:scale-75 lg:[&_svg]:scale-90 xl:[&_svg]:scale-100">
                      <Icon />
                    </span>
                    <span className="text-tiber text-center md:text-lg lg:text-xl xl:text-2xl max-md:-mt-3">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="bg-white py-14 lg:pt-36">
        <div className="container grid lg:grid-cols-[5fr,6fr] xl:grid-cols-[1fr,700px] gap-y-6 items-center">
          <Image
            src="/images/faq-illustration.png"
            alt="faq-illustration"
            width={611}
            height={611}
            className="max-lg:mx-auto max-lg:w-1/2"
          />
          <Questions />
        </div>
      </article>
    </section>
  );
}
