export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  features: string[];
  popular?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ContactInfo {
  facebook: string;
  facebookUrl: string;
  tiktok: string;
  tiktokUrl: string;
}
