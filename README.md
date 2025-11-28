# ProHotel - Site Web d'Hôtel

Site web moderne et responsive pour un hôtel, construit avec Next.js 16, React 19, TypeScript et Tailwind CSS.

## 🏨 Fonctionnalités

- **Page d'accueil** avec section hero attrayante
- **Catalogue de chambres** avec 3 types de chambres (Standard, Deluxe, Suite Présidentielle)
- **Présentation des services** (Restaurant, Piscine, Spa, Salle de sport, Parking, Navette)
- **Galerie** d'images
- **Formulaire de réservation** complet et fonctionnel
- **Section contact** avec informations de l'hôtel
- **Navigation responsive** avec menu mobile
- **Design moderne** et élégant avec Tailwind CSS

## 🚀 Démarrage

### Installation des dépendances

```bash
npm install
```

### Lancer le serveur de développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

### Autres commandes

```bash
# Build pour la production
npm run build

# Démarrer le serveur de production
npm start

# Linter
npm run lint
```

## 📁 Structure du projet

```
pro-hotel/
├── app/
│   ├── components/
│   │   ├── header.tsx      # Navigation principale
│   │   └── footer.tsx      # Pied de page
│   ├── auth/               # Pages d'authentification
│   ├── page.tsx            # Page d'accueil
│   ├── layout.tsx          # Layout principal
│   └── globals.css         # Styles globaux
├── public/                 # Assets statiques
└── package.json
```

## 🎨 Technologies utilisées

- **Next.js 16** - Framework React
- **React 19** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS 4** - Framework CSS utilitaire
- **Geist Font** - Police de caractères

## 📝 Sections du site

1. **Hero Section** - Accueil avec call-to-action
2. **Chambres** - Présentation des différents types de chambres avec prix et caractéristiques
3. **Services** - Liste des services proposés par l'hôtel
4. **Galerie** - Grille d'images de l'hôtel
5. **Réservation** - Formulaire de réservation avec validation
6. **Contact** - Informations de contact et localisation

## 🔧 Personnalisation

Pour personnaliser le site :

- Modifiez les chambres dans `app/page.tsx` (constante `ROOMS`)
- Ajoutez/modifiez les services dans `app/page.tsx` (constante `SERVICES`)
- Personnalisez les couleurs dans `app/globals.css` ou via les classes Tailwind
- Modifiez les métadonnées dans `app/layout.tsx`

## 📱 Responsive Design

Le site est entièrement responsive et s'adapte à tous les écrans :
- Mobile (< 768px)
- Tablette (768px - 1024px)
- Desktop (> 1024px)

## 🚢 Déploiement

Le projet peut être déployé sur [Vercel](https://vercel.com) :

```bash
npm run build
```

Consultez la [documentation de déploiement Next.js](https://nextjs.org/docs/app/building-your-application/deploying) pour plus de détails.

## 📄 Licence

Ce projet est privé. Tous droits réservés.
