import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Client biasa (pakai anon key) — cukup untuk baca data publik (berita, galeri)
// dan untuk operasi tulis dari route admin yang sudah diverifikasi passcode-nya.
export async function createClient() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (cookiesToSet) => {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Diabaikan bila dipanggil dari Server Component (tidak bisa set cookie di sana)
          }
        },
      },
    }
  );
}
