import Head from "next/head";
import styles from "@/styles/pages/Curriculum.module.scss";
import Image from "next/image";

import { RiDownload2Fill } from "react-icons/ri";
import { saveFile } from "@/utils/func";
import { useDispatch } from "react-redux";

import { useEffect } from "react";
import { selectIcon } from "@/store";

export default function Curriculum() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectIcon("curriculum"));
  }, []);
  return (
    <>
      <Head>
        <title>Salvatore Bisconti - Curriculum</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.Curriculum}>
        <div className={styles.container}>
          <h2 className={styles.headerText}>CURRICULUM</h2>
          <div className={styles.image}>
            <Image
              src="/curriculum-screen.png"
              alt="coding"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          <button className={styles.btn} onClick={saveFile}>
            <RiDownload2Fill />
          </button>
        </div>
      </main>
    </>
  );
}
