/* ============================================================
   BOYA SHOP — JavaScript Page Produit
============================================================ */

// Données produits (à remplacer par vos vraies données)
const PRODUCTS = {
  1: {
    name: 'Costume Double Boutonnage Premium',
    category: 'homme-costume',
    price: '139$',
    oldPrice: '150$',
    desc: 'Costume homme double boutonnage haut de gamme, coupe ajustée et cintrée. Tissu premium à fines rayures pour les coloris gris et marron. Revers cranté élégant, pochette assortie. Idéal pour cérémonies, mariages et occasions formelles.',
    icon: '🧥',
    img: 'vestes0.jpg',
    colors: [
      { name: 'Gris clair rayures', hex: '#a0a0a0', img: 'vestes0.jpg' },
      { name: 'Noir', hex: '#111111', img: 'vestes00.jpg' },
      { name: 'Bleu marine', hex: '#1a3a7a', img: 'vestes000.jpg' },
      { name: 'Marron foncé', hex: '#4a2800', img: 'vestes0000.jpg' }
    ],
    sizes: ['46', '48', '50', '52', '54', '56'],
    whatsapp: '+905338598144'
  },
  2: {
    name: 'Robe de Soirée Élégante',
    category: 'femme-robe',
    price: '250$',
    oldPrice: '300$',
    desc: 'Robe de soirée femme en tissu satiné de qualité supérieure. Silhouette élancée, dos légèrement décolleté. Idéale pour les soirées, mariages et événements formels.',
    icon: '👗',
    img: 'robes.jpg',
    colors: [
      { name: 'Rouge', hex: '#cc0000' },
      { name: 'Noir', hex: '#111111' },
      { name: 'Camel', hex: '#c8a96e' }
    ],
    sizes: ['42', '44', '46', '48'],
    whatsapp: '+905338598144'
  },
  3: {
    name: 'Chemise classique',
    category: 'homme-chemise',
    price: '19$',
    desc: 'Chemise classique en coton premium, coupe droite élégante. Intemporelle et polyvalente, parfaite aussi bien pour le bureau que pour les sorties.',
    icon: '👕',
    img: 'chemise5.jpg',
    colors: [
      { name: 'Blanc', hex: '#f5f5f5' },
      { name: 'Noir', hex: '#222222' },
      { name: 'Bleu', hex: '#2255aa' },
      { name: 'Blanc cassé', hex: '#e8e8e8' }
    ],
    sizes: ['M', 'L', 'XL', 'XXL', '3XL'],
    whatsapp: '+905338598144'
  },
  4: {
    name: 'Chaussures en cuir',
    category: 'homme-chaussure',
    price: '80$',
    desc: 'Chaussures de ville en cuir véritable, semelle légère et confortable. Finitions soignées à la main, idéales pour compléter un costume ou une tenue décontractée chic.',
    icon: '👞',
    img: 'chaussures.jpg',
    colors: [
      { name: 'Noir', hex: '#1a1a1a' },
      { name: 'Marron', hex: '#8B4513' },
      { name: 'Camel', hex: '#c8a96e' }
    ],
    sizes: ['39', '40', '41', '42', '43', '44', '45', '46'],
    whatsapp: '+905338598144'
  },
  5: {
    name: 'Costume Croisé à Rayures Grises',
    category: 'homme-costume',
    price: '173$',
    oldPrice: '190$',
    desc: 'Costume homme élégant à double boutonnage croisé, coupe ajustée et raffinée. Tissu à fines rayures grises pour un look sophistiqué. Revers cranté, finitions premium. Parfait pour les cérémonies, mariages et événements de prestige.',
    icon: '🧥',
    img: 'vestes1.jpg',
    colors: [
      { name: 'Gris rayures', hex: '#888888', img: 'vestes1.jpg' }
    ],
    sizes: ['46', '48', '50', '52', '54', '57'],
    whatsapp: '+905338598144'
  },
  6: {
    name: 'Costume Slim Vert Élégant',
    category: 'homme-costume',
    price: '138$',
    oldPrice: '150$',
    desc: 'Costume classique pour homme en tissu vert élégant, coupe slim moderne et épurée. Silhouette affinée, revers pointu, bouton unique. Idéal pour se démarquer lors des occasions formelles ou semi-formelles.',
    icon: '🧥',
    img: 'vestes2.jpg',
    colors: [
      { name: 'Vert', hex: '#2d5a27', img: 'vestes2.jpg' }
    ],
    sizes: ['46', '48', '50', '52', '54', '56'],
    whatsapp: '+905338598144'
  },
  7: {
    name: 'Costume Croisé Camel Premium',
    category: 'homme-costume',
    price: '279$',
    oldPrice: '300$',
    desc: 'Costume homme double boutonnage croisé dans un tissu camel chiné à fines rayures subtiles. Revers cranté élégant, boutons dorés assortis, pochette blanche. Coupe ajustée qui valorise la silhouette. Pièce signature pour cérémonies et occasions de prestige.',
    icon: '🧥',
    img: 'vestes5.jpg',
    colors: [
      { name: 'Camel chiné', hex: '#8B6347', img: 'vestes5.jpg' }
    ],
    sizes: ['46', '48', '50', '52', '54', '56'],
    whatsapp: '+905338598144'
  },
  8: {
    name: 'Costume Classique Noir Premium',
    category: 'homme-costume',
    price: '269$',
    oldPrice: '300$',
    desc: 'Costume homme uni noir, coupe slim élégante et intemporelle. Tissu lisse haute qualité, simple boutonnage, revers cranté, pochette blanche assortie. Le classique indémodable qui s\'adapte à toutes les occasions formelles.',
    icon: '🧥',
    img: 'vestes6.jpg',
    colors: [
      { name: 'Noir', hex: '#111111', img: 'vestes6.jpg' }
    ],
    sizes: ['46', '48', '50', '52', '54', '56'],
    whatsapp: '+905338598144'
  },
  9: {
    name: 'Costume Noir Col Montant Avant-Garde',
    category: 'homme-costume',
    price: '127$',
    oldPrice: '140$',
    desc: 'Costume homme noir ultra slim, col montant sans cravate, boutonnage asymétrique sur le côté avec boutons argentés. Design avant-garde et audacieux, pochette assortie. Pour les hommes qui osent se démarquer en soirée ou en cérémonie.',
    icon: '🧥',
    img: 'vestes3.jpg',
    colors: [
      { name: 'Noir', hex: '#111111', img: 'vestes3.jpg' }
    ],
    sizes: ['46', '48', '50', '52', '54', '56'],
    whatsapp: '+905338598144'
  },
  10: {
    name: 'Costume 3 Pièces Noir Rayures Premium',
    category: 'homme-costume',
    price: '169$',
    oldPrice: '180$',
    desc: 'Costume 3 pièces homme noir à fines rayures, veste simple boutonnage, gilet assorti avec chaîne de montre décorative. Coupe ajustée raffinée, revers cranté, finitions haut de gamme. L\'élégance absolue pour mariages et grandes occasions.',
    icon: '🧥',
    img: 'vestes4.jpg',
    colors: [
      { name: 'Noir rayures', hex: '#1a1a1a', img: 'vestes4.jpg' }
    ],
    sizes: ['46', '48', '50', '52', '54', '56'],
    whatsapp: '+905338598144'
  },
  11: {
    name: 'Smoking 3 Pièces Bleu Ardoise',
    category: 'homme-costume',
    price: '278$',
    oldPrice: '300$',
    desc: 'Smoking 3 pièces homme bleu ardoise, revers satiné élégant, gilet assorti et nœud papillon inclus. Tissu premium lisse, coupe slim moderne. La pièce signature pour mariages, galas et soirées de prestige.',
    icon: '🧥',
    img: 'vestes7.jpg',
    colors: [
      { name: 'Bleu ardoise', hex: '#5b7fa6', img: 'vestes7.jpg' },
      { name: 'Bleu ardoise 2', hex: '#4a6e94', img: 'vestes77.jpg' }
    ],
    sizes: ['46', '48', '50', '52', '54', '56'],
    whatsapp: '+905338598144'
  },
  12: {
    name: 'Smoking Blanc Ivoire Premium',
    category: 'homme-costume',
    price: '278$',
    oldPrice: '300$',
    desc: 'Smoking homme blanc ivoire, revers satiné raffiné, simple boutonnage, pochette noire assortie. Tissu lisse haut de gamme, coupe slim impeccable. L\'élégance intemporelle pour mariages et événements de gala.',
    icon: '🧥',
    img: 'vestes8.jpg',
    colors: [
      { name: 'Blanc ivoire', hex: '#f5f0e8', img: 'vestes8.jpg' },
      { name: 'Blanc ivoire 2', hex: '#ede8df', img: 'vestes88.jpg' }
    ],
    sizes: ['46', '48', '50', '52', '54', '56'],
    whatsapp: '+905338598144'
  },
  15: {
    name: 'Chemise Satin Bleu Marine',
    category: 'homme-chemise',
    price: '19$',
    desc: 'Chemise homme en tissu satiné bleu marine, col italien élégant, poche poitrine boutonnée. Coupe slim mettant en valeur la silhouette. Toucher doux et brillance subtile, parfaite pour les soirées, cérémonies ou en casual chic.',
    icon: '👔',
    img: 'chemise1.jpg',
    colors: [
      { name: 'Bleu marine', hex: '#1a2a5e', img: 'chemise1.jpg' },
      { name: 'Bleu ciel', hex: '#6aaad4', img: 'chemise1.jpg' }
    ],
    sizes: ['M', 'L', 'XL', 'XXL', '3XL'],
    whatsapp: '+905338598144'
  },
  14: {
    name: 'Monk Strap Cuir Grainé',
    category: 'homme-chaussure',
    price: '79$',
    desc: 'Chaussures monk strap homme en cuir grainé marron foncé, boucle dorée élégante. Bout cap toe lisse contrasté, semelle noire robuste. Coupe classique et sophistiquée, idéale pour compléter un costume ou une tenue business casual.',
    icon: '👞',
    img: 'chaussure2.jpg',
    colors: [
      { name: 'Marron foncé', hex: '#4a2010', img: 'chaussure2.jpg' },
      { name: 'Noir', hex: '#111111', img: 'chaussure22.jpg' }
    ],
    sizes: ['39', '40', '41', '42', '43', '44', '45', '46'],
    whatsapp: '+905338598144'
  },
  13: {
    name: 'Derby Croco Luxe',
    category: 'homme-chaussure',
    price: '86$',
    desc: 'Chaussures derby homme en cuir effet crocodile brillant, intérieur cuir naturel fauve. Semelle légère contrastée, lacets assortis. Un modèle luxueux et audacieux qui sublime aussi bien un costume qu\'une tenue décontractée chic.',
    icon: '👞',
    img: 'chaussure1.jpg',
    colors: [
      { name: 'Café', hex: '#6B3A2A', img: 'chaussure1.jpg' },
      { name: 'Noir', hex: '#111111' }
    ],
    sizes: ['39', '40', '41', '42', '43', '44', '45', '46'],
    whatsapp: '+905338598144'
  },
  16: {
    name: 'Chemise Lin Camel',
    category: 'homme-chemise',
    price: '19$',
    desc: 'Chemise homme en lin camel naturel, col classique, coupe droite décontractée. Tissu respirant idéal pour un style casual chic en toute saison.',
    icon: '👔',
    img: 'chemise3.jpg',
    colors: [
      { name: 'Camel', hex: '#c8a06a', img: 'chemise3.jpg' }
    ],
    sizes: ['M', 'L', 'XL', 'XXL', '3XL'],
    whatsapp: '+905338598144'
  },
  17: {
    name: 'Chemise Rayures Bold Presidentialment',
    category: 'homme-chemise',
    price: '19$',
    desc: 'Chemise homme à rayures larges col mao, marque Presidentialment. Coupe slim moderne, tissu satiné doux. Un style affirmé pour les hommes qui osent se démarquer.',
    icon: '👔',
    img: 'chemise4.jpg',
    colors: [
      { name: 'Rouge & blanc', hex: '#cc2222', img: 'chemise4.jpg' },
      { name: 'Noir & blanc', hex: '#222222', img: 'chemise44.jpg' }
    ],
    sizes: ['M', 'L', 'XL', 'XXL', '3XL'],
    whatsapp: '+905338598144'
  },
  18: {
    name: 'Chemise Satin Col Mao Presidentialment',
    category: 'homme-chemise',
    price: '19$',
    desc: 'Chemise homme en satin uni col mao, marque Presidentialment. Finitions soignées, boutons assortis, coupe slim raffinée. Parfaite pour les soirées et occasions élégantes.',
    icon: '👔',
    img: 'chemise5.jpg',
    colors: [
      { name: 'Blanc', hex: '#f5f5f5', img: 'chemise5.jpg' },
      { name: 'Noir', hex: '#222222', img: 'chemise55.jpg' },
      { name: 'Bleu ciel', hex: '#7ab8d8', img: 'chemise555.jpg' }
    ],
    sizes: ['M', 'L', 'XL', 'XXL', '3XL'],
    whatsapp: '+905338598144'
  },
  19: {
    name: 'Chemise Lin Bleu Col Mao',
    category: 'homme-chemise',
    price: '19$',
    desc: 'Chemise homme en pur lin bleu, col mao, coupe droite décontractée. Tissu naturel respirant, idéale pour un style casual chic ou une tenue estivale élégante.',
    icon: '👔',
    img: 'chemise6.jpg',
    colors: [
      { name: 'Bleu lin', hex: '#4a7fa5', img: 'chemise6.jpg' }
    ],
    sizes: ['M', 'L', 'XL', 'XXL', '3XL'],
    whatsapp: '+905338598144'
  },
  20: {
    name: 'Chemise Carnovale Adriano Rayures Col Blanc',
    category: 'homme-chemise',
    price: '19$',
    desc: 'Chemise homme Carnovale Adriano Italy, rayures fines contrastées, col et manchettes blancs. Premium Quality Slim Fit. Un classique italien élégant pour les occasions formelles et semi-formelles.',
    icon: '👔',
    img: 'chemise7.jpg',
    colors: [
      { name: 'Turquoise & blanc fines', hex: '#4ab8c8', img: 'chemise7.jpg' },
      { name: 'Bleu & blanc', hex: '#3a6aaa', img: 'chemise7.jpg' },
      { name: 'Rouge & blanc fines', hex: '#cc2222', img: 'chemise6.jpg' },
      { name: 'Rouge & blanc (Adriano)', hex: '#bb1111', img: 'chemise7.jpg' }
    ],
    sizes: ['M', 'L', 'XL', 'XXL', '3XL'],
    whatsapp: '+905338598144'
  },
  21: {
    name: 'Chemise Rayures Noir Jose Perez',
    category: 'homme-chemise',
    price: '19$',
    desc: 'Chemise homme Jose Perez Pure Cotton, rayures verticales noir et blanc, col et manchettes blancs. Qualité premium, coupe slim. Style élégant et affirmé pour toutes occasions.',
    icon: '👔',
    img: 'chemise7.jpg',
    colors: [
      { name: 'Noir & blanc', hex: '#222222', img: 'chemise7.jpg' }
    ],
    sizes: ['M', 'L', 'XL', 'XXL', '3XL'],
    whatsapp: '+905338598144'
  },
  22: {
    name: 'Chemise Rayures Larges Carnovale',
    category: 'homme-chemise',
    price: '19$',
    desc: 'Chemise homme Carnovale Adriano Italy, rayures larges vives col classique. Premium Quality Slim Fit. Couleurs éclatantes pour un style affirmé et moderne.',
    icon: '👔',
    img: 'chemise3.jpg',
    colors: [
      { name: 'Rouge & blanc', hex: '#cc2222', img: 'chemise3.jpg' },
      { name: 'Turquoise & blanc', hex: '#4ab8c8', img: 'chemise33.jpg' }
    ],
    sizes: ['M', 'L', 'XL', 'XXL', '3XL'],
    whatsapp: '+905338598144'
  },
  23: {
    name: 'Robe Longue Sirène Brodée',
    category: 'femme-robe',
    price: '250$',
    oldPrice: '300$',
    desc: 'Robe de soirée longue coupe sirène, entièrement brodée de perles et cristaux. Manches longues transparentes en tulle, silhouette gainante. Pièce de prestige pour mariages, galas et grandes cérémonies.',
    icon: '👗',
    img: 'robe0.jpg',
    colors: [
      { name: 'Argenté', hex: '#b8c4c8', img: 'robe0.jpg' },
      { name: 'Bleu glacier', hex: '#a8c4d8', img: 'robe00.jpg' }
    ],
    sizes: ['38', '40', '42', '44', '46', '48'],
    whatsapp: '+905338598144'
  },
  24: {
    name: 'Robe Fente Épaule Dénudée Brodée',
    category: 'femme-robe',
    price: '250$',
    oldPrice: '300$',
    desc: 'Robe de soirée longue épaule dénudée asymétrique, broderie de cristaux et perles sur tout le corps. Fente latérale élégante, silhouette gainante. Pour une entrée remarquée lors des soirées et cérémonies.',
    icon: '👗',
    img: 'robe1.jpg',
    colors: [
      { name: 'Rose poudré', hex: '#e8b4a0', img: 'robe1.jpg' },
      { name: 'Noir', hex: '#111111', img: 'robe11.jpg' }
    ],
    sizes: ['38', '40', '42', '44', '46', '48'],
    whatsapp: '+905338598144'
  },
  25: {
    name: 'Ensemble Veste Ceinturée & Jupe Fleurie',
    category: 'femme-ensemble',
    price: '49$',
    desc: 'Ensemble femme veste croisée ceinturée avec broche florale assortie, jupe midi évasée à imprimé floral. Look chic et élégant, parfait pour les sorties, cérémonies ou occasions semi-formelles.',
    icon: '👗',
    img: 'robe2.jpg',
    colors: [
      { name: 'Bleu marine', hex: '#1a3a7a', img: 'robe2.jpg' },
      { name: 'Bleu ciel', hex: '#7ab8d8', img: 'robe22.jpg' },
      { name: 'Marron', hex: '#5a3020', img: 'robe222.jpg' }
    ],
    sizes: ['38', '40', '42', '44', '46', '48'],
    whatsapp: '+905338598144'
  },
  26: {
    name: 'Ensemble Veste & Jupe Midi Boutons Dorés',
    category: 'femme-ensemble',
    price: '39$',
    desc: 'Ensemble femme veste courte boutonnée avec boutons dorés ornementaux, jupe midi évasée assortie. Style rétro chic et raffiné, idéal pour les cérémonies, église et occasions élégantes.',
    icon: '👗',
    img: 'robe3.jpg',
    colors: [
      { name: 'Bordeaux', hex: '#7a1a4a', img: 'robe3.jpg' },
      { name: 'Bleu ciel', hex: '#7ab4d4', img: 'robe33.jpg' },
      { name: 'Rose poudré', hex: '#e8b4b8', img: 'robe333.jpg' }
    ],
    sizes: ['38', '40', '42', '44', '46', '48'],
    whatsapp: '+905338598144'
  },
  28: {
    name: 'Kit Sac & Sneakers Femme',
    category: 'femme-accessoire',
    price: '65$',
    desc: 'Kit coordiné femme : sac à bandoulière chaîne dorée + sneakers assortis. Plusieurs modèles disponibles : Versace, Tommy Hilfiger, Hermès, Guess. Le combo parfait pour un look élégant et sportif.',
    icon: '👜',
    img: 'kit-accessoires.jpg',
    colors: [
      { name: 'Versace blanc/or', hex: '#f5f5f0', img: 'kit-accessoires.jpg' },
      { name: 'Tommy marine/rouge', hex: '#1a3a7a', img: 'kit-accessoires0.jpg' },
      { name: 'Hermès noir', hex: '#111111', img: 'kit-accessoires1.jpg' },
      { name: 'Hermès blanc/orange', hex: '#f5f0e8', img: 'kit-accessoires2.jpg' },
      { name: 'Guess camel', hex: '#c8a06a', img: 'kit-accessoires3.jpg' }
    ],
    sizes: ['36', '37', '38', '39', '40', '41'],
    whatsapp: '+905338598144'
  },
  27: {
    name: 'Ensemble Peplum & Jupe Crayon Boutons Dorés',
    category: 'femme-ensemble',
    price: '39$',
    desc: 'Ensemble femme top peplum manches bouffantes à col V, boutons dorés et ceinture anneau doré, jupe crayon mi-longue assortie. Silhouette flatteuse et élégante pour le bureau ou les cérémonies.',
    icon: '👗',
    img: 'robe4.jpg',
    colors: [
      { name: 'Vert émeraude', hex: '#1a6a4a', img: 'robe4.jpg' },
      { name: 'Rouge', hex: '#cc2222', img: 'robe44.jpg' },
      { name: 'Noir', hex: '#111111', img: 'robe444.jpg' }
    ],
    sizes: ['38', '40', '42', '44', '46', '48'],
    whatsapp: '+905338598144'
  },
  29: {
    name: 'Tailleur & Ensemble Élégant',
    category: 'femme-ensemble',
    price: '46$',
    desc: 'Tailleur et ensemble femme élégant, coupe soignée et raffinée. Disponible en plusieurs modèles et coloris. Idéal pour les cérémonies, le bureau ou les occasions semi-formelles.',
    icon: '👗',
    img: 'tailleurs-ensembles1.jpg',
    colors: [
      { name: 'Modèle 1', hex: '#c8a06a', img: 'tailleurs-ensembles1.jpg' },
      { name: 'Modèle 2', hex: '#7a4a8a', img: 'tailleurs-ensembles11.jpg' },
      { name: 'Modèle 3', hex: '#2a5a8a', img: 'tailleurs-ensembles111.jpg' }
    ],
    sizes: ['38', '40', '42', '44', '46', '48'],
    whatsapp: '+905338598144'
  },
  30: {
    name: 'Veste Élégante',
    category: 'homme-veste',
    price: '99$',
    oldPrice: '120$',
    desc: 'Veste homme élégante, coupe ajustée et raffinée. Tissu premium, finitions soignées. Idéale pour les cérémonies et occasions formelles.',
    icon: '🧥',
    img: 'vestes9.jpg',
    colors: [
      { name: 'Modèle 1', hex: '#555555', img: 'vestes9.jpg' },
      { name: 'Modèle 2', hex: '#333333', img: 'vestes99.jpg' },
      { name: 'Modèle 3', hex: '#222222', img: 'vestes999.jpg' }
    ],
    sizes: ['46', '48', '50', '52', '54', '56'],
    whatsapp: '+905338598144'
  },
  31: {
    name: 'Veste Élégante',
    category: 'homme-veste',
    price: '99$',
    oldPrice: '120$',
    desc: 'Veste homme élégante, coupe ajustée et raffinée. Tissu premium, finitions soignées. Idéale pour les cérémonies et occasions formelles.',
    icon: '🧥',
    img: 'vestesx.jpg',
    colors: [
      { name: 'Modèle 1', hex: '#4a4a6a', img: 'vestesx.jpg' },
      { name: 'Modèle 2', hex: '#3a3a5a', img: 'vestesxx.jpg' },
      { name: 'Modèle 3', hex: '#2a2a4a', img: 'vestesxxx.jpg' },
      { name: 'Modèle 4', hex: '#1a1a3a', img: 'vestesxxxx.jpg' }
    ],
    sizes: ['46', '48', '50', '52', '54', '56'],
    whatsapp: '+905338598144'
  },
  32: {
    name: 'Veste Élégante',
    category: 'homme-veste',
    price: '99$',
    oldPrice: '120$',
    desc: 'Veste homme élégante, coupe ajustée et raffinée. Tissu premium, finitions soignées. Idéale pour les cérémonies et occasions formelles.',
    icon: '🧥',
    img: 'vestesy.jpg',
    colors: [
      { name: 'Modèle 1', hex: '#5a3a2a', img: 'vestesy.jpg' },
      { name: 'Modèle 2', hex: '#4a2a1a', img: 'vestesyy.jpg' },
      { name: 'Modèle 3', hex: '#6a4a3a', img: 'vestesyyy.jpg' },
      { name: 'Modèle 4', hex: '#3a2a1a', img: 'vestesyyyy.jpg' }
    ],
    sizes: ['46', '48', '50', '52', '54', '56'],
    whatsapp: '+905338598144'
  },
  33: {
    name: 'Veste Élégante',
    category: 'homme-veste',
    price: '99$',
    oldPrice: '120$',
    desc: 'Veste homme élégante, coupe ajustée et raffinée. Tissu premium, finitions soignées. Idéale pour les cérémonies et occasions formelles.',
    icon: '🧥',
    img: 'vestesxxxxx.jpg',
    colors: [
      { name: 'Modèle 1', hex: '#555577', img: 'vestesxxxxx.jpg' },
      { name: 'Modèle 2', hex: '#444466', img: 'vestesxxxxxx.jpg' },
      { name: 'Modèle 3', hex: '#333355', img: 'vestesxxxxxxx.jpg' },
      { name: 'Modèle 4', hex: '#222244', img: 'vestesxxxxxxxx.jpg' }
    ],
    sizes: ['46', '48', '50', '52', '54', '56'],
    whatsapp: '+905338598144'
  },
  34: {
    name: 'Veste Élégante',
    category: 'homme-veste',
    price: '99$',
    oldPrice: '120$',
    desc: 'Veste homme élégante, coupe ajustée et raffinée. Tissu premium, finitions soignées. Idéale pour les cérémonies et occasions formelles.',
    icon: '🧥',
    img: 'vestesa.jpg',
    colors: [
      { name: 'Modèle 1', hex: '#6a5a4a', img: 'vestesa.jpg' },
      { name: 'Modèle 2', hex: '#5a4a3a', img: 'vestesaa.jpg' },
      { name: 'Modèle 3', hex: '#4a3a2a', img: 'vestesaaa.jpg' },
      { name: 'Modèle 4', hex: '#3a2a1a', img: 'vestesaaaa.jpg' },
      { name: 'Modèle 5', hex: '#7a6a5a', img: 'vestesaaaaa.jpg' },
      { name: 'Modèle 6', hex: '#8a7a6a', img: 'vestesaaaaaa.jpg' },
      { name: 'Modèle 7', hex: '#2a1a0a', img: 'vestesaaaaaaa.jpg' }
    ],
    sizes: ['46', '48', '50', '52', '54', '56'],
    whatsapp: '+905338598144'
  }

};

