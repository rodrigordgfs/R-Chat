import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://yqtjyxuyfnelvghrwstf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxdGp5eHV5Zm5lbHZnaHJ3c3RmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NTE3NzIzOCwiZXhwIjoxOTkwNzUzMjM4fQ.wf-8WSYfGiqkCXBZD8kl5TFYd8_PB5YqC5GcEuta094"
);
