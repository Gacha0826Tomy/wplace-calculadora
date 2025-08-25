/**
 * WPlace Calculator - Bilingual System
 * Automatic language detection and switching functionality
 * Supports Spanish (ES) and English (EN)
 */

class BilingualSystem {
    constructor() {
        this.currentLanguage = 'es'; // Default language
        this.supportedLanguages = ['es', 'en'];
        this.translations = {
            // Status messages
            statusMessages: {
                es: {
                    waiting: 'Esperando entrada...',
                    focused: 'Escribe tu cantidad de píxeles...',
                    calculating: 'Procesando {pixels} píxeles...',
                    complete: '✓ {pixels} píxeles procesados',
                    error: 'Número inválido',
                    warning: 'Número muy alto - puede afectar rendimiento',
                    validWaiting: 'Esperando entrada válida...'
                },
                en: {
                    waiting: 'Waiting for input...',
                    focused: 'Enter your pixel amount...',
                    calculating: 'Processing {pixels} pixels...',
                    complete: '✓ {pixels} pixels processed',
                    error: 'Invalid number',
                    warning: 'Number too high - may affect performance',
                    validWaiting: 'Waiting for valid input...'
                }
            },
            
            // Badge messages
            badgeMessages: {
                es: {
                    waiting: 'ESPERANDO DATOS',
                    calculating: 'CALCULANDO...',
                    complete: 'COMPLETADO'
                },
                en: {
                    waiting: 'WAITING FOR DATA',
                    calculating: 'CALCULATING...',
                    complete: 'COMPLETED'
                }
            },
            
            // Summary messages
            summaryDefaults: {
                es: 'Ingresa tu cantidad de píxeles para ver el análisis completo',
                en: 'Enter your pixel amount to see the complete analysis'
            },

            // Modal content
            modalContent: {
                privacy: {
                    title: {
                        es: 'Política de Privacidad',
                        en: 'Privacy Policy'
                    },
                    body: {
                        es: `
                            <p><strong>WPlace Calculator</strong> respeta tu privacidad:</p>
                            <ul style="margin: 1rem 0; padding-left: 2rem;">
                                <li>No recopilamos datos personales</li>
                                <li>No utilizamos cookies de seguimiento</li>
                                <li>Los cálculos se procesan localmente</li>
                                <li>Las métricas se almacenan solo en tu dispositivo</li>
                                <li>No hay conexión con servidores externos</li>
                            </ul>
                            <p>Herramienta 100% privada y segura.</p>
                        `,
                        en: `
                            <p><strong>WPlace Calculator</strong> respects your privacy:</p>
                            <ul style="margin: 1rem 0; padding-left: 2rem;">
                                <li>We don't collect personal data</li>
                                <li>We don't use tracking cookies</li>
                                <li>Calculations are processed locally</li>
                                <li>Metrics are stored only on your device</li>
                                <li>No connection to external servers</li>
                            </ul>
                            <p>100% private and secure tool.</p>
                        `
                    }
                },
                about: {
                    title: {
                        es: 'Acerca del Proyecto',
                        en: 'About the Project'
                    },
                    body: {
                        es: `
                            <p><strong>WPlace Calculator Advanced Edition</strong></p>
                            <p>Calculadora de tiempo de recarga de píxeles para WPlace con tecnología de vanguardia:</p>
                            <ul style="margin: 1rem 0; padding-left: 2rem;">
                                <li>⚡ Cálculos instantáneos en tiempo real</li>
                                <li>🎯 Precisión matemática absoluta</li>
                                <li>🚀 Animaciones optimizadas de 60fps</li>
                                <li>📱 Diseño responsivo y accesible</li>
                                <li>🔒 Completamente privado y offline</li>
                                <li>🌐 Soporte bilingüe automático</li>
                            </ul>
                            <p>Desarrollado con HTML5, CSS3 moderno y JavaScript ES6+.</p>
                        `,
                        en: `
                            <p><strong>WPlace Calculator Advanced Edition</strong></p>
                            <p>Pixel recharge time calculator for WPlace with cutting-edge technology:</p>
                            <ul style="margin: 1rem 0; padding-left: 2rem;">
                                <li>⚡ Real-time instant calculations</li>
                                <li>🎯 Absolute mathematical precision</li>
                                <li>🚀 60fps optimized animations</li>
                                <li>📱 Responsive and accessible design</li>
                                <li>🔒 Completely private and offline</li>
                                <li>🌐 Automatic bilingual support</li>
                            </ul>
                            <p>Developed with HTML5, modern CSS3 and JavaScript ES6+.</p>
                        `
                    }
                },
                contact: {
                    title: {
                        es: 'Información de Contacto',
                        en: 'Contact Information'
                    },
                    body: {
                        es: `
                            <p><strong>Herramienta de código abierto</strong></p>
                            <p>Esta es una calculadora independiente no oficial para WPlace.</p>
                            <div style="margin: 1rem 0;">
                                <p><strong>Características técnicas:</strong></p>
                                <ul style="padding-left: 2rem;">
                                    <li>Sin dependencias externas</li>
                                    <li>Optimizada para rendimiento</li>
                                    <li>Compatible con todos los navegadores</li>
                                    <li>Accesible para usuarios con discapacidades</li>
                                    <li>Soporte automático de idiomas</li>
                                </ul>
                            </div>
                            <p><em>Creado y desarrollado por <a style="text-decoration: none; color: #842593;" href="https://github.com/Gacha0826Tomy" target="_blank" rel="noopener noreferrer">G0826Tomy</a>.</em></p>
                        `,
                        en: `
                            <p><strong>Open source tool</strong></p>
                            <p>This is an independent unofficial calculator for WPlace.</p>
                            <div style="margin: 1rem 0;">
                                <p><strong>Technical features:</strong></p>
                                <ul style="padding-left: 2rem;">
                                    <li>No external dependencies</li>
                                    <li>Performance optimized</li>
                                    <li>Compatible with all browsers</li>
                                    <li>Accessible for users with disabilities</li>
                                    <li>Automatic language support</li>
                                </ul>
                            </div>
                            <p><em>Created and developed by <a style="text-decoration: none; color: #842593;" href="https://github.com/Gacha0826Tomy" target="_blank" rel="noopener noreferrer">G0826Tomy</a>.</em></p>
                        `
                    }
                }
            }
        };

        this.init();
    }

