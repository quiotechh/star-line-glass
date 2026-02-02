export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductData {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  specifications: ProductSpec[];
  applications: string[];
  galleryImages: string[];
  benefits: string[];
}

export const productsData: Record<string, ProductData> = {
  "annealed-glass": {
    slug: "annealed-glass",
    name: "Annealed Glass",
    tagline:
      "The foundation of all glass products - versatile, clear, and cost-effective",
    description:
      "Annealed glass is the basic flat glass product that is the first result of the float glass process. It is cooled slowly under controlled conditions to relieve internal stresses, making it easier to cut and work with. This standard glass serves as the base material for most glass products and is ideal for applications where safety glass is not required.",
    heroImage: "/products/annealed-glass.jpg",
    features: [
      {
        title: "Crystal Clear Clarity",
        description:
          "Exceptional optical clarity with minimal distortion for perfect visibility and light transmission.",
        icon: "sparkles",
      },
      {
        title: "Easy Fabrication",
        description:
          "Can be easily cut, drilled, and edged to meet specific project requirements.",
        icon: "settings",
      },
      {
        title: "Cost Effective",
        description:
          "Most economical glass option, perfect for large-scale projects and budget-conscious applications.",
        icon: "wallet",
      },
      {
        title: "Versatile Base",
        description:
          "Serves as the foundation for creating toughened, laminated, and other processed glass types.",
        icon: "layers",
      },
    ],
    specifications: [
      { label: "Thickness Range", value: "2mm to 19mm" },
      { label: "Maximum Size", value: "3210mm x 6000mm" },
      { label: "Light Transmission", value: "Up to 90%" },
      { label: "Colors Available", value: "Clear, Tinted (Bronze, Grey, Green, Blue)" },
      { label: "Edge Options", value: "Flat, Beveled, Polished, Seamed" },
      { label: "Standards", value: "IS 14900, EN 572" },
    ],
    applications: [
      "Windows and facades",
      "Interior partitions",
      "Furniture and shelving",
      "Picture frames and mirrors",
      "Greenhouse glazing",
      "Display cases",
    ],
    galleryImages: [
      "/images/products/annealed-1.jpg",
      "/images/products/annealed-2.jpg",
      "/images/products/annealed-3.jpg",
    ],
    benefits: [
      "High optical quality",
      "Smooth and flat surface",
      "Excellent base for coatings",
      "Wide range of thicknesses",
      "Readily available",
    ],
  },

  "toughened-glass": {
    slug: "toughened-glass",
    name: "Toughened Glass",
    tagline:
      "5x stronger than regular glass - engineered for safety and durability",
    description:
      "Toughened glass, also known as tempered glass, undergoes a specialized heat treatment process that makes it approximately 4-5 times stronger than standard annealed glass of the same thickness. When broken, it shatters into small, blunt pieces that are less likely to cause injury, making it a safety glass by definition.",
    heroImage: "/products/toughened-glass.jpg",
    features: [
      {
        title: "Superior Strength",
        description:
          "4-5 times stronger than annealed glass, capable of withstanding significant impact and pressure.",
        icon: "shield",
      },
      {
        title: "Safety First",
        description:
          "Breaks into small, granular pieces instead of sharp shards, minimizing injury risk.",
        icon: "heart",
      },
      {
        title: "Thermal Resistance",
        description:
          "Can withstand temperature differentials up to 250°C without breaking.",
        icon: "thermometer",
      },
      {
        title: "Scratch Resistant",
        description:
          "Hardened surface provides excellent resistance to scratches and abrasions.",
        icon: "shield-check",
      },
    ],
    specifications: [
      { label: "Thickness Range", value: "4mm to 19mm" },
      { label: "Maximum Size", value: "2440mm x 4880mm" },
      { label: "Strength", value: "120-200 N/mm² (4-5x annealed)" },
      { label: "Heat Resistance", value: "Up to 250°C differential" },
      { label: "Break Pattern", value: "Small granular fragments" },
      { label: "Standards", value: "IS 2553, EN 12150" },
    ],
    applications: [
      "Shower enclosures and bathroom partitions",
      "Glass doors and entrances",
      "Balustrades and railings",
      "Automotive side and rear windows",
      "Storefronts and commercial facades",
      "Kitchen backsplashes and countertops",
    ],
    galleryImages: [
      "/images/products/toughened-1.jpg",
      "/images/products/toughened-2.jpg",
      "/images/products/toughened-3.jpg",
    ],
    benefits: [
      "Enhanced safety properties",
      "High mechanical strength",
      "Thermal shock resistance",
      "Cannot be cut after tempering",
      "Ideal for high-traffic areas",
    ],
  },

  "fluted-glass": {
    slug: "fluted-glass",
    name: "Fluted Glass",
    tagline:
      "Elegant ribbed texture for privacy with style - where aesthetics meet functionality",
    description:
      "Fluted glass features distinctive vertical grooves that create a beautiful ribbed pattern, offering an elegant solution for privacy while still allowing natural light to flow through. This decorative glass adds depth, texture, and visual interest to any space, making it a favorite choice among architects and interior designers for both modern and classic interiors.",
    heroImage: "/products/fluted-glass.jpg",
    features: [
      {
        title: "Elegant Aesthetics",
        description:
          "Sophisticated ribbed texture adds visual depth and architectural interest to any space.",
        icon: "palette",
      },
      {
        title: "Light Diffusion",
        description:
          "Softly diffuses light while maintaining brightness, creating a warm ambiance.",
        icon: "sun",
      },
      {
        title: "Privacy Solution",
        description:
          "Obscures direct view while allowing light transmission for functional privacy.",
        icon: "eye-off",
      },
      {
        title: "Design Versatility",
        description:
          "Available in multiple patterns, groove widths, and finishes to match any design vision.",
        icon: "brush",
      },
    ],
    specifications: [
      { label: "Thickness Range", value: "4mm to 12mm" },
      { label: "Maximum Size", value: "2140mm x 3300mm" },
      { label: "Pattern Options", value: "Vertical or Horizontal Flutes" },
      { label: "Groove Width", value: "12mm, 19mm, 25mm" },
      { label: "Finishes", value: "Clear, Frosted, Tinted, Reflective" },
      { label: "Processing", value: "Can be Toughened, Laminated, or Insulated" },
    ],
    applications: [
      "Interior partitions and office cabins",
      "Shower enclosures and bathroom doors",
      "Wall panels and feature walls",
      "Storefronts, display counters, and cabinets",
      "Hotel lobbies, restaurants, and luxury spaces",
      "Facade elements with textured finishes",
    ],
    galleryImages: [
      "/images/products/fluted-1.jpg",
      "/images/products/fluted-2.jpg",
      "/images/products/fluted-3.jpg",
    ],
    benefits: [
      "Timeless decorative appeal",
      "Maintains natural light flow",
      "Easy to clean and maintain",
      "Pairs well with any décor style",
      "Creates visual separation without isolation",
    ],
  },

  "insulated-glasses": {
    slug: "insulated-glasses",
    name: "Insulated Glass Units",
    tagline:
      "Double the protection, triple the efficiency - superior thermal and acoustic insulation",
    description:
      "Insulated Glass Units (IGUs), also known as double glazing, consist of two or more glass panes separated by a spacer and sealed to create an insulating air or gas-filled cavity. This construction dramatically improves thermal insulation and sound reduction, making buildings more energy-efficient and comfortable while reducing heating and cooling costs.",
    heroImage: "/products/insulated-glass.jpg",
    features: [
      {
        title: "Thermal Efficiency",
        description:
          "Significantly reduces heat transfer, keeping interiors cool in summer and warm in winter.",
        icon: "thermometer",
      },
      {
        title: "Noise Reduction",
        description:
          "Acoustic insulation reduces external noise by up to 35dB for peaceful interiors.",
        icon: "volume-x",
      },
      {
        title: "Energy Savings",
        description:
          "Reduces HVAC costs by up to 30% through superior insulation performance.",
        icon: "zap",
      },
      {
        title: "Condensation Control",
        description:
          "Minimizes condensation on interior glass surfaces in varying weather conditions.",
        icon: "droplets",
      },
    ],
    specifications: [
      { label: "Glass Thickness", value: "4mm to 12mm per pane" },
      { label: "Air Gap", value: "6mm, 9mm, 12mm, 16mm" },
      { label: "Total Unit Thickness", value: "14mm to 40mm" },
      { label: "Gas Fill Options", value: "Air, Argon, Krypton" },
      { label: "U-Value", value: "As low as 1.1 W/m²K" },
      { label: "Standards", value: "IS 14402, EN 1279" },
    ],
    applications: [
      "Commercial building facades",
      "Residential windows and doors",
      "Curtain wall systems",
      "Skylights and roof glazing",
      "Cold storage viewing panels",
      "Recording studios and theaters",
    ],
    galleryImages: [
      "/images/products/insulated-1.jpg",
      "/images/products/insulated-2.jpg",
      "/images/products/insulated-3.jpg",
    ],
    benefits: [
      "Reduced energy consumption",
      "Lower carbon footprint",
      "Enhanced indoor comfort",
      "Increased property value",
      "Long-term cost savings",
    ],
  },

  "laminate-safety-glass": {
    slug: "laminate-safety-glass",
    name: "Laminated Safety Glass",
    tagline:
      "When safety is paramount - holds together even when shattered",
    description:
      "Laminated glass is created by bonding two or more glass layers with a tough plastic interlayer (usually PVB - Polyvinyl Butyral) under heat and pressure. This construction ensures that when broken, the glass fragments remain adhered to the interlayer, preventing dangerous shards from scattering. It offers enhanced security, UV protection, and sound insulation.",
    heroImage: "/products/laminated-safety-glass.jpg",
    features: [
      {
        title: "Shatter Resistant",
        description:
          "Glass fragments stay bonded to interlayer when broken, preventing injuries from flying shards.",
        icon: "shield",
      },
      {
        title: "UV Protection",
        description:
          "Blocks up to 99% of harmful UV rays, protecting interiors and occupants from sun damage.",
        icon: "sun",
      },
      {
        title: "Sound Insulation",
        description:
          "PVB interlayer provides excellent acoustic dampening for quieter interiors.",
        icon: "volume-x",
      },
      {
        title: "Security Enhanced",
        description:
          "Difficult to penetrate even when cracked, providing protection against forced entry.",
        icon: "lock",
      },
    ],
    specifications: [
      { label: "Thickness Range", value: "6.38mm to 40mm" },
      { label: "Interlayer Options", value: "PVB, SGP, EVA" },
      { label: "PVB Thickness", value: "0.38mm, 0.76mm, 1.52mm" },
      { label: "Maximum Size", value: "3210mm x 6000mm" },
      { label: "Colors", value: "Clear, Tinted, Colored Interlayers" },
      { label: "Standards", value: "IS 2553 Part 2, EN 14449" },
    ],
    applications: [
      "Skylights, canopies, and overhead glazing",
      "Automotive windshields",
      "Banks, airports, and secure facilities",
      "Hurricane and storm-resistant windows",
      "Balustrades and floor panels",
      "Museums and display cases",
    ],
    galleryImages: [
      "/images/products/laminated-1.jpg",
      "/images/products/laminated-2.jpg",
      "/images/products/laminated-3.jpg",
    ],
    benefits: [
      "Maximum safety performance",
      "Burglar and impact resistant",
      "Protects against UV damage",
      "Maintains visibility when cracked",
      "Can be cut after production",
    ],
  },

  "heat-soaked-glass": {
    slug: "heat-soaked-glass",
    name: "Heat Soaked Glass",
    tagline:
      "Eliminating spontaneous breakage - the gold standard in safety assurance",
    description:
      "Heat Soaked Glass is toughened glass that undergoes an additional heat soaking process to identify and eliminate panels containing nickel sulfide (NiS) inclusions. These microscopic inclusions can cause spontaneous breakage in standard toughened glass. The heat soak test accelerates this potential failure in a controlled environment, ensuring only the most reliable panels reach your project.",
    heroImage: "/products/heat-soaked-glass.jpg",
    features: [
      {
        title: "Reduced Breakage Risk",
        description:
          "Heat soaking reduces spontaneous breakage risk by up to 95%, ensuring long-term reliability.",
        icon: "shield-check",
      },
      {
        title: "Quality Assured",
        description:
          "Each panel is tested to international standards, providing documented quality assurance.",
        icon: "badge-check",
      },
      {
        title: "All Toughened Benefits",
        description:
          "Retains all strength and safety characteristics of standard toughened glass.",
        icon: "shield",
      },
      {
        title: "Peace of Mind",
        description:
          "Ideal for critical applications where unexpected failure is not an option.",
        icon: "heart",
      },
    ],
    specifications: [
      { label: "Thickness Range", value: "4mm to 19mm" },
      { label: "Soak Temperature", value: "290°C ± 10°C" },
      { label: "Soak Duration", value: "Minimum 2 hours at temperature" },
      { label: "Breakage Reduction", value: "Up to 95%" },
      { label: "Maximum Size", value: "2440mm x 4880mm" },
      { label: "Standards", value: "EN 14179-1, IS 16231" },
    ],
    applications: [
      "High-rise building facades",
      "Structural glass installations",
      "Glass floors and staircases",
      "Overhead and sloped glazing",
      "Public buildings and malls",
      "Frameless glass systems",
    ],
    galleryImages: [
      "/images/products/heat-soaked-1.jpg",
      "/images/products/heat-soaked-2.jpg",
      "/images/products/heat-soaked-3.jpg",
    ],
    benefits: [
      "Industry-leading reliability",
      "Documented testing certificate",
      "Suitable for critical applications",
      "Insurance compliance",
      "Premium quality assurance",
    ],
  },

  "fabric-glass": {
    slug: "fabric-glass",
    name: "Fabric Glass",
    tagline:
      "Where artistry meets architecture - elegant fabric-inspired decorative glass",
    description:
      "Fabric glass is an innovative decorative glass that cleverly integrates fabric elements and patterns into glass, creating a unique aesthetic that combines the softness of textiles with the durability of glass. This architectural glass adds warmth, texture, and visual interest to any space while maintaining excellent light transmission and creating a soft, diffused ambiance.",
    heroImage: "/products/fabric-glass.jpg",
    features: [
      {
        title: "Unique Aesthetics",
        description:
          "Combines fabric-inspired textures with glass durability, adding artistic warmth to any space.",
        icon: "palette",
      },
      {
        title: "Soft Light Diffusion",
        description:
          "Scatters light beautifully, avoiding harsh glare while maintaining brightness.",
        icon: "sun",
      },
      {
        title: "Design Flexibility",
        description:
          "Available in various fabric patterns from subtle weaves to bold abstract designs.",
        icon: "brush",
      },
      {
        title: "Durable & Hygienic",
        description:
          "Antibacterial properties and wear-resistant surface for practical everyday use.",
        icon: "shield",
      },
    ],
    specifications: [
      { label: "Thickness Range", value: "6mm to 12mm" },
      { label: "Maximum Size", value: "2440mm x 3660mm" },
      { label: "Light Transmission", value: "60% to 85%" },
      { label: "Pattern Options", value: "Woven, Linen, Mesh, Abstract" },
      { label: "Finishes", value: "Clear, Frosted, Tinted" },
      { label: "Processing", value: "Can be Toughened or Laminated" },
    ],
    applications: [
      "Interior partitions and room dividers",
      "Doors and windows with decorative appeal",
      "Hotel lobbies and luxury interiors",
      "Feature walls and accent panels",
      "Cabinet doors and furniture",
      "Building facades with textile aesthetics",
    ],
    galleryImages: [
      "/images/products/fabric-1.jpg",
      "/images/products/fabric-2.jpg",
      "/images/products/fabric-3.jpg",
    ],
    benefits: [
      "Adds artistic touch to architecture",
      "Soft, warm visual appearance",
      "Easy to clean and maintain",
      "Resists dust and bacteria",
      "Unique alternative to plain glass",
    ],
  },

  "bulletproof-glass": {
    slug: "bulletproof-glass",
    name: "Bulletproof Glass",
    tagline:
      "Ultimate protection against ballistic threats - security without compromise",
    description:
      "Bulletproof glass, also known as ballistic or bullet-resistant glass, is a specialized security glass designed to resist penetration from bullets and high-impact threats. Created by layering multiple materials including glass, polycarbonate, and acrylic, this glass absorbs and disperses projectile energy, providing crucial protection for high-security environments while maintaining visibility.",
    heroImage: "/products/bulletproof-glass.jpg",
    features: [
      {
        title: "Ballistic Protection",
        description:
          "Resists bullets from handguns to high-powered rifles depending on protection level.",
        icon: "shield",
      },
      {
        title: "Multi-Layer Construction",
        description:
          "Layered glass and polycarbonate absorb and disperse bullet energy effectively.",
        icon: "layers",
      },
      {
        title: "Safety Enhancement",
        description:
          "Prevents sharp fragments from breaking off, minimizing injury risk to occupants.",
        icon: "heart",
      },
      {
        title: "Crime Deterrent",
        description:
          "Visible security presence discourages potential attackers and intrusion attempts.",
        icon: "lock",
      },
    ],
    specifications: [
      { label: "Thickness Range", value: "19mm to 75mm" },
      { label: "Protection Levels", value: "UL 752 Level 1-10" },
      { label: "Materials", value: "Glass, Polycarbonate, Acrylic layers" },
      { label: "Maximum Size", value: "2000mm x 3000mm" },
      { label: "Optical Clarity", value: "Clear visibility maintained" },
      { label: "Standards", value: "UL 752, NIJ, EN 1063" },
    ],
    applications: [
      "Banks and financial institutions",
      "Government and embassy buildings",
      "Jewelry stores and high-value retail",
      "Schools and educational facilities",
      "Armored vehicles and VIP transport",
      "Security checkpoints and guard booths",
    ],
    galleryImages: [
      "/images/products/bulletproof-1.jpg",
      "/images/products/bulletproof-2.jpg",
      "/images/products/bulletproof-3.jpg",
    ],
    benefits: [
      "Maximum security protection",
      "Delays forced entry significantly",
      "Decades of reliable performance",
      "Various protection levels available",
      "Peace of mind for high-risk areas",
    ],
  },

  "patterned-glass": {
    slug: "patterned-glass",
    name: "Patterned Glass",
    tagline:
      "Privacy with personality - decorative textures that transform light",
    description:
      "Patterned glass is a decorative glass featuring textures or patterns embossed onto one or both sides, offering privacy while allowing natural light to diffuse beautifully into spaces. Made by feeding molten glass between patterned rollers, this versatile glass comes in countless designs from subtle frosted textures to bold geometric patterns, perfect for both residential and commercial applications.",
    heroImage: "/products/patterned-glass.jpg",
    features: [
      {
        title: "Privacy with Light",
        description:
          "Obscures direct view while allowing natural light to flow through for functional privacy.",
        icon: "eye-off",
      },
      {
        title: "Decorative Appeal",
        description:
          "Wide variety of patterns and textures add visual interest and enhance aesthetics.",
        icon: "sparkles",
      },
      {
        title: "Energy Efficient",
        description:
          "Diffuses sunlight reducing need for artificial lighting while controlling heat.",
        icon: "zap",
      },
      {
        title: "Easy Maintenance",
        description:
          "Textured surface resists fingerprints and smudges, staying cleaner longer.",
        icon: "settings",
      },
    ],
    specifications: [
      { label: "Thickness Range", value: "4mm to 6mm" },
      { label: "Maximum Size", value: "2140mm x 3300mm" },
      { label: "Light Transmission", value: "50% to 90%" },
      { label: "Pattern Types", value: "Frosted, Ribbed, Rain, Karatachi, Mistlite" },
      { label: "Colors", value: "Clear, Bronze, Grey, Green" },
      { label: "Processing", value: "Can be Toughened, Laminated, or Insulated" },
    ],
    applications: [
      "Bathroom windows and shower enclosures",
      "Interior partitions and office dividers",
      "Front doors and entry sidelights",
      "Kitchen cabinets and pantry doors",
      "Conference rooms and meeting spaces",
      "Healthcare facilities and waiting areas",
    ],
    galleryImages: [
      "/images/products/patterned-1.jpg",
      "/images/products/patterned-2.jpg",
      "/images/products/patterned-3.jpg",
    ],
    benefits: [
      "Excellent privacy solution",
      "Countless design options",
      "Durable and hygienic surface",
      "Reduces need for window treatments",
      "Suitable for safety glass processing",
    ],
  },
};

export const getProductBySlug = (slug: string): ProductData | undefined => {
  return productsData[slug];
};

export const getAllProducts = (): ProductData[] => {
  return Object.values(productsData);
};

export const getRelatedProducts = (currentSlug: string): ProductData[] => {
  return Object.values(productsData)
    .filter((product) => product.slug !== currentSlug)
    .slice(0, 3);
};
