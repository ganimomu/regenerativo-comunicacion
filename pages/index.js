import Head from "next/head";
import Image from "next/image";
import styles from "../styles/utils.module.css";
import Link from "next/link";
import { style } from "@mui/system";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.firstblock}>
          <h1 className={styles.title}>Regenerativo Comunicación consciente</h1>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h2 className={styles.description}>
                Soluciones en comunicación para emprendedores regenerativos.
              </h2>
            </div>
            <div className={styles.card}>
              <h2 className={styles.description}>
                Soluciones en comunicación para emprendedores regenerativos.
              </h2>
            </div>
            <div className={styles.card}>
              <h2 className={styles.description}>
                Soluciones en comunicación para emprendedores regenerativos.
              </h2>
            </div>
          </div>
        </div>

        <div className={styles.secondblock}>
          <h3>
            ¿Por qué una agencia de Comunicación se vincula con Permacultura?
          </h3>
          <p>
            La Permacultura propone una serie de principios éticos que para
            nosotros son guía para la acción. Para nosotras, la comunicación
            digital debe estar al servicio del cuidado de la tierra, las
            personas y de la distribución equitativa de la abundancia. Apostamos
            por una economía circular que esté en sinergia con estos principios.
          </p>
          <p>
            Desde Regenerativo queremos ser parte del cambio que necesitamos
            como humanidad. Junto con los emprendimientos con quienes tejemos,
            buscamos prosperar en sintonía y a favor de la naturaleza. ​
          </p>
          <p>
            Los tres principios éticos de la Permacultura: el cuidado de la
            tierra, el cuidado de las personas y el reparto justo de la
            abundancia*, orientan nuestro accionar y visión como emprendimiento.
          </p>
        </div>
      </main>
    </div>
  );
}
