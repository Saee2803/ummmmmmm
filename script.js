// ============================================
// VALENTINE'S DAY - ULTRA ADVANCED WEBSITE
// Next Level JavaScript with Mind-Blowing Effects
// ============================================

// ==================== DATA ====================

const romanticMessages = [
  "You make my heart skip a beat 💕",
  "Every moment with you is magical ✨",
  "You're my favorite hello and hardest goodbye 💝",
  "My heart belongs to you forever 💗",
  "You're the reason I believe in love 💖",
  "Being with you feels like home 🏠💕",
  "You complete me in every way 💞",
  "My love for you grows stronger each day 🌹",
  "You're my sunshine on cloudy days ☀️💕",
  "Forever grateful for your love 💝",
  "You're my dream come true 💫",
  "My heart smiles when I see you 😊💕",
  "You're the best part of my life 💖",
  "Loving you is the best decision ever 💗",
  "You make ordinary moments extraordinary ✨",
  "My soul found its match in you 💞",
  "You're my today and all of my tomorrows 💕",
  "With you, I'm the happiest 😍💝",
  "You're the melody to my heart's song 🎵💕",
  "Thank you for being you 💖",
  "You're my favorite adventure 🌟💕",
  "My love story begins and ends with you 📖💝",
  "You're the sparkle in my eyes ✨💕",
  "Being yours is my favorite thing 💗",
  "You make my heart dance 💃💕",
  "Forever isn't long enough with you 💞",
  "You're my happy place 🏡💕",
  "My heart beats your name 💓",
  "You're worth every smile 😊💝",
  "Love looks beautiful on us 💕",
  "You're my once in a lifetime 🌟💖",
  "My world is better because of you 🌍💕",
  "You're my favorite notification 📱💝",
  "Falling for you was the best fall ever 🍂💕",
  "You're my sweetest addiction 🍭💖",
  "My heart found its home in yours 🏠💕",
  "You're the reason I wake up smiling 😊💝",
  "Every love song makes me think of you 🎶💕",
  "You're my perfect imperfection 💖",
  "My favorite place is next to you 💕",
  "You're my answered prayer 🙏💝",
  "Loving you is easy 💗",
  "You're my beautiful chaos 🌪️💕",
  "My heart recognizes yours 💞",
  "You're my greatest treasure 💎💕",
  "Together is my favorite place to be 💝",
  "You're my endless love story 📚💕",
  "My happiness starts with you 😊💖",
  "You're the missing piece I found 🧩💕",
  "Forever yours, always 💕💕💕",
];

const memories24Messages = [
  "Our beautiful Valentine's memory 💝",
  "A moment I'll treasure forever 💖",
  "When our love story got more beautiful 💕",
  "This memory makes my heart smile 😊💗",
  "One of my favorite moments with you 💞",
];

const videoMessages = [
  "Our precious moments captured forever 🎬💕",
  "Reliving these beautiful memories with you 💝",
];

const mainPhotos = [
  "1000042664.jpg",
  "output-onlinepngtools (1).png",
  "Snapchat-1034577406.jpg",
  "Snapchat-1088226096.jpg",
  "Snapchat-1127274885.jpg",
  "Snapchat-1143703360.jpg",
  "Snapchat-114643460.jpg",
  "Snapchat-1177986637.jpg",
  "Snapchat-1206344715.jpg",
  "Snapchat-1208902157.jpg",
  "Snapchat-1217003449.jpg",
  "Snapchat-1351608327.jpg",
  "Snapchat-1355339908.jpg",
  "Snapchat-1424395161.jpg",
  "Snapchat-1461516367.jpg",
  "Snapchat-1527812138.jpg",
  "Snapchat-1612301995.jpg",
  "Snapchat-1630522685.jpg",
  "Snapchat-1638611138.jpg",
  "Snapchat-1642780421.jpg",
  "Snapchat-1647669773.jpg",
  "Snapchat-1655832294.jpg",
  "Snapchat-1712954430.jpg",
  "Snapchat-1773361400.jpg",
  "Snapchat-1777894276.jpg",
  "Snapchat-180474062.jpg",
  "Snapchat-207022863.jpg",
  "Snapchat-2098691013.jpg",
  "Snapchat-2108260922.jpg",
  "Snapchat-2111946503.jpg",
  "Snapchat-232190347.jpg",
  "Snapchat-237856630.jpg",
  "Snapchat-307028663.jpg",
  "Snapchat-324375792.jpg",
  "Snapchat-426421537.jpg",
  "Snapchat-448285031.jpg",
  "Snapchat-464596867.jpg",
  "Snapchat-54014081.jpg",
  "Snapchat-638173509.jpg",
  "Snapchat-655729743.jpg",
  "Snapchat-67800466.jpg",
  "Snapchat-680052338.jpg",
  "Snapchat-688133676.jpg",
  "Snapchat-719977405.jpg",
  "Snapchat-82466173.jpg",
  "Snapchat-831291775.jpg",
  "Snapchat-865190286.jpg",
  "Snapchat-882325001.jpg",
  "Snapchat-886425189.jpg",
  "Snapchat-930359080.jpg",
  "Snapchat-961257445.jpg",
  "Snapchat-963150455.jpg",
  "Snapchat-996210550.jpg",
];

