import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";
import Spline from "@splinetool/react-spline";
import Nav from "../components/navabar";

export default function ContactPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="fixed inset-0 -z-10">
        <Spline scene="https://prod.spline.design/9mg9PPocMwgXprvk/scene.splinecode" />
      </div>
      <div>
        <Nav />
      </div>
      <div className="justify-center">
        <div className="z-10 bg-white bg-opacity-50 p-8 rounded-lg shadow-lg max-w-md w-full backdrop-blur-md backdrop-filter">
          <h1 className="text-3xl font-bold mb-6 text-center">Contacto</h1>
          <div className="space-y-4">
            <Link
              href="https://twitter.com/tu_usuario"
              className="flex items-center space-x-3 p-3 rounded-lg hover:text-zinc-600 transition duration-300"
            >
              <Twitter className="w-6 h-6 text-black" />
              <span>Sígueme en X (Twitter)</span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/josemrodriguezm?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiK%2B8npSsSXCtYw7zbqys0g%3D%3D"
              className="flex items-center space-x-3 p-3 rounded-lg hover:text-zinc-600 transition duration-300"
            >
              <Linkedin className="w-6 h-6 text-black" />
              <span>Conéctate en LinkedIn</span>
            </Link>

            <Link
              href="https://github.com/m4s1t4"
              className="flex items-center space-x-3 p-3 rounded-lg hover:text-zinc-600 transition duration-300"
            >
              <Github className="w-6 h-6 text-black" />
              <span>Revisa mis proyectos en GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
