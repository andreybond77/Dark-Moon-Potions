export interface Potion {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: 'physical' | 'mental' | 'healing' | 'transformative' | 'protective' | 'combat' | 'poison';
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  in_stock: boolean;
  brewing_time: string;
  ingredients: string[];
  effects: string[];
  warnings: string[];
}

export interface CartItem {
  productId: number;
  name: string;
  price: number;
  quantity: number;
  image_url: string;
  category: string;
  // Дополнительные поля для отображения в корзине
  effects?: string[];
  brewing_time?: string;
  ingredients?: string[];
  rarity?: string;
  in_stock?: boolean;
}

export interface User {
  id: number;
  email: string;
  name: string;
  wizardLevel: 'novice' | 'apprentice' | 'adept' | 'master' | 'archmage';
  is_active: boolean;
  is_verified: boolean;
  address?: string;
  bio?: string;
  preferences?: {
    favoriteCategory: string;
    newsletter: boolean;
    promotions: boolean;
  };
}