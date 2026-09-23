import Link from "next/link";

const NAV = [
  { href: "/", label: "Beranda" },
  { href: "/profil", label: "Profil" },
  { href: "/berita", label: "Berita" },
  { href: "/galeri", label: "Galeri" },
  { href: "/ppdb", label: "PPDB" },
  { href: "/kontak", label: "Kontak" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sm font-semibold text-marigold">
            07
          </span>
          <span className="font-display text-lg leading-tight text-ink">
            SDN Jatinegara Kaum 07 Pagi
          </span>
        </Link>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ink-soft transition-colors hover:text-leaf"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
