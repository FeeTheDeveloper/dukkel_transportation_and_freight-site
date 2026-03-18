import Link from "next/link";

import { Container } from "@/components/shared/container";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="surface-panel max-w-2xl p-10 text-center">
          <span className="eyebrow">404</span>
          <h1 className="mt-5 text-4xl font-semibold sm:text-5xl">Page not found</h1>
          <p className="mt-4">
            The page you requested is not available. Head back to the homepage to continue exploring Dukeel
            Transportation.
          </p>
          <Link className="button-primary mt-8" href="/">
            Return home
          </Link>
        </div>
      </Container>
    </section>
  );
}

