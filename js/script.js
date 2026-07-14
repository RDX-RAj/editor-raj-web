
window.addEventListener("load", () => {
  console.log("Editor Raj Website Loaded Successfully!");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    console.log("Menu Clicked:", e.target.textContent);
  });
});
