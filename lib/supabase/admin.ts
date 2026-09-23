import { createClient as createSupabaseClient } from "@supabase/supabase-js";

// PENTING: hanya import file ini dari route handler/Server Action di bawah
// /app/admin/** atau /app/api/admin/**, yang SUDAH divalidasi lewat middleware
// (cek sesi passcode). Jangan pernah import ini ke komponen client/browser —
// service_role key ini melewati semua RLS policy.
export function createAdminClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  );
}
