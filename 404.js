// Auto-redirect timer (optional) - Enhanced with bilingual support
let redirectTimer = 15;
let timerInterval;

// Bilingual messages for 404 page
const redirectMessages = {
    es: {
        redirecting: 'Redirigiendo en {timer}s',
        button: 'Cancelar'
    },
    en: {
        redirecting: 'Redirecting in {timer}s',
        button: 'Cancel'
    }
};

function startRedirectTimer() {
    const currentLang = window.bilingualSystem ? window.bilingualSystem.currentLanguage : 'es';
    
    const timerElement = document.createElement('div');
    timerElement.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--surface-elevated);
        border: 1px solid var(--gray-700);
        border-radius: var(--radius-md);
        padding: 12px 16px;
        font-family: var(--font-mono);
        font-size: 0.875rem;
        color: var(--text-secondary);
        z-index: 1000;
        animation: fadeInUp 0.5s ease-out;
    `;
    
    document.body.appendChild(timerElement);

    timerInterval = setInterval(() => {
        const message = redirectMessages[currentLang].redirecting.replace('{timer}', redirectTimer);
        const buttonText = redirectMessages[currentLang].button;
        
        timerElement.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
                <span>🏠</span>
                <span>${message}</span>
                <button onclick="clearRedirect()" style="
                    background: none; 
                    border: none; 
                    color: var(--text-tertiary); 
                    cursor: pointer;
                    font-size: 1.2rem;
                    padding: 0 0 0 8px;
                " title="${buttonText}">&times;</button>
            </div>
        `;
        
        redirectTimer--;
        
        if (redirectTimer < 0) {
            window.location.href = '/';
        }
    }, 1000);
}

function clearRedirect() {
    clearInterval(timerInterval);
    document.querySelector('[style*="bottom: 20px"]')?.remove();
}

// Enhanced modal function with bilingual content (reuses bilingual.js system)
function showInfo(type) {
    const modal = document.getElementById('infoModal');
    const overlay = document.getElementById('modalOverlay');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');

    if (window.bilingualSystem) {
        const content = window.bilingualSystem.getModalContent(type);
        if (content) {
            title.textContent = content.title;
            body.innerHTML = content.body;
            overlay.classList.add('active');
        }
    } else {
        // Fallback content if bilingual system isn't loaded yet
        const fallbackContent = {
            about: {
                title: 'Acerca del Proyecto / About the Project',
                body: `
                    <p><strong>WPlace Calculator Advanced Edition</strong></p>
                    <p>Calculadora de tiempo de recarga de píxeles para WPlace / Pixel recharge time calculator for WPlace</p>
                    <ul style="margin: 1rem 0; padding-left: 2rem;">
                        <li>⚡ Cálculos instantáneos / Instant calculations</li>
                        <li>🎯 Precisión absoluta / Absolute precision</li>
                        <li>🚀 Animaciones 60fps / 60fps animations</li>
                        <li>📱 Diseño responsivo / Responsive design</li>
                        <li>🔒 Completamente privado / Completely private</li>
                        <li>🌐 Soporte bilingüe / Bilingual support</li>
                    </ul>
                `
            }
        };

        const info = fallbackContent[type];
        if (info) {
            title.textContent = info.title;
            body.innerHTML = info.body;
            overlay.classList.add('active');
        }
    }
}

function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    overlay.classList.remove('active');
}

// Close modal on outside click
document.addEventListener('click', (e) => {
    const overlay = document.getElementById('modalOverlay');
    if (e.target === overlay) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// URL parameter handling
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('autoredirect') !== 'false') {
        setTimeout(startRedirectTimer, 2000);
    }
});

// Enhanced console Easter egg with bilingual support
console.log(`
⚡ WPlace Calculator - 404 Error / Error 404

${window.navigator.language.includes('es') ? 
    'Parece que te has perdido en el espacio digital.' : 
    'It seems you got lost in digital space.'}

🔧 ${window.navigator.language.includes('es') ? 'Enlaces útiles:' : 'Useful links:'}
• ${window.navigator.language.includes('es') ? 'Inicio:' : 'Home:'} ${window.location.origin}
• GitHub: https://github.com/Gacha0826Tomy/wplace-calculadora
• ${window.navigator.language.includes('es') ? 'Reportar issue:' : 'Report issue:'} https://github.com/Gacha0826Tomy/wplace-calculadora/issues
`);

// Wait for bilingual system to load, then apply initial language
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure bilingual system is loaded
    setTimeout(() => {
        if (window.bilingualSystem) {
            // The bilingual system will handle language detection and application
            console.log('🌐 Bilingual 404 page ready');
        }
    }, 100);
});