const memories24Photos = [
  "Memories24/IMG-20260122-WA0019.jpg",
  "Memories24/IMG-20260122-WA0020.jpg",
  "Memories24/IMG-20260122-WA0021.jpg",
  "Memories24/IMG_20250215_003548_602.webp",
  "Memories24/Snapchat-2120091249.jpg",
];

const videos = [
  "Memories24/VID-20260122-WA0022.mp4",
  "Memories24/VID-20260122-WA0023.mp4",
];

const typewriterText = "A Special Valentine's Surprise For You...";

const loveLetter = `Words cannot express how much you mean to me. Every day with you feels like a beautiful dream that I never want to wake up from.

You are my sunshine, my happiness, and my everything. Thank you for being the most amazing person in my life.

I promise to love you more with each passing day, to be there for you through every storm, and to make every moment we share special.

You make my heart complete. 💕`;

// ==================== DOM ELEMENTS ====================

const preloader = document.getElementById("preloader");
const progressBar = document.getElementById("progressBar");
const welcomeScreen = document.getElementById("welcomeScreen");
const mainContent = document.getElementById("mainContent");
const openBtn = document.getElementById("openBtn");
const pageTransition = document.getElementById("pageTransition");
const heartsBg = document.getElementById("heartsBg");
const sparkles = document.getElementById("sparkles");
const rosePetals = document.getElementById("rosePetals");
const galleryContainer = document.getElementById("galleryContainer");
const memories24Gallery = document.getElementById("memories24Gallery");
const videoGallery = document.getElementById("videoGallery");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const closeModal = document.getElementById("closeModal");
const musicToggle = document.getElementById("musicToggle");
const bgMusic = document.getElementById("bgMusic");
const typewriterEl = document.getElementById("typewriter");
const cursor = document.getElementById("cursor");
const cursorTrail = document.getElementById("cursorTrail");
const particleCanvas = document.getElementById("particleCanvas");
const fireworksCanvas = document.getElementById("fireworksCanvas");
const confettiContainer = document.getElementById("confettiContainer");
const quoteDots = document.getElementById("quoteDots");
const letterEnvelope = document.getElementById("letterEnvelope");
const letterText = document.getElementById("letterText");
const readLetterBtn = document.getElementById("readLetterBtn");
const fireworksBtn = document.getElementById("fireworksBtn");
const meterFill = document.getElementById("meterFill");
const tiltCard = document.getElementById("tiltCard");

// ==================== INITIALIZATION ====================

document.addEventListener("DOMContentLoaded", () => {
  // Hide preloader immediately as backup
  setTimeout(() => {
    if (preloader) preloader.classList.add("hidden");
  }, 1500);

  try {
    initPreloader();
  } catch (e) {
    console.log(e);
    preloader.classList.add("hidden");
  }
  try {
    initCustomCursor();
  } catch (e) {
    console.log(e);
  }
  try {
    initParticles();
  } catch (e) {
    console.log(e);
  }
  try {
    initFloatingHearts();
  } catch (e) {
    console.log(e);
  }
  try {
    initSparkles();
  } catch (e) {
    console.log(e);
  }
  try {
    initTypewriter();
  } catch (e) {
    console.log(e);
  }
  try {
    initQuoteCarousel();
  } catch (e) {
    console.log(e);
  }
  try {
    initGallery();
  } catch (e) {
    console.log(e);
  }
  try {
    initMemories24();
  } catch (e) {
    console.log(e);
  }
  try {
    initVideos();
  } catch (e) {
    console.log(e);
  }
  try {
    initModal();
  } catch (e) {
    console.log(e);
  }
  try {
    initMusicToggle();
  } catch (e) {
    console.log(e);
  }
  try {
    initScrollAnimations();
  } catch (e) {
    console.log(e);
  }
  try {
    initTimeline();
  } catch (e) {
    console.log(e);
  }
  try {
    initLoveMeter();
  } catch (e) {
    console.log(e);
  }
  try {
    initLetter();
  } catch (e) {
    console.log(e);
  }
  try {
    initFireworks();
  } catch (e) {
    console.log(e);
  }
  try {
    initCountdown();
  } catch (e) {
    console.log(e);
  }
  try {
    initTiltEffect();
  } catch (e) {
    console.log(e);
  }
  try {
    initSideNav();
  } catch (e) {
    console.log(e);
  }
});

