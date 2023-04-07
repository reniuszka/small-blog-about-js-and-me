import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="bg-slate-300 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-slate-700 no-underline hover:text-slate-00"
          >
            Renata Diurczak
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/reniuszka"
            className="text-slate-700 no-underline hover:text-slate-00"
          >
            <FaGithub />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/renata-diurczak/"
            className="text-slate-700 no-underline hover:text-slate-00"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
