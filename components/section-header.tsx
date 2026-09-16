import Link from "next/link";
import { Lift } from "@/components/motion-primitives";

export function SectionHeader({
  index,
  title,
  link,
}: {
  index: string;
  title: string;
  link?: { href: string; label: string };
}) {
  return (
    <Lift className="mb-10 flex items-end justify-between gap-6">
      <div className="flex items-baseline gap-4">
        <span className="label">[ {index} ]</span>
        <h2 className="display text-4xl font-medium sm:text-5xl">{title}</h2>
      </div>
      {link && (
        <Link
          href={link.href}
          className="link-underline shrink-0 text-sm text-muted hover:text-foreground"
        >
          {link.label}
        </Link>
      )}
    </Lift>
  );
}
