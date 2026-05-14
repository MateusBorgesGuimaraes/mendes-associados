export const formatInitial = (author: string) => {
  return (
    author
      .split(" ")
      .filter((w) => !/^(dr|dra|sr|sra|prof)\.?$/i.test(w))
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || author.slice(0, 2).toUpperCase()
  );
};
