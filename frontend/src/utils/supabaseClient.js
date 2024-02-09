import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://njqsccvqkexztzrcgwtt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qcXNjY3Zxa2V4enR6cmNnd3R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU3NzUwNTAsImV4cCI6MjAyMTM1MTA1MH0.z9_QK3huYcTooarNXzy-VIAvbsHr_27ZO0Tj_8VHb-I';

export const supabase = createClient(supabaseUrl, supabaseKey);
