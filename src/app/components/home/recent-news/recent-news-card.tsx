import { RecentNews } from "@/components/home/recent-news/recent-news";
import SafeHTML from "@/components/shared/safe-html";
import { SNDTimer } from "@/lib/icons";
import Image from "next/image";
import { truncateText } from "@/lib/utils";

type Props = {
  recentNews: RecentNews;
};

export default function RecentNewsCard({
  recentNews: { title, src, slug, publishDate, readTime, excerpt },
}: Props) {
  const processedExcerpt = truncateText(excerpt);

  return (
    <div className="flex flex-col gap-[10px] text-gable-green group hover:cursor-pointer">
      <p className="text-lg lg:text-xl group-hover:text-shade-of-amber">
        {title}
      </p>
      <div className="w-full relative h-[248px] overflow-hidden rounded-[10px]">
        <Image
          src={src}
          alt={slug}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100%"
        />
        <div className="absolute w-full h-full group-hover:bg-gable-green-400" />
      </div>
      <div className="flex items-center justify-between font-inter font-normal lg:leading-[20px] opacity-70">
        <p>
          By <span className="font-semibold"> Admin, </span> NDS
        </p>
        <p className="flex items-center gap-1">
          <span>
            <SNDTimer />
          </span>
          <span>
            {publishDate} - {readTime} min Read
          </span>
        </p>
      </div>
      <div className="font-inter font-normal lg:leading-[20px] opacity-80 [&_a]:italic [&_a]:text-unknown-100 group-hover:underline">
        {/* <SafeHTML
          htmlContent={
            processedExcerpt + `<a href="/recent-news/${slug}"> Read more</a>`
          }
        /> */}
        <SafeHTML htmlContent={processedExcerpt} />
      </div>
    </div>
  );
}
