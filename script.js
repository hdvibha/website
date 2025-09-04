// ========= Homepage (index.html) =========
const showMessageBtn = document.getElementById("showMessage");
const message = document.getElementById("message");

if (showMessageBtn) {
  showMessageBtn.addEventListener("click", () => {
    if (message.style.display === "none" || message.style.display === "") {
      message.style.display = "block";
      message.style.animation = "popIn 0.5s ease-in-out";
    } else {
      message.style.display = "none";
    }
  });
}

// ========= Resume (resume.html) =========
const accordions = document.querySelectorAll(".accordion");

accordions.forEach(acc => {
  const btn = acc.querySelector(".acc-btn");
  btn.addEventListener("click", () => {
    // Close others when opening one (optional)
    accordions.forEach(other => {
      if (other !== acc) {
        other.classList.remove("active");
      }
    });

    // Toggle current accordion
    acc.classList.toggle("active");
  });
});

// ========= Bio-data (biodata.html) =========
// No JS needed, but keeping script.js linked for consistency.
