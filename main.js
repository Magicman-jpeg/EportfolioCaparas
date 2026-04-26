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
    icon: "👤",
    file: "https://raw.githubusercontent.com/ederlyncaparas-jpg/EportfolioCaparas/main/pdfs/about-me.pdf",
    fileType: "pdf",
    shortReflection: "An exercise in self-realization and goal-setting. Defining my identity as the Beadle of BSIT 2-3 and my journey into OOP concepts.",
    fullReflection: "This was an exercise in self-realization and setting goals for myself. This exercise made me realize my place as the \"Beadle\" of BSIT 2-3 and the duties that come with it. I[...]
  },
  {
    id: "intro-java",
    title: "Midterm Activity #1 – Introduction to Java",
    type: "PDF",
    icon: "☕",
    file: "https://raw.githubusercontent.com/ederlyncaparas-jpg/EportfolioCaparas/main/pdfs/activity1-intro-java.pdf",
    fileType: "pdf",
    shortReflection: "My first step into the Java ecosystem. Setting up the environment and writing my first program gave me a tangible sense of what it means to be a Java developer.",
    fullReflection: "This activity marked my very first hands-on encounter with Java as a language and platform. Installing the JDK and configuring the environment felt like preparing a workspace [...]
  },
  {
    id: "activity-1",
    title: "Midterm Activity #1 – Variables",
    type: "PDF",
    icon: "📦",
    file: "https://raw.githubusercontent.com/ederlyncaparas-jpg/EportfolioCaparas/main/pdfs/activity1-variables.pdf",
    fileType: "pdf",
    shortReflection: "Laying the cornerstone of my Java understanding. Grasping the relationship between JDK, JRE, and JVM made 'Write Once, Run Anywhere' more than just a slogan.",
    fullReflection: "The exercise felt like laying down the cornerstone of my new home in programming. There was a sense of satisfaction and comprehension of how everything fits together when I co[...]
  },
  {
    id: "activity-2",
    title: "Midterm Activity #2 – Operators",
    type: "PDF",
    icon: "⚙️",
    file: "https://raw.githubusercontent.com/ederlyncaparas-jpg/EportfolioCaparas/main/pdfs/activity2-operators.pdf",
    fileType: "pdf",
    shortReflection: "Bitwise operators and complex unary incrementations tested my focus. The moment ++x matched console output was a true breakthrough in understanding code logic.",
    fullReflection: "This assignment challenged my ability to focus and stay persistent. Using bitwise operators and complex unary incrementations made this assignment feel like a challenge that n[...]
  },
  {
    id: "seatwork-2",
    title: "Midterm Seatwork #2 – Smart Wallet System",
    type: "PDF",
    icon: "💳",
    file: "https://raw.githubusercontent.com/ederlyncaparas-jpg/EportfolioCaparas/main/pdfs/seatwork2-wallet.pdf",
    fileType: "pdf",
    shortReflection: "A practical system using if-else logic for transaction validation. Watching the Transaction Count update correctly gave me a real sense of developer responsibility.",
    fullReflection: "This task was extremely practical. Putting up the if-else logic for checking the minimum amount, as well as the limit per transaction, gave me the responsibility of doing my j[...]
  },
  {
    id: "seatwork-3",
    title: "Midterm Seatwork #3 – Student Age Analyzer",
    type: "PDF",
    icon: "🎓",
    file: "https://raw.githubusercontent.com/ederlyncaparas-jpg/EportfolioCaparas/main/pdfs/seatwork3-age.pdf",
    fileType: "pdf",
    shortReflection: "My first real experience with modularity. Separating age logic into a user-defined function made the code neater and showed me the power of organized programming.",
    fullReflection: "Doing this was somehow an experience of me organizing my thoughts. It helped that I separated the age logic to a separate user-defined function, and there was this feeling tha[...]
  },
  {
    id: "activity-3",
    title: "Midterm Activity #3 – Basic ATM System",
    type: "PDF",
    icon: "🏧",
    file: "https://raw.githubusercontent.com/ederlyncaparas-jpg/EportfolioCaparas/main/pdfs/activity3-atm.pdf",
    fileType: "pdf",
    shortReflection: "Building a 'living' program with do-while loops. Each successful transaction felt like a triumph — watching the balance update from 5,000 to 6,000 was rewarding.",
    fullReflection: "The process of making this project was like finding a beat in the user's experience. When I added the do-while loop, I had the impression of creating a 'living' code. Each tim[...]
  },
  {
    id: "activity-4",
    title: "Midterm Activity #4 – Scholarship Qualification System",
    type: "PDF",
    icon: "📋",
    file: "https://raw.githubusercontent.com/ederlyncaparas-jpg/EportfolioCaparas/main/pdfs/activity4-scholarship.pdf",
    fileType: "pdf",
    shortReflection: "Combining entrance exam scores and interview results into a qualification system. The logic tree distinguishing 'Waitlisted' from 'Admitted with Scholarship' was my proudest [...]
    fullReflection: "The entire process was similar to that of a judge or assessor. The amount of logic required to combine entrance exam scores and interviews was immense. I was proud of myself w[...]
  },
  {
    id: "activity-5",
    title: "Midterm Activity #5 – Personal Expense Tracker",
    type: "PDF",
    icon: "💰",
    file: "https://raw.githubusercontent.com/ederlyncaparas-jpg/EportfolioCaparas/main/pdfs/activity5-expense.pdf",
    fileType: "pdf",
    shortReflection: "My most complete project yet. Adding Remaining Balance and Overspend features felt like true developer creativity — presenting useful financial data to the user.",
    fullReflection: "This was a milestone in my midterm adventure. This was the most personalized and complete project I have done yet. The sense of creativity that comes through when adding the '[...]
  },
  {
    id: "quiz-1",
    title: "Midterm Quiz #1",
    type: "PNG",
    icon: "📝",
    file: "https://raw.githubusercontent.com/ederlyncaparas-jpg/EportfolioCaparas/main/images/quiz1.png",
    fileType: "img",
    shortReflection: "OOP demands a special kind of thinking. Tracing multiple classes and applying inheritance rules was challenging — but it taught me patience and attention to detail.",
    fullReflection: "While working through this quiz, I came to realize that OOP demands a special kind of thinking, unlike basic procedural programming. The biggest challenge was dealing with a [...]
  },
  {
    id: "midterm-oop",
    title: "Midterm OOP Exam",
    type: "Exam",
    icon: "🧪",
    file: null,
    fileType: "none",
    shortReflection: "True/false, programming, and multiple choice. Writing code on paper without testing was a real challenge, but the experience deepened my understanding of Java's processes.",
    fullReflection: "Based on the experience of taking the test on OOP, the first page had true or false statements. In the programming section, I used a wrong label or inappropriate syntax occas[...]
  }
];

