export type Category =
  | 'Maintenance'
  | "Intégration d'équipements"
  | 'Équipements de manutention et de convoyage';

export const CATEGORIES: Category[] = [
  'Maintenance',
  "Intégration d'équipements",
  'Équipements de manutention et de convoyage',
];

export type Publication = {
  id: string;
  created_at: string;
  sujet: string;
  commentaire: string;
  project_date: string; // Format ISO date (YYYY-MM-DD)
  category: Category;
  images: string[];
  cover_url: string | null;
  cover_path?: string | null;
};

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      publications: {
        Row: Publication;
        Insert: Omit<Publication, 'id' | 'created_at'>;
        Update: Partial<Omit<Publication, 'id' | 'created_at'>>;
      };
    };
  };
}
