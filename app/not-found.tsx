import Link from "next/link";

import { Container } from "@/components/shared/container";

export default function NotFound() {
  return (
    <section className="bg-night py-24 text-white sm:py-32">
      <Container>
        <div className="max-w-2xl">
          <p className="eyebrow eyebrow-invert">404</p>
          <h1 className="display-title mt-5 text-white">Page not found</h1>
          <p className="mt-6 text-white/75">
            The page you requested is not available. Head back to the homepage to continue exploring Dukeel
            Transportation.
          </p>
          <Link className="button-primary mt-9" href="/">
            Return home
          </Link>
        </div>
      </Container>
    </section>
  );
}