// ─── INIT ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Cette initialisation ne concerne que la page produit (product.html).
  // Sur les autres pages qui chargent product.js (ex. cart.html, pour
  // accéder à PRODUCTS et updateCartCount), on s'arrête ici.
  if (!document.getElementById('productDetails')) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id')) || 1;
  const product = PRODUCTS[id] || PRODUCTS[1];

  loadProduct(product, id);
  initTabs();
  initGalleryThumbs();
  initQuantity(product);
  initProductSizes();
  initProductColors(product);
  initThemeProduct();
  initHamburgerProduct();
  initCart();
  loadSimilarProducts(product, id);
});

// ─── CHARGER PRODUIT ────────────────────────────────────────
function loadProduct(product, id) {
  document.title = `${product.name} — BOYA Shop`;

  document.getElementById('pdTitle').textContent  = product.name;
  // Prix : afficher prix barré si disponible
  const priceEl = document.getElementById('pdPrice');
  if (product.oldPrice) {
    priceEl.innerHTML = `<span class="price-old">${product.oldPrice}</span> <span class="price-new">${product.price}</span>`;
  } else {
    priceEl.textContent = product.price;
  }
  document.getElementById('pdDesc').textContent   = product.desc;
  document.getElementById('breadcrumbName').textContent = product.name;

  // Image principale galerie
  const mainImg  = document.getElementById('mainImg');
  const galleryIcon = document.getElementById('galleryIcon');
  if (product.img && mainImg) {
    mainImg.src = product.img;
    mainImg.alt = product.name;
    mainImg.style.display = 'block';
    if (galleryIcon) galleryIcon.style.display = 'none';
  } else if (galleryIcon) {
    galleryIcon.textContent = product.icon;
    galleryIcon.style.display = 'block';
  }

  // Thumbs — générés dynamiquement depuis product.colors
  const galleryThumbs = document.getElementById('galleryThumbs');
  if (galleryThumbs) {
    galleryThumbs.innerHTML = '';
    const colorsWithImg = product.colors.filter(c => c.img);
    const thumbSources = colorsWithImg.length > 0 ? colorsWithImg : (product.img ? [{ img: product.img, name: product.name }] : []);
    thumbSources.forEach((c, i) => {
      const btn = document.createElement('button');
      btn.className = 'thumb' + (i === 0 ? ' active' : '');
      btn.dataset.img = String(i);
      const img = document.createElement('img');
      img.src = c.img;
      img.alt = c.name || product.name;
      img.style.cssText = 'width:100%;height:100%;object-fit:cover;border-radius:8px;';
      btn.appendChild(img);
      btn.addEventListener('click', () => {
        document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
        btn.classList.add('active');
        const mainImg = document.getElementById('mainImg');
        if (mainImg) { mainImg.src = c.img; mainImg.style.display = 'block'; }
        const galleryIcon = document.getElementById('galleryIcon');
        if (galleryIcon) galleryIcon.style.display = 'none';
      });
      galleryThumbs.appendChild(btn);
    });
  }

  // Couleurs
  const colorsContainer = document.getElementById('pdColors');
  colorsContainer.innerHTML = '';
  product.colors.forEach((c, i) => {
    const btn = document.createElement('button');
    btn.className = 'pd-color' + (i === 0 ? ' active' : '');
    btn.style.background = c.hex;
    btn.dataset.name = c.name;
    btn.title = c.name;
    if (c.hex.startsWith('#f') || c.hex.startsWith('#e')) {
      btn.style.border = '2px solid #aaa';
    }
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pd-color').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('colorSelected').textContent = c.name;
      // Changer l'image principale si la couleur a sa propre image
      if (c.img) {
        const mainImg = document.getElementById('mainImg');
        if (mainImg) mainImg.src = c.img;
      }
    });
    colorsContainer.appendChild(btn);
  });
  document.getElementById('colorSelected').textContent = product.colors[0]?.name || '';

  // Tailles
  const sizesContainer = document.getElementById('pdSizes');
  sizesContainer.innerHTML = '';
  product.sizes.forEach((s, i) => {
    const btn = document.createElement('button');
    btn.className = 'pd-size' + (i === 0 ? ' active' : '');
    btn.textContent = s;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pd-size').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('sizeSelected').textContent = s;
    });
    sizesContainer.appendChild(btn);
  });
  document.getElementById('sizeSelected').textContent = product.sizes[0] || '';

  // WhatsApp
  updateWhatsappLink(product);
}

