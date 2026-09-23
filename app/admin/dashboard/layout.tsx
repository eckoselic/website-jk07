import Link from "next/link";
import { LogoutButton } from "./LogoutButton";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <span className="font-display text-ink">Admin TU</span>
            <nav className="flex gap-6 text-sm">
              <Link href="/admin/dashboard/berita" className="text-ink-soft hover:text-leaf">
                Berita
              </Link>
              <Link href="/admin/dashboard/galeri" className="text-ink-soft hover:text-leaf">
                Galeri
              </Link>
            </nav>
          </div>
          <LogoutButton />
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
    </div>
  );
}
