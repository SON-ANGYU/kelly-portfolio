// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Portfolio Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.5s ease-in-out';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Contact Form Handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelector('input[placeholder="Subject"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.portfolio-item, .about-content, .contact-content');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add CSS animation for fadeIn
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .portfolio-item {
        transition: all 0.3s ease;
    }
    
    .portfolio-item:hover {
        transform: translateY(-10px) scale(1.02);
    }
    
    .skill-tag {
        transition: all 0.3s ease;
    }
    
    .skill-tag:hover {
        transform: scale(1.05);
    }
    
    .social-link {
        transition: all 0.3s ease;
    }
    
    .social-link:hover {
        transform: translateY(-3px) scale(1.1);
    }
`;
document.head.appendChild(style);

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.fashion-showcase');
    
    if (hero && heroImage) {
        const rate = scrolled * -0.5;
        heroImage.style.transform = `translateY(${rate}px)`;
    }
});

// Project Gallery Modal 기능
const projectGalleryModal = document.getElementById('projectGalleryModal');
const galleryImages = document.querySelectorAll('.gallery-image');
const galleryClose = document.querySelector('.gallery-close');
const galleryPrev = document.querySelector('.gallery-prev');
const galleryNext = document.querySelector('.gallery-next');
let currentGalleryIndex = 0;

function showGalleryImage(idx) {
    galleryImages.forEach((img, i) => {
        img.style.display = (i === idx) ? 'block' : 'none';
    });
}

function openGalleryModal() {
    projectGalleryModal.style.display = 'flex';
    showGalleryImage(currentGalleryIndex);
    document.body.style.overflow = 'hidden';
}

function closeGalleryModal() {
    projectGalleryModal.style.display = 'none';
    document.body.style.overflow = '';
}

galleryClose && galleryClose.addEventListener('click', closeGalleryModal);

galleryPrev && galleryPrev.addEventListener('click', () => {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
    showGalleryImage(currentGalleryIndex);
});

galleryNext && galleryNext.addEventListener('click', () => {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
    showGalleryImage(currentGalleryIndex);
});

// ESC 키로 닫기
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectGalleryModal.style.display === 'flex') {
        closeGalleryModal();
    }
});

// 모달 바깥 클릭 시 닫기
projectGalleryModal && projectGalleryModal.addEventListener('click', (e) => {
    if (e.target === projectGalleryModal) closeGalleryModal();
});

// Project 포트폴리오 아이템 클릭 시 모달 오픈
// data-category="project"인 첫 번째 포트폴리오 아이템에만 적용
const projectPortfolioItem = document.querySelector('.portfolio-item[data-category="project"]');
if (projectPortfolioItem) {
    projectPortfolioItem.addEventListener('click', () => {
        currentGalleryIndex = 0;
        openGalleryModal();
    });
}

// Project1 Gallery Modal 기능
const project1GalleryModal = document.getElementById('project1GalleryModal');
const gallery1Images = document.querySelectorAll('.gallery1-image');
const gallery1Close = project1GalleryModal ? project1GalleryModal.querySelector('.gallery-close') : null;
const gallery1Prev = project1GalleryModal ? project1GalleryModal.querySelector('.gallery1-prev') : null;
const gallery1Next = project1GalleryModal ? project1GalleryModal.querySelector('.gallery1-next') : null;
let currentGallery1Index = 0;

function showGallery1Image(idx) {
    gallery1Images.forEach((img, i) => {
        img.style.display = (i === idx) ? 'block' : 'none';
    });
}

function openGallery1Modal() {
    project1GalleryModal.style.display = 'flex';
    showGallery1Image(currentGallery1Index);
    document.body.style.overflow = 'hidden';
}

function closeGallery1Modal() {
    project1GalleryModal.style.display = 'none';
    document.body.style.overflow = '';
}

gallery1Close && gallery1Close.addEventListener('click', closeGallery1Modal);

gallery1Prev && gallery1Prev.addEventListener('click', () => {
    currentGallery1Index = (currentGallery1Index - 1 + gallery1Images.length) % gallery1Images.length;
    showGallery1Image(currentGallery1Index);
});

gallery1Next && gallery1Next.addEventListener('click', () => {
    currentGallery1Index = (currentGallery1Index + 1) % gallery1Images.length;
    showGallery1Image(currentGallery1Index);
});

// ESC 키로 닫기
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && project1GalleryModal && project1GalleryModal.style.display === 'flex') {
        closeGallery1Modal();
    }
});

// 모달 바깥 클릭 시 닫기
project1GalleryModal && project1GalleryModal.addEventListener('click', (e) => {
    if (e.target === project1GalleryModal) closeGallery1Modal();
});

// project1 포트폴리오 아이템 클릭 시 모달 오픈
const project1PortfolioItem = document.querySelector('.portfolio-item[data-category="project1"]');
if (project1PortfolioItem) {
    project1PortfolioItem.addEventListener('click', () => {
        currentGallery1Index = 0;
        openGallery1Modal();
    });
}

// Project E-Book Modal
const projectEbookModal = document.getElementById('projectEbookModal');
const projectEbookPages = projectEbookModal ? projectEbookModal.querySelectorAll('.ebook-page') : [];
const projectEbookClose = projectEbookModal ? projectEbookModal.querySelector('.ebook-close') : null;
const projectEbookPrev = projectEbookModal ? projectEbookModal.querySelector('.ebook-prev') : null;
const projectEbookNext = projectEbookModal ? projectEbookModal.querySelector('.ebook-next') : null;
const projectEbookPageIndicator = projectEbookModal ? projectEbookModal.querySelector('.ebook-page-indicator') : null;
let currentProjectEbookPage = 0;

function showProjectEbookPage(idx) {
    projectEbookPages.forEach((page, i) => {
        page.style.display = (i === idx) ? 'block' : 'none';
        page.style.transform = (i === idx) ? 'rotateY(0deg)' : (i < idx ? 'rotateY(-60deg)' : 'rotateY(60deg)');
        page.style.opacity = (i === idx) ? '1' : '0.5';
    });
    if (projectEbookPageIndicator) {
        projectEbookPageIndicator.textContent = `Page ${idx + 1} / ${projectEbookPages.length}`;
    }
}
function openProjectEbookModal() {
    projectEbookModal.style.display = 'flex';
    showProjectEbookPage(currentProjectEbookPage);
    document.body.style.overflow = 'hidden';
}
function closeProjectEbookModal() {
    projectEbookModal.style.display = 'none';
    document.body.style.overflow = '';
}
projectEbookClose && projectEbookClose.addEventListener('click', closeProjectEbookModal);
projectEbookPrev && projectEbookPrev.addEventListener('click', () => {
    currentProjectEbookPage = (currentProjectEbookPage - 1 + projectEbookPages.length) % projectEbookPages.length;
    showProjectEbookPage(currentProjectEbookPage);
});
projectEbookNext && projectEbookNext.addEventListener('click', () => {
    currentProjectEbookPage = (currentProjectEbookPage + 1) % projectEbookPages.length;
    showProjectEbookPage(currentProjectEbookPage);
});
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectEbookModal && projectEbookModal.style.display === 'flex') {
        closeProjectEbookModal();
    }
});
projectEbookModal && projectEbookModal.addEventListener('click', (e) => {
    if (e.target === projectEbookModal) closeProjectEbookModal();
});
if (projectPortfolioItem) {
    projectPortfolioItem.addEventListener('click', () => {
        currentProjectEbookPage = 0;
        openProjectEbookModal();
    });
}

// Project1 E-Book Modal
const project1EbookModal = document.getElementById('project1EbookModal');
const project1EbookPages = project1EbookModal ? project1EbookModal.querySelectorAll('.ebook-page') : [];
const project1EbookClose = project1EbookModal ? project1EbookModal.querySelector('.ebook-close') : null;
const project1EbookPrev = project1EbookModal ? project1EbookModal.querySelector('.ebook-prev') : null;
const project1EbookNext = project1EbookModal ? project1EbookModal.querySelector('.ebook-next') : null;
const project1EbookPageIndicator = project1EbookModal ? project1EbookModal.querySelector('.ebook-page-indicator') : null;
let currentProject1EbookPage = 0;

function showProject1EbookPage(idx) {
    project1EbookPages.forEach((page, i) => {
        page.style.display = (i === idx) ? 'block' : 'none';
        page.style.transform = (i === idx) ? 'rotateY(0deg)' : (i < idx ? 'rotateY(-60deg)' : 'rotateY(60deg)');
        page.style.opacity = (i === idx) ? '1' : '0.5';
    });
    if (project1EbookPageIndicator) {
        project1EbookPageIndicator.textContent = `Page ${idx + 1} / ${project1EbookPages.length}`;
    }
}
function openProject1EbookModal() {
    project1EbookModal.style.display = 'flex';
    showProject1EbookPage(currentProject1EbookPage);
    document.body.style.overflow = 'hidden';
}
function closeProject1EbookModal() {
    project1EbookModal.style.display = 'none';
    document.body.style.overflow = '';
}
project1EbookClose && project1EbookClose.addEventListener('click', closeProject1EbookModal);
project1EbookPrev && project1EbookPrev.addEventListener('click', () => {
    currentProject1EbookPage = (currentProject1EbookPage - 1 + project1EbookPages.length) % project1EbookPages.length;
    showProject1EbookPage(currentProject1EbookPage);
});
project1EbookNext && project1EbookNext.addEventListener('click', () => {
    currentProject1EbookPage = (currentProject1EbookPage + 1) % project1EbookPages.length;
    showProject1EbookPage(currentProject1EbookPage);
});
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && project1EbookModal && project1EbookModal.style.display === 'flex') {
        closeProject1EbookModal();
    }
});
project1EbookModal && project1EbookModal.addEventListener('click', (e) => {
    if (e.target === project1EbookModal) closeProject1EbookModal();
});
if (project1PortfolioItem) {
    project1PortfolioItem.addEventListener('click', () => {
        currentProject1EbookPage = 0;
        openProject1EbookModal();
    });
}

// Project2 Gallery Modal 기능
const project2GalleryModal = document.getElementById('project2GalleryModal');
const gallery2Images = document.querySelectorAll('.gallery2-image');
const gallery2Prev = project2GalleryModal ? project2GalleryModal.querySelector('.gallery2-prev') : null;
const gallery2Next = project2GalleryModal ? project2GalleryModal.querySelector('.gallery2-next') : null;
let currentGallery2Index = 0;

function showGallery2Image(idx) {
    gallery2Images.forEach((img, i) => {
        img.style.display = (i === idx) ? 'block' : 'none';
    });
}
function openGallery2Modal() {
    project2GalleryModal.style.display = 'flex';
    showGallery2Image(currentGallery2Index);
    document.body.style.overflow = 'hidden';
}
function closeGallery2Modal() {
    project2GalleryModal.style.display = 'none';
    document.body.style.overflow = '';
}
// 좌우 화살표
if (gallery2Prev) {
    gallery2Prev.addEventListener('click', () => {
        currentGallery2Index = (currentGallery2Index - 1 + gallery2Images.length) % gallery2Images.length;
        showGallery2Image(currentGallery2Index);
    });
}
if (gallery2Next) {
    gallery2Next.addEventListener('click', () => {
        currentGallery2Index = (currentGallery2Index + 1) % gallery2Images.length;
        showGallery2Image(currentGallery2Index);
    });
}
// 닫기 버튼, 바깥 클릭, ESC
const project2Close = project2GalleryModal ? project2GalleryModal.querySelector('.gallery-close') : null;
if (project2Close) {
    project2Close.addEventListener('click', closeGallery2Modal);
}
project2GalleryModal && project2GalleryModal.addEventListener('click', (e) => {
    if (e.target === project2GalleryModal) closeGallery2Modal();
});
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && project2GalleryModal && project2GalleryModal.style.display === 'flex') {
        closeGallery2Modal();
    }
});
// project2 포트폴리오 아이템 클릭 시 모달 오픈
const project2PortfolioItem = document.querySelector('.portfolio-item[data-category="project2"]');
if (project2PortfolioItem) {
    project2PortfolioItem.addEventListener('click', () => {
        currentGallery2Index = 0;
        openGallery2Modal();
    });
}

// Project2 E-Book Modal
const project2EbookModal = document.getElementById('project2EbookModal');
const project2EbookPages = project2EbookModal ? project2EbookModal.querySelectorAll('.ebook-page') : [];
const project2EbookClose = project2EbookModal ? project2EbookModal.querySelector('.ebook-close') : null;
const project2EbookPrev = project2EbookModal ? project2EbookModal.querySelector('.ebook-prev') : null;
const project2EbookNext = project2EbookModal ? project2EbookModal.querySelector('.ebook-next') : null;
const project2EbookPageIndicator = project2EbookModal ? project2EbookModal.querySelector('.ebook-page-indicator') : null;
let currentProject2EbookPage = 0;

function showProject2EbookPage(idx) {
    project2EbookPages.forEach((page, i) => {
        page.style.display = (i === idx) ? 'block' : 'none';
        page.style.transform = (i === idx) ? 'rotateY(0deg)' : (i < idx ? 'rotateY(-60deg)' : 'rotateY(60deg)');
        page.style.opacity = (i === idx) ? '1' : '0.5';
    });
    if (project2EbookPageIndicator) {
        project2EbookPageIndicator.textContent = `Page ${idx + 1} / ${project2EbookPages.length}`;
    }
}
function openProject2EbookModal() {
    project2EbookModal.style.display = 'flex';
    showProject2EbookPage(currentProject2EbookPage);
    document.body.style.overflow = 'hidden';
}
function closeProject2EbookModal() {
    project2EbookModal.style.display = 'none';
    document.body.style.overflow = '';
}
project2EbookClose && project2EbookClose.addEventListener('click', closeProject2EbookModal);
project2EbookPrev && project2EbookPrev.addEventListener('click', () => {
    currentProject2EbookPage = (currentProject2EbookPage - 1 + project2EbookPages.length) % project2EbookPages.length;
    showProject2EbookPage(currentProject2EbookPage);
});
project2EbookNext && project2EbookNext.addEventListener('click', () => {
    currentProject2EbookPage = (currentProject2EbookPage + 1) % project2EbookPages.length;
    showProject2EbookPage(currentProject2EbookPage);
});
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && project2EbookModal && project2EbookModal.style.display === 'flex') {
        closeProject2EbookModal();
    }
});
project2EbookModal && project2EbookModal.addEventListener('click', (e) => {
    if (e.target === project2EbookModal) closeProject2EbookModal();
});
if (project2PortfolioItem) {
    project2PortfolioItem.addEventListener('click', () => {
        currentProject2EbookPage = 0;
        openProject2EbookModal();
    });
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Shirts & Pants Modal 기능
const shirtsModal = document.getElementById('shirtsModal');
const pantsModal = document.getElementById('pantsModal');
const galleryCloses = document.querySelectorAll('.gallery-close');

function openModal(modal) {
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}
function closeModal(modal) {
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}
// 닫기 버튼
if (galleryCloses) {
    galleryCloses.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = btn.closest('.gallery-modal');
            closeModal(modal);
        });
    });
}
// 바깥 클릭 시 닫기
[shirtsModal, pantsModal].forEach(modal => {
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal);
        });
    }
});
// ESC 키로 닫기
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (shirtsModal && shirtsModal.style.display === 'flex') closeModal(shirtsModal);
        if (pantsModal && pantsModal.style.display === 'flex') closeModal(pantsModal);
    }
});
// shirts, pants 포트폴리오 아이템 클릭 시 모달 오픈
const shirtsPortfolioItem = document.querySelector('.portfolio-item[data-category="shirts"]');
if (shirtsPortfolioItem) {
    shirtsPortfolioItem.addEventListener('click', () => {
        openModal(shirtsModal);
    });
}
const pantsPortfolioItem = document.querySelector('.portfolio-item[data-category="pants"]');
if (pantsPortfolioItem) {
    pantsPortfolioItem.addEventListener('click', () => {
        openModal(pantsModal);
    });
} 