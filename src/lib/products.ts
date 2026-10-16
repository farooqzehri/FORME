export type Category = "Living" | "Lighting" | "Tableware" | "Textiles";

export type Product = {
  id: string;
  name: string;
  category: Category;
  price: number;
  color: string;
  image: string;
  images: string[];
  description: string;
  details: string[];
  featured?: boolean;
  bestseller?: boolean;
};
// products

export const products: Product[] = [
  {
    id: "arc-table-lamp",
    name: "Arc Table Lamp",
    category: "Lighting",
    price: 189,
    color: "Warm white / brushed brass",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "A quiet statement piece. Arc pairs a softly diffused shade with a considered, sculptural silhouette for warm evenings and slow mornings.",
    details: ["Powder-coated steel and brushed brass", "E27 bulb, 40W max", "Designed for indoor use"],
    featured: true,
    bestseller: true,
  },
  {
    id: "forma-vase",
    name: "Forma Stoneware Vase",
    category: "Living",
    price: 78,
    color: "Chalk",
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=85",
    ],
    description:
      "Made for branches, fresh stems, or simply the beauty of its own form. Each hand-finished vessel carries subtle variations in its matte glaze.",
    details: ["Hand-finished stoneware", "Approx. 24 cm high", "Watertight glazed interior"],
    featured: true,
    bestseller: true,
  },
  {
    id: "linen-throw",
    name: "Everyday Linen Throw",
    category: "Textiles",
    price: 145,
    color: "Natural flax",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85",
    ],
    description:
      "Soft, breathable linen with a relaxed drape. Woven from European flax and finished with a gentle wash for a lived-in feel from day one.",
    details: ["100% European linen", "130 × 180 cm", "Machine wash at 30°C"],
    featured: true,
  },
  {
    id: "everyday-cup-set",
    name: "Everyday Cup Set",
    category: "Tableware",
    price: 54,
    color: "Sand, set of two",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1493857671505-72967e2e2760?auto=format&fit=crop&w=1000&q=85",
    ],
    description:
      "A pair of tactile stoneware cups shaped for the everyday ritual. Their softly rounded profile feels just right in the hand.",
    details: ["Set of two stoneware cups", "300 ml capacity", "Dishwasher and microwave safe"],
    featured: true,
    bestseller: true,
  },
  {
    id: "still-candle-holder",
    name: "Still Candle Holder",
    category: "Living",
    price: 42,
    color: "Travertine",
    image:
      "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=85",
    ],
    description:
      "Carved from natural stone, Still brings a grounded note to the table. Each piece has its own quiet pattern and character.",
    details: ["Solid natural travertine", "Fits standard dinner candles", "Natural stone variation is expected"],
    bestseller: true,
  },
  {
    id: "halo-pendant",
    name: "Halo Pendant",
    category: "Lighting",
    price: 260,
    color: "Aged brass",
    image:
      "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=85",
    ],
    description:
      "A generous pool of warm light in a slim, architectural frame. Halo makes a natural centrepiece above a dining table or kitchen island.",
    details: ["Brushed aged-brass finish", "Adjustable 2 m fabric cable", "Professional installation recommended"],
  },
  {
    id: "ripple-serving-bowl",
    name: "Ripple Serving Bowl",
    category: "Tableware",
    price: 68,
    color: "Oat",
    image:
      "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=85",
    ],
    description:
      "An easy, generous bowl with a gently rippled rim. Made to move from slow weekend breakfasts to dinner with friends.",
    details: ["Hand-thrown stoneware", "24 cm diameter", "Dishwasher safe"],
  },
  {
    id: "soft-weave-cushion",
    name: "Soft Weave Cushion",
    category: "Textiles",
    price: 64,
    color: "Moss / natural",
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85",
    ],
    description:
      "A considered layer for the sofa or bed. Soft natural fibres and a subtle woven pattern bring texture without asking for attention.",
    details: ["Cotton and linen blend cover", "50 × 50 cm, insert included", "Removable cover, spot clean"],
    bestseller: true,
  },
];
// categories 
export const categories: { name: Category; image: string; note: string }[] = [
  {
    name: "Living",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1100&q=85",
    note: "Objects with presence",
  },
  {
    name: "Lighting",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1100&q=85",
    note: "A softer kind of glow",
  },
  {
    name: "Tableware",
    image:
      "https://images.unsplash.com/photo-1493857671505-72967e2e2760?auto=format&fit=crop&w=1100&q=85",
    note: "For gathering well",
  }, // table wear accomplished
  {
    name: "Textiles",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85",
    note: "Comfort, considered",
  },
];
// format price
export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}
// product page comleted
// new graphic added