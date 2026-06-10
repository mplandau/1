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
// Enhanced Smooth scrolling for navigation links
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

// Enhanced Follow button functionality with celebration
document.querySelectorAll('.follow-btn').forEach(button => {
    button.addEventListener('click', function() {
        if (this.textContent.includes('Follow')) {
            this.textContent = '❤️ Following';
            this.style.background = 'linear-gradient(135deg, #004e89, #003d70)';
            
            // Celebration animation
            createConfetti();
            
            setTimeout(() => {
                this.textContent = '❤️ Follow Team';
                this.style.background = 'linear-gradient(135deg, #ff6b35, #ff8c42)';
            }, 2000);
        }
    });
});

// Create confetti for celebration
function createConfetti() {
    const confetti = ['🎉', '🏆', '⭐', '🔥', '💪', '🚀', '💯'];
    const x = event.clientX;
    const y = event.clientY;
    
    for (let i = 0; i < 10; i++) {
        const el = document.createElement('div');
        el.textContent = confetti[Math.floor(Math.random() * confetti.length)];
        el.style.position = 'fixed';
        el.style.left = x + 'px';
        el.style.top = y + 'px';
        el.style.fontSize = '1.5rem';
        el.style.pointerEvents = 'none';
        el.style.zIndex = '9999';
        el.style.animation = `confetti-burst ${Math.random() * 0.5 + 0.5}s ease-out forwards`;
        document.body.appendChild(el);
        
        setTimeout(() => el.remove(), 1000);
    }
}

// Add confetti animation
const style = document.createElement('style');
style.textContent = `
    @keyframes confetti-burst {
        0% {
            opacity: 1;
            transform: translate(0, 0) rotate(0deg) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 + 100}px) rotate(360deg) scale(0);
        }
    }
`;
document.head.appendChild(style);

// Enhanced Contact form submission with celebration
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    if (name && email && message) {
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = '✅ Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #26de81, #20c997)';
        
        // Multiple confetti bursts
        for (let i = 0; i < 3; i++) {
            setTimeout(() => createConfetti(), i * 200);
        }
        
        // Show success message
        showNotification('🎉 Thanks for reaching out! We\'ll be in touch soon!', 'success');
        
        this.reset();
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = 'linear-gradient(135deg, #ff6b35, #ff8c42)';
        }, 3000);
    }
});

// Notification system
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #26de81, #20c997);
        color: white;
        padding: 20px 30px;
        border-radius: 10px;
        font-weight: 600;
        box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        animation: slideInRight 0.5s ease;
        z-index: 10000;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Intersection Observer for fade-in animations with stagger
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 50);
        }
    });
}, observerOptions);

// Apply observer to cards
document.querySelectorAll('.score-card, .team-card, .news-card, .stat-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Active navigation link highlighting on scroll
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
        } else {
            link.style.color = 'white';
        }
    });
});

// Enhanced CTA button functionality
document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('#scores').scrollIntoView({
        behavior: 'smooth'
    });
    createConfetti();
});

// Live score ticker simulation with more dynamic updates
function updateScores() {
    const scoreElements = document.querySelectorAll('.score');
    scoreElements.forEach(el => {
        if (Math.random() > 0.85) {
            const currentScore = el.textContent;
            const scores = currentScore.split(' - ').map(s => parseInt(s.trim()));
            
            if (Math.random() > 0.5) {
                scores[0]++;
            } else {
                scores[1]++;
            }
            
            el.textContent = scores.join(' - ');
            el.style.animation = 'scorePulse 0.6s ease';
            
            // Show update indicator
            const card = el.closest('.score-card');
            if (card) {
                const badge = card.querySelector('.live-badge');
                if (badge) {
                    badge.style.animation = 'pulse 0.3s ease';
                }
            }
            
            setTimeout(() => {
                el.style.animation = 'none';
            }, 600);
        }
    });
}

// Score pulse animation
const scoreStyle = document.createElement('style');
scoreStyle.textContent = `
    @keyframes scorePulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.15) rotateZ(5deg); }
        100% { transform: scale(1) rotateZ(0deg); }
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(scoreStyle);

// Update scores frequently
setInterval(updateScores, 15000);

// Add hover sound effect simulation (visual feedback)
document.querySelectorAll('button, a[href^="#"]').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Scroll to top functionality
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        if (!document.querySelector('.scroll-to-top')) {
            const scrollBtn = document.createElement('button');
            scrollBtn.textContent = '⬆️ Top';
            scrollBtn.className = 'scroll-to-top';
            scrollBtn.style.cssText = `
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                background: linear-gradient(135deg, #ff6b35, #ff8c42);
                color: white;
                border: none;
                border-radius: 50%;
                cursor: pointer;
                font-weight: 700;
                box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
                z-index: 999;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
            `;
            
            scrollBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                createConfetti();
            });
            
            scrollBtn.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
                this.style.boxShadow = '0 8px 30px rgba(255, 107, 53, 0.6)';
            });
            
            scrollBtn.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '0 6px 20px rgba(255, 107, 53, 0.4)';
            });
            
            document.body.appendChild(scrollBtn);
        }
    } else {
        const scrollBtn = document.querySelector('.scroll-to-top');
        if (scrollBtn) scrollBtn.remove();
    }
});
