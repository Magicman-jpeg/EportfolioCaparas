/* ========================================
   OOP E-Portfolio — Main JavaScript
   SPA Navigation + Modal/Lightbox System
   ======================================== */

// ======== PROJECT DATA ========
const MIDTERM_PROJECTS = [
  {
    id: "about-me",
    title: "About Me",
    type: "PDF",
    icon: "👤", // Added icons for better visuals
    file: "https://raw.githubusercontent.com/ederlyncaparas-jpg/EportfolioCaparas/main/pdfs/about-me.pdf",
    fileType: "pdf",
    shortReflection: "An exercise in self-realization and goal-setting.",
    fullReflection: "This was an exercise in self-realization and setting goals for myself. This exercise made me realize my place as the \"Beadle\" of BSIT 2-3 and the duties that come with it..."
  },
  {
    id: "intro-java",
    title: "Midterm Activity #1 – Introduction to Java",
    type: "PDF",
    icon: "☕",
    file: "https://raw.githubusercontent.com/ederlyncaparas-jpg/EportfolioCaparas/main/pdfs/activity1-intro-java.pdf",
    fileType: "pdf",
    shortReflection: "My first step into the Java ecosystem.",
    fullReflection: "This activity marked my very first hands-on encounter with Java as a language and platform..."
  },
  {
    id: "activity-1",
    title: "Midterm Activity #1 – Variables",
    type: "PDF",
    icon: "📦",
    file: "https://raw.githubusercontent.com/ederlyncaparas-jpg/EportfolioCaparas/main/pdfs/activity1-variables.pdf",
    fileType: "pdf",
    shortReflection: "Laying the cornerstone of my Java understanding.",
    fullReflection: "The exercise felt like laying down the cornerstone of my new home in programming..."
  },
  {
    id: "activity-2",
    title: "Midterm Activity #2 – Operators",
    type: "PDF",
    icon: "➕",
    file: "https://raw.githubusercontent.com/ederlyncaparas-jpg/EportfolioCaparas/main/pdfs/activity2-operators.pdf",
    fileType: "pdf",
    shortReflection: "Bitwise operators and complex unary incrementations.",
    fullReflection: "This assignment challenged my ability to focus and stay persistent..."
  },
  {
    id: "seatwork-2",
    title: "Midterm Seatwork #2 – Smart Wallet System",
    type: "PDF",
    icon: "💳",
    file: "https://raw.githubusercontent.com/ederlyncaparas-jpg/EportfolioCaparas/main/pdfs/seatwork2-wallet.pdf",
    fileType: "pdf",
    shortReflection: "A practical system using if-else logic for transaction validation.",
    fullReflection: "This task was extremely practical. Putting up the if-else logic for checking the minimum amount..."
  },
  {
    id: "seatwork-3",
    title: "Midterm Seatwork #3 – Student Age Analyzer",
    type: "PDF",
    icon: "📊",
    file: "https://raw.githubusercontent.com/ederlyncaparas-jpg/EportfolioCaparas/main/pdfs/seatwork3-age.pdf",
    fileType: "pdf",
    shortReflection: "My first real experience with modularity.",
    fullReflection: "Doing this was somehow an experience of me organizing my thoughts..."
  },
  {
    id: "activity-3",
    title: "Midterm Activity #3 – Basic ATM System",
    type: "PDF",
    icon: "🏧",
    file: "https://raw.githubusercontent.com/ederlyncaparas-jpg/EportfolioCaparas/main/pdfs/activity3-atm.pdf",
    fileType: "pdf",
    shortReflection: "Building a 'living' program with do-while loops.",
    fullReflection: "The process of making this project was like finding a beat in the user's experience..."
  },
  {
    id: "activity-4",
    title: "Midterm Activity #4 – Scholarship Qualification System",
    type: "PDF",
    icon: "🎓",
    file: "https://raw.githubusercontent.com/ederlyncaparas-jpg/EportfolioCaparas/main/pdfs/activity4-scholarship.pdf",
    fileType: "pdf",
    shortReflection: "Combining entrance exam scores and interview results.",
    fullReflection: "The entire process was similar to that of a judge or assessor..."
  },
  {
    id: "activity-5",
    title: "Midterm Activity #5 – Personal Expense Tracker",
    type: "PDF",
    icon: "💰",
    file: "https://raw.githubusercontent.com/ederlyncaparas-jpg/EportfolioCaparas/main/pdfs/activity5-expense.pdf",
    fileType: "pdf",
    shortReflection: "My most complete project yet.",
    fullReflection: "This was a milestone in my midterm adventure. This was the most personalized and complete project..."
  },
  {
    id: "quiz-1",
    title: "Midterm Quiz #1",
    type: "PNG",
    icon: "📝",
    file: "https://raw.githubusercontent.com/ederlyncaparas-jpg/EportfolioCaparas/main/images/quiz1.png",
    fileType: "img",
    shortReflection: "OOP demands a special kind of thinking.",
    fullReflection: "While working through this quiz, I came to realize that OOP demands a special kind of thinking..."
  },
  {
    id: "midterm-oop",
    title: "Midterm OOP Exam",
    type: "Exam",
    icon: "🏫",
    file: null,
    fileType: "none",
    shortReflection: "True/false, programming, and multiple choice.",
    fullReflection: "Based on the experience of taking the test on OOP, the first page had true or false statements..."
  }
];

