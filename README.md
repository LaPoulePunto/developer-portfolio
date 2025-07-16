<p align="center" width="100%">
    <img height="100" src="https://github.com/said7388/developer-portfolio/assets/77630868/c0064908-cd5f-4751-a77c-eba90a62b55c">
</p>

---

# [Built Portfolio With GitHub ](https://github.com/said7388/github-portfolio)

---

# Developer Portfolio

#### Are you struggling to create a professional portfolio website? Look no further! You can use the Developer Portfolio template and create your very own personalized portfolio today! My website is designed to be user-friendly and easily customizable, making it perfect for both developers and freelancers.

---

# Demo :movie_camera:

![](./public/image/screen.png)

## View live preview [here](https://abusaid.netlify.app/).

---

## Table of Contents :scroll:

- [Sections](#sections-bookmark)
- [Demo](#demo-movie_camera)
- [Installation](#installation-arrow_down)
- [Getting Started](#getting-started-dart)
- [Usage](#usage-joystick)
- [Deployment](#deployment-rocket)
- [Tutorials](#tutorials-wrench)
  - [Gmail App Password Setup](#gmail-app-password-setup)
  - [Create a Telegram Bot](#create-a-telegram-bot)
  - [Fetching Blog from dev.to](#fetching-blog-from-devto)
- [Packages Used](#packages-used-package)

---

# Sections :bookmark:

- HERO SECTION
- ABOUT ME
- EXPERIENCE
- SKILLS
- PROJECTS
- EDUCATION
- BLOG
- CONTACTS

---

# Installation :arrow_down:

### You will need to download Git and Node to run this project

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

#### Make sure you have the latest version of both Git and Node on your computer.

```bash
node --version
git --version
```

## <br />

# Getting Started :dart:

### Fork and Clone the repo

To Fork the repo click on the fork button at the top right of the page. Once the repo is forked open your terminal and perform the following commands

```bash
git clone https://github.com/<YOUR GITHUB USERNAME>/developer-portfolio.git

cd developer-portfolio
```

### Install packages from the root directory

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

### Running with Docker Compose

1. **Build Docker Image and Run Container**:

   ```bash
   docker-compose up --build
   ```

2. **Access the Application**:
   Visit [http://localhost:3000](http://localhost:3000) in your web browser to view the running application.

---

### Building the Docker Image

1. **Build the Docker Image using Dockerfile.dev**:

   ```bash
   docker build -t nextjs-app -f Dockerfile.dev .
   ```

2. **Running the Docker Container**:

   ```bash
   docker run -p 3000:3000 nextjs-app
   ```

3. **Access the Application**:
   Visit [http://localhost:3000](http://localhost:3000) in your web browser to view the running application.

---

# Usage :joystick:

Please create a new `.env` file from `.env.example` file.

Eg:

```env
NEXT_PUBLIC_GTM =
NEXT_PUBLIC_APP_URL =
TELEGRAM_BOT_TOKEN =
TELEGRAM_CHAT_ID =
GMAIL_PASSKEY =
EMAIL_ADDRESS =
```

### Then, Customize data in the `utils/data` [folder](https://github.com/said7388/developer-portfolio/tree/main/utils/data).

Eg:

```javascript
export const contactsData = {
  email: "oscar.neveux@gmail.com",
  address: "France, Normandie ",
  github: "https://github.com/LaPoulePunto",
  linkedIn: "https://www.linkedin.com/in/oscar-neveux-4a4967257/",
  devUsername: "LaPoulePunto",
};
```

`devUsername` is used for fetching blog posts from `dev.to`.

---

# Deployment :rocket:

Deploying the app to platforms like Vercel or Netlify is quick and easy.

## Deploying to Vercel:

1. **Sign up or log in** to [Vercel](https://vercel.com/).
2. Once logged in, click on **"New Project"**.
3. Select your **GitHub repo** (the one that contains your forked project) and click **Import**.
4. Configure your environment variables in the Vercel dashboard by adding each key from your `.env` file.
   - E.g., `NEXT_PUBLIC_GTM`, `NEXT_PUBLIC_APP_URL`, `TELEGRAM_BOT_TOKEN`, etc.
5. Click on **Deploy**. Vercel will automatically detect your Next.js app and build it.
6. Once the deployment is complete, you can visit your live website!

### Updating After Deployment

Whenever you push changes to your GitHub repo, Vercel will automatically redeploy the app, keeping your portfolio up-to-date.

## Deploying to Netlify:

1. **Sign up or log in** to [Netlify](https://www.netlify.com/).
2. In the **Netlify Dashboard**, click **"New site from Git"**.
3. Connect your **GitHub** account and select your repo.
4. Configure your environment variables by going to **Site Settings > Build & Deploy > Environment** and adding keys from your `.env` file.
5. Click **Deploy Site**. Netlify will build and deploy your portfolio.

---

# Tutorials :wrench:

## Gmail App Password Setup

1. **Log in to your Google Account** at [https://myaccount.google.com/](https://myaccount.google.com/).
2. Navigate to **Security** from the left sidebar.
3. Scroll down to the **"Signing in to Google"** section and make sure **2-Step Verification** is turned ON.
4. Once 2-Step Verification is enabled, you'll see an option for **App Passwords**.
5. Click on **App Passwords**. You may need to enter your Google account password again.
6. In the **Select app** dropdown, choose "Mail", and for **Select device**, choose "Other (Custom name)" and name it appropriately (e.g., "Portfolio").
7. Click **Generate**. A 16-character app password will be displayed. Save this password for later use in your environment variables (e.g., `GMAIL_PASSKEY`).

## Create a Telegram Bot

1. **Open Telegram** and search for the user **@BotFather**.
2. Start a chat with BotFather and use the `/newbot` command to create a new bot.
3. Choose a name for your bot.
4. Set a unique username for your bot (must end with `bot`, e.g., `PortfolioAssistantBot`).
5. Once your bot is created, BotFather will send you a **Token**. Save this token, as you will need it for your environment variables (e.g., `TELEGRAM_BOT_TOKEN`).
6. To get your chat ID:
   - Open your bot in Telegram and send it a message.
   - Visit the following URL in your browser, replacing `BOT_TOKEN` with your actual bot token:  
     `https://api.telegram.org/bot<BOT_TOKEN>/getUpdates`
   - Look for the `chat` object in the response, which contains your **chat ID** (you can use this value for `TELEGRAM_CHAT_ID`).

## Fetching Blog from dev.to

To display your blog posts from dev.to on the portfolio:

1. Set your `devUsername` in the `utils/data.js` file to your dev.to username.
2. The application will automatically fetch your latest blog posts and display them in the **BLOG** section.
3. Ensure your blogs are publicly visible on dev.to, and the application will fetch them using the dev.to API.

---

# Packages Used :package:

|   Used Package List    |
| :--------------------: |
|    @emailjs/browser    |
|  @next/third-parties   |
|         axios          |
|      lottie-react      |
|          next          |
|       nodemailer       |
|         react          |
|       react-dom        |
|   react-fast-marquee   |
| react-google-recaptcha |
|      react-icons       |
|     react-toastify     |
|         sharp          |
|          sass          |
|      tailwindcss       |

---

# FAQ:

1. For those facing the issue of "`next` is not recognized as an internal or external command, operable program or batch file."

Run the following command:

```bash

npm install -g next

```

This installs Next.js globally

then do the usual `npm run dev`

---

# Portfolio Développeur - Oscar Neveux

Portfolio personnel développé avec Next.js, React et Tailwind CSS.

## 🚀 Déploiement

### Option 1: Vercel (Recommandé)

1. **Préparer le projet :**

   ```bash
   npm run build
   ```

2. **Déployer sur Vercel :**

   - Créez un compte sur [vercel.com](https://vercel.com)
   - Connectez votre repo GitHub
   - Configurez les variables d'environnement :
     - `EMAIL_ADDRESS` : Votre email Gmail
     - `GMAIL_PASSKEY` : Mot de passe d'application Gmail
     - `TELEGRAM_BOT_TOKEN` : Token de votre bot Telegram
     - `TELEGRAM_CHAT_ID` : ID de votre chat Telegram

3. **Configuration Gmail :**
   - Activez l'authentification à 2 facteurs
   - Générez un mot de passe d'application
   - Utilisez ce mot de passe dans `GMAIL_PASSKEY`

### Option 2: Netlify

1. Connectez votre repo GitHub sur Netlify
2. Configurez les variables d'environnement
3. Build command : `npm run build`
4. Publish directory : `.next`

### Option 3: VPS

1. **Installer les dépendances :**

   ```bash
   npm install
   npm run build
   ```

2. **Configurer PM2 :**

   ```bash
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   ```

3. **Configurer Nginx :**
   ```nginx
   server {
       listen 80;
       server_name votre-domaine.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## 🔧 Variables d'environnement

Créez un fichier `.env.local` :

```env
EMAIL_ADDRESS=votre-email@gmail.com
GMAIL_PASSKEY=votre-mot-de-passe-application
TELEGRAM_BOT_TOKEN=votre-token-bot
TELEGRAM_CHAT_ID=votre-chat-id
```

## 📦 Scripts disponibles

- `npm run dev` : Démarre le serveur de développement
- `npm run build` : Construit l'application pour la production
- `npm run start` : Démarre le serveur de production
- `npm run lint` : Lance le linter

## 🎨 Technologies utilisées

- **Framework :** Next.js 15
- **UI :** React 19, Tailwind CSS
- **Animations :** Lottie React
- **Email :** Nodemailer
- **Notifications :** Telegram Bot API
- **Styling :** SCSS, Tailwind CSS

## 📱 Fonctionnalités

- Design responsive moderne
- Animations fluides avec Lottie
- Formulaire de contact avec notifications Telegram
- Sections : Accueil, À propos, Compétences, Projets, Expérience, Éducation, Contact
- Optimisé pour les performances

## 🌐 Déploiement recommandé

**Vercel** est la meilleure option car :

- Optimisations Next.js intégrées
- Déploiement automatique
- Variables d'environnement sécurisées
- Domaine gratuit avec SSL
- Excellentes performances
