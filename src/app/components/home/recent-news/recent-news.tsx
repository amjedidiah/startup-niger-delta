import RecentNewsNav from "@/components/home/recent-news/recent-news-nav";
import RecentNewsCard from "@/components/home/recent-news/recent-news-card";
import OrangeButton from "@/components/shared/orange-button";
import Link from "next/link";

const recentNews = [
  {
    title: "How collaboration makes us better business person",
    src: "/images/recent-news-1.png",
    publishDate: "Jan 6, 2024",
    readTime: 2,
    slug: "article-1",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sit, et facere necessitatibus odit dolorem laborum facilis officiis soluta non recusandae culpa quisquam nisi quia. Deserunt velit laborum aspernatur obcaecati vero provident culpa voluptatibus sequi blanditiis laboriosam distinctio numquam nostrum eaque, ut molestias laudantium, adipisci quisquam minus saepe nam recusandae sed corporis cupiditate. Nostrum quam esse animi consequatur amet consequuntur temporibus quae sit autem, dolorem maiores ullam nihil reprehenderit voluptates quis illo. Odit inventore blanditiis libero minima minus laborum, excepturi ipsum? Sint nostrum sed commodi exercitationem placeat sequi dicta, nihil porro eveniet rerum amet, nesciunt repellat facilis nulla. Fuga pariatur reprehenderit rerum, obcaecati iure, perferendis accusamus eligendi sapiente dicta tempora corrupti quod iusto praesentium, nobis doloremque nulla laudantium officia enim facilis accusantium itaque impedit harum atque dolor? Ipsa odio suscipit rerum distinctio ad! Neque non laudantium magnam fuga, ex veniam eos tempore dolorum assumenda provident dolor eum est soluta optio dicta quos minus laborum unde quae saepe sed distinctio harum! Recusandae vel magni iste aliquid eaque saepe consequuntur voluptatum iusto itaque, in officiis dicta aperiam fugiat aut doloribus est. Ab accusantium, dicta dolorum eaque, cupiditate a officiis eum doloribus molestias pariatur sunt iure ducimus possimus totam facere eveniet eius culpa!",
  },
  {
    title: "How collaboration makes us better business person",
    src: "/images/recent-news-2.png",
    publishDate: "Jan 6, 2024",
    readTime: 2,
    slug: "article-2",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sit, et facere necessitatibus odit dolorem laborum facilis officiis soluta non recusandae culpa quisquam nisi quia. Deserunt velit laborum aspernatur obcaecati vero provident culpa voluptatibus sequi blanditiis laboriosam distinctio numquam nostrum eaque, ut molestias laudantium, adipisci quisquam minus saepe nam recusandae sed corporis cupiditate. Nostrum quam esse animi consequatur amet consequuntur temporibus quae sit autem, dolorem maiores ullam nihil reprehenderit voluptates quis illo. Odit inventore blanditiis libero minima minus laborum, excepturi ipsum? Sint nostrum sed commodi exercitationem placeat sequi dicta, nihil porro eveniet rerum amet, nesciunt repellat facilis nulla. Fuga pariatur reprehenderit rerum, obcaecati iure, perferendis accusamus eligendi sapiente dicta tempora corrupti quod iusto praesentium, nobis doloremque nulla laudantium officia enim facilis accusantium itaque impedit harum atque dolor? Ipsa odio suscipit rerum distinctio ad! Neque non laudantium magnam fuga, ex veniam eos tempore dolorum assumenda provident dolor eum est soluta optio dicta quos minus laborum unde quae saepe sed distinctio harum! Recusandae vel magni iste aliquid eaque saepe consequuntur voluptatum iusto itaque, in officiis dicta aperiam fugiat aut doloribus est. Ab accusantium, dicta dolorum eaque, cupiditate a officiis eum doloribus molestias pariatur sunt iure ducimus possimus totam facere eveniet eius culpa!",
  },
  {
    title: "How collaboration makes us better business person",
    src: "/images/recent-news-3.png",
    publishDate: "Jan 6, 2024",
    readTime: 2,
    slug: "article-3",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sit, et facere necessitatibus odit dolorem laborum facilis officiis soluta non recusandae culpa quisquam nisi quia. Deserunt velit laborum aspernatur obcaecati vero provident culpa voluptatibus sequi blanditiis laboriosam distinctio numquam nostrum eaque, ut molestias laudantium, adipisci quisquam minus saepe nam recusandae sed corporis cupiditate. Nostrum quam esse animi consequatur amet consequuntur temporibus quae sit autem, dolorem maiores ullam nihil reprehenderit voluptates quis illo. Odit inventore blanditiis libero minima minus laborum, excepturi ipsum? Sint nostrum sed commodi exercitationem placeat sequi dicta, nihil porro eveniet rerum amet, nesciunt repellat facilis nulla. Fuga pariatur reprehenderit rerum, obcaecati iure, perferendis accusamus eligendi sapiente dicta tempora corrupti quod iusto praesentium, nobis doloremque nulla laudantium officia enim facilis accusantium itaque impedit harum atque dolor? Ipsa odio suscipit rerum distinctio ad! Neque non laudantium magnam fuga, ex veniam eos tempore dolorum assumenda provident dolor eum est soluta optio dicta quos minus laborum unde quae saepe sed distinctio harum! Recusandae vel magni iste aliquid eaque saepe consequuntur voluptatum iusto itaque, in officiis dicta aperiam fugiat aut doloribus est. Ab accusantium, dicta dolorum eaque, cupiditate a officiis eum doloribus molestias pariatur sunt iure ducimus possimus totam facere eveniet eius culpa!",
  },
  {
    title: "How collaboration makes us better business person",
    src: "/images/recent-news-1.png",
    publishDate: "Jan 6, 2024",
    readTime: 2,
    slug: "article-4",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sit, et facere necessitatibus odit dolorem laborum facilis officiis soluta non recusandae culpa quisquam nisi quia. Deserunt velit laborum aspernatur obcaecati vero provident culpa voluptatibus sequi blanditiis laboriosam distinctio numquam nostrum eaque, ut molestias laudantium, adipisci quisquam minus saepe nam recusandae sed corporis cupiditate. Nostrum quam esse animi consequatur amet consequuntur temporibus quae sit autem, dolorem maiores ullam nihil reprehenderit voluptates quis illo. Odit inventore blanditiis libero minima minus laborum, excepturi ipsum? Sint nostrum sed commodi exercitationem placeat sequi dicta, nihil porro eveniet rerum amet, nesciunt repellat facilis nulla. Fuga pariatur reprehenderit rerum, obcaecati iure, perferendis accusamus eligendi sapiente dicta tempora corrupti quod iusto praesentium, nobis doloremque nulla laudantium officia enim facilis accusantium itaque impedit harum atque dolor? Ipsa odio suscipit rerum distinctio ad! Neque non laudantium magnam fuga, ex veniam eos tempore dolorum assumenda provident dolor eum est soluta optio dicta quos minus laborum unde quae saepe sed distinctio harum! Recusandae vel magni iste aliquid eaque saepe consequuntur voluptatum iusto itaque, in officiis dicta aperiam fugiat aut doloribus est. Ab accusantium, dicta dolorum eaque, cupiditate a officiis eum doloribus molestias pariatur sunt iure ducimus possimus totam facere eveniet eius culpa!",
  },
];

export type RecentNews = (typeof recentNews)[number];

export default function RecentNews() {
  return (
    <section className="py-10 lg:pt-[59px] lg:pb-[50px]">
      <div className="container flex flex-col gap-8 lg:gap-10">
        <header className="flex max-md:flex-col justify-between md:items-end gap-10">
          <h2 className="text-gable-green after:bg-shade-of-amber after:left-0 after:-bottom-3">
            Recent News.
          </h2>

          <RecentNewsNav />
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-9 [&>div:nth-child(n+4)]:hidden sm:max-lg:[&>div:nth-child(n+4)]:block">
          {recentNews.map((item) => (
            <RecentNewsCard key={item.slug} {...item} />
          ))}
        </div>
        <Link href="/recent-news" className="mx-auto rounded-[5px]">
          <OrangeButton className="lg:px-10">See More...</OrangeButton>
        </Link>
      </div>
    </section>
  );
}
