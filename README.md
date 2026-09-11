# Rendement — suivi de rentabilité immobilière

Application web à fichier unique (`index.html`), sans installation ni serveur.
Tes projets sont enregistrés directement dans le navigateur (localStorage) :
rien n'est envoyé sur internet, tout reste sur ton appareil.

## Mise en ligne sur GitHub Pages

1. Crée un nouveau dépôt **public** sur github.com (ex : `rentabilite-immo`).
2. Mets le fichier `index.html` (et ce README si tu veux) à la racine du dépôt.
   - Le plus simple : sur la page du dépôt, clique sur *Add file > Upload files*,
     glisse `index.html`, puis *Commit changes*.
3. Va dans **Settings > Pages**.
4. Dans *Build and deployment*, choisis la branche `main` et le dossier `/ (root)`, puis *Save*.
5. Après 1-2 minutes, ton appli est en ligne à l'adresse :
   `https://TON-PSEUDO.github.io/rentabilite-immo/`

## Sur ton téléphone

Ouvre cette adresse dans le navigateur de ton téléphone, puis :
- **iPhone (Safari)** : bouton Partager > *Sur l'écran d'accueil*.
- **Android (Chrome)** : menu ⋮ > *Ajouter à l'écran d'accueil*.

Elle se comportera comme une appli — sans passer par un store.

## Important à savoir

- Les données sont stockées **par navigateur et par appareil**. Si tu changes
  de téléphone ou vides le cache, tes projets seront perdus. Pour un usage
  plus durable (synchronisation entre appareils), il faudrait ajouter une base
  de données en ligne — je peux t'aider à le faire si besoin.
- Le calcul de rentabilité nette est une approximation (loyer − charges
  mensuelles, rapporté au coût total) ; il ne remplace pas une étude complète
  avec fiscalité, vacance locative, etc.