// ─── PRODUITS SIMILAIRES (même catégorie, aléatoire) ────────
function loadSimilarProducts(product, currentId) {
  const grid = document.getElementById('similarProductsGrid');
  if (!grid) return;

  const category = product.category;

  // Tous les produits de la même catégorie, sauf celui affiché
  let candidates = Object.keys(PRODUCTS)
    .map(k => parseInt(k))
    .filter(pid => pid !== currentId && PRODUCTS[pid].category === category);

  // Repli : si pas assez de produits dans la même catégorie, complète avec d'autres
  if (candidates.length < 3) {
    const others = Object.keys(PRODUCTS)
      .map(k => parseInt(k))
      .filter(pid => pid !== currentId && !candidates.includes(pid));
    candidates = candidates.concat(others);
  }

  // Mélange aléatoire (Fisher-Yates) puis on garde 3
  for (let i = candidates.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
  }
  const picks = candidates.slice(0, 3);

  grid.innerHTML = '';
  picks.forEach(pid => {
    const p = PRODUCTS[pid];
    const priceHtml = p.oldPrice
      ? `<span class="price-old">${p.oldPrice}</span> <span class="price-new">${p.price}</span>`
      : p.price;
    const colorsHtml = p.colors.slice(0, 2).map((c, i) =>
      `<button class="color-btn${i === 0 ? ' active' : ''}" style="background:${c.hex};"></button>`
    ).join('');
    const sizesHtml = p.sizes.slice(0, 3).map((s, i) =>
      `<button class="size-btn${i === 1 ? ' active' : ''}">${s}</button>`
    ).join('');

    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.id = pid;
    card.innerHTML = `
      <div class="product-img-wrap">
        <span class="badge-new">Nouveau</span>
        <img src="${p.img}" alt="${p.name}" class="product-img"/>
        <button class="fav-btn" data-id="${pid}">♡</button>
      </div>
      <div class="product-info">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-price gold">${priceHtml}</p>
        <div class="sizes-row">${sizesHtml}</div>
        <div class="colors-row">${colorsHtml}</div>
        <a href="product.html?id=${pid}" class="btn-details">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          Voir détails &nbsp;›
        </a>
      </div>`;
    grid.appendChild(card);
  });
}