    init() {
        // Detect system language
        this.detectSystemLanguage();
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Apply initial language
        this.applyLanguage(this.currentLanguage);
        
        // Load saved language preference if exists
        this.loadLanguagePreference();

        console.log(`🌐 Bilingual system initialized - Language: ${this.currentLanguage.toUpperCase()}`);
    }

    detectSystemLanguage() {
        // Get browser/system language
        const systemLanguage = navigator.language || navigator.userLanguage || 'es';
        const languageCode = systemLanguage.substring(0, 2).toLowerCase();

        // Set language if supported, otherwise default to Spanish
        if (this.supportedLanguages.includes(languageCode)) {
            this.currentLanguage = languageCode;
        } else {
            this.currentLanguage = 'es'; // Default fallback
        }
    }

    setupEventListeners() {
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => {
                this.toggleLanguage();
            });

            // Add keyboard support
            langToggle.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggleLanguage();
                }
            });
        }
    }

    toggleLanguage() {
        // Switch between supported languages
        const currentIndex = this.supportedLanguages.indexOf(this.currentLanguage);
        const nextIndex = (currentIndex + 1) % this.supportedLanguages.length;
        const newLanguage = this.supportedLanguages[nextIndex];

        this.switchLanguage(newLanguage);
    }

    switchLanguage(newLanguage) {
        if (!this.supportedLanguages.includes(newLanguage)) {
            console.warn(`Language ${newLanguage} not supported`);
            return;
        }

        // Add transition class
        document.body.classList.add('lang-transition');

        setTimeout(() => {
            this.currentLanguage = newLanguage;
            this.applyLanguage(newLanguage);
            this.saveLanguagePreference(newLanguage);
            
            // Remove transition class
            document.body.classList.remove('lang-transition');
            
            // Add switch animation to button
            const langToggle = document.getElementById('langToggle');
            if (langToggle) {
                langToggle.classList.add('lang-switch-animation');
                setTimeout(() => {
                    langToggle.classList.remove('lang-switch-animation');
                }, 300);
            }
        }, 100);
    }

    applyLanguage(language) {
        // Update HTML lang attribute
        document.documentElement.lang = language;
        document.getElementById('htmlLang').lang = language;

        // Update all elements with data attributes
        const elements = document.querySelectorAll('[data-es], [data-en]');
        elements.forEach(element => {
            const content = element.getAttribute(`data-${language}`);
            if (content) {
                if (element.tagName.toLowerCase() === 'input') {
                    element.placeholder = content;
                } else if (element.hasAttribute('content')) {
                    element.setAttribute('content', content);
                } else if (element.hasAttribute('title')) {
                    element.title = content;
                } else {
                    element.textContent = content;
                }
            }
        });

        // Update document title and meta tags
        this.updateMetaTags(language);

        // Update language toggle button
        this.updateLanguageToggle(language);

        // Notify main calculator if it exists
        if (window.WPlaceCalculator) {
            window.WPlaceCalculator.currentLanguage = language;
        }
    }

    updateMetaTags(language) {
        // Update title
        const title = document.querySelector('title');
        if (title) {
            const titleContent = title.getAttribute(`data-${language}`);
            if (titleContent) {
                title.textContent = titleContent;
            }
        }

        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            const descContent = metaDesc.getAttribute(`data-${language}`);
            if (descContent) {
                metaDesc.setAttribute('content', descContent);
            }
        }

        // Update og:title
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            const ogTitleContent = ogTitle.getAttribute(`data-${language}`);
            if (ogTitleContent) {
                ogTitle.setAttribute('content', ogTitleContent);
            }
        }

        // Update og:description
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) {
            const ogDescContent = ogDesc.getAttribute(`data-${language}`);
            if (ogDescContent) {
                ogDesc.setAttribute('content', ogDescContent);
            }
        }
    }

    updateLanguageToggle(language) {
        const langText = document.querySelector('.lang-text');
        if (langText) {
            // Show the opposite language in the button
            const oppositeLanguage = language === 'es' ? 'EN' : 'ES';
            langText.textContent = oppositeLanguage;
            
            // Update data attributes for consistency
            langText.setAttribute('data-es', 'EN');
            langText.setAttribute('data-en', 'ES');
        }
    }

    saveLanguagePreference(language) {
        try {
            localStorage.setItem('wplace-calculator-language', language);
        } catch (e) {
            console.warn('Could not save language preference:', e);
        }
    }

    loadLanguagePreference() {
        try {
            const savedLanguage = localStorage.getItem('wplace-calculator-language');
            if (savedLanguage && this.supportedLanguages.includes(savedLanguage)) {
                this.currentLanguage = savedLanguage;
                this.applyLanguage(savedLanguage);
            }
        } catch (e) {
            console.warn('Could not load language preference:', e);
        }
    }

    // Helper methods for the main calculator
    getStatusMessage(type, pixels = null) {
        let message = this.translations.statusMessages[this.currentLanguage][type] || '';
        if (pixels !== null && message.includes('{pixels}')) {
            message = message.replace('{pixels}', this.formatNumber(pixels));
        }
        return message;
    }

    getBadgeMessage(type) {
        return this.translations.badgeMessages[this.currentLanguage][type] || '';
    }

    getSummaryDefault() {
        return this.translations.summaryDefaults[this.currentLanguage] || '';
    }

    formatNumber(num) {
        const locale = this.currentLanguage === 'es' ? 'es-ES' : 'en-US';
        return new Intl.NumberFormat(locale).format(num);
    }

    // Generate smart summary with proper language
    generateSmartSummary(pixels, timeBreakdown) {
        const { days, hours, minutes, totalDays } = timeBreakdown;
        const lang = this.currentLanguage;
        
        let summary = `<strong>${this.formatNumber(pixels)} ${lang === 'es' ? 'píxeles' : 'pixels'}</strong> `;

        if (lang === 'es') {
            if (totalDays >= 1) {
                if (days === 1) {
                    summary += `tardarán exactamente <strong>1 día`;
                    if (hours > 0) summary += `, ${hours} hora${hours !== 1 ? 's' : ''}`;
                    if (minutes > 0 && hours === 0) summary += `, ${minutes} minuto${minutes !== 1 ? 's' : ''}`;
                    summary += `</strong> en recargarse.`;
                } else {
                    summary += `necesitarán <strong>${days} días completos`;
                    if (hours > 0 || minutes > 0) {
                        summary += ` y `;
                        if (hours > 0) summary += `${hours} hora${hours !== 1 ? 's' : ''}`;
                        if (minutes > 0) {
                            if (hours > 0) summary += `, `;
                            summary += `${minutes} minuto${minutes !== 1 ? 's' : ''}`;
                        }
                    }
                    summary += `</strong> para recarga completa.`;
                }
            } else if (hours >= 1) {
                summary += `se recargarán en <strong>${hours} hora${hours !== 1 ? 's' : ''}`;
                if (minutes > 0) summary += ` y ${minutes} minuto${minutes !== 1 ? 's' : ''}`;
                summary += `</strong>.`;
            } else {
                summary += `estarán listos en solo <strong>${minutes} minuto${minutes !== 1 ? 's' : ''}</strong>.`;
            }

            // Add context-aware tips in Spanish
            if (totalDays >= 7) {
                summary += ` <span style="color: var(--accent-amber);">💡 Considera dividir en sesiones más pequeñas.</span>`;
            } else if (totalDays <= 0.1) {
                summary += ` <span style="color: var(--accent-emerald);">⚡ ¡Recarga súper rápida!</span>`;
            }
        } else {
            // English version
            if (totalDays >= 1) {
                if (days === 1) {
                    summary += `will take exactly <strong>1 day`;
                    if (hours > 0) summary += `, ${hours} hour${hours !== 1 ? 's' : ''}`;
                    if (minutes > 0 && hours === 0) summary += `, ${minutes} minute${minutes !== 1 ? 's' : ''}`;
                    summary += `</strong> to recharge.`;
                } else {
                    summary += `will need <strong>${days} complete days`;
                    if (hours > 0 || minutes > 0) {
                        summary += ` and `;
                        if (hours > 0) summary += `${hours} hour${hours !== 1 ? 's' : ''}`;
                        if (minutes > 0) {
                            if (hours > 0) summary += `, `;
                            summary += `${minutes} minute${minutes !== 1 ? 's' : ''}`;
                        }
                    }
                    summary += `</strong> for full recharge.`;
                }
            } else if (hours >= 1) {
                summary += `will recharge in <strong>${hours} hour${hours !== 1 ? 's' : ''}`;
                if (minutes > 0) summary += ` and ${minutes} minute${minutes !== 1 ? 's' : ''}`;
                summary += `</strong>.`;
            } else {
                summary += `will be ready in just <strong>${minutes} minute${minutes !== 1 ? 's' : ''}</strong>.`;
            }

            // Add context-aware tips in English
            if (totalDays >= 7) {
                summary += ` <span style="color: var(--accent-amber);">💡 Consider splitting into smaller sessions.</span>`;
            } else if (totalDays <= 0.1) {
                summary += ` <span style="color: var(--accent-emerald);">⚡ Super fast recharge!</span>`;
            }
        }

        return summary;
    }

    // Get modal content for the current language
    getModalContent(type) {
        const content = this.translations.modalContent[type];
        if (!content) return null;

        return {
            title: content.title[this.currentLanguage],
            body: content.body[this.currentLanguage]
        };
    }
}

