const countdown = document.getElementById("countdown");

const weddingDate = new Date("June 20, 2026 10:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const gap = weddingDate - now;

  const d = Math.floor(gap / (1000 * 60 * 60 * 24));
  const h = Math.floor((gap / (1000 * 60 * 60)) % 24);
  const m = Math.floor((gap / (1000 * 60)) % 60);
  const s = Math.floor((gap / 1000) % 60);

  countdown.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
}, 1000);