// ─── LIEN WHATSAPP DYNAMIQUE ────────────────────────────────
// N'attache les écouteurs qu'une seule fois (au premier appel), pour éviter
// que le clic sur "Ajouter au panier" / "WhatsApp" ne se déclenche plusieurs
// fois si cette fonction est rappelée (ex. à chaque changement de quantité).
let _whatsappListenersAttached = false;

function updateWhatsappLink(product) {
  const btn = document.getElementById('btnWhatsapp');
  if (!btn) return;

  function buildLink() {
    const size  = document.getElementById('sizeSelected')?.textContent || '';
    const color = document.getElementById('colorSelected')?.textContent || '';
    const qty   = document.getElementById('qtyVal')?.textContent || '1';
    const prixAffiche = product.oldPrice ? `${product.price} (au lieu de ${product.oldPrice})` : product.price;
    const msg   = encodeURIComponent(
      `Bonjour BOYA Shop ! 👋\n\nJe souhaite commander :\n\n` +
      `🛍️ *${product.name}*\n` +
      `💰 Prix : ${prixAffiche}\n` +
      `📏 Taille : ${size}\n` +
      `🎨 Couleur : ${color}\n` +
      `🔢 Quantité : ${qty}\n\n` +
      `Merci de confirmer la disponibilité.`
    );
    btn.href = `https://wa.me/${product.whatsapp}?text=${msg}`;
  }

  buildLink();

  if (_whatsappListenersAttached) return;
  _whatsappListenersAttached = true;

  // Recalcule le lien à chaque changement de taille/couleur/quantité,
  // sans écouter tout le document (évite les effets de bord sur d'autres clics)
  document.getElementById('pdSizes')?.addEventListener('click', buildLink);
  document.getElementById('pdColors')?.addEventListener('click', buildLink);
  document.getElementById('qtyMinus')?.addEventListener('click', buildLink);
  document.getElementById('qtyPlus')?.addEventListener('click', buildLink);

  // Cliquer sur "Passer commande via WhatsApp" ajoute aussi l'article au panier
  // (une seule fois), et actualise immédiatement le compteur avant l'ouverture
  // de WhatsApp.
  btn.addEventListener('click', () => {
    addToCart();
  });
}

