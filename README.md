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

<table>
  <thead>
    <tr>
      <th style="text-align:left;">Technologie</th>
      <th style="text-align:left;">Fonction</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div>
          <img src="https://img.shields.io/badge/HTML5-Structure-orange?logo=html5&logoColor=white&style=plastic&labelFont=Verdana&messageFont=Verdana&labelFontSize=12&messageFontSize=12"
               alt="HTML5"
               style="width:130px; height:15px; border-radius:10px;">
        </div>
      </td>
      <td>Structuration sémantique du formulaire</td>
    </tr>
    <tr>
      <td>
        <div>
          <img src="https://img.shields.io/badge/CSS3-Responsive-blue?logo=css3&logoColor=white&style=plastic&labelFont=Verdana&messageFont=Verdana&labelFontSize=12&messageFontSize=12"
               alt="CSS3"
               style="width:130px; height:15px; border-radius:10px;">
        </div>
      </td>
      <td>Responsive design via media queries</td>
    </tr>
    <tr>
      <td>
        <div>
          <img src="https://img.shields.io/badge/JavaScript-Validation-yellow?logo=javascript&logoColor=black&style=plastic&labelFont=Verdana&messageFont=Verdana&labelFontSize=12&messageFontSize=12"
               alt="JavaScript"
               style="width:130px; height:15px; border-radius:10px;">
        </div>
      </td>
      <td>Interactions DOM & validation dynamique</td>
    </tr>
    <tr>
      <td>
        <div>
          <img src="https://img.shields.io/badge/UX-Accessible-brightgreen?logo=universal-access&logoColor=white&style=plastic&labelFont=Verdana&messageFont=Verdana&labelFontSize=12&messageFontSize=12"
               alt="UX"
               style="width:130px; height:15px; border-radius:10px;">
        </div>
      </td>
      <td>Expérience fluide et clavier-compatible</td>
    </tr>
    <tr>
      <td>
        <div>
          <img src="https://img.shields.io/badge/Mobile--First-Approche-grey?logo=apple&logoColor=white&style=plastic&labelFont=Verdana&messageFont=Verdana&labelFontSize=12&messageFontSize=12"
               alt="Mobile"
               style="width:130px; height:15px; border-radius:10px;">
        </div>
      </td>
      <td>Conception pensée pour les petits écrans</td>
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
  <img src="https://img.shields.io/badge/Démo_Live-Cliquez_ici-2b303a?style=plastic&logo=github&logoColor=white" alt="Démo live" width="140" height="20">
</a>
