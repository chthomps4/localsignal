import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-6">
        <div className="text-8xl font-bold text-white/[0.08] mb-4">404</div>
        <h1 className="text-2xl font-bold mb-3">Page not found</h1>
        <p className="text-white/40 mb-8 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-signal-500 text-white font-semibold hover:bg-signal-400 transition-all duration-300"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