// ─── QUANTITÉ ───────────────────────────────────────────────
function initQuantity(product) {
  const minus = document.getElementById('qtyMinus');
  const plus  = document.getElementById('qtyPlus');
  const val   = document.getElementById('qtyVal');
  let qty = 1;

  minus?.addEventListener('click', () => {
    if (qty > 1) { qty--; val.textContent = qty; updateWhatsappLink(product); }
  });
  plus?.addEventListener('click', () => {
    qty++; val.textContent = qty; updateWhatsappLink(product);
  });
}

// ─── AJOUTER AU PANIER ──────────────────────────────────────
// Fonction réutilisable : ajoute l'article couramment sélectionné au panier
// et actualise le compteur affiché dans le header. Appelée par le bouton
// "Ajouter au panier" ET par le bouton WhatsApp (une commande = un ajout panier).
function addToCart() {
  const params  = new URLSearchParams(window.location.search);
  const id      = parseInt(params.get('id')) || 1;
  const size    = document.getElementById('sizeSelected')?.textContent || '';
  const color   = document.getElementById('colorSelected')?.textContent || '';
  const qty     = parseInt(document.getElementById('qtyVal')?.textContent || '1');

  const cart = JSON.parse(localStorage.getItem('boyashop-cart') || '[]');
  cart.push({ id, size, color, qty, ts: Date.now() });
  localStorage.setItem('boyashop-cart', JSON.stringify(cart));

  updateCartCount();
  return cart;
}

