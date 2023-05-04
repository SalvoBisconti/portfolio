import Head from "next/head";
import styles from "@/styles/pages/Home.module.scss";
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
export default function Home() {
  return (
    <>
      <Head>
        <title>Salvatore Bisconti</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.Home}>
        <Image
          className={styles.image}
          src="/coding.gif"
          alt="coding"
          width={300}
          height={300}
        />

        <div className={styles.text}>
          <p>
            HI THERE <span className={styles.hand}>👋🏻</span> ! I'M
          </p>
          <h2>
            SALVATORE <span className={styles.highlighted}> BISCONTI</span>
          </h2>
          <p>
            A <span className={styles.highlighted}>Front-end developer </span>
            passionate about creating interactive applications and experiences
            on the web
          </p>

          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link href="https://github.com/SalvoBisconti">
                <BsGithub />
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="https://linkedin.com/in/salvo-bisconti">
                <BsLinkedin />
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="https://www.instagram.com/salvo_bisco/">
                <BsInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
