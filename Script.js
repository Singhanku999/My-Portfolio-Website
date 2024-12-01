// Loader Effect
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
  });
  
  // Smooth Scroll for Navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
  
  // Hover Animation for Projects
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = "0 8px 20px rgba(255, 126, 179, 0.4)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
    });
  });
  
  

  
  