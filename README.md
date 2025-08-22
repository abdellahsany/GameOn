## *GameOn*

<p align="center">
  <img src="./assets/2025-06-14_01h21_47.png" alt="Page d’accueil GameOn" width="100%">
</p>

---

### 📑 Table des matières

- [Mission](#mission)  
- [Objectif](#objectif)  
- [Points forts de l’interface](#points-forts-de-linterface)  
- [Stacks techniques](#stacks-techniques)  
- [Fonctionnalités et bonnes pratiques](#fonctionnalités-et-bonnes-pratiques)  
- [Aspects techniques & automatisation](#aspects-techniques--automatisation)  
- [Points techniques spécifiques](#points-techniques-spécifiques)  
- [Accès au projet](#accès-au-projet)  
- [Accès via QR code](#accès-via-qr-code)

---

### 🎯 Mission

Reprendre et finaliser le développement **Front-End** du formulaire d’inscription aux concours de la société **GameOn**, intégré dans une landing page responsive. Le travail effectué a consisté à mettre en place la validation complète des champs du formulaire, à améliorer l’expérience utilisateur (UX/UI), à gérer dynamiquement l’ouverture et la fermeture de la modale d’inscription, ainsi qu’à concevoir une page de remerciement élégante s’affichant après validation.

---

### 🧭 Objectifs

- Développer une interface moderne et accessible  
- Finaliser la logique JavaScript de validation  
- Assurer une compatibilité mobile, tablette et desktop  
- Structurer le code de manière claire et modulaire  

---

### ✨ Points forts de l’interface

- Menu **burger responsive**  
- Bloc **Hero** avec slogan et CTA  
- **Modale d’inscription** animée  
- **Formulaire UX-friendly** avec validation en direct  
- **Page de remerciement** élégante  

---

### 🛠️ Stacks techniques

<table style="border: 2px solid #ccc; border-radius: 8px; border-collapse: collapse; width: 100%; font-family: Arial, sans-serif;">
  <thead>
    <tr style="background: #2c3e50; color: white;">
      <th style="padding: 12px; border: 1px solid #ccc; text-align: left;">Technologie</th>
      <th style="padding: 12px; border: 1px solid #ccc; text-align: left;">Fonction</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px; border: 1px solid #ccc; color:#e44d26; font-weight: bold;">HTML5</td>
      <td style="padding: 10px; border: 1px solid #ccc;">Structuration sémantique du formulaire</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ccc; color:#264de4; font-weight: bold;">CSS3</td>
      <td style="padding: 10px; border: 1px solid #ccc;">Responsive design via media queries</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ccc; color:#f0db4f; font-weight: bold;">JavaScript</td>
      <td style="padding: 10px; border: 1px solid #ccc;">Interactions DOM & validation dynamique</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ccc; color:#27ae60; font-weight: bold;">UX</td>
      <td style="padding: 10px; border: 1px solid #ccc;">Expérience fluide et clavier-compatible</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ccc; color:#7f8c8d; font-weight: bold;">Mobile-First</td>
      <td style="padding: 10px; border: 1px solid #ccc;">Conception pensée pour les petits écrans</td>
    </tr>
  </tbody>
</table>

---

### ✅ Fonctionnalités et bonnes pratiques

- Validation JavaScript complète : prénom, email, date de naissance, CGU, etc.  
- Utilisation avancée du DOM : `querySelector`, `addEventListener`, etc.  
- Gestion d’erreurs personnalisée via `data-error-visible`  
- Animations CSS pour la modale  
- Feedback utilisateur en temps réel  

---

### ⚙️ Aspects techniques & automatisation

- Code modulaire et bien commenté  
- Séparation des fichiers : `index.html`, `style.css`, `form.js`  
- Responsive jusqu’à **280px**  
- Hébergement GitHub Pages  

---

### 🔍 Points techniques spécifiques

- Gestion dynamique de l’ouverture/fermeture de la **modale**  
- Validation des données **sans rechargement de page**  
- Vérification d’âge (18 ans) avec `Date().getFullYear()`  
- Comportements différenciés pour **radio / checkbox / input**  
- Accessibilité via clavier et lecteurs d’écran  

---
### 🔗 Démo live

<a href="https://abdellahsany.github.io/GameOn/" target="_blank">
  <img src="https://img.shields.io/badge/Démo_Live-Cliquez_ici-2b303a?style=plastic&logo=github&logoColor=white&labelFont=DejaVu%20Sans&messageFont=DejaVu%20Sans&labelFontSize=12&messageFontSize=12"
       alt="Démo live"
       style="width:130px; height:17px; border-radius:10px;">
</a>
