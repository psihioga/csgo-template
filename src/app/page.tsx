import Image from "next/image";
import styles from "./page.module.css";

import { Button } from "@/components/Button";

export default function Home() {
  return (
    <main>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button label="батон"/>
    </main>
  );
}
