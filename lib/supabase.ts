import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface TeamMember {
  id: string;
  name: string;
  title: string;
  photo: string;
  bio_short: string;
  bio_long: string;
  linkedin?: string;
  order_index: number;
  created_at: string;
}

export interface NewsroomPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content?: string;
  content_url?: string;
  image?: string;
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content?: string;
  content_url?: string;
  image: string;
  category: string;
  author?: string;
  created_at: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribed_at: string;
}

export interface Job {
  id: string;
  title: string;
  location: string;
  job_type: string;
  description: string;
  apply_url?: string;
  created_at: string;
}
