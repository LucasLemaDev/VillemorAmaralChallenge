import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { NavLink } from "@mantine/core";

export default function Home() {
  return (
    <main className={styles.main}>
         <NavLink
          href="/table"
          label="See Table"/>
    </main>
  );
}
