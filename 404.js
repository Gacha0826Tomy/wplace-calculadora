// Auto-redirect timer (optional)
let redirectTimer = 15;
let timerInterval;

function startRedirectTimer() {
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
        timerElement.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
                <span>🏠</span>
                <span>Redirigiendo en ${redirectTimer}s</span>
                <button onclick="clearRedirect()" style="
                    background: none; 
                    border: none; 
                    color: var(--text-tertiary); 
                    cursor: pointer;
                    font-size: 1.2rem;
                    padding: 0 0 0 8px;
                ">&times;</button>
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

// Modal functions (simplified version)
function showInfo(type) {
    const modal = document.getElementById('infoModal');
    const overlay = document.getElementById('modalOverlay');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');

    const content = {
        about: {
            title: 'Acerca del Proyecto',
            body: `
                <p><strong>WPlace Calculator Advanced Edition</strong></p>
                <p>Calculadora de tiempo de recarga de píxeles para WPlace con tecnología de vanguardia.</p>
                <ul style="margin: 1rem 0; padding-left: 2rem;">
                    <li>⚡ Cálculos instantáneos</li>
                    <li>🎯 Precisión absoluta</li>
                    <li>🚀 Animaciones 60fps</li>
                    <li>📱 Diseño responsivo</li>
                    <li>🔒 Completamente privado</li>
                </ul>
                <p>Herramienta independiente no oficial para WPlace.</p>
            `
        }
    };

    const info = content[type];
    if (info) {
        title.textContent = info.title;
        body.innerHTML = info.body;
        overlay.classList.add('active');
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

// Console Easter egg
console.log(`
⚡ WPlace Calculator - 404 Error

Parece que te has perdido en el espacio digital.

🔧 Enlaces útiles:
• Inicio: ${window.location.origin}
• GitHub: https://github.com/Gacha0826Tomy/wplace-calculadora
• Reportar issue: https://github.com/Gacha0826Tomy/wplace-calculadora/issues
`);