const FINAL_PLACEHOLDERS = [
  { title: "Final Project #1", icon: "🔷" },
  { title: "Final Project #2", icon: "🔶" },
  { title: "Final Project #3", icon: "💎" },
];

// ======== STORAGE FOR PROJECT DATA ========
let currentProject = null;

// ======== SPA NAVIGATION ========
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.querySelector('.nav-links');

function navigateTo(pageId) {
  // Hide all pages
  pages.forEach(p => p.classList.remove('active'));
  navLinks.forEach(l => l.classList.remove('active'));

  // Show target page
  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update nav active state
  const activeLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
  if (activeLink) activeLink.classList.add('active');

  // Update URL hash
  window.location.hash = pageId;

  // Close mobile menu
  navLinksContainer.classList.remove('open');
  hamburger.classList.remove('open');
}

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = link.dataset.page;
    navigateTo(page);
  });
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinksContainer.classList.toggle('open');
});

// Handle initial hash
window.addEventListener('load', () => {
  const hash = window.location.hash.replace('#', '') || 'home';
  navigateTo(hash);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ======== CARD RENDERING ========
function createProjectCard(project, index) {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.style.animationDelay = `${index * 80}ms`;

  const hasFile = project.fileType !== 'none';

  card.innerHTML = `
    <div class="card-icon">${project.icon}</div>
    <span class="card-type">${project.type}</span>
    <h3 class="card-title">${project.title}</h3>
    <p class="card-reflection">${project.shortReflection}</p>
    ${hasFile ? `
      <button class="card-btn" data-project-id="${project.id}">
        View Project
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </button>
    ` : `
      <span style="font-size:0.78rem; color:var(--text-muted); font-style:italic; margin-top:auto;">
        📄 Written exam — no digital file
      </span>
    `}
  `;

  // Add event listener to button if it exists
  if (hasFile) {
    const button = card.querySelector('.card-btn');
    button.addEventListener('click', () => {
      openModal(project);
    });
  }

  return card;
}

function createPlaceholderCard(item, index) {
  const card = document.createElement('div');
  card.className = 'project-card placeholder-card';
  card.style.animationDelay = `${index * 80}ms`;
  card.innerHTML = `
    <div class="ph-icon">${item.icon}</div>
    <p class="ph-title">${item.title}</p>
    <p class="ph-sub">Coming soon...</p>
  `;
  return card;
}

// Render midterm cards
const midtermGrid = document.getElementById('midterm-grid');
MIDTERM_PROJECTS.forEach((project, i) => {
  midtermGrid.appendChild(createProjectCard(project, i));
});

// Render final placeholders
const finalGrid = document.getElementById('final-grid');
FINAL_PLACEHOLDERS.forEach((item, i) => {
  finalGrid.appendChild(createPlaceholderCard(item, i));
});

// ======== MODAL SYSTEM ========
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');
const modalTag = document.getElementById('modal-tag');
const modalBody = document.getElementById('modal-body');
const modalReflection = document.getElementById('modal-reflection');

function openModal(project) {
  currentProject = project;
  
  modalTitle.textContent = project.title;
  modalTag.textContent = project.type;
  modalReflection.textContent = project.fullReflection;

  // Clear previous content
  modalBody.innerHTML = '';

  if (project.fileType === 'pdf') {
    const embed = document.createElement('embed');
    embed.src = project.file;
    embed.type = 'application/pdf';
    embed.setAttribute('aria-label', project.title);
    modalBody.appendChild(embed);

    // Fallback for browsers that can't embed PDFs
    const fallback = document.createElement('a');
    fallback.href = project.file;
    fallback.target = '_blank';
    fallback.className = 'card-btn';
    fallback.style.cssText = 'display:none; margin:auto;';
    fallback.textContent = '📂 Open PDF in New Tab';
    modalBody.appendChild(fallback);

    embed.addEventListener('error', () => {
      embed.style.display = 'none';
      fallback.style.display = 'inline-flex';
    });

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
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
  // Clear body after animation
  setTimeout(() => { modalBody.innerHTML = ''; }, 300);
}

modalClose.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ======== SMOOTH REVEAL ON NAV ========
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
    observer.observe(card);
  });
}

observeCards();
