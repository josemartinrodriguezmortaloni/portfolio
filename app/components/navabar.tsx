"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/proyects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-10 backdrop-filter backdrop-blur-lg bg-opacity-100 bg-gray-100 rounded-full border border-gray-200 px-6 py-1">
      <div className="flex items-center justify-center space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`text-gray-900 hover:text-gray-600 transition-colors duration-300 py-2 border-b-2 ${
              pathname === item.path
                ? "border-gray-800"
                : "border-transparent hover:border-gray-300"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
