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
    file: "pdfs/about-me.pdf",
    fileType: "pdf",
    shortReflection: "An exercise in self-realization and goal-setting.",
    fullReflection: " This was an exercise in self-realization and setting goals for myself. This exercise made me realize my place as the "Beadle" of BSIT 2-3 and the duties that come with it. I felt a rush of excitement and slight nervousness in declaring my willingness to master intricate concepts such as encapsulation and inheritance. The goal of the assignment was not only to define one's identity but also one's place in the world as a soon-to-be computer programmer who can elevate problem-solving to an art form."
  },
  {
    id: "intro-java",
    title: "Midterm Activity #1 – Introduction to Java",
    type: "PDF",
    icon: "☕",
    file: "pdfs/activity1-intro-java.pdf",
    fileType: "pdf",
    shortReflection: "My first step into the Java ecosystem.",
    fullReflection: "This activity can best be described as mind-boggling. The visualization of Stack and Heap seemed to reveal what was previously thought of as intangible. That particular moment when it became clear that acc3 = acc1 did not create any new object, but merely referred to the old object was a major breakthrough. This was a significant step towards becoming more than a coder; now I know how computers work on a much deeper level.
"
  },
  {
    id: "activity-1",
    title: "Midterm Activity #1 – Variables",
    type: "PDF",
    icon: "📦",
    file: "pdfs/activity1-variables.pdf",
    fileType: "pdf",
    shortReflection: "Laying the cornerstone of my Java understanding.",
    fullReflection: "Reflection: The exercise felt like laying down the cornerstone of my new home in programming. There was a sense of satisfaction and comprehension of how everything fits together when I comprehended the relationship between JDK, JRE, and JVM. It was not simply memorizing definitions; it was about grasping concepts and having them click into place. I could finally understand why Java was so revolutionary — the concept of Write Once, Run Anywhere became more than just marketing hype."
  },
  {
    id: "activity-2",
    title: "Midterm Activity #2 – Operators",
    type: "PDF",
    icon: "➕",
    file: "pdfs/activity2-operators.pdf",
    fileType: "pdf",
    shortReflection: "Bitwise operators and complex unary incrementations.",
    fullReflection: "This assignment challenged my ability to focus and stay persistent. Using bitwise operators and complex unary incrementations made this assignment feel like a challenge that needed to be solved. There was definitely a certain moment where it became clear that my manually calculated values for expressions like ++x actually corresponded to the output displayed on the console. It was an enlightening experience that taught me that all details matter when coding and finding the logic of the programming process is extremely rewarding."
  },
  {
    id: "seatwork-2",
    title: "Midterm Seatwork #2 – Smart Wallet System",
    type: "PDF",
    icon: "💳",
    file: "pdfs/seatwork2-wallet.pdf",
    fileType: "pdf",
    shortReflection: "A practical system using if-else logic for transaction validation.",
    fullReflection: "This task was extremely "worldly", which is another way of saying I feel it's very practical. Putting up the if-else logic for checking the minimum amount, as well as the limit per transaction, gave me the responsibility of doing my job correctly. After all, this code should ensure the safety of the user and not give him a reason for complaining because it failed its job. Seeing the proper increase in "Transaction Count" was satisfying."
  },
  {
    id: "seatwork-3",
    title: "Midterm Seatwork #3 – Student Age Analyzer",
    type: "PDF",
    icon: "📊",
    file: "pdfs/seatwork3-age.pdf",
    fileType: "pdf",
    shortReflection: "My first real experience with modularity.",
    fullReflection: "Doing this was somehow an experience of me organizing my thoughts. It helped that I separated the age logic to a separate user-defined function, and there was this feeling that my code is getting "neater". The first time I experienced modularity, and how liberating it was to know that any changes that need to be made would require me to look only in one place instead of scouring through all my codes."
  },
  {
    id: "activity-3",
    title: "Midterm Activity #3 – Basic ATM System",
    type: "PDF",
    icon: "🏧",
    file: "pdfs/activity3-atm.pdf",
    fileType: "pdf",
    shortReflection: "Building a 'living' program with do-while loops.",
    fullReflection: "The process of making this project was like finding a beat in the user’s experience. When I added the do-while loop, I had the impression of creating a “living” code. Each time I clicked “Yes” to conduct another transaction and noticed that my balance changed from 5,000 to 6,000, it was a triumph for me. The best part was the way the “Financial Summary” appeared after the “Deposit successful!” message."
  },
  {
    id: "activity-4",
    title: "Midterm Activity #4 – Scholarship Qualification System",
    type: "PDF",
    icon: "🎓",
    file: "pdfs/activity4-scholarship.pdf",
    fileType: "pdf",
    shortReflection: "Combining entrance exam scores and interview results.",
    fullReflection: "The entire process was similar to that of a judge or assessor. The amount of logic required to combine entrance exam scores and interviews was immense. I was proud of myself when I realized that the program could distinguish between a “Waitlisted” student and an “Admitted with Scholarship” student. It was a tricky “logic tree,” but it was a success to reach the “Enrollment Assessment Result."
  },
  {
    id: "activity-5",
    title: "Midterm Activity #5 – Personal Expense Tracker",
    type: "PDF",
    icon: "💰",
    file: "pdfs/activity5-expense.pdf",
    fileType: "pdf",
    shortReflection: "My most complete project yet.",
    fullReflection: "This was a milestone in my midterm adventure. This was the most personalized and complete project I have done yet. The sense of creativity that comes through when adding the "Remaining Balance" and "Overspend" functionalities to the program is very real indeed. Getting the output "Total Expenses," and "Budget Limit" on the screen felt like a true developer, creating useful information for the user.
  },
  {
    id: "quiz-1",
    title: "Midterm Quiz #1",
    type: "PNG",
    icon: "📝",
    file: "images/quiz1.png",
    fileType: "img",
    shortReflection: "OOP demands a special kind of thinking.",
    fullReflection: "While working through this quiz, I came to realize that Object-Oriented Programming (OOP) demands some special kind of thinking process, unlike basic procedural programming. It is not enough to write code; one should be able to imagine how different objects will interact inside a certain application. For me personally, the biggest challenge was dealing with a large number of classes that needed to be traced. Sometimes, it seemed easy to imagine a flow of logic, but implementing it using rules of inheritance and encapsulation was tricky. The questions I failed to solve reflect my weaknesses in OOP. In particular, it became apparent to me that I often rushed when analyzing problems. As a result, I made some minor mistakes. At the same time, solving several difficult problems allowed me to view the topic from a slightly different angle. In conclusion, I can say that this experience has proven to me that OOP requires patience and careful examination. Although I consider myself satisfied with passing the test, 11 points that I have lost indicate areas to improve. Therefore, in the future, I would like to pay attention to manual code tracing and object relations."
  },
  {
    id: "midterm-oop",
    title: "Midterm OOP Exam",
    type: "Exam",
    icon: "🏫",
    file: null,
    fileType: "none",
    shortReflection: "True/false, programming, and multiple choice.",
    fullReflection: "Based on the experience of taking the test on OOP, the first page had true or false statements. It was difficult for me to give a definite answer because sometimes I had trouble differentiating between the concepts which were true and which were false, thus making me feel unsure about receiving high marks. But there was nothing to worry about because I made an effort by reading about and reviewing this course. In the programming section, sometimes I used a wrong label, or used a syntax that was inappropriate. There was no possibility of testing the code since this was only written on paper. As far as multiple choice question, I felt more comfortable but nevertheless, coding was a challenge to test my knowledge of the process. Most importantly, I have learned from the experience. Though my progress is slow, there is a greater likelihood of realizing my full potential as there are many chances for learning and understanding the processes in Java programming language."
  }
];

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

  // FIXED: Template literal backticks added
  const activeLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
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
  // FIXED: Template literal backticks added
  card.style.animationDelay = `${index * 80}ms`;

  const hasFile = project.fileType !== 'none';

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
  // FIXED: Template literal backticks added
  card.style.animationDelay = `${index * 80}ms`;
  card.innerHTML = `
    <div class="ph-icon">${item.icon}</div>
    <p class="ph-title">${item.title}</p>
    <p class="ph-sub">Coming soon...</p>
  `;
  return card;
}

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
