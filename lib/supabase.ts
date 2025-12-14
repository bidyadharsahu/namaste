import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Create a singleton instance
let supabaseInstance: SupabaseClient | null = null;

// Lazy initialization function
export function getSupabase(): SupabaseClient | null {
  // Only initialize if we're in the browser and have env vars
  if (typeof window !== 'undefined') {
    if (!supabaseInstance && process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      supabaseInstance = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      );
    }
  } else if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    // Server-side initialization
    if (!supabaseInstance) {
      try {
        supabaseInstance = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        );
      } catch (error) {
        console.warn('Failed to initialize Supabase client:', error);
        return null;
      }
    }
  }
  
  return supabaseInstance;
}

// Export the original supabase client for backward compatibility
// but handle the case where env vars are missing
let cachedSupabase: SupabaseClient | null = null;

try {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  if (supabaseUrl && supabaseAnonKey) {
    cachedSupabase = createClient(supabaseUrl, supabaseAnonKey);
  } else {
    console.warn('Supabase environment variables are not set. API routes will use mock data.');
  }
} catch (error) {
  console.warn('Error initializing Supabase client:', error);
}

export const supabase = cachedSupabase;

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