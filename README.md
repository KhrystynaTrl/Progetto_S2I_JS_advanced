# News Feed – Progetto S2I JavaScript Advanced

Un'applicazione web che mostra le ultime notizie pubblicate su [Hacker News](https://github.com/HackerNews/API), caricandole dinamicamente tramite API.

## 📸 Screenshot

![Screenshot](/resource/screenshot_pagina_news.png)

## 🚀 Funzionalità

- ✅ Visualizzazione iniziale delle 10 notizie più recenti
- 🔁 Pulsante “Load more” per caricare altre 10 notizie
- 🌐 Ogni notizia è cliccabile e apre il link originale
- 📅 Data formattata leggibile (MM/GG/AAAA - HH:mm AM/PM)

## 🛠️ Tecnologie usate

- **HTML5, CSS3 (Sass), JavaScript (ES6)**
- **Axios** per le chiamate HTTP
- **Bootstrap 5** per lo stile
- **Webpack** come bundler
- **dotenv-webpack** per la gestione delle variabili `.env`

## 📁 Struttura del progetto

Progetto_S2I_JS_advanced/
├── resource/
│ │ └── screenshot.png # screenshot della preview della pagina web
├── src/
│ ├── js/
│ │ └── api.js # Modulo per le chiamate API a Hacker News
│ ├── scss/
│ │ └── index.scss # File di stile (Sass)
│ ├── index.html # Pagina HTML principale
│ └── index.js # Entry point JS – logica dell’interfaccia
├── .env # Variabili d’ambiente
├── .gitignore # File per ignorare i file nel controllo versione
├── package.json # Configurazione del progetto npm
├── package-lock.json # Lockfile delle dipendenze
├── README.md # Documentazione del progetto
└── webpack.config.js # Configurazione del bundler Webpack

## ⚙️ Installazione

Assicurati di avere [Node.js](https://nodejs.org/) installato. Poi:

```bash
# Clona il repository
git clone https://github.com/KhrystynaTrl/Progetto_S2I_JS_advanced.git

# Vai nella cartella del progetto
cd Progetto_S2I_JS_advanced

# Installa le dipendenze
npm install

# Build del progetto
npm run build

# Avvia il server in modalità sviluppo
npm start


👤 Autore
Progetto realizzato da Khrystyna Terletska per il corso JavaScript Advanced.

GitHub: @KhrystynaTrl
Hosting_URL: [Link dell'applicazione](https://project-news-page.web.app)
Project_Console: https://console.firebase.google.com/project/project-news-page/overview
```
