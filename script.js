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

// Card type click handlers
document.querySelectorAll('.card-type').forEach(card => {
    card.addEventListener('click', function() {
        const type = this.getAttribute('data-type');
        const targetSection = document.getElementById(type);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('.tarot-section, .comparison').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add hover effects to arcana cards
document.querySelectorAll('.arcana-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotateY(5deg)';
        this.style.boxShadow = '0 15px 35px rgba(0,0,0,0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotateY(0deg)';
        this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
    });
});

// Mobile menu toggle (if needed for smaller screens)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-active');
}

// Add some mystical effects
function createFloatingElements() {
    const symbols = ['✨', '🌙', '⭐', '🔮', '🌟'];
    
    setInterval(() => {
        if (Math.random() > 0.7) {
            const symbol = document.createElement('div');
            symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            symbol.style.position = 'fixed';
            symbol.style.left = Math.random() * window.innerWidth + 'px';
            symbol.style.top = window.innerHeight + 'px';
            symbol.style.fontSize = '20px';
            symbol.style.opacity = '0.6';
            symbol.style.pointerEvents = 'none';
            symbol.style.zIndex = '999';
            symbol.style.transition = 'all 3s linear';
            
            document.body.appendChild(symbol);
            
            setTimeout(() => {
                symbol.style.top = '-50px';
                symbol.style.opacity = '0';
            }, 100);
            
            setTimeout(() => {
                document.body.removeChild(symbol);
            }, 3100);
        }
    }, 2000);
}

// Initialize floating elements
createFloatingElements();

// Gallery tabs functionality
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all tabs and galleries
        document.querySelectorAll('.tab-btn').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.gallery-grid').forEach(grid => grid.classList.remove('active'));
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Show corresponding gallery
        const galleryType = this.getAttribute('data-gallery');
        const targetGallery = document.getElementById(`gallery-${galleryType}`);
        if (targetGallery) {
            targetGallery.classList.add('active');
        }
    });
});

// Enhanced card interactions
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        const overlay = this.querySelector('.gallery-overlay');
        const title = overlay.querySelector('h4').textContent;
        const description = overlay.querySelector('p').textContent;
        
        // Create modal or alert with card info
        alert(`${title}\n\n${description}\n\nEsta carta representa un aspecto importante en las lecturas de tarot.`);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Lazy loading for images
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img').forEach(img => {
    img.style.opacity = '0';
    img.style.transform = 'scale(0.8)';
    img.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    imageObserver.observe(img);
});

