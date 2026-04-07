"use client";

import Container from "@/components/ui/Container";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <section className="min-h-screen flex items-center bg-gray-50">
          <Container className="text-center py-20">
            <p className="text-7xl font-bold text-gray-200 font-heading mb-4">500</p>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600 text-lg max-w-md mx-auto mb-10">
              We apologize for the inconvenience. Please try again or contact our team if the problem persists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => reset()}
                className="px-8 py-3 bg-brand-green text-white font-medium rounded-xl hover:bg-brand-green/90 transition-colors"
              >
                Try Again
              </button>
              <a
                href="/"
                className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-100 transition-colors"
              >
                Back to Home
              </a>
            </div>
          </Container>
        </section>
      </body>
    </html>
  );
}
