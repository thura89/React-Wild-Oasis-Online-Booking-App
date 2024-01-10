import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dfpxwmqfqgmevcimrzec.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmcHh3bXFmcWdtZXZjaW1yemVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ2ODQ2MDAsImV4cCI6MjAyMDI2MDYwMH0.2jjY2DsPt_MJmxOOmeIs2q9d44-Gt-EyYPuCL6hW0o4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
