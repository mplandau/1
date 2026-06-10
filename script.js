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

// Follow button functionality
document.querySelectorAll('.follow-btn').forEach(button => {
    button.addEventListener('click', function() {
        if (this.textContent === 'Follow') {
            this.textContent = 'Following';
            this.style.backgroundColor = '#004e89';
        } else {
            this.textContent = 'Follow';
            this.style.backgroundColor = '#ff6b35';
        }
    });
});

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    if (name && email && message) {
        alert('Thank you for contacting us! We\'ll get back to you soon.');
        this.reset();
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply observer to cards
document.querySelectorAll('.score-card, .team-card, .news-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Active navigation link highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#ff6b35';
            link.style.borderBottom = '2px solid #ff6b35';
        } else {
            link.style.color = 'white';
            link.style.borderBottom = 'none';
        }
    });
});

// CTA button functionality
document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('#scores').scrollIntoView({
        behavior: 'smooth'
    });
});

// Live score ticker simulation
function updateScores() {
    const scoreElements = document.querySelectorAll('.score');
    scoreElements.forEach(el => {
        const currentScore = el.textContent;
        // Simulate score updates (in a real app, this would come from an API)
        if (Math.random() > 0.8) {
            const scores = currentScore.split(' - ').map(s => parseInt(s.trim()));
            if (Math.random() > 0.5) {
                scores[0]++;
            } else {
                scores[1]++;
            }
            el.textContent = scores.join(' - ');
            el.style.animation = 'pulse 0.5s ease';
            setTimeout(() => {
                el.style.animation = 'none';
            }, 500);
        }
    });
}

// Update scores every 30 seconds
setInterval(updateScores, 30000);

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);