// Met à jour le badge du compteur panier dans le header (toutes pages)
// Affiche la somme des quantités, pas juste le nombre de lignes.
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('boyashop-cart') || '[]');
  const total = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
  const countEl = document.getElementById('cartCount');
  if (countEl) countEl.textContent = total;
}

function initCart() {
  updateCartCount();

  const btnAdd = document.getElementById('btnAddCart');
  btnAdd?.addEventListener('click', () => {
    addToCart();

    // Feedback visuel
    btnAdd.textContent = '✅ Ajouté !';
    btnAdd.style.background = 'var(--gold)';
    btnAdd.style.color = '#000';
    setTimeout(() => {
      btnAdd.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg> Ajouter au panier`;
      btnAdd.style.background = '';
      btnAdd.style.color = '';
    }, 2000);
  });
}

// ─── GALERIE THUMBS ─────────────────────────────────────────
function initGalleryThumbs() {
  document.querySelectorAll('.thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
}

// ─── TAILLES PRODUIT ────────────────────────────────────────
function initProductSizes() {
  document.querySelectorAll('.pd-size').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pd-size').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('sizeSelected').textContent = btn.textContent;
    });
  });
}

// ─── COULEURS PRODUIT ───────────────────────────────────────
function initProductColors(product) {
  // Déjà géré dans loadProduct
}

// ─── TABS ───────────────────────────────────────────────────
function initTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
      const target = document.getElementById('tab-' + tab.dataset.tab);
      if (target) target.style.display = 'block';
    });
  });
}

// ─── THÈME (sync avec main) ─────────────────────────────────
function initThemeProduct() {
  const savedTheme = localStorage.getItem('boyashop-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  const btn = document.getElementById('themeToggle');
  btn?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('boyashop-theme', next);
  });
}

function initHamburgerProduct() {
  const btn     = document.getElementById('hamburgerBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const close   = document.getElementById('sidebarClose');
  function open()  { sidebar?.classList.add('open'); overlay?.classList.add('active'); document.body.style.overflow = 'hidden'; }
  function closeSb() { sidebar?.classList.remove('open'); overlay?.classList.remove('active'); document.body.style.overflow = ''; }
  btn?.addEventListener('click', open);
  close?.addEventListener('click', closeSb);
  overlay?.addEventListener('click', closeSb);
}
