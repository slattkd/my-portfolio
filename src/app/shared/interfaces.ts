export interface Gallery {
  title: string;
  description: string;
  src: string;
  thumbnail: string;
  category: 'process' | 'enterprise' | 'web' | 'brand' | 'other';
}