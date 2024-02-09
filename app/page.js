import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
          <audio controls>
            <source src="Vo_ember_spirit_embr_move_13.mp3.mpeg" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

        {/* <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <audio controls>
            <source src="Vo_ember_spirit_embr_move_13.mp3.mpeg" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </a> */}
      </div>
    </main>
  );
}
