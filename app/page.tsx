import Nav from "./components/navabar";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: "url('/images/macbook wallpaer.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div>
        <Nav />
      </div>
      <main className="justify-center text-left text-wrap cursor-pointer rounded-lg p-6 transition-colors backdrop-blur-md backdrop-filter">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Bienvenido a mi Portafolio
            </h1>
            <div className="h-1 w-20 bg-primary"></div>
          </div>

          <div className="space-y-6 text-lg">
            <p className="leading-relaxed">
              Explora mis proyectos y conoce más sobre mi experiencia en
              desarrollo y soluciones de Inteligencia Artificial.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
