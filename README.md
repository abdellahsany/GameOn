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
      <th align="left">Technologie</th>
      <th align="left">Fonction</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <!-- HTML5 — STRUCTURE -->
        <svg xmlns="http://www.w3.org/2000/svg" width="220" height="36" role="img" aria-label="HTML5: STRUCTURE">
          <title>HTML5: STRUCTURE</title>
          <defs><clipPath id="r1"><rect width="220" height="36" rx="8" ry="8"/></clipPath></defs>
          <g clip-path="url(#r1)">
            <rect width="110" height="36" fill="#E34F26"/>
            <rect x="110" width="110" height="36" fill="#4D4D4D"/>
          </g>
          <g font-family="DejaVu Sans,Verdana,Arial,Helvetica,sans-serif" font-size="14" font-weight="bold" text-anchor="middle">
            <text x="55"  y="23" fill="#FFFFFF">HTML5</text>
            <text x="165" y="23" fill="#FFFFFF">STRUCTURE</text>
          </g>
        </svg>
      </td>
      <td>Structuration sémantique du formulaire</td>
    </tr>

    <tr>
      <td>
        <!-- CSS3 — RESPONSIVE -->
        <svg xmlns="http://www.w3.org/2000/svg" width="220" height="36" role="img" aria-label="CSS3: RESPONSIVE">
          <title>CSS3: RESPONSIVE</title>
          <defs><clipPath id="r2"><rect width="220" height="36" rx="8" ry="8"/></clipPath></defs>
          <g clip-path="url(#r2)">
            <rect width="110" height="36" fill="#1572B6"/>
            <rect x="110" width="110" height="36" fill="#4D4D4D"/>
          </g>
          <g font-family="DejaVu Sans,Verdana,Arial,Helvetica,sans-serif" font-size="14" font-weight="bold" text-anchor="middle">
            <text x="55"  y="23" fill="#FFFFFF">CSS3</text>
            <text x="165" y="23" fill="#FFFFFF">RESPONSIVE</text>
          </g>
        </svg>
      </td>
      <td>Responsive design via media queries</td>
    </tr>

    <tr>
      <td>
        <!-- JAVASCRIPT — VALIDATION -->
        <svg xmlns="http://www.w3.org/2000/svg" width="220" height="36" role="img" aria-label="JAVASCRIPT: VALIDATION">
          <title>JAVASCRIPT: VALIDATION</title>
          <defs><clipPath id="r3"><rect width="220" height="36" rx="8" ry="8"/></clipPath></defs>
          <g clip-path="url(#r3)">
            <rect width="110" height="36" fill="#F7DF1E"/>
            <rect x="110" width="110" height="36" fill="#4D4D4D"/>
          </g>
          <g font-family="DejaVu Sans,Verdana,Arial,Helvetica,sans-serif" font-size="14" font-weight="bold" text-anchor="middle">
            <text x="55"  y="23" fill="#000000">JAVASCRIPT</text>
            <text x="165" y="23" fill="#FFFFFF">VALIDATION</text>
          </g>
        </svg>
      </td>
      <td>Interactions DOM & validation dynamique</td>
    </tr>

    <tr>
      <td>
        <!-- UX — ACCESSIBLE -->
        <svg xmlns="http://www.w3.org/2000/svg" width="220" height="36" role="img" aria-label="UX: ACCESSIBLE">
          <title>UX: ACCESSIBLE</title>
          <defs><clipPath id="r4"><rect width="220" height="36" rx="8" ry="8"/></clipPath></defs>
          <g clip-path="url(#r4)">
            <rect width="110" height="36" fill="#2ECC71"/>
            <rect x="110" width="110" height="36" fill="#4D4D4D"/>
          </g>
          <g font-family="DejaVu Sans,Verdana,Arial,Helvetica,sans-serif" font-size="14" font-weight="bold" text-anchor="middle">
            <text x="55"  y="23" fill="#FFFFFF">UX</text>
            <text x="165" y="23" fill="#FFFFFF">ACCESSIBLE</text>
          </g>
        </svg>
      </td>
      <td>Expérience fluide et clavier-compatible</td>
    </tr>

    <tr>
      <td>
        <!-- MOBILE-FIRST — APPROCHE -->
        <svg xmlns="http://www.w3.org/2000/svg" width="220" height="36" role="img" aria-label="MOBILE-FIRST: APPROCHE">
          <title>MOBILE-FIRST: APPROCHE</title>
          <defs><clipPath id="r5"><rect width="220" height="36" rx="8" ry="8"/></clipPath></defs>
          <g clip-path="url(#r5)">
            <rect width="110" height="36" fill="#95A5A6"/>
            <rect x="110" width="110" height="36" fill="#4D4D4D"/>
          </g>
          <g font-family="DejaVu Sans,Verdana,Arial,Helvetica,sans-serif" font-size="14" font-weight="bold" text-anchor="middle">
            <text x="55"  y="23" fill="#000000">MOBILE-FIRST</text>
            <text x="165" y="23" fill="#FFFFFF">APPROCHE</text>
          </g>
        </svg>
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
  <img src="https://img.shields.io/badge/Démo_Live-Cliquez_ici-2b303a?style=plastic&logo=github&logoColor=white&labelFont=DejaVu%20Sans&messageFont=DejaVu%20Sans&labelFontSize=12&messageFontSize=12"
       alt="Démo live"
       style="width:130px; height:17px; border-radius:10px;">
</a>
