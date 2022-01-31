import Link from "next/link";
import Image from "next/image";
import Hamburger from "./hamburger";
import { useState } from "react";

export default function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <nav className="nav">
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen} />
      </div>

      <div className="buttons">
        <ul>
          <li>
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a>Portafolio</a>
            </Link>
          </li>
          <Link href="/associates">
            <a>Asociados</a>
          </Link>
          <li>
            <Link href="/comunication">
              <a>Comunicación</a>
            </Link>
          </li>
          <li>
            <Link href="/about-us">
              <a>Sobre Nosotros</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="favicon">
        <Image
          src="/favicon.ico"
          alt="Regenerativo Comunicación"
          width={80}
          height={80}
          className="image"
        />
      </div>

      <style jsx>
        {`
          .nav {
            width: 100%;
            height: 50px;
          }
          .nav ul{
            display: flex;
            flex-wrap: wrap;
            float: right;
            margin: 0;
            padding: 0;
            overflow: hidden;
          }

          .buttons > a {
            display: inline;
            margin: auto;
            text-decoration: none;
            background: white;
            border-radius: 4px;
            font-size: 1.1rem;
            padding: auto;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 0.025em;
            color: #333;
            /* border: 1px solid #00b80f; */
            transition: all 0.125s ease;
          }

          .buttons > a:hover {
            background-color: #eaeaea;
          }
          .image {
            pointer-events: none;
            /* margin: 0 20px; */
          }

          .hamburger {
            display: none;
          }

          @media (max-width: 986px) {
            .hamburger {
              display: inline;
              padding-top: 10px;
              margin-left: 10px;
              z-index: 10;
            }
            .buttons a {
              display: ${isOpen ? "inline" : "none"}
            }
          }
        `}
      </style>
    </nav>
  );
}
