
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};



document.querySelectorAll('.toggleReview').forEach(button => {
  button.addEventListener('click', () => {
    const review = button.nextElementSibling;
    if (review.style.display === "none" || !review.style.display) {
      review.style.display = "block";
    } else {
      review.style.display = "none";
    }
  });
});