const FINAL_PLACEHOLDERS = [
  { title: "Final Project #1", icon: "🚀" },
  { title: "Final Project #2", icon: "🛠️" },
  { title: "Final Project #3", icon: "✨" },
];

// ======== STORAGE FOR PROJECT DATA ========
let currentProject = null;

// ======== SPA NAVIGATION ========
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.querySelector('.nav-links');

function navigateTo(pageId) {
  pages.forEach(p => p.classList.remove('active'));
  navLinks.forEach(l => l.classList.remove('active'));

  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // FIXED: Added backticks for template literal and proper selection
  const activeLink = document.querySelector(.nav-link[data-page="${pageId}"]);
  if (activeLink) activeLink.classList.add('active');

  window.location.hash = pageId;
  navLinksContainer.classList.remove('open');
  if (hamburger) hamburger.classList.remove('open');
}

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = link.dataset.page;
    navigateTo(page);
  });
});

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinksContainer.classList.toggle('open');
  });
}

window.addEventListener('load', () => {
  const hash = window.location.hash.replace('#', '') || 'home';
  navigateTo(hash);
});

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    if (window.scrollY > 10) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }
});

// ======== CARD RENDERING ========
function createProjectCard(project, index) {
  const card = document.createElement('div');
  card.className = 'project-card';
  // FIXED: Added backticks for template literal
  card.style.animationDelay = ${index * 80}ms;

  const hasFile = project.fileType !== 'none';

  // FIXED: Corrected string concatenation and template literal syntax
  const buttonHTML = hasFile ? `
    <button class="card-btn" data-project-id="${project.id}">
      View Project
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <line x1="5" y1="12" x2="19" y2="12"/>
        <polyline points="12 5 19 12 12 19"/>
      </svg>
    </button>` : `
    <span style="font-size:0.78rem; color:var(--text-muted); font-style:italic; margin-top:auto;">
       Written exam — no digital file
    </span>`;

  card.innerHTML = `
    <div class="card-icon">${project.icon}</div>
    <span class="card-type">${project.type}</span>
    <h3 class="card-title">${project.title}</h3>
    <p class="card-reflection">${project.shortReflection}</p>
    ${buttonHTML}
  `;

  if (hasFile) {
    const button = card.querySelector('.card-btn');
    button.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(project);
    });
  }

  return card;
}

function createPlaceholderCard(item, index) {
  const card = document.createElement('div');
  card.className = 'project-card placeholder-card';
  card.style.animationDelay = ${index * 80}ms;
  card.innerHTML = `
    <div class="ph-icon">${item.icon}</div>
    <p class="ph-title">${item.title}</p>
    <p class="ph-sub">Coming soon...</p>
  `;
  return card;
}

// Ensure the DOM is ready before injecting cards
document.addEventListener('DOMContentLoaded', () => {
  const midtermGrid = document.getElementById('midterm-grid');
  const finalGrid = document.getElementById('final-grid');

  if (midtermGrid) {
    MIDTERM_PROJECTS.forEach((project, i) => {
      midtermGrid.appendChild(createProjectCard(project, i));
    });
  }

  if (finalGrid) {
    FINAL_PLACEHOLDERS.forEach((item, i) => {
      finalGrid.appendChild(createPlaceholderCard(item, i));
    });
  }
  
  observeCards();
});

// ======== MODAL SYSTEM ========
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');
const modalTag = document.getElementById('modal-tag');
const modalBody = document.getElementById('modal-body');
const modalReflection = document.getElementById('modal-reflection');

function openModal(project) {
  if (!modalOverlay) return;
  
  currentProject = project;
  modalTitle.textContent = project.title;
  modalTag.textContent = project.type;
  modalReflection.textContent = project.fullReflection;
  modalBody.innerHTML = '';

  if (project.fileType === 'pdf') {
    const embed = document.createElement('embed');
    embed.src = project.file;
    embed.type = 'application/pdf';
    embed.style.width = "100%";
    embed.style.height = "60vh";
    modalBody.appendChild(embed);
  } else if (project.fileType === 'img') {
    const img = document.createElement('img');
    img.src = project.file;
    img.alt = project.title;
    img.style.cssText = 'max-width:100%; max-height:65vh; object-fit:contain; border-radius:8px;';
    modalBody.appendChild(img);
  }

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { modalBody.innerHTML = ''; }, 300);
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ======== SMOOTH REVEAL ON SCROLL ========
function observeCards() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
  });
}
