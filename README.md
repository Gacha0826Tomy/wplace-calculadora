# ⚡ WPlace Calculator - Advanced Bilingual Edition - V. 1.2

<div align="center">

![WPlace Calculator](https://img.shields.io/badge/WPlace-Calculator-blue?style=for-the-badge&logo=lightning&logoColor=white)
![Version](https://img.shields.io/badge/version-2.0.0-brightgreen?style=for-the-badge)
![Languages](https://img.shields.io/badge/languages-ES%20|%20EN-orange?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-orange?style=for-the-badge)

**Calculadora de tiempo de recarga de píxeles para WPlace con precisión militar**
**Pixel recharge time calculator for WPlace with military precision**

[🚀 Ver Demo](https://wplace-calculator.vercel.app) · [📖 Documentation](#características) · [🐛 Report Bug](https://github.com/Gacha0826Tomy/wplace-calculator/issues)

</div>

---

## 🌐 Bilingual Support / Soporte Bilingüe

**WPlace Calculator Advanced Bilingual Edition** now features **automatic language detection** and supports both **Spanish (ES)** and **English (EN)**:

- 🔄 **Automatic Detection**: Detects system language automatically
- 🌍 **Language Toggle**: Manual language switching with smooth transitions  
- 📱 **Complete Translation**: All UI elements, messages, and content
- 💾 **Preference Memory**: Remembers your language choice
- ♿ **Accessibility**: Full keyboard navigation and screen reader support

---

## 🎯 Description / Descripción

**English**: WPlace Calculator Advanced Bilingual Edition is a high-precision tool for calculating exact pixel recharge times in WPlace. Developed with cutting-edge technology, it offers instant calculations, smooth animations, and an exceptional bilingual user experience.

**Español**: WPlace Calculator Advanced Bilingual Edition es una herramienta de alta precisión para calcular el tiempo exacto de recarga de píxeles en WPlace. Desarrollada con tecnología de vanguardia, ofrece cálculos instantáneos, animaciones fluidas y una experiencia de usuario bilingüe excepcional.

### 🌟 Main Features / Características Principales

- ⚡ **Instant Calculation / Cálculo Instantáneo**: Results in less than 100ms / Resultados en menos de 100ms
- 🎯 **Absolute Precision / Precisión Absoluta**: Mathematically exact algorithm / Algoritmo matemáticamente exacto
- 🚀 **60fps Animations / Animaciones 60fps**: Premium visual experience / Experiencia visual premium
- 📱 **Responsive Design / Diseño Responsivo**: Perfect on all devices / Perfecto en todos los dispositivos
- 🔒 **100% Private / 100% Privado**: No tracking, no cookies, no servers / Sin tracking, sin cookies, sin servidores
- ♿ **Accessible / Accesible**: Screen reader compatible / Compatible con lectores de pantalla
- 🎨 **Modern UI / UI Moderna**: Glassmorphism and advanced effects / Glassmorfismo y efectos avanzados
- 🌐 **Bilingual / Bilingüe**: Automatic ES/EN detection / Detección automática ES/EN

## 📋 Table of Contents / Tabla de Contenidos

- [Installation / Instalación](#-installation--instalación)
- [Usage / Uso](#-usage--uso)
- [Bilingual Features / Características Bilingües](#-bilingual-features--características-bilingües)
- [Technical Features / Características Técnicas](#-technical-features--características-técnicas)
- [Project Structure / Estructura del Proyecto](#-project-structure--estructura-del-proyecto)
- [Development / Desarrollo](#-development--desarrollo)
- [Contributing / Contribuir](#-contributing--contribuir)
- [License / Licencia](#-license--licencia)

## 🛠 Installation / Instalación

### Method 1 / Método 1: Clone Repository / Clonar Repositorio

```bash
# Clone the repository / Clonar el repositorio
git clone https://github.com/Gacha0826Tomy/wplace-calculator.git

# Navigate to directory / Navegar al directorio
cd wplace-calculator

# Open in browser / Abrir en el navegador
# Just open index.html in your favorite browser
# Solo abre index.html en tu navegador favorito
```

### Method 2 / Método 2: Direct Deploy to Vercel / Deploy Directo en Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Gacha0826Tomy/wplace-calculator)

### Method 3 / Método 3: Direct Download / Descarga Directa

1. **Download all project files / Descarga todos los archivos del proyecto**
2. **Ensure the following structure / Asegúrate de tener la siguiente estructura:**
```
wplace-calculator/
├── index.html
├── style.css
├── script.js
├── bilingual.css      # New: Bilingual styles / Nuevo: Estilos bilingües
├── bilingual.js       # New: Bilingual functionality / Nuevo: Funcionalidad bilingüe
├── 404.html
├── vercel.json
└── README.md
```

## 🚀 Usage / Uso

### Basic Usage / Uso Básico

1. **Open the application / Abrir la aplicación**: Go to [wplace-calculator.vercel.app](https://wplace-calculator.vercel.app)
2. **Language detection / Detección de idioma**: The app automatically detects your system language / La app detecta automáticamente el idioma del sistema
3. **Enter pixels / Ingresar píxeles**: Type the amount of pixels in the input field / Escribe la cantidad de píxeles en el campo de entrada
4. **View results / Ver resultados**: Results are calculated automatically in real-time / Los resultados se calculan automáticamente en tiempo real

### Language Features / Características de Idioma

- **🔄 Auto-detection**: System language is detected on first visit / Se detecta el idioma del sistema en la primera visita
- **🌐 Manual Toggle**: Click the language button in the top-right corner / Haz clic en el botón de idioma en la esquina superior derecha
- **💾 Memory**: Your language preference is saved locally / Tu preferencia de idioma se guarda localmente
- **⚡ Smooth Transitions**: Language switches with elegant animations / Los cambios de idioma tienen animaciones elegantes

### Advanced Features / Características Avanzadas

- **Smart formatting / Formato inteligente**: Numbers are formatted according to locale / Los números se formatean según el idioma
- **Real-time validation / Validación en tiempo real**: Instant feedback in your language / Retroalimentación instantánea en tu idioma
- **Contextual summaries / Resúmenes contextuales**: Smart analysis adapted to your language / Análisis inteligente adaptado a tu idioma
- **Keyboard shortcuts / Atajos de teclado**: `Ctrl+Enter` for quick calculation / `Ctrl+Enter` para cálculo rápido

## 🌐 Bilingual Features / Características Bilingües

### Automatic Language Detection / Detección Automática de Idioma

```javascript
// System language detection / Detección del idioma del sistema
const systemLanguage = navigator.language || navigator.userLanguage || 'es';
const languageCode = systemLanguage.substring(0, 2).toLowerCase();

// Supported languages / Idiomas soportados
const supportedLanguages = ['es', 'en'];
```

### Content Translation / Traducción de Contenido

- **✅ Complete UI Translation / Traducción Completa de la UI**: All buttons, labels, and text / Todos los botones, etiquetas y texto
- **✅ Dynamic Messages / Mensajes Dinámicos**: Status updates and notifications / Actualizaciones de estado y notificaciones
- **✅ Smart Summaries / Resúmenes Inteligentes**: Context-aware analysis / Análisis contextual
- **✅ Error Messages / Mensajes de Error**: User-friendly feedback / Retroalimentación amigable
- **✅ Modal Content / Contenido Modal**: Help and information dialogs / Diálogos de ayuda e información

### Language Toggle / Alternador de Idioma

```css
.language-toggle {
    position: fixed;
    top: var(--space-6);
    right: var(--space-6);
    z-index: var(--z-sticky);
}

.lang-btn {
    background: var(--surface-glass);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: var(--transition-normal);
}
```

## 🔧 Technical Features / Características Técnicas

### Technologies Used / Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, Vanilla JavaScript ES6+
- **Styles**: CSS Grid, Flexbox, Custom Properties
- **Animations**: CSS Animations, Web Animations API
- **Fonts**: Google Fonts (Space Grotesk, JetBrains Mono)
- **Internationalization**: Custom bilingual system / Sistema bilingüe personalizado
- **Hosting**: Vercel

### Performance / Rendimiento

- ⚡ **Load time / Tiempo de carga**: < 1.5s
- 🎯 **Response time / Tiempo de respuesta**: < 100ms
- 📱 **Lighthouse Score**: 100/100
- 🔧 **Bundle size**: < 75KB (including bilingual assets / incluyendo recursos bilingües)
- 🌐 **Browser compatibility / Compatibilidad de navegadores**: All modern browsers / Todos los navegadores modernos

### Calculation Algorithm / Algoritmo de Cálculo

```javascript
// Base formula / Fórmula base
const SECONDS_PER_PIXEL = 30;
const totalSeconds = pixels * SECONDS_PER_PIXEL;

// Time breakdown / Desglose temporal
const days = Math.floor(totalSeconds / 86400);
const hours = Math.floor((totalSeconds % 86400) / 3600);
const minutes = Math.floor((totalSeconds % 3600) / 60);
const seconds = totalSeconds % 60;

// Localized formatting / Formato localizado
const locale = currentLanguage === 'es' ? 'es-ES' : 'en-US';
return new Intl.NumberFormat(locale).format(number);
```

## 📁 Project Structure / Estructura del Proyecto

```
wplace-calculator/
├── 📄 index.html          # Main page with bilingual support / Página principal con soporte bilingüe
├── 🎨 style.css           # Main styles and animations / Estilos principales y animaciones
├── 🌐 bilingual.css       # Bilingual-specific styles / Estilos específicos bilingües
├── ⚡ script.js           # Main application logic / Lógica principal de la aplicación
├── 🌍 bilingual.js        # Bilingual system / Sistema bilingüe
├── 🚫 404.html            # Custom error page (bilingual) / Página de error personalizada (bilingüe)
├── 🔧 404.js              # Enhanced 404 functionality / Funcionalidad mejorada del 404
├── ⚙️ vercel.json         # Vercel configuration / Configuración de Vercel
├── 📖 README.md           # This bilingual documentation / Esta documentación bilingüe
└── 🔧 package.json        # Project metadata / Metadatos del proyecto
```

### Code Architecture / Arquitectura del Código

```
WPlaceCalculatorAdvanced (Main Class / Clase Principal)
├── 🏗️ Constructor
├── 🎨 Animation System / Sistema de Animaciones
├── 📊 Performance Tracking / Seguimiento de Rendimiento
├── 🎛️ State Management / Gestión de Estado
├── 🧮 Calculation Engine / Motor de Cálculo
├── 🎭 UI Components / Componentes de UI
├── ♿ Accessibility Features / Características de Accesibilidad
└── 🌐 Bilingual Integration / Integración Bilingüe

BilingualSystem (Language Class / Clase de Idioma)
├── 🔍 Language Detection / Detección de Idioma
├── 🔄 Content Translation / Traducción de Contenido
├── 💾 Preference Storage / Almacenamiento de Preferencias
├── 🎭 UI Updates / Actualizaciones de UI
└── 📝 Message Generation / Generación de Mensajes
```

## 💻 Development / Desarrollo

### Environment Variables / Variables de Entorno

No environment variables required. The application works completely client-side with automatic language detection.

No se requieren variables de entorno. La aplicación funciona completamente del lado del cliente con detección automática de idioma.

### Development Scripts / Scripts de Desarrollo

```bash
# Local server (optional) / Servidor local (opcional)
npx http-server . -p 3000

# Or use Live Server in VS Code / O usar Live Server en VS Code
# Or simply open index.html / O simplemente abrir index.html
```

### Bilingual Development / Desarrollo Bilingüe

```javascript
// Adding new translatable content / Agregar nuevo contenido traducible
<element data-es="Texto en español" data-en="Text in English">
    Texto en español
</element>

// Adding new status messages / Agregar nuevos mensajes de estado
statusMessages: {
    es: { newStatus: 'Nuevo mensaje en español' },
    en: { newStatus: 'New message in English' }
}
```

### Debugging / Depuración

The application includes integrated debugging tools for both languages:

La aplicación incluye herramientas de depuración integradas para ambos idiomas:

```javascript
// Detailed console logs / Logs detallados en consola
console.log('🌐 Bilingual system initialized - Language:', currentLanguage.toUpperCase());

// Performance monitoring / Monitoreo de rendimiento
window.performance.mark('bilingual-system-ready');

// Error tracking / Seguimiento de errores
window.addEventListener('error', handleGlobalError);
```

## 🤝 Contributing / Contribuir

Contributions are welcome in both languages! Please follow these steps:

¡Las contribuciones son bienvenidas en ambos idiomas! Por favor sigue estos pasos:

### English Contributors

1. **Fork** the project
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Add bilingual support** for new features
4. **Test** in both languages
5. **Commit** your changes (`git commit -m 'Add bilingual AmazingFeature'`)
6. **Push** to the branch (`git push origin feature/AmazingFeature`)
7. **Open** a Pull Request

### Colaboradores en Español

1. **Fork** del proyecto
2. **Crea** una rama para tu feature (`git checkout -b feature/CaracteristicaIncreible`)
3. **Agrega soporte bilingüe** para nuevas características
4. **Prueba** en ambos idiomas
5. **Commit** tus cambios (`git commit -m 'Add caracteristica bilingue increible'`)
6. **Push** a la rama (`git push origin feature/CaracteristicaIncreible`)
7. **Abre** un Pull Request

### Contribution Guidelines / Guías de Contribución

- 📝 Follow existing code conventions / Sigue las convenciones de código existentes
- 🌐 Add bilingual support for all new content / Agrega soporte bilingüe para todo contenido nuevo
- 🧪 Test all functionality in both languages / Prueba toda la funcionalidad en ambos idiomas
- 📖 Document changes in both languages / Documenta cambios en ambos idiomas
- ♿ Maintain accessibility standards / Mantén estándares de accesibilidad

## 🐛 Reporting Issues / Reportar Issues

If you find a bug or have a suggestion (in any language):

Si encuentras un bug o tienes una sugerencia (en cualquier idioma):

1. **Check** existing issues / **Revisa** los issues existentes
2. **Create** a new issue with / **Crea** un nuevo issue con:
   - 📝 Detailed description / Descripción detallada
   - 🌐 Language context / Contexto de idioma
   - 🔧 Steps to reproduce / Pasos para reproducir
   - 💻 Browser information / Información del navegador
   - 📱 Device information / Información del dispositivo

## 📊 Roadmap

### Version 2.1.0
- [ ] 🇫🇷 French language support / Soporte para francés
- [ ] 🇩🇪 German language support / Soporte para alemán
- [ ] 🌙 Language-aware dark/light mode / Modo oscuro/claro según idioma
- [ ] 📤 Bilingual sharing results / Compartir resultados bilingües

### Version 2.2.0
- [ ] 🗣️ Text-to-speech in selected language / Texto a voz en idioma seleccionado
- [ ] 📱 PWA with language preferences / PWA con preferencias de idioma
- [ ] 🎮 WPlace API integration (multilingual) / Integración con API de WPlace (multilingüe)
- [ ] 📊 Language usage analytics / Analíticas de uso de idiomas

## 📈 Analytics / Analíticas

The application tracks performance metrics locally (no data sent) in both languages:

La aplicación rastrea métricas de rendimiento localmente (sin envío de datos) en ambos idiomas:

- ⚡ Average response time / Tiempo de respuesta promedio
- 📊 Total calculations performed / Total de cálculos realizados
- 🌐 Language usage statistics / Estadísticas de uso de idiomas
- 🔢 Maximum pixels calculated / Máximo número de píxeles calculados
- ⏱️ Session time / Tiempo de sesión

## 🌍 Localization / Localización

### Supported Locales / Idiomas Soportados

| Language / Idioma | Code / Código | Status / Estado | Number Format / Formato Numérico |
|-------------------|---------------|-----------------|----------------------------------|
| Spanish / Español | `es` | ✅ Complete / Completo | `1.234,56` |
| English / Inglés | `en` | ✅ Complete / Completo | `1,234.56` |

### Adding New Languages / Agregar Nuevos Idiomas

To add support for a new language / Para agregar soporte para un nuevo idioma:

1. **Add language code** to `supportedLanguages` array / **Agrega el código de idioma** al array `supportedLanguages`
2. **Create translations** in the `translations` object / **Crea traducciones** en el objeto `translations`
3. **Update HTML** with `data-{lang}` attributes / **Actualiza HTML** con atributos `data-{lang}`
4. **Test thoroughly** / **Prueba exhaustivamente**

## 🔒 Security and Privacy / Seguridad y Privacidad

- 🔐 **No tracking / Sin tracking**: No personal data collection / No recopilación de datos personales
- 🍪 **No cookies / Sin cookies**: Works completely without cookies / Funciona completamente sin cookies
- 🏠 **Local processing / Procesamiento local**: All calculations in browser / Todos los cálculos en el navegador
- 🔒 **HTTPS only / Solo HTTPS**: Secure connections guaranteed / Conexiones seguras garantizadas
- 💾 **Local storage / Almacenamiento local**: Language preferences only / Solo preferencias de idioma

## 📱 Browser Support / Soporte de Navegadores

| Browser / Navegador | Minimum Version / Versión Mínima | Status / Estado | Bilingual Support / Soporte Bilingüe |
|---------------------|----------------------------------|-----------------|---------------------------------------|
| Chrome | 70+ | ✅ Full / Completo | ✅ Yes / Sí |
| Firefox | 65+ | ✅ Full / Completo | ✅ Yes / Sí |
| Safari | 12+ | ✅ Full / Completo | ✅ Yes / Sí |
| Edge | 79+ | ✅ Full / Completo | ✅ Yes / Sí |
| Opera | 57+ | ✅ Full / Completo | ✅ Yes / Sí |

## 🙏 Acknowledgments / Agradecimientos

- 🎨 **Design**: Inspired by modern UI/UX best practices / Inspirado en las mejores prácticas de UI/UX modernas
- 🔤 **Typography**: Google Fonts (Space Grotesk, JetBrains Mono)
- 🌟 **Icons**: Native emojis for maximum compatibility / Emojis nativos para máxima compatibilidad
- 🚀 **Hosting**: Vercel for their excellent platform / Vercel por su excelente plataforma
- 🌐 **i18n**: JavaScript Intl API for localization / API Intl de JavaScript para localización

## 📄 License / Licencia

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">

**🔥 Did you like the project? Give it a star! / ¿Te gustó el proyecto? ¡Dale una estrella!** ⭐

**🌐 Now available in Spanish and English / Ahora disponible en español e inglés**

Developed with ❤️ for the WPlace community / Desarrollado con ❤️ para la comunidad de WPlace

[🔝 Back to top / Volver al inicio](#-wplace-calculator---advanced-bilingual-edition)

</div>