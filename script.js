const projectsData = {
    1: {
        category: 'Design',
        year: '2023',
        tools: 'Adobe Photoshop, Canva',
        media: {
            type: 'image',
            src: 'images/31.jpg'
        }
    },
    2: {
        category: 'Services',
        year: '2024',
        tools: 'Adobe Premiere Pro, After Effects',
        media: {
            type: 'image',
            src: 'images/1.jpg'
        }
    },
    3: {
        category: 'Design',
        year: '2023',
        tools: 'Adobe Photoshop, Canva',
        media: {
            type: 'image',
            src: 'images/34.jpg'
        }
    },
    4: {
        category: 'Services',
        year: '2025',
        tools: 'Adobe Premiere Pro, DaVinci Resolve',
        media: {
            type: 'image',
            src: 'images/2.jpg'
        }
    },
    5: {
        category: 'Design',
        year: '2025',
        tools: 'Adobe Photoshop, Canva',
        media: {
            type: 'image',
            src: 'images/33.jpg'
        }
    },
    6: {
        category: 'Services',
        year: '2024',
        tools: 'Adobe Premiere Pro, After Effects',
        media: {
            type: 'image',
            src: 'images/3.jpg'
        }
    },
    7: {
        category: 'Design',
        year: '2025',
        tools: 'Adobe Photoshop, Canva',
        media: {
            type: 'image',
            src: 'images/35.jpg'
        }
    },
    8: {
        category: 'Services',
        year: '2024',
        tools: 'Adobe Premiere Pro, After Effects',
        media: {
            type: 'image',
            src: 'images/4.jpg'
        }
    },
    9: {
        category: 'Design',
        year: '2024',
        tools: 'Adobe Photoshop, Canva',
        media: {
            type: 'image',
            src: 'images/38.jpg'
        }
    },
    10: {
        category: 'Services',
        year: '2025',
        tools: 'Adobe Premiere Pro, After Effects',
        media: {
            type: 'image',
            src: 'images/5.jpg'
        }
    },
    11: {
        category: 'Design',
        year: '2023',
        tools: 'Adobe Photoshop, Canva',
        media: {
            type: 'image',
            src: 'images/36.jpg'
        }
    },
    12: {
        category: 'Services',
        year: '2024',
        tools: 'Adobe Premiere Pro, After Effects',
        media: {
            type: 'image',
            src: 'images/6.jpg'
        }
    },
    13: {
        category: 'Design',
        year: '2025',
        tools: 'Adobe Photoshop, Canva',
        media: {
            type: 'image',
            src: 'images/32.jpg'
        }
    },
    14: {
        category: 'Services',
        year: '2024',
        tools: 'Adobe Premiere Pro, After Effects',
        media: {
            type: 'image',
            src: 'images/7.jpg'
        }
    },
    15: {
        category: 'Design',
        year: '2025',
        tools: 'Adobe Photoshop, Canva',
        media: {
            type: 'image',
            src: 'images/37.jpg'
        }
    }
};

const roles = ['Social Media Manager', 'Video Editor', 'Graphic Designer', 'Content Creator'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
    const roleElement = document.getElementById('roleText');
    if (!roleElement) return;

    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        roleElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeRole, 1000);
            return;
        }

        setTimeout(typeRole, 50);
    } else {
        roleElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeRole, 500);
            return;
        }

        setTimeout(typeRole, 30);
    }
}

function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const project = projectsData[projectId];

    if (!modal || !project) return;

    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalCategory = document.getElementById('modalCategory');
    const modalYear = document.getElementById('modalYear');
    const modalTools = document.getElementById('modalTools');
    const mediaContainer = document.getElementById('modalMedia');

    if (modalTitle) modalTitle.textContent = project.title;
    if (modalDescription) modalDescription.textContent = project.description;
    if (modalCategory) modalCategory.textContent = project.category;
    if (modalYear) modalYear.textContent = project.year;
    if (modalTools) modalTools.textContent = project.tools;

    if (mediaContainer) {
        mediaContainer.innerHTML = '';

        if (project.media.type === 'image') {
            const img = document.createElement('img');
            img.src = project.media.src;
            img.alt = project.title;
            mediaContainer.appendChild(img);
        } else {
            const video = document.createElement('video');
            video.src = project.media.src;
            video.controls = true;
            video.style.width = '100%';
            video.style.height = '100%';
            video.style.objectFit = 'cover';
            mediaContainer.appendChild(video);
        }
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;

    modal.classList.remove('active');
    document.body.style.overflow = 'auto';

    const video = document.querySelector('#modalMedia video');
    if (video) {
        video.pause();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    typeRole();

    const modal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const projectButtons = document.querySelectorAll('.project-btn');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const tools = document.querySelectorAll('.tool');
    const slider = document.getElementById('slider');
    const track = document.getElementById('track');

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    projectButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();

            const projectCard = button.closest('.project-card');
            if (!projectCard) return;

            const projectId = projectCard.getAttribute('data-project-id');
            openModal(projectId);
        });
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('data-section');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }

            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (navMenu && !e.target.closest('.navbar')) {
            navMenu.classList.remove('active');
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navMenu) {
            navMenu.classList.remove('active');
        }
    });

    window.addEventListener('scroll', () => {
        let currentSection = '';

        const sections = document.querySelectorAll('section[id]');

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');

            if (link.getAttribute('data-section') === currentSection) {
                link.classList.add('active');
            }
        });
    });

    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }

    const elements = document.querySelectorAll('section, .card, .content, img');

    elements.forEach(el => {
        el.classList.add('auto-reveal');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.15
    });

    elements.forEach(el => observer.observe(el));

    tools.forEach(tool => {
        const color = tool.getAttribute('data-color');

        if (color) {
            tool.style.setProperty('--glow', color + '55');
        }

        tool.addEventListener('mousemove', e => {
            const rect = tool.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            tool.style.transform = `
                rotateY(${x * 20}deg)
                rotateX(${-y * 20}deg)
                scale(1.05)
            `;
        });

        tool.addEventListener('mouseleave', () => {
            tool.style.transform = '';
        });
    });

    if (slider && track) {
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', e => {
            isDown = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = track.scrollLeft;
            slider.style.cursor = 'grabbing';
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.style.cursor = 'grab';
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.style.cursor = 'grab';
        });

        slider.addEventListener('mousemove', e => {
            if (!isDown) return;

            e.preventDefault();

            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;

            track.scrollLeft = scrollLeft - walk;
        });
    }
});