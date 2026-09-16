# PROMPT — Site Vitrine Parfumerie Premium (Antigravity IDE)

Copie-colle ce prompt directement dans Antigravity. Remplace les éléments entre `[...]` par les infos définitives (nom de marque choisi, textes, médias) avant de lancer.

---

## RÔLE

Tu es un développeur front-end senior spécialisé en sites vitrines de luxe (parfumerie, joaillerie, haute couture). Tu dois concevoir et coder un site vitrine one-page (ou multi-sections avec scroll fluide) pour une marque de parfums haut de gamme nommée **"[NOM DE LA MARQUE — ex: Essence Royale]"**.

## OBJECTIF

Créer un site à l'esthétique premium (type site Dior/Chanel/YSL parfums) qui donne envie au visiteur de sentir et d'acheter le produit rien qu'en le regardant, avec une conversion directe vers WhatsApp pour chaque produit.

## STACK TECHNIQUE

- HTML5 / CSS3 / JavaScript (ou React + TailwindCSS si le projet doit être maintenable long terme)
- GSAP (GreenSock) pour les animations scroll et transitions
- Lenis ou Locomotive Scroll pour un scroll fluide (smooth scroll) façon site de luxe
- Vidéo en fond (hero section) en `<video autoplay muted loop playsinline>`, compressée en WebM + fallback MP4
- Lazy loading des images/vidéos pour les performances
- Responsive mobile-first (la majorité des clients WhatsApp viennent du mobile)

## DIRECTION ARTISTIQUE

- Palette : noir profond / or (#C9A227 ou proche) / blanc cassé — ambiance luxe et sobriété
- Typographie : une serif élégante pour les titres (ex: Playfair Display, Cormorant) + une sans-serif fine pour le texte (ex: Montserrat Light)
- Beaucoup d'espace blanc/noir, pas de surcharge visuelle
- Micro-animations : fade-in au scroll, parallax léger sur les images de flacons, effet de zoom doux au survol des produits
- Curseur personnalisé discret (optionnel, effet premium)

## STRUCTURE DU SITE

1. **Hero section** : vidéo en fond (ambiance parfum : fumée, flacon qui tourne, lumière dorée), nom de la marque en grand, un slogan court, bouton "Découvrir la collection" avec scroll animé vers la section suivante.

2. **Section "L'Univers de la marque"** : texte court et évocateur sur l'histoire/l'identité de la marque, avec une image ou vidéo en parallax.

3. **Section "Collection" (catalogue produits)** :
   - Grille de cartes produits (image flacon, nom du parfum, note olfactive courte, prix)
   - Animation d'apparition au scroll (stagger)
   - Effet hover : léger zoom + ombre dorée
   - **Chaque carte produit est cliquable** → au clic, redirection vers WhatsApp avec un message pré-rempli et personnalisé au produit :
     ```
     https://wa.me/22893525060?text=Bonjour%2C%20je%20suis%20intéressé(e)%20par%20le%20parfum%20[NOM_DU_PARFUM]%2C%20pouvez-vous%20me%20donner%20plus%20d'informations%20%3F
     ```
   - Génère ce lien dynamiquement en JS pour chaque produit (le nom du produit s'insère automatiquement dans l'URL encodée).

4. **Section "Pourquoi nous choisir"** : 3-4 arguments (qualité, authenticité, livraison, disponibilité) avec icônes fines animées.

5. **Section témoignages** (si disponibles) : slider discret.

6. **Footer / Contact** :
   - Bouton flottant WhatsApp fixe en bas à droite sur toutes les pages (icône WhatsApp animée, pulsation douce), lien direct vers `https://wa.me/22893525060`
   - Réseaux sociaux, mentions légales, copyright

## FONCTIONNALITÉS TECHNIQUES CLÉS

- Bouton WhatsApp flottant global (sticky, toujours visible)
- Génération dynamique des liens WhatsApp par produit (texte pré-rempli avec le nom du parfum)
- Animations déclenchées au scroll (Intersection Observer ou GSAP ScrollTrigger)
- Optimisation vidéo (poids réduit, format WebM, poster image en attendant le chargement)
- Site 100% responsive (mobile, tablette, desktop)
- Temps de chargement optimisé (compression images en WebP)
- SEO de base (meta title, description, Open Graph pour partage sur réseaux sociaux)

## LIVRABLE ATTENDU

Un site complet, prêt à déployer, avec :
- Tous les fichiers (HTML/CSS/JS ou composants React)
- Un dossier `/assets` structuré pour les images/vidéos
- Des commentaires clairs dans le code pour permettre de changer facilement les produits, prix et textes plus tard
- Un rendu visuel qui justifie un positionnement premium (le site doit "sentir le luxe" avant même de parler de prix)

---

**Instruction finale pour Antigravity :** Commence par me proposer une arborescence de fichiers et une maquette de structure (wireframe textuel) avant de générer le code, afin que je valide la direction avant l'implémentation complète.
