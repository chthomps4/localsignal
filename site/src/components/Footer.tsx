import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/images/logo.png"
                alt="Local Signal Websites"
                width={36}
                height={36}
                className="rounded-full"
              />
              <span className="text-white font-semibold tracking-tight text-lg">
                Local Signal Websites
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Custom websites for artists, creators, and small businesses.
              Clean design, fast performance, built to grow with you.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white/30 text-xs font-semibold uppercase tracking-wider mb-4">
              Pages
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white/30 text-xs font-semibold uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/contact"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  Start a Project
                </Link>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61576498498498"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/localsignalwebsites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            &copy; {currentYear} Local Signal Websites. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Built with care in the mountains of North Carolina.
          </p>
        </div>
      </div>
    </footer>
  );
}