// Enhanced modal function to support bilingual content
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
    }
}

// Initialize bilingual system when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.bilingualSystem = new BilingualSystem();
});

// Extend the main WPlaceCalculatorAdvanced class with bilingual support
if (typeof WPlaceCalculatorAdvanced !== 'undefined') {
    // Override methods to support bilingual functionality
    const originalUpdateInputStatus = WPlaceCalculatorAdvanced.prototype.updateInputStatus;
    WPlaceCalculatorAdvanced.prototype.updateInputStatus = function(state, textKey, pixels = null) {
        if (window.bilingualSystem) {
            const text = window.bilingualSystem.getStatusMessage(state === 'calculating' ? 'calculating' : 
                       state === 'complete' ? 'complete' :
                       state === 'error' ? 'error' :
                       state === 'warning' ? 'warning' :
                       state === 'focused' ? 'focused' :
                       'waiting', pixels);
            originalUpdateInputStatus.call(this, state, text);
        } else {
            originalUpdateInputStatus.call(this, state, textKey);
        }
    };

    const originalUpdateResultsBadge = WPlaceCalculatorAdvanced.prototype.updateResultsBadge;
    WPlaceCalculatorAdvanced.prototype.updateResultsBadge = function(state, textKey) {
        if (window.bilingualSystem) {
            const text = window.bilingualSystem.getBadgeMessage(state);
            originalUpdateResultsBadge.call(this, state, text);
        } else {
            originalUpdateResultsBadge.call(this, state, textKey);
        }
    };

    const originalGenerateSmartSummary = WPlaceCalculatorAdvanced.prototype.generateSmartSummary;
    WPlaceCalculatorAdvanced.prototype.generateSmartSummary = function(pixels, timeBreakdown) {
        if (window.bilingualSystem) {
            return window.bilingualSystem.generateSmartSummary(pixels, timeBreakdown);
        } else {
            return originalGenerateSmartSummary.call(this, pixels, timeBreakdown);
        }
    };

    const originalFormatNumber = WPlaceCalculatorAdvanced.prototype.formatNumber;
    WPlaceCalculatorAdvanced.prototype.formatNumber = function(num) {
        if (window.bilingualSystem) {
            return window.bilingualSystem.formatNumber(num);
        } else {
            return originalFormatNumber.call(this, num);
        }
    };
}