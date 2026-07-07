import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, Clock, Sparkles } from "lucide-react";

import { PageHero } from "@/components/site/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.seoDescription,
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return notFound();

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        icon={<Sparkles className="h-4 w-4" />}
      />

      <section className="mx-auto w-[min(920px,calc(100%-1.25rem))] py-16">
        <Card className="border-white/70 bg-white/60">
          <CardContent className="space-y-6">
            <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-[#5A6166]" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#5A6166]" />
                {post.readingTime}
              </span>
            </div>

            <article className="space-y-5">
              {post.body.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h2 key={`${block.text}-${index}`} className="pt-3 text-2xl font-semibold tracking-tight text-foreground">
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "list") {
                  return (
                    <ul key={`list-${index}`} className="space-y-3 pl-5 text-base leading-8 text-foreground/70">
                      {block.items.map((item) => (
                        <li key={item} className="list-disc">
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <p key={block.text} className="text-base leading-8 text-foreground/70">
                    {block.text}
                  </p>
                );
              })}
            </article>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto w-[min(920px,calc(100%-1.25rem))] pb-20">
        <Card className="border-white/70 bg-gradient-to-r from-white/75 to-[#e8f5e9]/70">
          <CardContent className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5A6166]">Continue Reading</p>
              <h2 className="mt-3 text-2xl font-semibold">Explore more insights or contact Dhrub directly.</h2>
            </div>
            <div className="flex gap-3">
              <Button asChild variant="secondary">
                <Link href="/blog">All Posts</Link>
              </Button>
              <Button asChild>
                <Link href="/contact">
                  Contact <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
