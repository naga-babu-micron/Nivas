export interface Product {
  id: string;
  name: string;
  slug: string;
  price: string;
  image: string;
  imageAlt: string;
  weight: string;
  pieces: string;
  outOfStock?: boolean;
  minimumOrder?: string;
}

export const products: Product[] = [
  {
    id: "alphonso-jumbo",
    name: "Alphonso – Jumbo",
    slug: "alphonso-jumbo",
    price: "$36",
    image: "/images/mango-bangapalli.jpg",
    imageAlt: "banganapalli mango",
    weight: "Each box contains 3.2 kg",
    pieces: "12 pcs",
  },
  {
    id: "alphonso-reg",
    name: "Alphonso – Reg",
    slug: "alphonso",
    price: "$32",
    image: "/images/mango-alphonso-reg.png",
    imageAlt: "Alphonso - Reg",
    weight: "Each box contains 2.8kg",
    pieces: "12s",
  },
  {
    id: "banganapalli",
    name: "Banganapalli Mango",
    slug: "banganapalli-mango",
    price: "$34",
    image: "/images/mango-bangapalli.jpg",
    imageAlt: "banganapalli mango",
    weight: "Each box contains 5kg",
    pieces: "(12/13/14s)",
  },
  {
    id: "kesar",
    name: "Kesar",
    slug: "kesar",
    price: "$29",
    image: "/images/mango-kesar.webp",
    imageAlt: "dasheri",
    weight: "Each box contains 3kg",
    pieces: "10/11/12 Pcs",
  },
  {
    id: "payri",
    name: "Payri",
    slug: "payri",
    price: "$29",
    image: "/images/mango-payri.jpg",
    imageAlt: "neelam",
    weight: "Each box contains 3.0kg",
    pieces: "12 pcs",
  },
  {
    id: "imampasanth",
    name: "Imampasanth",
    slug: "imampasanth",
    price: "$38",
    image: "/images/mango-imampasanth.webp",
    imageAlt: "chaunsa",
    weight: "Each box contains 5kg",
    pieces: "9/10/11 Pcs",
  },
  {
    id: "rumani",
    name: "Rumani",
    slug: "rumani",
    price: "$29",
    image: "/images/mango-rumani.webp",
    imageAlt: "rumani",
    weight: "Each box contains 4.5kg",
    pieces: "(15/16/17)/pcs",
    outOfStock: true,
    minimumOrder: "Minimum order: 3 Boxes",
  },
];
