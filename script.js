document.addEventListener("DOMContentLoaded", () => {
    // Modal Elements
    const openBtn = document.querySelector('.register-btn');
    const modal = document.getElementById('registerModal');
    const closeBtn = document.getElementById('closeModal');
  
    // Open Modal
    if (openBtn && modal && closeBtn) {
      openBtn.addEventListener('click', e => {
        e.preventDefault(); // prevent #register jump
        modal.style.display = 'flex';
      });
  
      // Close Modal
      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });
  
      // Close if clicked outside modal content
      window.addEventListener('click', e => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });
    }
  
    // Form password validation
    const form = document.getElementById('registerForm');
    if (form) {
      form.addEventListener('submit', e => {
        const pass = document.getElementById('password').value;
        const repass = document.getElementById('repassword').value;
  
        if (pass !== repass) {
          e.preventDefault();
          alert("Passwords do not match!");
        }
      });
    }
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
      });
  
      slides[index].classList.add('active');
    }
  
    window.moveSlide = function (direction) {
      currentSlide += direction;
  
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      } else if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
  
      showSlide(currentSlide);
    };
  
    // Show the first slide on page load
    showSlide(currentSlide);
  });
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;

      // Close other active items if you want only one open at a time
      document.querySelectorAll('.faq-item').forEach(i => {
        if(i !== item) i.classList.remove('active');
      });

      item.classList.toggle('active');
    });
  });