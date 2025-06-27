// Hamburger menu toggle logic
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      // Update aria-expanded for accessibility
      const expanded = hamburger.classList.contains('active');
      hamburger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }
});
