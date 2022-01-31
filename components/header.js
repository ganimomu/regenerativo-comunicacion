import Link from "next/link";
import Image from "next/image";
import styles from './header.module.css'

export default function Header() {
  return (
    <nav className={styles.nav}>
      <div className={styles.buttons}>        
      <Link href="/">
        <a>Inicio</a>
      </Link>
      <Link href="/portfolio">
        <a>Portafolio</a>
      </Link>
      <Link href="/associates">
        <a>Asociados</a>
      </Link>
      <Link href="/comunication">
        <a>Comunicación</a>
      </Link>
      <Link href="/about-us">
        <a>Sobre Nosotros</a>
      </Link>
      </div>
      <div className={styles.favicon}>
      <Image src="/favicon.ico" alt="Regenerativo Comunicación" width={80} height={80} className={styles.image}/>
      </div>
    </nav>
  );
}
