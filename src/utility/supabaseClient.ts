import { createClient } from "@refinedev/supabase";
import { Database } from "supabase/lib/database.types";
const SUPABASE_URL = "https://emuuocvkyaoflsbclvbr.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtdXVvY3ZreWFvZmxzYmNsdmJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4Mzc4ODMsImV4cCI6MTk5NDQxMzg4M30.wUeF_hj41yxZuSdRg8ShRv7dhDWqrCN8Wh5RZ473OhE";

export const supabaseClient = createClient<Database>(
  SUPABASE_URL,
  SUPABASE_KEY,
  {
    db: {
      schema: "public",
    },
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  }
);
