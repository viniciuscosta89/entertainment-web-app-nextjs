import { createClient } from '@supabase/supabase-js';
import { Database } from '@type/database.types';

const SUPA_BASE_PROJECT_URL = 'https://lemjqzopwkrjxfrjemzt.supabase.co';

const SUPA_BASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY as string;

export const supabase = createClient<Database>(SUPA_BASE_PROJECT_URL, SUPA_BASE_KEY, {
  db: { schema: 'next_auth' },
});
