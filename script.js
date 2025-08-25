/**
 * WPlace Calculator - Advanced Edition
 * Ultra-precise pixel recharge time calculator with real-time analytics
 * Performance optimized with advanced animations and user experience
 */

class WPlaceCalculatorAdvanced {
    constructor() {
        // Core constants
        this.SECONDS_PER_PIXEL = 30;
        this.TIME_UNITS = {
            SECOND: 1,
            MINUTE: 60,
            HOUR: 3600,
            DAY: 86400
        };

        // Performance tracking
        this.metrics = {
            totalCalculations: 0,
            sessionCalculations: 0,
            maxPixelsCalculated: 0,
            averageResponseTime: 0,
            startTime: Date.now()
        };

        // Animation system
        this.animationSystem = {
            activeAnimations: new Map(),
            rafId: null,
            timeline: []
        };

        // State management
        this.state = {
            currentPixels: 0,
            currentCalculation: null,
            isCalculating: false,
            lastUpdateTime: 0,
            inputValid: false
        };

        // DOM cache for performance
        this.elements = {};
        this.cacheElements();

        // Initialize application
        this.init();
    }

    cacheElements() {
        const elementIds = [
            'pixelInput', 'inputStatus', 'resultsZone', 'resultsBadge',
            'timePrimary', 'daysValue', 'hoursValue', 'minutesValue', 'secondsValue',
            'daysFill', 'hoursFill', 'minutesFill', 'secondsFill',
            'summaryText', 'summaryDetails', 'totalSecondsDetail',
            'totalDaysDetail', 'pixelsPerDayDetail',
            'totalCalculations', 'sessionCalculations', 'maxPixelsCalculated'
        ];

        elementIds.forEach(id => {
            this.elements[id] = document.getElementById(id);
        });

        // Additional element queries
        this.elements.statusDot = document.querySelector('.status-dot');
        this.elements.statusText = document.querySelector('.status-text');
        this.elements.badgePulse = document.querySelector('.badge-pulse');
        this.elements.badgeText = this.elements.resultsBadge?.querySelector('.badge-text');
        this.elements.timeValue = document.querySelector('.time-value');
    }

    init() {
        this.setupEventListeners();
        this.initializeUI();
        this.loadStoredMetrics();
        this.startPerformanceMonitoring();
        this.setupAccessibility();
        this.preloadAssets();

        // Initialize with smooth entrance animation
        this.playEntranceAnimation();

        console.log('🚀 WPlace Calculator Advanced Edition initialized');
    }

    setupEventListeners() {
        // High-performance input handling with optimized debouncing
        this.elements.pixelInput.addEventListener('input', this.createOptimizedDebounce((e) => {
            this.handleInputChange(e.target.value);
        }, 100));

        // Real-time validation
        this.elements.pixelInput.addEventListener('input', (e) => {
            this.validateInputRealTime(e.target);
        });

        // Advanced keyboard handling
        this.elements.pixelInput.addEventListener('keydown', (e) => {
            this.handleAdvancedKeyboard(e);
        });

        // Focus management with animations
        this.elements.pixelInput.addEventListener('focus', () => {
            this.handleInputFocus();
        });

        this.elements.pixelInput.addEventListener('blur', () => {
            this.handleInputBlur();
        });

        // Performance monitoring events
        document.addEventListener('visibilitychange', () => {
            this.handleVisibilityChange();
        });

        // Error handling
        window.addEventListener('error', (e) => {
            this.handleGlobalError(e);
        });
    }

    initializeUI() {
        // Set initial states
        this.updateInputStatus('waiting', 'Esperando entrada...');
        this.updateResultsBadge('waiting', 'ESPERANDO DATOS');
        this.elements.resultsZone.classList.remove('active');

        // Initialize metrics display
        this.updateMetricsDisplay();

        // Auto-focus with delay for better UX
        setTimeout(() => {
            this.elements.pixelInput.focus();
        }, 1200);
    }

