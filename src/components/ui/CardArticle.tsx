interface Props {
  href: string;
  category: string;
  title: string;
  readingTime: string;
  author: string;
  date: string;
}

export default function CardArticle({
  href,
  category,
  title,
  readingTime,
  author,
  date,
}: Props) {
  return (
    <a
      href={href}
      className="bg-cream-mid p-6 border-t-2 border-transparent transition hover:border-t-gold"
    >
      <p className="dest mb-4">{category}</p>

      <div className="mb-3">
        <p className="font-serif text-2xl text-navy">{title}</p>
        <span className="text-sm text-gold">{readingTime}</span>
      </div>

      <div className="flex items-center gap-3">
        <p className="text-base text-text-muted">{author}</p>

        <span className="rounded-full bg-text-muted w-1 h-1"></span>

        <p className="text-base text-text-muted">{date}</p>
      </div>
    </a>
  );
}