// Add typing effect to hero text
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
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-content h2');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Mobile menu functionality
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('mobile-active');
        
        // Animate hamburger menu
        const spans = menuToggle.querySelectorAll('span');
        if (navLinks.classList.contains('mobile-active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('mobile-active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Gallery tabs functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const galleryTabs = document.querySelectorAll('.gallery-tab');

tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        const targetTab = this.getAttribute('data-tab');
        
        // Remove active class from all buttons and tabs
        tabButtons.forEach(btn => btn.classList.remove('active'));
        galleryTabs.forEach(tab => tab.classList.remove('active'));
        
        // Add active class to clicked button and corresponding tab
        this.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// Quiz functionality
let currentQuestion = 1;
let answers = {};

const quizQuestions = document.querySelectorAll('.quiz-question');
const quizOptions = document.querySelectorAll('.quiz-option');
const quizResult = document.querySelector('.quiz-result');

quizOptions.forEach(option => {
    option.addEventListener('click', function() {
        const questionNum = this.closest('.quiz-question').getAttribute('data-question');
        const value = this.getAttribute('data-value');
        
        answers[questionNum] = value;
        
        // Move to next question or show result
        if (currentQuestion < 3) {
            // Hide current question
            document.querySelector(`[data-question="${currentQuestion}"]`).classList.remove('active');
            
            // Show next question
            currentQuestion++;
            document.querySelector(`[data-question="${currentQuestion}"]`).classList.add('active');
        } else {
            // Show result
            showQuizResult();
        }
    });
});

function showQuizResult() {
    // Hide all questions
    quizQuestions.forEach(q => q.classList.remove('active'));
    
    // Determine result based on answers
    const result = calculateTarotRecommendation(answers);
    
    // Show result
    document.getElementById('result-title').textContent = result.title;
    document.getElementById('result-description').textContent = result.description;
    document.getElementById('result-img').src = result.image;
    document.getElementById('result-img').alt = result.title;
    
    quizResult.style.display = 'block';
}

function calculateTarotRecommendation(answers) {
    const { 1: experience, 2: purpose, 3: style } = answers;
    
    // Logic to determine best tarot type
    if (experience === 'principiante' && style === 'detallado') {
        return {
            title: 'Rider-Waite Tarot',
            description: 'Perfecto para principiantes. Sus imágenes detalladas facilitan la interpretación intuitiva y es el sistema más estudiado y documentado.',
            image: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=300&h=400&fit=crop&crop=center&hue=60&sat=60'
        };
    } else if (purpose === 'espiritual' || style === 'mistico') {
        return {
            title: 'Tarot Egipcio',
            description: 'Ideal para el crecimiento espiritual profundo. Su simbolismo ancestral conecta con la sabiduría milenaria y los misterios del alma.',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop&crop=center'
        };
    } else if (purpose === 'tradicion' || style === 'simbolico') {
        return {
            title: 'Tarot de Marsella',
            description: 'La elección tradicional europea. Su simbolismo puro y colores clásicos ofrecen una experiencia auténtica del tarot histórico.',
            image: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=300&h=400&fit=crop&crop=center'
        };
    } else {
        return {
            title: 'Rider-Waite Tarot',
            description: 'El sistema más versátil y completo. Combina tradición con accesibilidad, perfecto para cualquier nivel de experiencia.',
            image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop&crop=center&hue=240&sat=40'
        };
    }
}

// Restart quiz functionality
document.querySelector('.restart-quiz').addEventListener('click', function() {
    currentQuestion = 1;
    answers = {};
    
    // Hide result
    quizResult.style.display = 'none';
    
    // Hide all questions
    quizQuestions.forEach(q => q.classList.remove('active'));
    
    // Show first question
    document.querySelector('[data-question="1"]').classList.add('active');
});

// Enhanced gallery card interactions
document.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotateY(5deg)';
        this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotateY(0deg)';
        this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
    });
});

// Reading buttons functionality
document.querySelectorAll('.reading-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const readingCard = this.closest('.reading-card');
        const readingTitle = readingCard.querySelector('h4').textContent;
        
        // Create modal or expanded content
        showReadingDetails(readingTitle, readingCard);
    });
});

// Function to show reading details
function showReadingDetails(title, card) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'reading-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h3>${title}</h3>
            <div class="reading-details">
                ${getReadingDetails(title)}
            </div>
            <button class="close-btn">Cerrar</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners for closing
    modal.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.querySelector('.close-btn').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Function to get detailed reading information
