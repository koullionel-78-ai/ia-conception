# IA Conception — Portfolio (Next.js + Tailwind)

Site vitrine one-page pour Ange Lionel Koulidiati / IA Conception, construit
avec Next.js (App Router), Tailwind CSS et Framer Motion.

## Démarrer en local

Il faut [Node.js](https://nodejs.org) (version 18 ou plus) installé sur ta machine.

```bash
npm install
npm run dev
```

Ouvre ensuite http://localhost:3000 dans ton navigateur. Le site se recharge
automatiquement à chaque modification de fichier.

## Modifier le contenu

Tout le texte et les coordonnées sont centralisés dans **`data/content.js`** :
nom, accroche, numéro WhatsApp, Instagram, services, compétences, bio,
formation et réalisations. Modifie ce fichier en premier — tu n'as pas besoin
de toucher au reste du code pour changer les textes.

Le formulaire « Devis » construit automatiquement un message WhatsApp à
partir de tes informations dans `contact.whatsappNumber` (section Contact) :
quand quelqu'un l'envoie, WhatsApp s'ouvre avec un message pré-rempli prêt à
être envoyé.

### Ajouter de vraies réalisations

La section « Réalisations » contient pour l'instant des cartes vides
(« à venir »). Quand tu as de vrais projets à montrer :

1. Ouvre `data/content.js` et modifie le tableau `projects` (titre, catégorie,
   description).
2. Pour utiliser une vraie image plutôt que le motif généré, ajoute ton image
   dans `public/` puis remplace le composant `WovenPattern` par une balise
   `<img>` dans `components/Projects.jsx`.

## Structure du projet

```
app/
  layout.jsx       → structure HTML globale + métadonnées
  page.jsx          → assemble toutes les sections de la page
  globals.css       → styles globaux, police, accessibilité
components/
  Nav.jsx           → menu de navigation (sticky + mobile)
  Hero.jsx          → section d'accueil
  SkillsMarquee.jsx → bandeau défilant des compétences
  Services.jsx      → grille des 4 services
  Projects.jsx      → galerie « Réalisations »
  About.jsx         → section « À propos » + formation
  Contact.jsx        → formulaire de devis → WhatsApp
  WhatsAppFloat.jsx → bouton flottant WhatsApp
  Footer.jsx
  WovenPattern.jsx  → motif visuel signature (généré, pas une image)
data/
  content.js        → TOUT le contenu texte et les coordonnées
```

## Déployer en ligne (gratuit)

La méthode la plus simple est [Vercel](https://vercel.com), qui est fait par
les créateurs de Next.js :

1. Crée un compte sur vercel.com (tu peux te connecter avec GitHub).
2. Mets ce dossier dans un dépôt GitHub (ou utilise `vercel` en ligne de
   commande avec `npx vercel` depuis ce dossier).
3. Sur Vercel, clique sur « New Project », importe le dépôt, laisse les
   réglages par défaut (Vercel détecte Next.js automatiquement) et clique sur
   « Deploy ».
4. Tu obtiens un lien du type `https://ia-conception.vercel.app`, modifiable
   dans les réglages du projet.

Chaque fois que tu modifies le code et que tu le renvoies sur GitHub, le site
se met à jour automatiquement.

## Notes

- Les polices (Fraunces, Inter, Space Mono) sont chargées depuis Google
  Fonts ; une connexion internet est nécessaire au premier chargement de la
  page chez le visiteur (normal, c'est le cas pour la grande majorité des
  sites web).
- Le motif visuel (losanges/croix/points) est généré par du code, pas une
  image téléchargée : tu peux changer ses couleurs dans `tailwind.config.js`
  (clés `clay`, `indigo`, `gold`, `sand`) et `components/WovenPattern.jsx`.
