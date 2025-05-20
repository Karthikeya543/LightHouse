
  let currentIndex = 0;
  const slides = document.querySelectorAll('input[name="slide"]');

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].checked = true;
  }, 3000);

