# Portfolio — Lokwa Benge Chris

Portfolio personnel de Lokwa Benge Chris, diplômé en informatique de gestion, orienté développement web avec Python/Django et gestion financière.

Le site présente son parcours, ses compétences, ses projets, ses formations et ses moyens de contact.

## Projets présentés

- **HGR Makala TB** : application Django de suivi des patients atteints de tuberculose à l’Hôpital Général de Référence de Makala. [Voir le dépôt GitHub](https://github.com/Chrislokwa/hgr-makala-tb).
- **Hebdocaisse** : application de suivi des apports hebdomadaires, avec gestion des membres et paiements, historique et rapports PDF. [Voir la démo](https://hebdocaisse.vercel.app/).

## Technologies

- Next.js et React
- TypeScript
- Tailwind CSS et composants shadcn/ui
- Framer Motion et Lucide React

## Prérequis

- Node.js et npm
- Git (facultatif, pour cloner le dépôt)

## Installation et lancement

```bash
npm install
npm run dev
```

Exécuter ces commandes depuis le dossier du projet.

Ouvrir ensuite [http://localhost:3000](http://localhost:3000).

## Commandes utiles

```bash
npm run dev    # lancer le serveur de développement
npm run build  # compiler pour la production
npm run start  # lancer la version compilée
npm run lint   # vérifier le code avec ESLint
```

## Modifier le contenu

Les informations du portfolio sont centralisées dans `src/lib/portfolio-data.ts` : identité, liens sociaux, compétences, projets, expériences, études et certifications.

Les images utilisées par le site se trouvent dans `public/`, notamment `public/HGR.jpg`, `public/hebdocaisse.png` et `public/certification/`.

## Déploiement sur Vercel

Importer le dépôt GitHub dans Vercel et conserver les paramètres Next.js détectés automatiquement. Le site n’a pas besoin de variable d’environnement pour afficher le portfolio.

## Licence

Ce dépôt contient un portfolio personnel. Demander l’autorisation de son auteur avant de réutiliser ses informations personnelles, ses images ou son contenu.