// ==================== PRELOADER ====================

function initPreloader() {
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 30 + 10; // Faster loading
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      progressBar.style.width = "100%";
      setTimeout(() => {
        preloader.classList.add("hidden");
      }, 300);
    }
    progressBar.style.width = progress + "%";
  }, 100); // Faster interval

  // Fallback - hide preloader after 2 seconds max
  setTimeout(() => {
    preloader.classList.add("hidden");
  }, 2000);
}

// ==================== CUSTOM CURSOR ====================

function initCustomCursor() {
  if (window.innerWidth <= 768) return;

  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = mouseX - 12 + "px";
    cursor.style.top = mouseY - 12 + "px";

    // Create trail heart
    if (Math.random() > 0.7) {
      createTrailHeart(mouseX, mouseY);
    }
  });

  function createTrailHeart(x, y) {
    const heart = document.createElement("span");
    heart.className = "trail-heart";
    heart.textContent = ["💕", "💖", "💗", "✨"][Math.floor(Math.random() * 4)];
    heart.style.left = x + "px";
    heart.style.top = y + "px";
    cursorTrail.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
  }

  // Hover effects
  document
    .querySelectorAll("button, a, .gallery-card, .memory24-card, .video-card")
    .forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.transform = "scale(1.5)";
      });
      el.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(1)";
      });
    });
}

// ==================== PARTICLE SYSTEM ====================

