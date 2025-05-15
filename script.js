document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.querySelector('.register-btn');
    const modal = document.getElementById('registerModal');
    const closeBtn = document.getElementById('closeModal');
  
    if (openBtn && modal && closeBtn) {
      openBtn.addEventListener('click', e => {
        e.preventDefault();
        modal.style.display = 'flex';
      });

      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });
  
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
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }


  const targetDate = new Date('June 21, 2025 00:00:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      // Countdown ended
      document.getElementById('days').innerText = '00';
      document.getElementById('hours').innerText = '00';
      document.getElementById('minutes').innerText = '00';
      document.getElementById('seconds').innerText = '00';
      clearInterval(countdownInterval);
      return;
    }

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById('days').innerText = String(days).padStart(2, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
  }


  updateCountdown(); 
  const countdownInterval = setInterval(updateCountdown, 1000);


  const sparkleCount = 50; 
  const container = document.createElement('div');
  container.classList.add('sparklers');
  document.body.appendChild(container);

  for(let i=0; i < sparkleCount; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
   
    const size = Math.random() * 5 + 3;
    sparkle.style.width = size + 'px';
    sparkle.style.height = size + 'px';


    sparkle.style.top = Math.random() * 100 + 'vh';
    sparkle.style.left = Math.random() * 100 + 'vw';


    sparkle.style.animationDuration = (Math.random() * 3 + 2) + 's';


    sparkle.style.animationDelay = (Math.random() * 5) + 's';

    container.appendChild(sparkle);
  }
