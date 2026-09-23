"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ passcode }),
    });

    setLoading(false);

    if (!res.ok) {
      const body = await res.json().catch(() => null);
      setError(body?.error ?? "Gagal masuk. Coba lagi.");
      return;
    }

    router.push("/admin/dashboard/berita");
    router.refresh();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-2xl border border-line bg-white p-8"
      >
        <h1 className="font-display text-xl text-ink">Masuk sebagai Admin TU</h1>
        <p className="mt-1 text-sm text-muted">
          Untuk mengelola berita, pengumuman, dan galeri website sekolah.
        </p>

        <label className="mt-6 block text-sm font-medium text-ink" htmlFor="passcode">
          Kode akses
        </label>
        <input
          id="passcode"
          type="password"
          required
          value={passcode}
          onChange={(e) => setPasscode(e.target.value)}
          className="mt-2 w-full rounded-lg border border-line px-4 py-2.5 text-sm text-ink outline-none focus:border-leaf"
          placeholder="Masukkan kode akses"
        />

        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-full bg-ink py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink-soft disabled:opacity-60"
        >
          {loading ? "Memeriksa..." : "Masuk"}
        </button>
      </form>
    </div>
  );
}