function getReadingDetails(title) {
    const readings = {
        'La Cruz Egipcia': `
            <p><strong>Número de cartas:</strong> 10</p>
            <p><strong>Tiempo estimado:</strong> 30-45 minutos</p>
            <h4>Posiciones de las cartas:</h4>
            <ol>
                <li>Situación presente</li>
                <li>Desafío o cruz</li>
                <li>Pasado distante</li>
                <li>Pasado reciente</li>
                <li>Posible futuro</li>
                <li>Futuro inmediato</li>
                <li>Tu enfoque</li>
                <li>Influencias externas</li>
                <li>Esperanzas y miedos</li>
                <li>Resultado final</li>
            </ol>
            <p><strong>Ideal para:</strong> Situaciones complejas que requieren análisis profundo y guía espiritual.</p>
        `,
        'El Ojo de Horus': `
            <p><strong>Número de cartas:</strong> 7</p>
            <p><strong>Tiempo estimado:</strong> 20-30 minutos</p>
            <h4>Posiciones de las cartas:</h4>
            <ol>
                <li>Centro - Tu esencia</li>
                <li>Arriba - Influencias superiores</li>
                <li>Abajo - Fundamentos</li>
                <li>Izquierda - Pasado</li>
                <li>Derecha - Futuro</li>
                <li>Superior izquierda - Protección</li>
                <li>Superior derecha - Visión</li>
            </ol>
            <p><strong>Ideal para:</strong> Búsqueda de protección espiritual y claridad de visión.</p>
        `,
        'La Cruz Celta': `
            <p><strong>Número de cartas:</strong> 10</p>
            <p><strong>Tiempo estimado:</strong> 45-60 minutos</p>
            <h4>Posiciones de las cartas:</h4>
            <ol>
                <li>Situación actual</li>
                <li>Desafío</li>
                <li>Pasado lejano</li>
                <li>Pasado reciente</li>
                <li>Posible resultado</li>
                <li>Futuro inmediato</li>
                <li>Tu enfoque</li>
                <li>Influencias externas</li>
                <li>Esperanzas y temores</li>
                <li>Resultado final</li>
            </ol>
            <p><strong>Ideal para:</strong> La tirada más completa y tradicional del tarot occidental.</p>
        `,
        'El Método de Marsella': `
            <p><strong>Número de cartas:</strong> 5</p>
            <p><strong>Tiempo estimado:</strong> 15-20 minutos</p>
            <h4>Posiciones de las cartas:</h4>
            <ol>
                <li>La situación</li>
                <li>Los obstáculos</li>
                <li>Las ayudas</li>
                <li>La acción a tomar</li>
                <li>El resultado</li>
            </ol>
            <p><strong>Ideal para:</strong> Decisiones importantes y análisis de situaciones específicas.</p>
        `,
        'Tirada de Tres Cartas': `
            <p><strong>Número de cartas:</strong> 3</p>
            <p><strong>Tiempo estimado:</strong> 10-15 minutos</p>
            <h4>Posiciones de las cartas:</h4>
            <ol>
                <li>Pasado - Influencias que te trajeron aquí</li>
                <li>Presente - Situación actual</li>
                <li>Futuro - Hacia dónde te diriges</li>
            </ol>
            <p><strong>Ideal para:</strong> Principiantes y consultas rápidas sobre cualquier tema.</p>
        `,
        'La Herradura': `
            <p><strong>Número de cartas:</strong> 7</p>
            <p><strong>Tiempo estimado:</strong> 25-35 minutos</p>
            <h4>Posiciones de las cartas:</h4>
            <ol>
                <li>Pasado</li>
                <li>Presente</li>
                <li>Futuro</li>
                <li>Lo que debes saber</li>
                <li>Influencias externas</li>
                <li>Obstáculos</li>
                <li>Resultado probable</li>
            </ol>
            <p><strong>Ideal para:</strong> Análisis equilibrado de situaciones con múltiples factores.</p>
        `
    };
    
    return readings[title] || '<p>Información detallada próximamente...</p>';
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.querySelector('.reading-modal');
        if (modal) {
            document.body.removeChild(modal);
        }
    }
});

// Enhanced card hover effects with sound simulation
document.querySelectorAll('.arcana-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        // Add a subtle vibration effect (if supported)
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    });
});/
/ Gallery tabs functionality
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const targetTab = this.getAttribute('data-tab');
        
        // Remove active class from all tabs and buttons
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked button and corresponding tab
        this.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// Quiz functionality
let quizAnswers = {};
let currentQuestion = 1;

