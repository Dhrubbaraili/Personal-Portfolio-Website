import type { Metadata } from "next";
import { Sparkles } from "lucide-react";

import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { BlogCard } from "@/components/site/blog-card";
import { blogPosts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on AI marketing, automation, SEO, branding, and growth strategy.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Premium articles on AI marketing, automation, SEO, and brand growth."
        description="Designed to support thought leadership, search visibility, and ongoing educational content."
        icon={<Sparkles className="h-4 w-4" />}
      />

      <section className="mx-auto w-[min(1120px,calc(100%-1.25rem))] py-16">
        <SectionHeading eyebrow="Latest Insights" title="Thoughtful writing, organized for discovery." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
