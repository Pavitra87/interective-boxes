document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("click", function () {
    const isActive = box.classList.contains("large", "active", "popular");

    // Reset all boxes
    document.querySelectorAll(".box").forEach((b) => {
      b.classList.remove("large", "active", "popular");
      b.querySelector(".box-options").style.display = "none";
    });

    // Toggle current box
    if (!isActive) {
      box.classList.add("large", "active", "popular");
      box.querySelector(".box-options").style.display = "block";
    }
  });
});
