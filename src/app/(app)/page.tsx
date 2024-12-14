export default function Home() {
  return (
    <>
      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-24 py-12 bg-gray-800 text-white">
        <section className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold">
            This is Unprotected Home Page
          </h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg">
            Welcom to Nextjs Demo
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 md:p-6 bg-gray-900 text-white">
        © 2023 Nextjs Demo. All rights reserved.
      </footer>
    </>
  );
}
