document.addEventListener("DOMContentLoaded", async () => {

  // Read article id from query string
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "1"; // default to 1 if missing

  // Build article path in the same Components folder
  const path = `Components/article-${id}.html`;

  const main = document.getElementById("article-content");

  try {
    const response = await fetch(path);

    if (response.ok) {
      main.innerHTML = await response.text();
    } else {
      // Article not found → load 404
      const notFound = await fetch('Components/404-content.html');
      main.innerHTML = await notFound.text();
      console.warn(`Article ${id} not found. Loaded 404 content.`);
    }
  } catch (err) {
    const notFound = await fetch('Components/404-content.html');
    main.innerHTML = await notFound.text();
    console.error(`Error loading article ${id}`, err);
  }

  // remove loading class after article loads
  document.body.classList.remove("loading");
});