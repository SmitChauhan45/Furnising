// Product data
export interface Product {
  id: string;
  name: string;
  category: "sofa" | "chair" | "bed";
  description: string;
  imageUrl: string;
  price?: string;
}

export const products: Product[] = [
  // Sofas
  {
    id: "sofa-1",
    name: "Royal Blue L-Shape",
    category: "sofa",
    description: "Luxurious velvet L-shaped sofa with decorative cushions",
    imageUrl: "/assets/sofa/sofa1.jpg",
    price: "starting from 400₹ per feet",
  },
  {
    id: "sofa-2",
    name: "Modern Grey Set",
    category: "sofa",
    description: "Contemporary grey sofa set with wooden base",
    imageUrl: "/assets/sofa/sofa2.jpg",
    price: "starting from 400₹ per feet",
  },
  {
    id: "sofa-3",
    name: "Forest Green Corner",
    category: "sofa",
    description: "Spacious corner sofa with matching ottoman stools",
    imageUrl: "/assets/sofa/sofa3.jpg",
    price: "starting from 400₹ per feet",
  },
  {
    id: "sofa-4",
    name: "Dusty Rose L-Shape",
    category: "sofa",
    description: "Modern L-shaped sofa in elegant dusty rose",
    imageUrl: "/assets/sofa/sofa4.jpg",
    price: "starting from 400₹ per feet",
  },
  {
    id: "sofa-5",
    name: "Dusty Rose L-Shape",
    category: "sofa",
    description: "Modern L-shaped sofa in elegant dusty rose",
    imageUrl: "/assets/sofa/sofa5.jpg",
    price: "starting from 400₹ per feet",
  },
  {
    id: "sofa-6",
    name: "Dusty Rose L-Shape",
    category: "sofa",
    description: "Modern L-shaped sofa in elegant dusty rose",
    imageUrl: "/assets/sofa/sofa6.jpg",
    price: "starting from 400₹ per feet",
  },
  {
    id: "sofa-7",
    name: "Dusty Rose L-Shape",
    category: "sofa",
    description: "Modern L-shaped sofa in elegant dusty rose",
    imageUrl: "/assets/sofa/sofa7.jpg",
    price: "starting from 400₹ per feet",
  },
  {
    id: "sofa-8",
    name: "Dusty Rose L-Shape",
    category: "sofa",
    description: "Modern L-shaped sofa in elegant dusty rose",
    imageUrl: "/assets/sofa/sofa8.jpg",
    price: "starting from 400₹ per feet",
  },
  {
    id: "sofa-9",
    name: "Dusty Rose L-Shape",
    category: "sofa",
    description: "Modern L-shaped sofa in elegant dusty rose",
    imageUrl: "/assets/sofa/sofa9.jpg",
    price: "starting from 400₹ per feet",
  },
  {
    id: "sofa-10",
    name: "Dusty Rose L-Shape",
    category: "sofa",
    description: "Modern L-shaped sofa in elegant dusty rose",
    imageUrl: "/assets/sofa/sofa10.jpg",
    price: "starting from 400₹ per feet",
  },
  {
    id: "sofa-11",
    name: "Dusty Rose L-Shape",
    category: "sofa",
    description: "Modern L-shaped sofa in elegant dusty rose",
    imageUrl: "/assets/sofa/sofa11.jpg",
    price: "starting from 400₹ per feet",
  },
  {
    id: "sofa-12",
    name: "Dusty Rose L-Shape",
    category: "sofa",
    description: "Modern L-shaped sofa in elegant dusty rose",
    imageUrl: "/assets/sofa/sofa12.jpg",
    price: "starting from 400₹ per feet",
  },

  // Chairs
  {
    id: "chair-1",
    name: "Accent Armchair",
    category: "chair",
    description:
      "Statement piece with plush cushioning and sturdy wooden legs.",
    imageUrl: "/assets/chair/chair1.jpg",
    price: "starting from 200₹ per feet",
  },
  {
    id: "chair-2",
    name: "Ergonomic Lounger",
    category: "chair",
    description:
      "Perfectly balanced comfort and support for everyday relaxation.",
    imageUrl: "/assets/chair/chair2.jpg",
    price: "starting from 200₹ per feet",
  },
  {
    id: "chair-3",
    name: "Dining Chair Set",
    category: "chair",
    description: "Set of 4 elegant dining chairs with comfortable upholstery.",
    imageUrl: "/assets/chair/chair3.jpg",
    price: "starting from 200₹ per feet",
  },
  {
    id: "chair-4",
    name: "Rocking Chair",
    category: "chair",
    description: "Modern take on a classic design, perfect for nurseries.",
    imageUrl: "/assets/chair/chair4.jpg",
    price: "starting from 200₹ per feet",
  },
  {
    id: "chair-5",
    name: "Rocking Chair",
    category: "chair",
    description: "Modern take on a classic design, perfect for nurseries.",
    imageUrl: "/assets/chair/chair5.jpg",
    price: "starting from 200₹ per feet",
  },
  {
    id: "chair-6",
    name: "Rocking Chair",
    category: "chair",
    description: "Modern take on a classic design, perfect for nurseries.",
    imageUrl: "/assets/chair/chair6.jpg",
    price: "starting from 200₹ per feet",
  },

  // Beds (remain unchanged, using external URLs)
  {
    id: "bed-1",
    name: "Platform Queen Bed",
    category: "bed",
    description: "Minimalist platform bed with integrated storage solutions.",
    imageUrl:
      "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "starting from 2000-2500₹",
  },
  {
    id: "bed-2",
    name: "Upholstered King Bed",
    category: "bed",
    description: "Luxurious tufted headboard with premium upholstery.",
    imageUrl:
      "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "starting from 2000-2500₹",
  },
  {
    id: "bed-3",
    name: "Four-Poster Bed",
    category: "bed",
    description: "Elegant design that makes a statement in any bedroom.",
    imageUrl:
      "https://images.pexels.com/photos/3773575/pexels-photo-3773575.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "starting from 2000-2500₹",
  },
  {
    id: "bed-4",
    name: "Modern Canopy Bed",
    category: "bed",
    description: "Contemporary canopy design with clean lines.",
    imageUrl:
      "https://images.pexels.com/photos/6585763/pexels-photo-6585763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "starting from 2000-2500₹",
  },
];

export const getProductsByCategory = (
  category: "sofa" | "chair" | "bed"
): Product[] => {
  return products.filter((product) => product.category === category);
};
