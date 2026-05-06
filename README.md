# Carla Caroline — Landing Page React

Landing page da Psicopedagoga Clínica **Carla Caroline**, desenvolvida em React com CSS Modules.

## 🚀 Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm start
```

Abre automaticamente em `http://localhost:3000`

## 📁 Estrutura

```
carla-caroline/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── images.js          # Fotos da Carla em base64
│   ├── components/
│   │   ├── Navbar.jsx / .module.css
│   │   ├── Hero.jsx / .module.css
│   │   ├── Problem.jsx / .module.css
│   │   ├── Method.jsx / .module.css
│   │   ├── About.jsx / .module.css
│   │   ├── Testimonials.jsx / .module.css
│   │   ├── CtaStrip.jsx / .module.css
│   │   ├── Contact.jsx / .module.css
│   │   ├── Footer.jsx / .module.css
│   │   └── WhatsAppFab.jsx / .module.css
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── index.js
└── package.json
```

## 🎨 Design

- **Paleta:** Rosê · Creme · Areia · Verde-suave
- **Fontes:** Dancing Script · Playfair Display · DM Sans
- **Animações:** Scroll reveal com IntersectionObserver

## 📞 Contato

WhatsApp: **(84) 99816-8816**  
Instagram: [@carlacarolinemelo](https://instagram.com/carlacarolinemelo)  
Endereço: Espaço Acolher — Rua Dr. Manoel Varela, 416 · Centro · Ceará-Mirim/RN

==================================
echo "# carlacaroline" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/lucas-f-cruz/carlacaroline.git
git push -u origin main 