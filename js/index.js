document.addEventListener('DOMContentLoaded', function() {
  /* HEADER - NAVBAR */
  const navResponsive = document.getElementById('nav-responsive');
  const nav = document.getElementById('nav');
  const socialBar = document.getElementById('social-bar');
  const firstSection = document.querySelector('section');

  if (navResponsive && nav) {
    navResponsive.addEventListener('click', function() {
      nav.classList.toggle('show');
    });
  }

  if (socialBar && firstSection) {
    window.addEventListener('scroll', function() {
      const firstSectionHeight = firstSection.offsetHeight;

      if (window.scrollY > firstSectionHeight) {
        socialBar.classList.remove('hidden');
      } else {
        socialBar.classList.add('hidden');
      }
    });
  }
});


