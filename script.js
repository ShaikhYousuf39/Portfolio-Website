window.addEventListener('scroll', function () {
  const progressBars = document.querySelectorAll('.progress-bar');

  progressBars.forEach(bar => {
    const skillLevel = bar.getAttribute('data-skill') + '%';
    bar.style.setProperty('--skill-level', skillLevel);

    // Trigger animation when the element is in view
    const bounding = bar.getBoundingClientRect();
    if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
      bar.setAttribute('data-animate', 'true');
    }
  });
});



