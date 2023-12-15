import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://wclxedciuumwbpdjtsos.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjbHhlZGNpdXVtd2JwZGp0c29zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1MzU4MjcsImV4cCI6MjAxODExMTgyN30.BVV7vyI3W5yXMHfmg2SIuO3C9Ge3wyUtIRcJetfOvrQ';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
