export const PRODUCTS = [
  // ELECTRONICS (1 - 5)
  {
    id: 'prod-101',
    name: 'UltraBook Pro 15 M3 Studio Laptop',
    category: 'Electronics',
    brand: 'Aether Tech',
    price: 1299.99,
    originalPrice: 1599.99,
    discount: 18,
    rating: 4.9,
    reviewCount: 328,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Designed for creator workflows, the UltraBook Pro 15 packs a liquid retina XDR display, 18-hour battery endurance, and active cooling for high-performance video editing and 3D rendering.',
    specifications: {
      Processor: '12-Core M3 Ultra Chip',
      RAM: '32GB Unified Memory',
      Storage: '1TB NVMe Gen4 SSD',
      Display: '15.6-inch Mini-LED 120Hz',
      Weight: '1.45 kg'
    },
    stock: 24,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['laptop', 'computer', 'macbook', 'workstation', 'ultrabook']
  },
  {
    id: 'prod-102',
    name: 'SonicWave ANC Wireless Headphones',
    category: 'Electronics',
    brand: 'Acoustic Sound',
    price: 199.99,
    originalPrice: 279.99,
    discount: 28,
    rating: 4.8,
    reviewCount: 512,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Immerse yourself in pure studio quality audio. The SonicWave feature active noise cancellation technology, custom 40mm beryllium drivers, transparency audio pass-through, and 40-hour wireless playtime.',
    specifications: {
      Connectivity: 'Bluetooth 5.3 + 3.5mm Aux',
      BatteryLife: '40 Hours (ANC On)',
      Charging: 'USB-C Fast Charging (10m = 5h)',
      Drivers: '40mm Neodymium',
      Weight: '250g'
    },
    stock: 45,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: true,
    tags: ['headphones', 'audio', 'wireless', 'bluetooth', 'anc']
  },
  {
    id: 'prod-103',
    name: 'FitPulse Smartwatch Series 7',
    category: 'Electronics',
    brand: 'Pulse Gear',
    price: 149.50,
    originalPrice: 199.00,
    discount: 25,
    rating: 4.6,
    reviewCount: 189,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Track your workouts, heart rate, SpO2 levels, ECG, and sleep cycles with precision. Features an always-on OLED touch display with 50m water resistance.',
    specifications: {
      Display: '1.9-inch AMOLED Curved Glass',
      Sensors: 'Optical Heart Rate, SpO2, Accelerometer',
      Battery: ' Up to 7 Days',
      WaterResistance: '5 ATM (50 meters)',
      OS: 'PulseOS 4.0'
    },
    stock: 60,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: true,
    tags: ['smartwatch', 'fitness', 'wearable', 'health', 'apple watch']
  },
  {
    id: 'prod-104',
    name: 'VividView 55" 4K OLED Smart TV',
    category: 'Electronics',
    brand: 'VividVision',
    price: 999.00,
    originalPrice: 1399.00,
    discount: 28,
    rating: 4.7,
    reviewCount: 145,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Experience deep blacks and vivid colors with infinite contrast OLED technology. Packed with Dolby Atmos sound, 120Hz refresh rate for gaming, and hands-free voice assistant.',
    specifications: {
      Resolution: '4K Ultra HD (3840 x 2160)',
      RefreshRate: '120Hz Variable Refresh Rate',
      HDR: 'Dolby Vision IQ, HDR10+',
      SmartOS: 'VividOS with Netflix, Prime, YouTube',
      HDMI: '4x HDMI 2.1'
    },
    stock: 12,
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: false,
    tags: ['tv', 'television', 'oled', '4k', 'smart tv']
  },
  {
    id: 'prod-105',
    name: 'Lumina Mirrorless Camera 24MP Kit',
    category: 'Electronics',
    brand: 'Lumina Optix',
    price: 749.99,
    originalPrice: 899.99,
    discount: 16,
    rating: 4.9,
    reviewCount: 98,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Capture cinema-grade 4K 60fps video and crisp 24.2 megapixel still photos with lightning fast eye-autofocus and 5-axis in-body image stabilization.',
    specifications: {
      Sensor: '24.2MP Full-Frame CMOS',
      Video: '4K at 60fps 10-Bit',
      Autofocus: '693 Phase-Detection Points',
      IncludedLens: '24-70mm f/4.0 Zoom Lens',
      Storage: 'Dual SD/CFexpress Card Slots'
    },
    stock: 18,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    tags: ['camera', 'mirrorless', 'photography', '4k video', 'dslr']
  },

  // FASHION (6 - 10)
  {
    id: 'prod-106',
    name: 'Vintage Denim Trucker Jacket',
    category: 'Fashion',
    brand: 'Urban Thread Co.',
    price: 79.99,
    originalPrice: 119.99,
    discount: 33,
    rating: 4.7,
    reviewCount: 210,
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Classic American heritage trucker jacket crafted from 100% heavyweight cotton denim. Pre-washed for a comfortable broken-in feel with custom branded brass button hardware.',
    specifications: {
      Material: '100% Organic Cotton Denim',
      Fit: 'Regular Fit',
      Closure: 'Front Button Placket',
      Care: 'Machine Wash Cold',
      Color: 'Washed Indigo'
    },
    stock: 35,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['jacket', 'denim', 'coat', 'mens fashion', 'vintage']
  },
  {
    id: 'prod-107',
    name: 'Italian Linen Casual Button-Down Shirt',
    category: 'Fashion',
    brand: 'Sartorial Milano',
    price: 49.99,
    originalPrice: 69.99,
    discount: 28,
    rating: 4.5,
    reviewCount: 164,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Breathable lightweight Italian flax linen shirt ideal for summer getaways and warm weather layering. Styled with a resort collar and mother-of-pearl buttons.',
    specifications: {
      Material: '100% Pure Italian Linen',
      Sleeve: 'Long Sleeve with Convertible Cuffs',
      Pattern: 'Solid Sand Beige',
      Care: 'Hand Wash or Dry Clean'
    },
    stock: 50,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    tags: ['shirt', 'linen', 'summer', 'casual', 'mens shirt']
  },
  {
    id: 'prod-108',
    name: 'Silk Floral Print Wrap Evening Dress',
    category: 'Fashion',
    brand: 'Aura Atelier',
    price: 119.00,
    originalPrice: 159.00,
    discount: 25,
    rating: 4.9,
    reviewCount: 88,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Elegant wrap-style maxi dress crafted from luxurious mulberry silk blend. Features a flattering V-neckline, cascading ruffle hemline, and custom hand-drawn botanical print.',
    specifications: {
      Fabric: '70% Silk, 30% Rayon',
      Length: 'Maxi Length',
      Sleeve: 'Flutter Sleeve',
      Occasion: 'Cocktail / Evening / Wedding Guest'
    },
    stock: 22,
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: true,
    tags: ['dress', 'women fashion', 'silk', 'wrap dress', 'floral']
  },
  {
    id: 'prod-109',
    name: 'Essential Oversized Heavyweight Hoodie',
    category: 'Fashion',
    brand: 'Urban Thread Co.',
    price: 54.99,
    originalPrice: 74.99,
    discount: 26,
    rating: 4.8,
    reviewCount: 420,
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Constructed from ultra-soft 450gsm french terry cotton, offering the ultimate relaxed oversized silhouette with double-layer hood and kangaroo pocket.',
    specifications: {
      Material: '80% Cotton, 20% Polyester',
      Weight: '450 GSM Heavyweight',
      Color: 'Slate Charcoal',
      Unisex: 'Yes'
    },
    stock: 80,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['hoodie', 'sweatshirt', 'streetwear', 'fleece', 'casual']
  },
  {
    id: 'prod-110',
    name: 'Waterproof Summit Down Winter Parka',
    category: 'Fashion',
    brand: 'Summit Element',
    price: 189.99,
    originalPrice: 249.99,
    discount: 24,
    rating: 4.7,
    reviewCount: 76,
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Engineered for extreme sub-zero weather conditions. Packed with 700 fill-power ethically sourced down insulation, windproof shell, and faux-fur lined removable hood.',
    specifications: {
      Insulation: '700 Fill Power Goose Down',
      Shell: 'Gore-Tex 2-Layer Waterproof',
      Pockets: '6 External Thermal Pockets',
      TempRating: 'Tested down to -20°C'
    },
    stock: 15,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    tags: ['parka', 'winter jacket', 'coat', 'down jacket', 'waterproof']
  },

  // SHOES (11 - 14)
  {
    id: 'prod-111',
    name: 'Air Runner Pro Cushion Sneakers',
    category: 'Shoes',
    brand: 'Velocity Kicks',
    price: 119.99,
    originalPrice: 159.99,
    discount: 25,
    rating: 4.8,
    reviewCount: 390,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Revolutionary high-rebound nitrogen foam sole for ultimate energy return during long distance runs and everyday training. Breathable FlyKnit upper hugs your foot.',
    specifications: {
      Upper: 'Engineered Knit Mesh',
      Sole: 'Nitrogen-Infused Dual-Density Foam',
      Weight: '220g (Men size 9)',
      Closure: 'Lace-Up with Dynamic Flywires'
    },
    stock: 40,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['sneakers', 'running shoes', 'athletics', 'nike', 'shoes']
  },
  {
    id: 'prod-112',
    name: 'Handcrafted Italian Leather Oxford Shoes',
    category: 'Shoes',
    brand: 'Sartorial Milano',
    price: 169.00,
    originalPrice: 229.00,
    discount: 26,
    rating: 4.9,
    reviewCount: 112,
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Goodyear welted formal oxford shoes made from full-grain Italian calfskin leather. Hand-burnished finish with cushioned leather insoles.',
    specifications: {
      Leather: 'Full-Grain Italian Calfskin',
      Construction: 'Goodyear Welted',
      Sole: 'Stack Leather Sole with Rubber Heel Tap',
      Color: 'Mahogany Brown'
    },
    stock: 20,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['oxford', 'leather shoes', 'formal', 'dress shoes', 'shoes']
  },
  {
    id: 'prod-113',
    name: 'Trail Trekker Waterproof Hiking Boots',
    category: 'Shoes',
    brand: 'Summit Element',
    price: 139.50,
    originalPrice: 179.50,
    discount: 22,
    rating: 4.6,
    reviewCount: 95,
    image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Dominate rugged mountain trails with Vibram high-grip outsoles, reinforced TPU toe bumpers, and a breathable HydroShield waterproof inner membrane.',
    specifications: {
      Upper: 'Waterproof Suede & Cordura Mesh',
      Outsole: 'Vibram Megagrip Rubber',
      AnkleSupport: 'Padded Ergonomic Collar',
      Insole: 'Ortholite Memory Foam'
    },
    stock: 28,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    tags: ['boots', 'hiking', 'outdoor', 'waterproof', 'shoes']
  },
  {
    id: 'prod-114',
    name: 'Classic Penny Leather Slip-On Loafers',
    category: 'Shoes',
    brand: 'Sartorial Milano',
    price: 89.99,
    originalPrice: 119.99,
    discount: 25,
    rating: 4.5,
    reviewCount: 140,
    image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Versatile smart-casual loafers crafted with soft supple leather lining, traditional penny slot strap, and flexible anti-slip outsole.',
    specifications: {
      Material: 'Genuine Nappa Leather',
      Style: 'Penny Loafer',
      Insole: 'Arch Support Cushioned Bed',
      Color: 'Classic Black'
    },
    stock: 32,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    tags: ['loafers', 'casual shoes', 'slip-on', 'leather', 'shoes']
  },

  // ACCESSORIES (15 - 18)
  {
    id: 'prod-115',
    name: 'AeroPolarized Aviator Sunglasses',
    category: 'Accessories',
    brand: 'Solstice Eyewear',
    price: 69.99,
    originalPrice: 99.99,
    discount: 30,
    rating: 4.8,
    reviewCount: 275,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Ultra-lightweight titanium frame aviator sunglasses featuring HD polarized UV400 anti-glare lenses. Includes leather case and micro-fiber cleaning cloth.',
    specifications: {
      Frame: 'Ultra-Lightweight Titanium Alloy',
      Lens: 'Triacetate Cellulose TAC Polarized',
      UVProtection: '100% UV400 Protection',
      LensColor: 'Smoke Gradient'
    },
    stock: 55,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['sunglasses', 'aviator', 'eyewear', 'polarized', 'fashion']
  },
  {
    id: 'prod-116',
    name: 'Minimalist RFID Leather Bifold Wallet',
    category: 'Accessories',
    brand: 'Vault Leather',
    price: 34.99,
    originalPrice: 49.99,
    discount: 30,
    rating: 4.9,
    reviewCount: 310,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Slimline leather bifold with built-in military-grade RFID blocking technology to protect your credit cards against unauthorized wireless scanning.',
    specifications: {
      Capacity: '8 Card Slots + Full Cash Compartment',
      Material: 'Top-Grain Crazy Horse Leather',
      Security: '13.56 MHz RFID Blocking Layer',
      Dimensions: '4.2 x 3.1 x 0.4 inches'
    },
    stock: 90,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['wallet', 'rfid', 'leather', 'accessories', 'bifold']
  },
  {
    id: 'prod-117',
    name: 'Chronograph Titanium Men Watch',
    category: 'Accessories',
    brand: 'Kronos Time',
    price: 249.00,
    originalPrice: 329.00,
    discount: 24,
    rating: 4.8,
    reviewCount: 168,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Precision Japanese quartz movement housed inside a scratch-resistant sapphire crystal glass titanium case. 100-meter water resistance with glowing luminous hands.',
    specifications: {
      Movement: 'Japanese Quartz Chronograph',
      Glass: 'Synthetic Sapphire Crystal',
      CaseSize: '42mm Diameter',
      WaterResistance: '10 ATM (100 Meters)'
    },
    stock: 18,
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: true,
    tags: ['watch', 'chronograph', 'titanium', 'luxury', 'timepiece']
  },
  {
    id: 'prod-118',
    name: 'Canvas & Leather Weekend Travel Duffel Bag',
    category: 'Accessories',
    brand: 'Nomad Goods',
    price: 84.50,
    originalPrice: 114.50,
    discount: 26,
    rating: 4.7,
    reviewCount: 132,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Spacious 45L duffel bag constructed from heavy wax-treated cotton canvas and full-grain leather accents. Features separate shoe compartment and padded shoulder strap.',
    specifications: {
      Capacity: '45 Liters',
      Dimensions: '21 x 11 x 10 inches',
      LaptopSleeve: 'Holds up to 15.6" Laptop',
      Waterproofing: 'Waxed Water-Resistant Coating'
    },
    stock: 25,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    tags: ['duffel bag', 'travel', 'luggage', 'canvas', 'weekend bag']
  },

  // HOME & KITCHEN (19 - 22)
  {
    id: 'prod-119',
    name: 'Barista Pro Automatic Espresso Machine',
    category: 'Home & Kitchen',
    brand: 'AromaCraft',
    price: 449.99,
    originalPrice: 599.99,
    discount: 25,
    rating: 4.9,
    reviewCount: 240,
    image: 'https://images.unsplash.com/photo-1517668808822-9eaa03afd2af?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1517668808822-9eaa03afd2af?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Craft coffee-shop quality lattes and espressos at home. Features 19-bar Italian pressure pump, integrated conical burr grinder, precise PID temperature control, and steam wand.',
    specifications: {
      PumpPressure: '19 Bar High-Pressure System',
      BeanHopper: '250g Airtight Hopper',
      WaterTank: '2.0 Liter Removable Reservoir',
      HeatingSystem: 'Thermo-Coil Fast Heating'
    },
    stock: 14,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['coffee maker', 'espresso machine', 'kitchen', 'barista', 'appliance']
  },
  {
    id: 'prod-120',
    name: '12-Piece Ceramic Non-Stick Cookware Set',
    category: 'Home & Kitchen',
    brand: 'ChefLine',
    price: 159.99,
    originalPrice: 219.99,
    discount: 27,
    rating: 4.8,
    reviewCount: 185,
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Non-toxic, PTFE & PFOA free granite ceramic cookware set. Distributes heat evenly on induction, gas, electric, and ceramic stovetops up to 500°F oven safety.',
    specifications: {
      Coating: 'Mineral-Infused Ceramic Non-Stick',
      Includes: '2 Frying Pans, 2 Saucepans, 1 Stock Pot, 3 Lids, Utensils',
      StovetopCompat: 'All Stovetops + Induction',
      DishwasherSafe: 'Yes'
    },
    stock: 30,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    tags: ['cookware', 'pots and pans', 'kitchen', 'ceramic', 'cooking']
  },
  {
    id: 'prod-121',
    name: 'Ergonomic Mesh High-Back Executive Chair',
    category: 'Home & Kitchen',
    brand: 'ErgoDesign',
    price: 219.00,
    originalPrice: 299.00,
    discount: 26,
    rating: 4.7,
    reviewCount: 290,
    image: 'https://images.unsplash.com/photo-1580481072645-022f9a6d8310?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1580481072645-022f9a6d8310?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Engineered for 8+ hour workday comfort with dynamic adjustable lumbar support, 3D armrests, breathable back mesh, and smooth-rolling silent casters.',
    specifications: {
      WeightCapacity: '300 lbs (136 kg)',
      Recline: '90° to 135° Synchro-Tilt',
      Base: 'Heavy-Duty Aluminum Alloy Base',
      Certifications: 'BIFMA Tested'
    },
    stock: 22,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['office chair', 'ergonomic', 'chair', 'furniture', 'home office']
  },
  {
    id: 'prod-122',
    name: 'Smart LiDAR Robot Vacuum Cleaner & Mop',
    category: 'Home & Kitchen',
    brand: 'RoboClean',
    price: 329.99,
    originalPrice: 429.99,
    discount: 23,
    rating: 4.6,
    reviewCount: 154,
    image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Precision 360° laser mapping scans your home room-by-room to avoid obstacles. Delivers 4000Pa suction power with auto-docking and sonic wet mopping.',
    specifications: {
      SuctionPower: '4000 Pa HyperSuction',
      Navigation: 'LiDAR Laser SLAM Mapping',
      Runtime: '150 Minutes Battery',
      AppControl: 'iOS & Android App + Alexa/Google'
    },
    stock: 19,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    tags: ['robot vacuum', 'cleaning', 'smart home', 'vacuum', 'appliance']
  },

  // BEAUTY (23 - 26)
  {
    id: 'prod-123',
    name: 'Hyaluronic Acid Multi-Peptide Glow Serum',
    category: 'Beauty',
    brand: 'Lumiere Botanicals',
    price: 38.00,
    originalPrice: 50.00,
    discount: 24,
    rating: 4.9,
    reviewCount: 480,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Dermatologist tested anti-aging formula infused with 5 molecular weights of hyaluronic acid, niacinamide, and copper peptides for deep hydration and radiance.',
    specifications: {
      Volume: '50 ml / 1.7 fl. oz',
      SkinType: 'All Skin Types (Sensitive Safe)',
      CrueltyFree: '100% Vegan & Cruelty-Free',
      ParabenFree: 'Yes'
    },
    stock: 100,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['serum', 'skincare', 'face glow', 'hyaluronic acid', 'beauty']
  },
  {
    id: 'prod-124',
    name: 'Velvet Matte Long-Wear Lipstick Trio',
    category: 'Beauty',
    brand: 'Aura Atelier Beauty',
    price: 29.99,
    originalPrice: 42.00,
    discount: 28,
    rating: 4.7,
    reviewCount: 220,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Set of 3 iconic non-drying matte lipstick shades (Nude Rose, Classic Crimson, Berry Wine). Formulated with vitamin E and jojoba oil for 12-hour comfortable wear.',
    specifications: {
      Finish: 'Velvet Soft Matte',
      Shades: '3 Full-Size Tubes',
      TransferProof: 'Smudge-Resistant 12-Hour',
      Weight: '3.5g x 3'
    },
    stock: 75,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    tags: ['lipstick', 'makeup', 'beauty', 'cosmetics', 'matte']
  },
  {
    id: 'prod-125',
    name: 'Organic Argan & Rosemary Hair Elixir Oil',
    category: 'Beauty',
    brand: 'Lumiere Botanicals',
    price: 24.50,
    originalPrice: 32.00,
    discount: 23,
    rating: 4.8,
    reviewCount: 195,
    image: 'https://images.unsplash.com/photo-1608248597261-83325803d466?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1608248597261-83325803d466?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Cold-pressed 100% pure Moroccan argan oil blended with scalp-stimulating organic rosemary oil to repair split ends, eliminate frizz, and promote healthy growth.',
    specifications: {
      Volume: '100 ml / 3.4 fl. oz',
      Ingredients: 'Argania Spinosa Kernel Oil, Rosmarinus Officinalis',
      Scent: 'Herbal Rosemary Citrus',
      Use: 'Pre-Wash Scalp & Post-Styling'
    },
    stock: 65,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['hair oil', 'argan oil', 'haircare', 'rosemary oil', 'beauty']
  },
  {
    id: 'prod-126',
    name: 'Rosewater Hydrating Face Mist Spray',
    category: 'Beauty',
    brand: 'Pure Flora',
    price: 18.99,
    originalPrice: 25.00,
    discount: 24,
    rating: 4.6,
    reviewCount: 110,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Refresh and soothe tired skin instantly with 100% steam-distilled Damask rose floral water. Perfect as a makeup setting spray or mid-day moisture pick-me-up.',
    specifications: {
      Volume: '150 ml / 5.1 fl. oz',
      AlcoholFree: 'Yes',
      Packaging: 'Recyclable Glass Bottle spray',
      Origin: 'Bulgarian Rose Valley'
    },
    stock: 80,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    tags: ['face mist', 'rosewater', 'toner', 'skincare', 'beauty']
  },

  // SPORTS (27 - 30)
  {
    id: 'prod-127',
    name: 'ProGrip Non-Slip Eco Yoga Mat 6mm',
    category: 'Sports',
    brand: 'ZenFlow Gear',
    price: 45.00,
    originalPrice: 65.00,
    discount: 30,
    rating: 4.9,
    reviewCount: 340,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Dual-sided non-slip natural tree rubber yoga mat with 6mm high-density cushioning to protect joints. Comes with alignment system guidelines and shoulder carrying strap.',
    specifications: {
      Thickness: '6 mm Cushion',
      Dimensions: '72 x 24 inches',
      Material: 'Eco-Friendly Biodegradable TPE Rubber',
      Weight: '1.8 kg'
    },
    stock: 50,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['yoga mat', 'fitness', 'pilates', 'exercise', 'sports']
  },
  {
    id: 'prod-128',
    name: 'SelectTech Adjustable Dumbbell Set 50lbs',
    category: 'Sports',
    brand: 'IronForge',
    price: 299.99,
    originalPrice: 399.99,
    discount: 25,
    rating: 4.8,
    reviewCount: 260,
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Replaces 15 sets of weights in one compact design. Turn the selection dial to automatically adjust resistance from 5 lbs up to 52.5 lbs per dumbbell.',
    specifications: {
      WeightRange: '5 to 52.5 lbs (2.2 to 23.8 kg) each',
      Adjustments: '15 Weight Settings',
      Plates: 'Thermoplastic-Coated Steel Plates',
      Warranty: '2-Year Frame Warranty'
    },
    stock: 16,
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: true,
    tags: ['dumbbells', 'weights', 'home gym', 'fitness', 'sports']
  },
  {
    id: 'prod-129',
    name: 'Expedition 50L Waterproof Trekking Backpack',
    category: 'Sports',
    brand: 'Summit Element',
    price: 99.99,
    originalPrice: 139.99,
    discount: 28,
    rating: 4.7,
    reviewCount: 175,
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Designed for multi-day backcountry adventures with internal aluminum frame support, hydration bladder sleeve, rain cover, and breathable ergonomic hip belt.',
    specifications: {
      Volume: '50 Liters + 5L Expansion',
      Material: '600D Tear-Resistant Ripstop Nylon',
      Weight: '1.35 kg',
      RainCover: 'High-Vis Integrated Cover Included'
    },
    stock: 25,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    tags: ['backpack', 'hiking', 'camping', 'outdoor', 'sports']
  },
  {
    id: 'prod-130',
    name: 'Pro Carbon Fiber Badminton Racket Twin Pack',
    category: 'Sports',
    brand: 'SmashPro',
    price: 59.50,
    originalPrice: 79.50,
    discount: 25,
    rating: 4.6,
    reviewCount: 90,
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Ultra-lightweight high-modulus carbon graphite frame for fast swing speed and explosive smash power. Includes 2 pre-strung rackets, 3 nylon shuttlecocks, and carrying case.',
    specifications: {
      Weight: '4U (80-84g)',
      Tension: '28 lbs High Tension Stringing',
      Balance: 'Head Heavy Smash Bias',
      Includes: '2 Rackets + 3 Shuttlecocks + Bag'
    },
    stock: 35,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    tags: ['badminton', 'racket', 'sports', 'tennis', 'games']
  }
];
