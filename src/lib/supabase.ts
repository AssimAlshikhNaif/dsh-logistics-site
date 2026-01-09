import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'dummy-key';

if (!supabaseUrl || !supabaseAnonKey) {
  //throw new Error('Supabase URL und Anon Key müssen in .env definiert sein');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
