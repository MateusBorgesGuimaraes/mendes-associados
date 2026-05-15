import { useState } from "react";
import type { CollectionEntry } from "astro:content";
import searchIcon from "../../icons/SearchIcon.svg";
import { formatDate } from "../../utils/format-date";
import { formatInitial } from "../../utils/format-initial";
import CardArticle from "../ui/CardArticle.tsx";
import ButtonLink from "../ui/ButtonLink.tsx";
import { Pagination } from "../ui/Pagination.tsx";
const POSTS_PER_PAGE = 6;

type Post = CollectionEntry<"blog">;

interface Props {
  posts: Post[];
}

const CATEGORIES = [
  { value: "todos", label: "Todos" },
  { value: "civil", label: "Civil" },
  { value: "trabalhista", label: "Trabalhista" },
  { value: "empresarial", label: "Empresarial" },
  { value: "imobiliario", label: "Imobiliário" },
  { value: "familia", label: "Família" },
];

export default function PostFilters({ posts }: Props) {
  const [activeFilter, setActiveFilter] = useState("todos");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  function handleFilter(value: string) {
    setActiveFilter(value);
    setCurrentPage(1);
  }

  function handleSearch(value: string) {
    setSearch(value);
    setCurrentPage(1);
  }

  const featured = posts.filter((p) => p.data.featured === true).slice(0, 2);

  const filtered = posts.filter((post) => {
    const matchCategory =
      activeFilter === "todos" || post.data.category === activeFilter;
    const matchSearch = post.data.title
      .toLowerCase()
      .includes(search.toLocaleLowerCase());
    return matchCategory && matchSearch;
  });

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  return (
    <>
      <div className="border-b border-border flex item-center justify-between">
        <div className="px-12 flex gap-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`border-b-2 border-transparent py-8 px-5 cursor-pointer transition hover:border-b-gold hover:text-navy
                  ${activeFilter === cat.value ? "text-navy border-b-gold" : ""}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="px-12 py-8">
          <div className="flex w-75 gap-4 items-center bg-cream-mid border border-border py-2 px-3">
            <div>
              <img src={searchIcon.src} alt="Buscar" />
            </div>
            <input
              className="placeholder:text-text-muted/40 w-full focus:outline-none"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder={"Buscar artigos..."}
              type={"text"}
            />
          </div>
        </div>
      </div>

      {/*POST EM DESTAQUE*/}

      {featured && (
        <div className="bg-cream-mid py-12 border-b border-border">
          <p className="dest mb-6 mx-12">destaque</p>
          <div className="mx-12 grid grid-cols-2">
            <div className="bg-navy px-12 py-16 flex flex-col gap-6">
              <p className="dest">{featured[0].data.category}</p>
              <h1 className="text-4xl font-serif text-text-light">
                {featured[0].data.title}
              </h1>
              <p className="text-text-subtle">{featured[0].data.excerpt}</p>
              <div className="flex items-center gap-6 my-6">
                <div className="flex gap-2 items-center">
                  <span className="rounded-full bg-navy-mid p-3 font-serif text-text-light">
                    {formatInitial(featured[0].data.author)}
                  </span>
                  <p className="text-text-light">{featured[0].data.author}</p>
                </div>
                <span className="bg-text-subtle rounded-full w-1.5 h-1.5"></span>
                <p className="text-text-subtle">
                  {formatDate(featured[0].data.date)}
                </p>
                <span className="bg-text-subtle rounded-full w-1.5 h-1.5"></span>
                <p className="text-text-subtle">{featured[0].data.readTime}</p>
              </div>
              <ButtonLink
                className="self-start"
                variant="gold"
                href={`/blog/${featured[0].id}`}
              >
                Ler artigo completo
              </ButtonLink>
            </div>
            <div className="bg-navy-mid px-12 py-16 flex flex-col gap-6">
              <p className="dest">{featured[1].data.category}</p>
              <h1 className="text-4xl font-serif text-text-light">
                {featured[1].data.title}
              </h1>
              <p className="text-text-subtle">{featured[1].data.excerpt}</p>
              <div className="flex items-center gap-6 my-6">
                <div className="flex gap-2 items-center">
                  <span className="rounded-full bg-navy p-3 font-serif text-text-light">
                    {formatInitial(featured[1].data.author)}
                  </span>
                  <p className="text-text-light">{featured[1].data.author}</p>
                </div>
                <span className="bg-text-subtle rounded-full w-1.5 h-1.5"></span>
                <p className="text-text-subtle">
                  {formatDate(featured[1].data.date)}
                </p>
                <span className="bg-text-subtle rounded-full w-1.5 h-1.5"></span>
                <p className="text-text-subtle">{featured[1].data.readTime}</p>
              </div>
              <ButtonLink
                className="self-start"
                variant="gold"
                href={`/blog/${featured[1].id}`}
              >
                Ler artigo completo
              </ButtonLink>
            </div>
          </div>
        </div>
      )}

      <div className="px-12 py-12">
        <div className="mx-auto w-fit">
          <h2 className="font-serif text-3xl text-navy mb-8">
            Oque <span className="italic text-gold">abrange</span> esta área
          </h2>

          <div
            id="posts-grid"
            className="grid grid-cols-[repeat(3,minmax(0,602px))] gap-0.5"
          >
            {paginated.length > 0 ? (
              paginated.map((a) => (
                <>
                  <CardArticle
                    key={a.id}
                    author={a.data.author}
                    category={a.data.category}
                    date={formatDate(a.data.date)}
                    href={`/blog/${a.id}`}
                    readingTime={a.data.readTime}
                    title={a.data.title}
                  />
                </>
              ))
            ) : (
              <div className="flex flex-col py-12 gap-3">
                <p className="font-serif text-xl text-navy">
                  Nenhum artigo encontrado
                </p>
                <p className="text-sm font-light text-text-muted">
                  Tente outro filtro ou termo de busca.
                </p>
                <button
                  onClick={() => {
                    setActiveFilter("todos");
                    setSearch("");
                  }}
                  className=" self-start mt-2 text-[11px] tracking-[0.12em] uppercase text-gold
                    border-b border-gold pb-0.5 hover:opacity-70 transition-opacity"
                >
                  Limpar filtros
                </button>
              </div>
            )}
          </div>
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalPosts={filtered.length}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </div>
    </>
  );
}