function initParticles() {
  const ctx = particleCanvas.getContext("2d");
  particleCanvas.width = window.innerWidth;
  particleCanvas.height = window.innerHeight;

  const particles = [];
  const particleCount = 50;

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * particleCanvas.width;
      this.y = Math.random() * particleCanvas.height;
      this.size = Math.random() * 3 + 1;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.speedY = (Math.random() - 0.5) * 0.5;
      this.opacity = Math.random() * 0.5 + 0.2;
      this.color = ["#ff6b9d", "#ffd700", "#ff4081", "#ffb6c1"][
        Math.floor(Math.random() * 4)
      ];
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > particleCanvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > particleCanvas.height) this.speedY *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);

    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });

    // Draw connections
    particles.forEach((a, i) => {
      particles.slice(i + 1).forEach((b) => {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(255, 107, 157, ${0.1 * (1 - distance / 150)})`;
          ctx.stroke();
        }
      });
    });

    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener("resize", () => {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
  });
}
// ==================== FLOATING HEARTS ====================

function initFloatingHearts() {
  const hearts = ["❤️", "💕", "💖", "💗", "💝", "💞", "💓", "♥️"];

  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = Math.random() * 25 + 15 + "px";
    heart.style.animationDuration = Math.random() * 15 + 10 + "s";
    heart.style.animationDelay = Math.random() * 10 + "s";
    heartsBg.appendChild(heart);
  }
}

// ==================== SPARKLES ====================

function initSparkles() {
  for (let i = 0; i < 40; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = Math.random() * 100 + "%";
    sparkle.style.top = Math.random() * 100 + "%";
    sparkle.style.animationDelay = Math.random() * 3 + "s";
    sparkle.style.animationDuration = Math.random() * 2 + 1 + "s";
    sparkles.appendChild(sparkle);
  }
}

// ==================== TYPEWRITER EFFECT ====================

function initTypewriter() {
  let index = 0;

  function type() {
    if (index < typewriterText.length) {
      typewriterEl.textContent += typewriterText.charAt(index);
      index++;
      setTimeout(type, 80);
    }
  }

  setTimeout(type, 1000);
}

// ==================== OPEN BUTTON ====================

openBtn.addEventListener("click", () => {
  // Show page transition
  pageTransition.classList.add("active");

  setTimeout(() => {
    welcomeScreen.classList.add("hidden");
    pageTransition.classList.remove("active");
    mainContent.classList.add("visible");
    createRosePetals();
    launchConfetti();
  }, 800);
});

// ==================== ROSE PETALS ====================

function createRosePetals() {
  const colors = ["#ff6b9d", "#ff4081", "#ffb6c1", "#ff8a9a", "#ffd700"];

  for (let i = 0; i < 30; i++) {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.style.left = Math.random() * 100 + "%";
    petal.style.width = Math.random() * 20 + 15 + "px";
    petal.style.height = petal.style.width;
    petal.style.background = colors[Math.floor(Math.random() * colors.length)];
    petal.style.animationDuration = Math.random() * 8 + 5 + "s";
    petal.style.animationDelay = Math.random() * 5 + "s";
    rosePetals.appendChild(petal);
  }
}

// ==================== QUOTE CAROUSEL ====================

function initQuoteCarousel() {
  const slides = document.querySelectorAll(".quote-slide");
  const prevBtn = document.querySelector(".quote-nav-btn.prev");
  const nextBtn = document.querySelector(".quote-nav-btn.next");
  let currentSlide = 0;

  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className = `quote-dot ${i === 0 ? "active" : ""}`;
    dot.addEventListener("click", () => goToSlide(i));
    quoteDots.appendChild(dot);
  });

  function updateSlides() {
    slides.forEach((slide, i) => {
      slide.classList.remove("active", "prev");
      if (i === currentSlide) {
        slide.classList.add("active");
      } else if (i < currentSlide) {
        slide.classList.add("prev");
      }
    });

    document.querySelectorAll(".quote-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);
    });
  }

  function goToSlide(index) {
    currentSlide = index;
    updateSlides();
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides();
  }

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  // Auto play
  setInterval(nextSlide, 5000);
}

// ==================== 3D FLIP GALLERY ====================

function initGallery() {
  mainPhotos.forEach((photo, index) => {
    const message = romanticMessages[index % romanticMessages.length];

    const card = document.createElement("div");
    card.className = "gallery-card";
    card.style.animationDelay = index * 0.05 + "s";

    card.innerHTML = `
            <div class="gallery-card-inner">
                <div class="gallery-card-front">
                    <img src="${photo}" alt="Memory ${index + 1}" loading="lazy">
                    <span class="gallery-card-badge">💕 Click Me</span>
                </div>
                <div class="gallery-card-back">
                    <p class="message">${message}</p>
                    <div class="hearts">
                        <i class="fas fa-heart"></i>
                        <i class="fas fa-heart"></i>
                        <i class="fas fa-heart"></i>
                    </div>
                </div>
            </div>
        `;

    card.addEventListener("click", () => {
      if (!card.classList.contains("flipped")) {
        card.classList.add("flipped");
      } else {
        card.classList.remove("flipped");
        // Open modal on second click
        setTimeout(() => {
          if (!card.classList.contains("flipped")) {
            openModal(photo, message);
          }
        }, 300);
      }
    });

    galleryContainer.appendChild(card);
  });
}

// ==================== MEMORIES 2024 SLIDER ====================

function initMemories24() {
  memories24Photos.forEach((photo, index) => {
    const message = memories24Messages[index % memories24Messages.length];

    const card = document.createElement("div");
    card.className = "memory24-card";

    card.innerHTML = `
            <div class="memory24-image-container">
                <img src="${photo}" alt="Memory 2024 ${index + 1}" class="memory24-image" loading="lazy">
                <span class="memory24-badge">Valentine 2024 💕</span>
            </div>
            <div class="memory24-content">
                <p class="memory24-message">${message}</p>
                <div class="memory24-hearts">
                    <i class="fas fa-heart"></i>
                    <i class="fas fa-heart"></i>
                    <i class="fas fa-heart"></i>
                    <i class="fas fa-heart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
        `;

    card.addEventListener("click", () => openModal(photo, message));
    memories24Gallery.appendChild(card);
  });

  // Slider controls
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  prevBtn.addEventListener("click", () => {
    memories24Gallery.scrollBy({ left: -380, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    memories24Gallery.scrollBy({ left: 380, behavior: "smooth" });
  });
}

// ==================== VIDEOS ====================

function initVideos() {
  videos.forEach((video, index) => {
    const message = videoMessages[index % videoMessages.length];

    const videoCard = document.createElement("div");
    videoCard.className = "video-card";

    videoCard.innerHTML = `
            <div class="video-wrapper">
                <video controls preload="metadata">
                    <source src="${video}" type="video/mp4">
                </video>
                <div class="play-overlay">
                    <div class="play-btn">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
            </div>
            <div class="video-content">
                <h3 class="video-title">Our Special Moment ${index + 1} 💕</h3>
                <p class="video-message">${message}</p>
            </div>
        `;

    videoGallery.appendChild(videoCard);
  });
}

// ==================== MODAL ====================

function initModal() {
  closeModal.addEventListener("click", closeModalFunc);
  imageModal.addEventListener("click", (e) => {
    if (e.target === imageModal) closeModalFunc();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModalFunc();
  });
}

function openModal(imageSrc, caption) {
  modalImage.src = imageSrc;
  modalCaption.textContent = caption;
  imageModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModalFunc() {
  imageModal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// ==================== MUSIC TOGGLE ====================

function initMusicToggle() {
  musicToggle.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play().catch(() => {});
      musicToggle.classList.add("playing");
    } else {
      bgMusic.pause();
      musicToggle.classList.remove("playing");
    }
  });
}

// ==================== SCROLL ANIMATIONS ====================

function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 },
  );

  document
    .querySelectorAll(
      ".gallery-card, .memory24-card, .video-card, .reason-card",
    )
    .forEach((el) => {
      observer.observe(el);
    });
}

// ==================== TIMELINE ====================

function initTimeline() {
  const timelineItems = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.3 },
  );

  timelineItems.forEach((item) => observer.observe(item));
}

// ==================== LOVE METER ====================

function initLoveMeter() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate meter fill
          setTimeout(() => {
            meterFill.style.width = "100%";

            // Activate hearts one by one
            const hearts = document.querySelectorAll(".meter-hearts .fa-heart");
            hearts.forEach((heart, i) => {
              setTimeout(
                () => {
                  heart.classList.add("active");
                },
                400 * (i + 1),
              );
            });
          }, 500);
        }
      });
    },
    { threshold: 0.5 },
  );

  observer.observe(document.querySelector(".love-meter-section"));
}

// ==================== LOVE LETTER ====================

function initLetter() {
  readLetterBtn.addEventListener("click", () => {
    letterEnvelope.classList.toggle("open");

    if (letterEnvelope.classList.contains("open")) {
      // Typewriter effect for letter
      letterText.textContent = "";
      let index = 0;

      function typeLetter() {
        if (index < loveLetter.length) {
          letterText.textContent += loveLetter.charAt(index);
          index++;
          setTimeout(typeLetter, 30);
        }
      }

      setTimeout(typeLetter, 800);
      readLetterBtn.innerHTML =
        '<i class="fas fa-envelope"></i><span>Close Letter</span>';
    } else {
      readLetterBtn.innerHTML =
        '<i class="fas fa-envelope-open-text"></i><span>Read My Letter</span>';
    }
  });
}

// ==================== FIREWORKS ====================

function initFireworks() {
  const ctx = fireworksCanvas.getContext("2d");
  fireworksCanvas.width = fireworksCanvas.parentElement.offsetWidth;
  fireworksCanvas.height = fireworksCanvas.parentElement.offsetHeight;

  const fireworks = [];
  const particles = [];
  let isAnimating = false;

  class Firework {
    constructor(x, y, targetY) {
      this.x = x;
      this.y = y;
      this.targetY = targetY;
      this.speed = 8;
      this.exploded = false;
      this.color = `hsl(${Math.random() * 60 + 330}, 100%, 60%)`;
    }

    update() {
      this.y -= this.speed;

      if (this.y <= this.targetY) {
        this.explode();
        return false;
      }
      return true;
    }

    explode() {
      const particleCount = 80;
      for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * Math.PI * 2;
        const speed = Math.random() * 6 + 2;
        particles.push({
          x: this.x,
          y: this.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: this.color,
          life: 1,
          decay: Math.random() * 0.02 + 0.01,
        });
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  function animate() {
    if (!isAnimating) return;

    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);

    // Update fireworks
    for (let i = fireworks.length - 1; i >= 0; i--) {
      if (!fireworks[i].update()) {
        fireworks.splice(i, 1);
      } else {
        fireworks[i].draw();
      }
    }

    // Update particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.1; // gravity
      p.life -= p.decay;

      if (p.life <= 0) {
        particles.splice(i, 1);
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    requestAnimationFrame(animate);
  }

  function launchFirework() {
    const x = Math.random() * fireworksCanvas.width;
    const y = fireworksCanvas.height;
    const targetY = Math.random() * fireworksCanvas.height * 0.5 + 50;
    fireworks.push(new Firework(x, y, targetY));
  }

  fireworksBtn.addEventListener("click", () => {
    if (!isAnimating) {
      isAnimating = true;
      animate();
    }

    // Launch multiple fireworks
    for (let i = 0; i < 5; i++) {
      setTimeout(launchFirework, i * 300);
    }

    launchConfetti();
  });

  window.addEventListener("resize", () => {
    fireworksCanvas.width = fireworksCanvas.parentElement.offsetWidth;
    fireworksCanvas.height = fireworksCanvas.parentElement.offsetHeight;
  });
}

// ==================== CONFETTI ====================

function launchConfetti() {
  const shapes = ["❤️", "💕", "💖", "✨", "🌟", "💝"];

  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const confetti = document.createElement("span");
      confetti.className = "confetti";
      confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
      confetti.style.left = Math.random() * 100 + "%";
      confetti.style.fontSize = Math.random() * 20 + 10 + "px";
      confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
      confettiContainer.appendChild(confetti);

      setTimeout(() => confetti.remove(), 5000);
    }, i * 30);
  }
}

// ==================== COUNTDOWN ====================

function initCountdown() {
  // Relationship start date - 28 October 2024
  const startDate = new Date("2024-10-28");

  function updateCountdown() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(3, "0");
    document.getElementById("hours").textContent = String(hours).padStart(
      2,
      "0",
    );
    document.getElementById("minutes").textContent = String(minutes).padStart(
      2,
      "0",
    );
    document.getElementById("seconds").textContent = String(seconds).padStart(
      2,
      "0",
    );
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// ==================== TILT EFFECT ====================

function initTiltEffect() {
  if (!tiltCard || window.innerWidth <= 768) return;

  tiltCard.addEventListener("mousemove", (e) => {
    const rect = tiltCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    tiltCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  tiltCard.addEventListener("mouseleave", () => {
    tiltCard.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  });
}

// ==================== SIDE NAVIGATION ====================

function initSideNav() {
  const navDots = document.querySelectorAll(".nav-dot");
  const sections = [
    "heroSection",
    "memoriesSection",
    "memories24Section",
    "videoSection",
    "finalSection",
  ];

  // Update active dot on scroll
  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop - 200;
        if (window.scrollY >= sectionTop) {
          current = sectionId;
        }
      }
    });

    navDots.forEach((dot) => {
      dot.classList.remove("active");
      if (dot.getAttribute("href") === "#" + current) {
        dot.classList.add("active");
      }
    });
  });
}

// ==================== CLICK SPARKLE EFFECT ====================

document.addEventListener("click", (e) => {
  createClickSparkle(e.clientX, e.clientY);
});

function createClickSparkle(x, y) {
  const emojis = ["💕", "💖", "💗", "✨", "💝", "❤️"];

  for (let i = 0; i < 8; i++) {
    const sparkle = document.createElement("span");
    sparkle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    sparkle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            font-size: 20px;
            pointer-events: none;
            z-index: 9999;
            animation: clickSparkle 0.8s ease-out forwards;
        `;

    const angle = (i / 8) * Math.PI * 2;
    const distance = 60 + Math.random() * 40;
    sparkle.style.setProperty("--tx", Math.cos(angle) * distance + "px");
    sparkle.style.setProperty("--ty", Math.sin(angle) * distance + "px");

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 800);
  }
}

// Add click sparkle animation
const sparkleStyle = document.createElement("style");
sparkleStyle.textContent = `
    @keyframes clickSparkle {
        0% { transform: translate(0, 0) scale(1); opacity: 1; }
        100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
    }
`;
document.head.appendChild(sparkleStyle);

// ==================== PARALLAX EFFECT ====================

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;

  document.querySelectorAll(".parallax-layer").forEach((layer, index) => {
    const speed = (index + 1) * 0.2;
    layer.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// ==================== CONSOLE MESSAGE ====================

console.log(
  "%c💕 Made with Love 💕",
  "font-size: 30px; color: #ff6b9d; font-family: cursive; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);",
);
console.log("%cHappy Valentine's Day! 💖", "font-size: 20px; color: #ff4081;");
console.log(
  "%cThis website is a gift of love 🌹",
  "font-size: 16px; color: #ffd700;",
);
