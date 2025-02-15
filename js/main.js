document.addEventListener("DOMContentLoaded", function() {
    // Menu Burger
    const burgerMenu = document.getElementById('burgerMenu');
    const navLinks = document.getElementById('navLinks');
    const navCta = document.getElementById('navCta');
  
    if (burgerMenu && navLinks && navCta) {
      burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('open');
        navLinks.classList.toggle('active');
        navCta.classList.toggle('active');
      });
    }
  
    // Animation Fade-In
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, appearOptions);
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  
    // Back to Top Button (si utilisé)
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
      window.addEventListener('scroll', () => {
        backToTopBtn.style.display = window.pageYOffset > 300 ? "flex" : "none";
      });
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  });
  