document.querySelectorAll('.quiz-option').forEach(option => {
    option.addEventListener('click', function() {
        const questionNum = this.closest('.quiz-question').getAttribute('data-question');
        const value = this.getAttribute('data-value');
        
        quizAnswers[questionNum] = value;
        
        // Hide current question
        document.querySelector(`.quiz-question[data-question="${questionNum}"]`).classList.remove('active');
        
        // Show next question or result
        const nextQuestion = parseInt(questionNum) + 1;
        const nextQuestionElement = document.querySelector(`.quiz-question[data-question="${nextQuestion}"]`);
        
        if (nextQuestionElement) {
            nextQuestionElement.classList.add('active');
            currentQuestion = nextQuestion;
        } else {
            showQuizResult();
        }
    });
});

function showQuizResult() {
    const resultElement = document.querySelector('.quiz-result');
    const resultImg = document.getElementById('result-img');
    const resultTitle = document.getElementById('result-title');
    const resultDescription = document.getElementById('result-description');
    
    // Determine recommendation based on answers
    let recommendation = determineRecommendation(quizAnswers);
    
    resultImg.src = recommendation.image;
    resultTitle.textContent = recommendation.title;
    resultDescription.textContent = recommendation.description;
    
    resultElement.style.display = 'block';
}

function determineRecommendation(answers) {
    // Simple logic to determine recommendation
    if (answers['1'] === 'principiante') {
        return {
            title: 'Rider-Waite Tarot',
            description: 'Perfecto para principiantes. Sus imágenes detalladas facilitan la interpretación intuitiva y hay abundante material de estudio disponible.',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop&crop=center&hue=120&sat=30'
        };
    } else if (answers['2'] === 'espiritual') {
        return {
            title: 'Tarot Egipcio',
            description: 'Ideal para el crecimiento espiritual profundo. Conecta con la sabiduría ancestral y es perfecto para la transformación personal.',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop&crop=center'
        };
    } else if (answers['2'] === 'tradicion' || answers['3'] === 'simbolico') {
        return {
            title: 'Tarot de Marsella',
            description: 'Perfecto para quienes buscan conectar con la tradición europea clásica. Su simbolismo puro ofrece una experiencia auténtica.',
            image: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=300&h=400&fit=crop&crop=center'
        };
    } else {
        return {
            title: 'Rider-Waite Tarot',
            description: 'La opción más versátil y popular. Ideal para cualquier nivel de experiencia con interpretaciones claras y detalladas.',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop&crop=center&hue=120&sat=30'
        };
    }
}

// Restart quiz functionality
document.querySelector('.restart-quiz').addEventListener('click', function() {
    quizAnswers = {};
    currentQuestion = 1;
    
    // Hide result and show first question
    document.querySelector('.quiz-result').style.display = 'none';
    document.querySelectorAll('.quiz-question').forEach(q => q.classList.remove('active'));
    document.querySelector('.quiz-question[data-question="1"]').classList.add('active');
});

// Enhanced scroll animations
const observerOptions2 = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer2 = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions2);

// Observe gallery cards for staggered animation
document.querySelectorAll('.gallery-card, .tip-card, .guide-item').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer2.observe(card);
});

// Add animate-in class styles dynamically
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Reading cards hover effects
document.querySelectorAll('.reading-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        this.style.color = 'white';
        this.querySelector('h4').style.color = '#ffd700';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.background = 'rgba(255, 255, 255, 0.9)';
        this.style.color = '#333';
        this.querySelector('h4').style.color = '#667eea';
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Enhanced card type interactions
document.querySelectorAll('.card-type').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(255, 215, 0, 0.2)';
        this.style.borderColor = '#ffd700';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.background = 'rgba(255, 255, 255, 0.1)';
        this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
    });
});

// Smooth reveal for comparison items
document.querySelectorAll('.comparison-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
    item.classList.add('fade-in-up');
});

// Add CSS animation classes
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .fade-in-up {
        animation: fadeInUp 0.6s ease forwards;
    }
`;
document.head.appendChild(animationStyle);