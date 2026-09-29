# Publicar el portafolio gratis en GitHub Pages

El proyecto ya incluye el workflow `.github/workflows/deploy.yml`. Cada cambio enviado a la rama `main` reconstruirá y publicará automáticamente el sitio.

## 1. Crear el repositorio

1. Inicia sesión en GitHub con `JhansCoding`.
2. Abre `https://github.com/new`.
3. Usa exactamente este nombre: `JhansCoding.github.io`.
4. Selecciona **Public**.
5. No agregues README, `.gitignore` ni licencia desde GitHub.
6. Pulsa **Create repository**.

## 2. Subir el proyecto desde Ubuntu

Descomprime el ZIP, abre una terminal dentro de `JhansCoding.github.io` y ejecuta:

```bash
git init
git add .
git commit -m "Create engineering portfolio"
git branch -M main
git remote add origin https://github.com/JhansCoding/JhansCoding.github.io.git
git push -u origin main
```

GitHub solicitará autenticación. Puedes usar GitHub CLI (`gh auth login`), Git Credential Manager o una clave SSH. No introduzcas la contraseña normal de tu cuenta como contraseña de Git.

## 3. Activar GitHub Pages

1. Abre el repositorio en GitHub.
2. Entra en **Settings → Pages**.
3. En **Build and deployment → Source**, selecciona **GitHub Actions**.
4. Abre la pestaña **Actions**.
5. Espera a que `Deploy portfolio to GitHub Pages` aparezca en verde.

El sitio quedará disponible en:

**https://JhansCoding.github.io**

## 4. Actualizaciones futuras

Después de cambiar textos o estilos:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages publicará automáticamente la nueva versión.

## Privacidad

El archivo `public/Jhans-Timana-CV.pdf` incluye datos personales. Antes de publicar el repositorio, reemplázalo por una versión pública del CV si no deseas exponer esos datos.
