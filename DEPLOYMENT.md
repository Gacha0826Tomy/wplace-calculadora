# 🚀 Guía de Despliegue - WPlace Calculator

Esta guía te ayudará a desplegar **WPlace Calculator** en diferentes plataformas de hosting.

## 📋 Archivos Necesarios

Asegúrate de tener todos estos archivos en tu repositorio:

```
wplace-calculator/
├── 📄 index.html          # Página principal
├── 🎨 style.css           # Estilos y animaciones
├── ⚡ script.js           # Lógica de la aplicación
├── 🚫 404.html            # Página de error personalizada
├── ⚙️ vercel.json         # Configuración de Vercel
├── 📦 package.json        # Metadatos del proyecto
├── 🗺️ sitemap.xml         # Mapa del sitio para SEO
├── 🤖 robots.txt          # Configuración para crawlers
├── 📄 LICENSE             # Licencia MIT
├── 📖 README.md           # Documentación principal
└── 📋 DEPLOYMENT.md       # Esta guía
```

## 1. 🟢 Vercel (Recomendado)

### Método 1: Deploy desde GitHub

1. **Fork/Clone** el repositorio
2. Ve a [vercel.com](https://vercel.com)
3. **Conecta** tu cuenta de GitHub
4. **Import Project** y selecciona tu repositorio
5. **Deploy** ✨

### Método 2: CLI de Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# En el directorio del proyecto
vercel

# Para deploy en producción
vercel --prod
```

### Método 3: Deploy Button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Gacha0826Tomy/wplace-calculadora)

### Configuración Personalizada

El archivo `vercel.json` incluye:
- ✅ Headers de seguridad
- ✅ Caché optimizado
- ✅ Redirects automáticos
- ✅ Manejo de errores 404

## 2. 🔶 Netlify

### Deploy desde Git

1. Ve a [netlify.com](https://netlify.com)
2. **New site from Git**
3. Conecta tu repositorio
4. Configuración:
   - **Build command**: (vacío)
   - **Publish directory**: `./`
5. **Deploy site**

### Configuración adicional

Crea un archivo `_redirects` en la raíz:

```
# _redirects
/*    /index.html   200
/home /    301
/calculator /    301
```

### Netlify.toml (opcional)

```toml
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
```

## 3. 🟣 GitHub Pages

### Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. **Settings** → **Pages**
3. **Source**: Deploy from a branch
4. **Branch**: `main` o `master`
5. **Folder**: `/ (root)`
6. **Save**

### URL resultante
`https://tu-usuario.github.io/wplace-calculator`

### Limitaciones
- No admite archivos `vercel.json`
- No hay server-side redirects
- HTTPS automático incluido

## 4. ☁️ Cloudflare Pages

### Deploy desde Git

1. Ve a [dash.cloudflare.com](https://dash.cloudflare.com)
2. **Pages** → **Create a project**
3. Conecta tu repositorio
4. Configuración:
   - **Build command**: (vacío)
   - **Build output directory**: `./`
5. **Save and Deploy**

### Configuración adicional

Crea `_headers`:

```
/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
```

## 5. 🔵 Azure Static Web Apps

### Deploy con GitHub Actions

1. Ve a [portal.azure.com](https://portal.azure.com)
2. **Create resource** → **Static Web App**
3. Conecta tu repositorio GitHub
4. Configuración:
   - **App location**: `/`
   - **Output location**: `/`
5. **Create**

## 6. 🟠 Firebase Hosting

### Setup inicial

```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Inicializar proyecto
firebase init hosting
```

### Configuración `firebase.json`

```json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(js|css|png|jpg|jpeg|gif|webp|svg|woff|woff2|ttf|eot|ico)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      }
    ]
  }
}
```

### Deploy

```bash
firebase deploy
```

## 7. 🚀 Surge.sh (Simple y Rápido)

```bash
# Instalar Surge
npm install -g surge

# En el directorio del proyecto
surge

# Configurar dominio personalizado
surge --domain tu-dominio.surge.sh
```

## 8. 📱 Optimizaciones Post-Deploy

### Verificar Deploy

1. **Funcionalidad**: Prueba el calculador
2. **Responsivo**: Verifica en móviles
3. **Performance**: Usa Lighthouse
4. **SEO**: Revisa meta tags

### Lighthouse Audit

```bash
npm install -g lighthouse
lighthouse https://tu-dominio.com --output=html
```

### Monitoreo

- **Uptime**: UptimeRobot, Pingdom
- **Analytics**: Google Analytics, Plausible
- **Performance**: Web Vitals

## 9. 🔧 Troubleshooting

### Error 404 en rutas

**Solución**: Configurar rewrites para SPA:
- Vercel: Ya configurado en `vercel.json`
- Netlify: Agregar `_redirects`
- Otros: Configurar server rewrites

### Fuentes no cargan

**Causa**: CSP restrictivo
**Solución**: Verificar headers CSP en `vercel.json`

### Animaciones lentas

**Causa**: Recursos no optimizados
**Solución**: 
- Verificar CDN de Google Fonts
- Optimizar CSS crítico
- Usar `preload` para recursos importantes

### JavaScript no funciona

**Causa**: Errores de sintaxis o CSP
**Solución**:
- Revisar console del navegador
- Verificar CSP permite `'unsafe-inline'`

## 10. 📊 Post-Deploy Checklist

- [ ] ✅ Sitio accesible en la URL
- [ ] ✅ Calculadora funciona correctamente
- [ ] ✅ Página 404 personalizada funciona
- [ ] ✅ Todas las animaciones se ejecutan
- [ ] ✅ Responsive en móviles
- [ ] ✅ Meta tags correctos
- [ ] ✅ Sitemap.xml accesible
- [ ] ✅ Robots.txt configurado
- [ ] ✅ HTTPS habilitado
- [ ] ✅ Performance > 90 en Lighthouse

## 🆘 Soporte

Si tienes problemas:

1. **Revisa logs** de tu plataforma de hosting
2. **Consulta documentación** específica de la plataforma
3. **Abre un issue** en el repositorio
4. **Verifica configuración** de archivos como `vercel.json`

---

¡Tu WPlace Calculator debería estar funcionando perfectamente! 🎉