export function formatDateFR(date: string | Date) {
  let d: Date;
  if (typeof date === "string") {
    // Si le format est JJ/MM/AAAA
    if (/^\d{2}\/\d{2}\/\d{4}$/.test(date)) {
      const [day, month, year] = date.split("/");
      d = new Date(Number(year), Number(month) - 1, Number(day));
    } else {
      // Sinon, on tente le format natif
      d = new Date(date);
    }
  } else {
    d = date;
  }
  return d.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
