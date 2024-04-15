const darkModeBtn = document.getElementById("dark-mode-btn");
const body = document.body;

darkModeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    darkModeBtn.textContent = "Change to Light Mode";
  } else {
    darkModeBtn.textContent = "Change to Dark Mode";
  }
});
// Smooth scrolling and highlighting
document.querySelectorAll(".intro a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Smooth scroll to the target element
      targetElement.scrollIntoView({
        behavior: "smooth",
      });

      // Highlight the target element
      targetElement.classList.add("highlight");

      // Remove highlighting after a short delay
      setTimeout(() => {
        targetElement.classList.remove("highlight");
      }, 1000);
    }
  });
});
