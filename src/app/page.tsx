import styles from "./page.module.scss";
import Link from "next/link";
import {IconArrowNarrowRight} from '@tabler/icons-react'

export default function Home({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
      <Link href='/table'className={styles.link}> 
        Go to Result 
        <IconArrowNarrowRight size={'2rem'}/>
      </Link>
    );
}
