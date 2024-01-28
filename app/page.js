"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className={styles.main}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.card}
      >
        <Image
          className={styles.avatar}
          src="/images/avatar-jessica.jpeg"
          alt="jessica"
          width={88}
          height={88}
        />

        <div className={styles.cardHead}>
          <h1>Jessica Randall</h1>
          <p>London, United Kingdom</p>
        </div>

        <p className={styles.quote}>"Front-end developer and avid reader."</p>

        <ul className={styles.links}>
          <li><a href="#">GitHub</a></li>
          <li><a href="#">Frontend Mentor</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </motion.div>
    </main>
  );
}
