export interface TravelPhrase {
  english: string;
  hindi: string;
  phonetic: string;
  category: 'greetings' | 'emergency' | 'directions' | 'food';
}

export const TRAVEL_PHRASES: TravelPhrase[] = [
  { english: 'Hello / Greetings', hindi: 'नमस्ते', phonetic: 'Namaste', category: 'greetings' },
  { english: 'Where is the hospital?', hindi: 'अस्पताल कहाँ है?', phonetic: 'Aspataal kahan hai?', category: 'emergency' },
  { english: 'Please help me', hindi: 'कृपया मेरी मदद करें', phonetic: 'Kripya meri madad karein', category: 'emergency' },
  { english: 'How much does this cost?', hindi: 'यह कितने का है?', phonetic: 'Yeh kitne ka hai?', category: 'food' },
  { english: 'How do I get there?', hindi: 'वहाँ कैसे जाएँ?', phonetic: 'Vahan kaise jayein?', category: 'directions' },
];
