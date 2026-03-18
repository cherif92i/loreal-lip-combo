# YSL LOVENUDE Matchmaker — Brief Technique

## Concept
Web app mobile-first pour conseillers de vente YSL en boutique.
Outil de recommandation de combos lèvres (crayon Kiss Shaper + rouge Lip Blusher).
**MUST work offline** — certaines boutiques n'ont pas internet.

## Flow utilisateur
1. **Écran d'accueil** — branding YSL LOVENUDE, bouton "Commencer"
2. **Question 1** — "Vous êtes plutôt d'humeur..." → **MATCH** (harmonieux) ou **CLASH** (contrasté)
3. **Question 2** — Conseiller sélectionne la **carnation** : Clair / Medium / Foncé
4. **Résultat** — 2 combos proposés, chacun avec :
   - 1 photo mannequin portant le combo
   - 1 Kiss Shaper (crayon) avec numéro + nom
   - 1 Lip Blusher (rouge) avec numéro + nom
5. **Détail combo** — tap sur un combo pour voir les produits en grand
6. Bouton "Recommencer"

## Combos (extraits du PDF formation)

### MATCH (harmonieux — crayon et rouge dans les mêmes tons)
**Clair:**
- Combo 1: Lip Blusher #06 Naughty Pink + Kiss Shaper #104 Brûlant Mauve
- Combo 2: Lip Blusher #01 Undressed Pink + Kiss Shaper #102 Hâle Lignes

**Medium:**
- Combo 1: Lip Blusher #44 Nude Lavallière + Kiss Shaper #44 Nude Lavallière
- Combo 2: Lip Blusher #44 Nude Lavallière + Kiss Shaper #104 Brûlant Mauve

**Foncé:**
- Combo 1: Lip Blusher #09 3AM Espresso + Kiss Shaper #107 Cacao Flirt
- Combo 2: Lip Blusher #08 Mauve-Haze + Kiss Shaper #107 Cacao Flirt

### CLASH (contrasté — crayon et rouge dans des tons différents)
**Clair:**
- Combo 1: Lip Blusher #03 Taupe Flirt + Kiss Shaper #105 Brûlé Miel
- Combo 2: Lip Blusher #04 Rouge Flagrant + Kiss Shaper #105 Brûlé Miel

**Medium:**
- Combo 1: Lip Blusher #05 Apple Sin + Kiss Shaper #108 Hazel Enigma
- Combo 2: Lip Blusher #07 Illilit Nude + Kiss Shaper #1 Déshabillé Rose

**Foncé:**
- Combo 1: Lip Blusher #44 Nude Lavallière + Kiss Shaper #106 Épicé Fumé
- Combo 2: Lip Blusher #09 3AM Espresso + Kiss Shaper #110 Expresso Dreams

## Produits

### Lip Blusher (Rouge à Lèvres mat Effet Floutant longue durée)
- #01 Undressed Pink
- #02 Sassy Peach
- #03 Taupe Flirt
- #04 Rouge Flagrant
- #05 Apple Sin
- #06 Naughty Pink
- #07 Illilit Nude (star)
- #08 Mauve-Haze
- #09 3AM Espresso
- #44 Nude Lavallière (star)

### Kiss Shaper (Crayon à lèvres sculptant longue tenue)
- #1 Déshabillé Rose (star)
- #44 Nude Lavallière
- #102 Hâle Lignes
- #103 Rougissant Nude
- #104 Brûlant Mauve (star)
- #105 Brûlé Miel
- #106 Épicé Fumé
- #107 Cacao Flirt
- #108 Hazel Enigma
- #109 Sienna Rebel
- #110 Expresso Dreams

## Charte graphique
- **Couleur dominante** : Rose dusty / mauve (#C4867A approx), noir, blanc
- **Typo titres** : BlackDiamond (fourni)
- **Typo body** : Singulier (fourni, poids: Thin/Light/Regular/Demi/Bold/Heavy)
- **Logo** : Cassandre YSL (blanc sur fond sombre)
- **Ambiance** : Fumée rose, luxe, Dua Lipa, hôtel, sensuel

## Assets disponibles
- `/assets/loreal/Fonts/` — BlackDiamond.ttf, Singulier-*.otf
- `/assets/loreal/LOGOS/LOGOS/` — PNG logos noir/blanc
- `/assets/loreal/VISUELS/VISUELS/BACKGROUND x DUA/` — Backgrounds Dua Lipa + fumée
- `/assets/loreal/VISUELS/VISUELS/KISS SHAPER/` — Textures crayons 3000x3000 + ALL SHADES
- `/assets/loreal/VISUELS/VISUELS/LIP BLUSHER/` — Textures, packshots, color-pickers rouges
- `/pdf-pages/` — Pages extraites du PDF combos (photos mannequins)

## Technique
- **HTML/CSS/JS pur** — un seul fichier index.html (ou quelques fichiers)
- **PWA** — manifest.json + service worker pour fonctionner offline
- **Mobile-first** — optimisé téléphone/tablette, orientation portrait
- **Images embarquées** — toutes les images optimisées et incluses localement
- **Pas de framework** — vanilla JS, léger, rapide
- **Animations** — transitions fluides entre écrans, révélation du résultat
- **Deploy** : GitHub Pages (cherif92i/loreal-lip-combo)