    handleInputChange(value) {
        const startTime = performance.now();

        // Parse and validate input
        const pixels = this.parsePixelValue(value);

        if (pixels === null) {
            this.resetCalculation();
            return;
        }

        if (pixels === 0) {
            this.showZeroState();
            return;
        }

        // Update state
        this.state.currentPixels = pixels;
        this.state.isCalculating = true;
        this.state.lastUpdateTime = Date.now();

        // Update UI immediately for responsiveness
        this.updateInputStatus('calculating', `Procesando ${this.formatNumber(pixels)} píxeles...`);
        this.updateResultsBadge('calculating', 'CALCULANDO...');

        // Perform calculation with animation
        this.performAdvancedCalculation(pixels).then(() => {
            // Update metrics
            const responseTime = performance.now() - startTime;
            this.updateMetrics(pixels, responseTime);

            this.state.isCalculating = false;
            this.updateInputStatus('complete', `✓ ${this.formatNumber(pixels)} píxeles procesados`);
            this.updateResultsBadge('complete', 'COMPLETADO');
        });
    }

    async performAdvancedCalculation(pixels) {
        const totalSeconds = pixels * this.SECONDS_PER_PIXEL;
        const timeBreakdown = this.calculateTimeBreakdown(totalSeconds);

        // Activate results zone with smooth transition
        this.elements.resultsZone.classList.add('active');

        // Animate all components simultaneously
        await Promise.all([
            this.animatePrimaryTime(timeBreakdown),
            this.animateTimeUnits(timeBreakdown),
            this.animateProgressBars(timeBreakdown),
            this.animateSummary(pixels, totalSeconds),
            this.animateDetails(pixels, totalSeconds)
        ]);
    }

    calculateTimeBreakdown(totalSeconds) {
        const days = Math.floor(totalSeconds / this.TIME_UNITS.DAY);
        const remainingAfterDays = totalSeconds % this.TIME_UNITS.DAY;
        const hours = Math.floor(remainingAfterDays / this.TIME_UNITS.HOUR);
        const remainingAfterHours = remainingAfterDays % this.TIME_UNITS.HOUR;
        const minutes = Math.floor(remainingAfterHours / this.TIME_UNITS.MINUTE);
        const seconds = remainingAfterHours % this.TIME_UNITS.MINUTE;

        return {
            totalSeconds,
            days,
            hours,
            minutes,
            seconds,
            // Additional useful calculations
            totalMinutes: Math.floor(totalSeconds / this.TIME_UNITS.MINUTE),
            totalHours: Math.floor(totalSeconds / this.TIME_UNITS.HOUR),
            totalDays: totalSeconds / this.TIME_UNITS.DAY
        };
    }

