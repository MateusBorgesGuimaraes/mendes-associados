interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  onPageChange: (page: number) => void;
}

const POSTS_PER_PAGE = 6;

export const Pagination = ({
  currentPage,
  totalPages,
  totalPosts,
  onPageChange,
}: PaginationProps) => {
  function getPages(): (number | "...")[] {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | "...")[] = [];

    pages.push(1);

    if (currentPage > 3) pages.push("...");

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    for (let i = start; i <= end; i++) pages.push("...");

    pages.push(totalPages);

    return pages;
  }

  function scrollToGrid() {
    document
      .getElementById("posts-grid")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handlePage(page: number) {
    onPageChange(page);
    scrollToGrid();
  }
  const pages = getPages();
  const start = (currentPage - 1) * POSTS_PER_PAGE + 1;
  const end = Math.min(currentPage * POSTS_PER_PAGE, totalPosts);

  return (
    <div className="flex items-center justify-between mt-8 pt-6 boder-t border-border">
      <span className="text-xs font-light text-text-muted">
        Mostrando {start}-{end} de {totalPosts} artigos
      </span>

      <div className="flex items-center gap-1">
        <button
          onClick={() => handlePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-8 h-8 flex items-center justify-center border border-border rounded-sm text-text-muted text-sm transition-all
          hover:border-gold hover:text-navy disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:text-text-muted"
        >
          ←
        </button>

        {pages.map((page, i) =>
          page === "..." ? (
            <span
              key={`ellipsis-${i}`}
              className="w-8 h-8 flex items-center justify-center text-text-muted text-[12px]"
            >
              …
            </span>
          ) : (
            <button
              key={page}
              onClick={() => handlePage(page)}
              className={`w-8 h-8 flex items-center justify-center border rounded-sm text-[12px] font-light transition-all
                ${page === currentPage ? "bg-navy border-navy text-text-light" : "border-border text-text-muted hover:border-gold hover:text-navy"}`}
            >
              {page}
            </button>
          ),
        )}

        <button
          onClick={() => handlePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-8 h-8 flex items-center justify-center border border-border  rounded-sm text-text-muted text-sm transition-all
          hover:border-gold hover:text-navy disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:text-text-muted"
        >
          →
        </button>
      </div>
    </div>
  );
};
