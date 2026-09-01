export interface ToolkitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'safety' | 'planning' | 'finance' | 'eco';
  badge?: string;
}
