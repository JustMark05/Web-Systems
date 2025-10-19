
// ==============================
// Loading Screen
// ==============================

 window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
      preloader.classList.add("hidden");
      setTimeout(() => preloader.remove(), 800);
    }, 2000); 
  });


// ==============================
// Mobile Navigation (Improved)
// ==============================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', (e) => {
  e.stopPropagation();
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('open');
  document.body.classList.toggle('nav-open');
});

// Close nav when clicking outside
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove('active');
    hamburger.classList.remove('open');
    document.body.classList.remove('nav-open');
  }
});

// Close nav when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('open');
    document.body.classList.remove('nav-open');
  });
});



// ==============================
// Navbar scroll effect
// ==============================
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.style.background = 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)';
});


// Highlight Active Nav Link 

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const currentPage = window.location.pathname.split("/").pop(); 

  navLinks.forEach(link => {
    const linkHref = link.getAttribute("href").replace("./", "");
    if (linkHref === currentPage || (linkHref === "index.html" && (currentPage === "" || currentPage === "index.html"))) {
      link.classList.add("active");
    }
  });
});



// Lab Demo Modal video
const modal = document.getElementById('labModal');
const closeModal = document.querySelector('.close-modal');
const labButtons = document.querySelectorAll('.lab-demo-btn');

if (modal && closeModal && labButtons.length > 0) {
  const modalTitle = document.getElementById('modalTitle');
  const modalVideo = document.getElementById('modalVideo');
  const modalVideoSource = modalVideo.querySelector('source');

  const labContent = {
      1: { title: "Lab 1: HTML/CSS/Javascript" },
      2: { title: "Lab 2: HTML/CSS/Javascript" },
      3: { title: "Lab 3: HTML/CSS/Javascript" },
      4: { title: "Lab 4: HTML/CSS/Javascript" },
      5: { title: "Lab 5: HTML/CSS" }
  };

  labButtons.forEach(btn => {
      btn.addEventListener('click', () => {
          const labId = btn.dataset.lab;
          const videoPath = btn.dataset.video;

          modalTitle.textContent = labContent[labId].title;
          modalVideoSource.src = videoPath;
          modalVideo.load();
          modalVideo.play();
          modal.style.display = 'block';
      });
  });

  closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
      modalVideo.pause();
      modalVideo.currentTime = 0;
  });

  window.addEventListener('click', (e) => {
      if (e.target === modal) {
          modal.style.display = 'none';
          modalVideo.pause();
          modalVideo.currentTime = 0;
      }
  });
}

// ==============================
// Image Modal (Project Preview)
// ==============================
const imageModal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const closeImageModal = document.querySelector('.modal-close');

if (imageModal && modalImg && closeImageModal) {
  document.querySelectorAll('.view-preview').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const fullImg = this.getAttribute('data-full');
      modalImg.src = fullImg;
      imageModal.style.display = 'block';
    });
  });

  closeImageModal.addEventListener('click', () => {
    imageModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === imageModal) imageModal.style.display = 'none';
  });
}


// ==============================
// Smooth Scrolling
// ==============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

