import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="https://d36uctqrso86dz.cloudfront.net/files/1819-season/Centre-Stage/_380x190_crop_center-center_80/pianohall.jpg?mtime=20180503175106"
        alt={"sample cloudfront image"}
        width={100}
        height={100}
      />
    </main>
  );
}