    async animatePrimaryTime(timeBreakdown) {
        const { days, hours, minutes } = timeBreakdown;

        // Format in logical order: DAYS:HOURS:MINUTES
        const timeString = `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

        return this.animateTextValue(this.elements.timeValue, timeString, {
            duration: 800,
            easing: 'easeOutBack'
        });
    }

    async animateTimeUnits(timeBreakdown) {
        const units = ['days', 'hours', 'minutes', 'seconds'];
        const animations = units.map((unit, index) => {
            return this.animateNumberValue(
                this.elements[`${unit}Value`],
                timeBreakdown[unit],
                {
                    duration: 600 + (index * 100),
                    delay: index * 50,
                    easing: 'easeOutQuart'
                }
            );
        });

        return Promise.all(animations);
    }

    async animateProgressBars(timeBreakdown) {
        const maxValues = { days: 365, hours: 24, minutes: 60, seconds: 60 };
        const units = ['days', 'hours', 'minutes', 'seconds'];

        const animations = units.map((unit, index) => {
            const percentage = unit === 'days'
                ? Math.min((timeBreakdown[unit] / 30) * 100, 100) // Scale days to 30 for visualization
                : (timeBreakdown[unit] / maxValues[unit]) * 100;

            return this.animateProgressBar(
                this.elements[`${unit}Fill`],
                percentage,
                {
                    duration: 1000 + (index * 100),
                    delay: 200 + (index * 100),
                    easing: 'easeOutCubic'
                }
            );
        });

        return Promise.all(animations);
    }

    async animateSummary(pixels, totalSeconds) {
        const timeBreakdown = this.calculateTimeBreakdown(totalSeconds);
        const summaryText = this.generateSmartSummary(pixels, timeBreakdown);

        return this.animateTextContent(this.elements.summaryText, summaryText, {
            duration: 500,
            delay: 300
        });
    }

    async animateDetails(pixels, totalSeconds) {
        const details = [
            { element: this.elements.totalSecondsDetail, value: this.formatNumber(totalSeconds) },
            { element: this.elements.totalDaysDetail, value: (totalSeconds / this.TIME_UNITS.DAY).toFixed(2) },
            { element: this.elements.pixelsPerDayDetail, value: this.formatNumber(2880) } // 24h * 60min * 2 pixels/min
        ];

        const animations = details.map((detail, index) => {
            if (!detail.element) return Promise.resolve();
            return this.animateTextContent(detail.element, detail.value, {
                duration: 400,
                delay: 400 + (index * 100)
            });
        });

        return Promise.all(animations);
    }

    generateSmartSummary(pixels, timeBreakdown) {
        const { days, hours, minutes, totalDays } = timeBreakdown;

        // Create intelligent, context-aware summary
        let summary = `<strong>${this.formatNumber(pixels)} píxeles</strong> `;

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

        // Add context-aware tips
        if (totalDays >= 7) {
            summary += ` <span style="color: var(--accent-amber);">💡 Considera dividir en sesiones más pequeñas.</span>`;
        } else if (totalDays <= 0.1) {
            summary += ` <span style="color: var(--accent-emerald);">⚡ ¡Recarga súper rápida!</span>`;
        }

        return summary;
    }

    // ===== ANIMATION ENGINE =====

    animateNumberValue(element, targetValue, options = {}) {
        if (!element) return Promise.resolve();

        const {
            duration = 600,
            delay = 0,
            easing = 'easeOutQuart'
        } = options;

        return new Promise((resolve) => {
            setTimeout(() => {
                const startValue = parseInt(element.textContent) || 0;
                const startTime = performance.now();

                const animate = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);

                    const easedProgress = this.applyEasing(progress, easing);
                    const currentValue = Math.round(startValue + (targetValue - startValue) * easedProgress);

                    element.textContent = this.formatNumber(currentValue);

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        element.textContent = this.formatNumber(targetValue);
                        resolve();
                    }
                };

                requestAnimationFrame(animate);
            }, delay);
        });
    }

    animateTextValue(element, targetText, options = {}) {
        if (!element) return Promise.resolve();

        const {
            duration = 400,
            delay = 0,
            easing = 'easeOutCubic'
        } = options;

        return new Promise((resolve) => {
            setTimeout(() => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(10px)';

                setTimeout(() => {
                    element.textContent = targetText;
                    element.style.transition = `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}`;
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';

                    setTimeout(resolve, duration);
                }, 50);
            }, delay);
        });
    }

    animateTextContent(element, content, options = {}) {
        if (!element) return Promise.resolve();

        const {
            duration = 300,
            delay = 0
        } = options;

        return new Promise((resolve) => {
            setTimeout(() => {
                element.style.transition = `opacity ${duration}ms ease-out`;
                element.style.opacity = '0';

                setTimeout(() => {
                    element.innerHTML = content;
                    element.style.opacity = '1';
                    setTimeout(resolve, duration);
                }, duration / 2);
            }, delay);
        });
    }

    animateProgressBar(element, percentage, options = {}) {
        if (!element) return Promise.resolve();

        const {
            duration = 800,
            delay = 0,
            easing = 'easeOutCubic'
        } = options;

        return new Promise((resolve) => {
            setTimeout(() => {
                element.style.transition = `width ${duration}ms ${this.getCSSEasing(easing)}`;
                element.style.width = `${Math.min(percentage, 100)}%`;

                setTimeout(resolve, duration);
            }, delay);
        });
    }

    applyEasing(t, easingName) {
        const easingFunctions = {
            easeOutQuart: t => 1 - Math.pow(1 - t, 4),
            easeOutCubic: t => 1 - Math.pow(1 - t, 3),
            easeOutBack: t => {
                const c1 = 1.70158;
                const c3 = c1 + 1;
                return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
            },
            easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
        };

        return easingFunctions[easingName] ? easingFunctions[easingName](t) : t;
    }

    getCSSEasing(easingName) {
        const cssEasings = {
            easeOutQuart: 'cubic-bezier(0.25, 1, 0.5, 1)',
            easeOutCubic: 'cubic-bezier(0.33, 1, 0.68, 1)',
            easeOutBack: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            easeInOutCubic: 'cubic-bezier(0.65, 0, 0.35, 1)'
        };

        return cssEasings[easingName] || 'ease-out';
    }

    // ===== INPUT HANDLING & VALIDATION =====

    parsePixelValue(value) {
        const cleanValue = value.trim().replace(/[^\d]/g, ''); // Remove non-digits

        if (cleanValue === '') return null;

        const number = parseInt(cleanValue, 10);

        if (isNaN(number) || number < 1) return null;
        if (number > 10000000) return 10000000; // Reasonable upper limit

        return number;
    }

    validateInputRealTime(input) {
        const value = this.parsePixelValue(input.value);

        // Remove previous validation classes
        input.classList.remove('error', 'warning', 'success');

        if (input.value && value === null) {
            input.classList.add('error');
            this.updateInputStatus('error', 'Número inválido');
            this.state.inputValid = false;
        } else if (value > 1000000) {
            input.classList.add('warning');
            this.updateInputStatus('warning', 'Número muy alto - puede afectar rendimiento');
            this.state.inputValid = true;
        } else if (value > 0) {
            input.classList.add('success');
            this.state.inputValid = true;
        } else {
            this.state.inputValid = false;
        }
    }

    handleAdvancedKeyboard(e) {
        // Allow: backspace, delete, tab, escape, enter
        const allowedKeys = [8, 9, 27, 13, 46, 110, 190];
        // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X, Ctrl+Z
        const ctrlKeys = [65, 67, 86, 88, 90];
        // Allow: home, end, left, right, up, down
        const navigationKeys = [35, 36, 37, 38, 39, 40];

        if (
            allowedKeys.includes(e.keyCode) ||
            (e.ctrlKey === true && ctrlKeys.includes(e.keyCode)) ||
            navigationKeys.includes(e.keyCode)
        ) {
            return;
        }

        // Ensure that it is a number and stop the keypress
        if (
            (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
            (e.keyCode < 96 || e.keyCode > 105)
        ) {
            e.preventDefault();
        }

        // Handle special shortcuts
        if (e.ctrlKey && e.key === 'Enter') {
            this.handleQuickCalculate();
        }
    }

    handleInputFocus() {
        this.updateInputStatus('focused', 'Escribe tu cantidad de píxeles...');
        document.body.classList.add('input-focused');
    }

    handleInputBlur() {
        document.body.classList.remove('input-focused');
        if (!this.state.inputValid) {
            this.updateInputStatus('waiting', 'Esperando entrada válida...');
        }
    }

    // ===== UI STATE MANAGEMENT =====

    updateInputStatus(state, text) {
        if (!this.elements.statusDot || !this.elements.statusText) return;

        // Remove all state classes
        this.elements.statusDot.classList.remove('active', 'error', 'warning', 'success');

        // Add appropriate class
        if (state !== 'waiting') {
            this.elements.statusDot.classList.add(state === 'focused' ? 'active' : state);
        }

        this.elements.statusText.textContent = text;
    }

    updateResultsBadge(state, text) {
        if (!this.elements.resultsBadge) return;

        // Remove all state classes
        this.elements.resultsBadge.classList.remove('calculating', 'complete', 'error');
        this.elements.badgePulse?.classList.remove('active', 'complete');

        // Add appropriate classes
        if (state !== 'waiting') {
            this.elements.resultsBadge.classList.add(state);
            if (this.elements.badgePulse) {
                this.elements.badgePulse.classList.add(state === 'calculating' ? 'active' : state);
            }
        }

        if (this.elements.badgeText) {
            this.elements.badgeText.textContent = text;
        }
    }

    resetCalculation() {
        this.state.currentPixels = 0;
        this.state.inputValid = false;
        this.elements.resultsZone?.classList.remove('active');
        this.updateInputStatus('waiting', 'Esperando entrada...');
        this.updateResultsBadge('waiting', 'ESPERANDO DATOS');
    }

    showZeroState() {
        this.resetCalculation();
        this.updateInputStatus('waiting', 'Ingresa un número mayor a 0');
    }

    // ===== METRICS & ANALYTICS =====

    updateMetrics(pixels, responseTime) {
        this.metrics.totalCalculations++;
        this.metrics.sessionCalculations++;
        this.metrics.maxPixelsCalculated = Math.max(this.metrics.maxPixelsCalculated, pixels);

        // Update average response time with exponential moving average
        this.metrics.averageResponseTime = this.metrics.averageResponseTime === 0
            ? responseTime
            : (this.metrics.averageResponseTime * 0.7) + (responseTime * 0.3);

        this.updateMetricsDisplay();
        this.saveMetrics();
    }

    updateMetricsDisplay() {
        if (this.elements.totalCalculations) {
            this.animateNumberValue(this.elements.totalCalculations, this.metrics.totalCalculations);
        }
        if (this.elements.sessionCalculations) {
            this.elements.sessionCalculations.textContent = this.formatNumber(this.metrics.sessionCalculations);
        }
        if (this.elements.maxPixelsCalculated) {
            this.elements.maxPixelsCalculated.textContent = this.formatNumber(this.metrics.maxPixelsCalculated);
        }
    }

    saveMetrics() {
        try {
            const metricsData = {
                ...this.metrics,
                lastSession: Date.now()
            };
            localStorage.setItem('wplace-calculator-metrics', JSON.stringify(metricsData));
        } catch (e) {
            console.warn('Could not save metrics to localStorage:', e);
        }
    }

    loadStoredMetrics() {
        try {
            const stored = localStorage.getItem('wplace-calculator-metrics');
            if (stored) {
                const data = JSON.parse(stored);
                this.metrics.totalCalculations = data.totalCalculations || 0;
                this.metrics.maxPixelsCalculated = data.maxPixelsCalculated || 0;
                this.updateMetricsDisplay();
            }
        } catch (e) {
            console.warn('Could not load stored metrics:', e);
        }
    }

    // ===== UTILITIES =====

    formatNumber(num) {
        return new Intl.NumberFormat('es-ES').format(num);
    }

    createOptimizedDebounce(func, wait) {
        let timeout;
        let lastCallTime = 0;

        return function executedFunction(...args) {
            const currentTime = Date.now();

            const later = () => {
                lastCallTime = currentTime;
                timeout = null;
                func.apply(this, args);
            };

            clearTimeout(timeout);

            // If it's been a while since last call, execute immediately
            if (currentTime - lastCallTime > wait * 2) {
                later();
            } else {
                timeout = setTimeout(later, wait);
            }
        };
    }

    // ===== PERFORMANCE & MONITORING =====

    startPerformanceMonitoring() {
        // Monitor performance metrics
        if ('performance' in window && 'observe' in window.PerformanceObserver.prototype) {
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (entry.name.includes('wplace-calculator')) {
                        console.debug(`Performance: ${entry.name} - ${entry.duration.toFixed(2)}ms`);
                    }
                }
            });

            observer.observe({ entryTypes: ['measure', 'navigation'] });
        }
    }

    handleVisibilityChange() {
        if (document.hidden) {
            // Pause expensive operations when tab is hidden
            this.pauseAnimations();
        } else {
            // Resume when tab becomes visible
            this.resumeAnimations();
        }
    }

    pauseAnimations() {
        document.body.classList.add('animations-paused');
    }

    resumeAnimations() {
        document.body.classList.remove('animations-paused');
    }

    handleGlobalError(error) {
        console.error('WPlace Calculator Error:', error);
        this.updateInputStatus('error', 'Error del sistema - recarga la página');
    }

    // ===== ACCESSIBILITY =====

    setupAccessibility() {
        // Add ARIA labels
        this.elements.pixelInput?.setAttribute('aria-describedby', 'input-help calculation-result');

        // Announce calculation results to screen readers
        const announcer = document.createElement('div');
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        announcer.className = 'sr-only';
        announcer.id = 'calculation-announcer';
        document.body.appendChild(announcer);

        this.elements.announcer = announcer;
    }

    announceResult(pixels, timeBreakdown) {
        if (!this.elements.announcer) return;

        const { days, hours, minutes } = timeBreakdown;
        let announcement = `Resultado calculado: ${this.formatNumber(pixels)} píxeles tardarán `;

        if (days > 0) announcement += `${days} días, `;
        if (hours > 0) announcement += `${hours} horas, `;
        if (minutes > 0) announcement += `${minutes} minutos `;
        announcement += 'en recargarse completamente.';

        this.elements.announcer.textContent = announcement;
    }

    // ===== ENTRANCE ANIMATIONS =====

    playEntranceAnimation() {
        // Stagger animations for smooth entrance
        const elements = [
            { el: document.querySelector('.hero-badge'), delay: 0 },
            { el: document.querySelector('.hero-title'), delay: 200 },
            { el: document.querySelector('.hero-description'), delay: 400 },
            { el: document.querySelector('.hero-stats'), delay: 600 },
            { el: document.querySelector('.calculator-container'), delay: 800 },
            { el: document.querySelector('.insights-grid'), delay: 1000 }
        ];

        elements.forEach(({ el, delay }) => {
            if (el) {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';

                setTimeout(() => {
                    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, delay);
            }
        });
    }

    // ===== ADDITIONAL UTILITIES =====

    preloadAssets() {
        // Preload critical fonts
        const fontPreloads = [
            'https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mPbF4C4wjU8U.woff2',
            'https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yK3TSg.woff2'
        ];

        fontPreloads.forEach(url => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'font';
            link.type = 'font/woff2';
            link.crossOrigin = 'anonymous';
            link.href = url;
            document.head.appendChild(link);
        });
    }

    handleQuickCalculate() {
        // Quick calculate with common values
        const commonValues = [100, 500, 1000, 5000, 10000];
        const currentValue = this.parsePixelValue(this.elements.pixelInput.value) || 0;
        const nextValue = commonValues.find(v => v > currentValue) || commonValues[0];

        this.elements.pixelInput.value = nextValue;
        this.handleInputChange(nextValue);
    }
}

// ===== MODAL SYSTEM =====
function showInfo(type) {
    const modal = document.getElementById('infoModal');
    const overlay = document.getElementById('modalOverlay');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');

    const content = {
        privacy: {
            title: 'Política de Privacidad',
            body: `
                <p><strong>WPlace Calculator</strong> respeta tu privacidad:</p>
                <ul style="margin: 1rem 0; padding-left: 2rem;">
                    <li>No recopilamos datos personales</li>
                    <li>No utilizamos cookies de seguimiento</li>
                    <li>Los cálculos se procesan localmente</li>
                    <li>Las métricas se almacenan solo en tu dispositivo</li>
                    <li>No hay conexión con servidores externos</li>
                </ul>
                <p>Herramienta 100% privada y segura.</p>
            `
        },
        about: {
            title: 'Acerca del Proyecto',
            body: `
                <p><strong>WPlace Calculator Advanced Edition</strong></p>
                <p>Calculadora de tiempo de recarga de píxeles para WPlace con tecnología de vanguardia:</p>
                <ul style="margin: 1rem 0; padding-left: 2rem;">
                    <li>⚡ Cálculos instantáneos en tiempo real</li>
                    <li>🎯 Precisión matemática absoluta</li>
                    <li>🚀 Animaciones optimizadas de 60fps</li>
                    <li>📱 Diseño responsivo y accesible</li>
                    <li>🔒 Completamente privado y offline</li>
                </ul>
                <p>Desarrollado con HTML5, CSS3 moderno y JavaScript ES6+.</p>
            `
        },
        contact: {
            title: 'Información de Contacto',
            body: `
                <p><strong>Herramienta de código abierto</strong></p>
                <p>Esta es una calculadora independiente no oficial para WPlace.</p>
                <div style="margin: 1rem 0;">
                    <p><strong>Características técnicas:</strong></p>
                    <ul style="padding-left: 2rem;">
                        <li>Sin dependencias externas</li>
                        <li>Optimizada para rendimiento</li>
                        <li>Compatible con todos los navegadores</li>
                        <li>Accesible para usuarios con discapacidades</li>
                    </ul>
                </div>
                <p><em>Proyecto educativo y de demostración técnica.</em></p>
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

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Check for modern browser support
    if (!window.requestAnimationFrame || !document.querySelector || !window.Intl) {
        console.warn('WPlace Calculator: Navegador antiguo detectado. Algunas funciones pueden no estar disponibles.');
    }

    // Initialize the calculator
    window.WPlaceCalculator = new WPlaceCalculatorAdvanced();

    // Performance mark
    if (window.performance?.mark) {
        window.performance.mark('wplace-calculator-ready');
    }

    console.log('🎯 WPlace Calculator Advanced Edition ready!');
});

// ===== ADDITIONAL CSS INJECTION =====
const additionalStyles = `
    .animations-paused * {
        animation-play-state: paused !important;
        transition-duration: 0.01ms !important;
    }

    .sr-only {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
    }

    .pixel-input.success {
        border-color: var(--accent-emerald) !important;
        box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1) !important;
    }

    .pixel-input.error {
        border-color: var(--accent-red) !important;
        box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1) !important;
        animation: shake 0.5s ease-in-out;
    }

    .pixel-input.warning {
        border-color: var(--accent-amber) !important;
        box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.1) !important;
    }

    @keyframes shake {
        0%, 100% { transform: translateX(0) translateY(-2px); }
        25% { transform: translateX(-5px) translateY(-2px); }
        75% { transform: translateX(5px) translateY(-2px); }
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);