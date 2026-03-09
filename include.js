document.addEventListener("DOMContentLoaded", loadIncludes);

async function loadIncludes() {
  const elements = document.querySelectorAll("[data-include]");

  for (const el of elements) {
    const file = el.getAttribute("data-include");

    try {
      const response = await fetch(file);

      if (response.ok) {
        el.innerHTML = await response.text();
      } else {
        el.innerHTML = "Component not found.";
        console.error(`Include failed: ${file} (${response.status})`);
      }

    } catch (error) {
      el.innerHTML = "Component failed to load.";
      console.error(`Fetch error for ${file}`, error);
    }
  }

  document.body.classList.remove("loading");
}