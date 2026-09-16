import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { AnchorHTMLAttributes, HTMLAttributes } from "react";

function isExternal(href?: string) {
  return !!href && /^https?:\/\//.test(href);
}

export const mdxComponents: MDXComponents = {
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-12 mb-4 text-2xl font-semibold tracking-tight" {...props} />
  ),
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold tracking-tight" {...props} />
  ),
  p: (props: HTMLAttributes<HTMLParagraphElement>) => (
    <p className="my-5 leading-relaxed text-foreground/90" {...props} />
  ),
  ul: (props: HTMLAttributes<HTMLUListElement>) => (
    <ul className="my-5 list-disc space-y-2 pl-6 text-foreground/90" {...props} />
  ),
  ol: (props: HTMLAttributes<HTMLOListElement>) => (
    <ol className="my-5 list-decimal space-y-2 pl-6 text-foreground/90" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (!isExternal(href)) {
      return (
        <Link
          href={href ?? "#"}
          className="underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
        {...props}
      >
        {children}
      </a>
    );
  },
  blockquote: (props: HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="my-6 border-l-2 border-accent pl-4 italic text-muted"
      {...props}
    />
  ),
  pre: (props: HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="my-6 overflow-x-auto rounded-xl bg-[#0d1117] p-4 text-sm leading-relaxed"
      {...props}
    />
  ),
  code: ({ children, ...props }: HTMLAttributes<HTMLElement>) => {
    // Block code inside <pre> is transformed by rehype-pretty-code and
    // carries a data-language attribute; leave its own token styling alone.
    if ("data-language" in props) {
      return <code {...props}>{children}</code>;
    }
    return (
      <code
        className="rounded bg-foreground/[0.06] px-1.5 py-0.5 font-mono text-[0.85em]"
        {...props}
      >
        {children}
      </code>
    );
  },
};
