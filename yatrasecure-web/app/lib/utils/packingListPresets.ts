export interface PresetItem {
  id: string;
  name: string;
  category: 'Essentials' | 'Clothing' | 'Electronics' | 'Health & Safety' | 'Outdoor';
  isDefaultChecked?: boolean;
}

export const DEFAULT_PACKING_ITEMS: PresetItem[] = [
  { id: '1', name: 'Government ID / Passport / Visa', category: 'Essentials', isDefaultChecked: true },
  { id: '2', name: 'Wallet, Cards & Cash Buffer', category: 'Essentials', isDefaultChecked: true },
  { id: '3', name: 'Phone Charger & High Capacity Power Bank', category: 'Electronics', isDefaultChecked: true },
  { id: '4', name: 'Prescription Meds & Personal First Aid', category: 'Health & Safety', isDefaultChecked: true },
  { id: '5', name: 'Universal Travel Adapter', category: 'Electronics' },
  { id: '6', name: 'Sunscreen SPF 50+ & UV Sunglasses', category: 'Health & Safety' },
  { id: '7', name: 'Comfortable Trek / Walking Shoes', category: 'Clothing' },
  { id: '8', name: 'Weather-proof Jacket / Poncho', category: 'Outdoor' },
];
