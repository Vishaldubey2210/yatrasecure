import { Injectable } from '@nestjs/common';

@Injectable()
export class PackingListService {
  generateChecklist(tripType: string, durationDays: number): {
    category: string;
    items: string[];
  }[] {
    const baseItems = [
      { category: 'Essentials', items: ['Govt ID Card / Passport', 'Cash & Credit Cards', 'Phone Charger & Power Bank', 'Prescription Medicines'] },
      { category: 'Clothing', items: [`${durationDays + 1} Daily Outfits`, 'Undergarments & Socks', 'Comfortable Walking Shoes', 'Nightwear'] },
      { category: 'Toiletries', items: ['Toothbrush & Paste', 'Sunscreen SPF 50+', 'Lip Balm & Moisturizer', 'Hand Sanitizer & Wet Wipes'] },
    ];

    if (tripType.toLowerCase().includes('trek') || tripType.toLowerCase().includes('mountain')) {
      baseItems.push({
        category: 'Trek & Adventure',
        items: ['Trekking Pole', 'Rainsheet / Poncho', 'Thermal Base Layers', 'Headlamp / Torch', 'First Aid Kit with ORS'],
      });
    } else if (tripType.toLowerCase().includes('beach')) {
      baseItems.push({
        category: 'Beach Gear',
        items: ['Swimwear', 'Waterproof Mobile Pouch', 'Flip Flops', 'Sunglasses & Sun Hat', 'Beach Towel'],
      });
    }

    return baseItems;
  }
}
