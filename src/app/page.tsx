import Link from "next/link";
import styles from "./page.module.scss";
import {IconArrowNarrowRight} from '@tabler/icons-react'

export default function Index() {
    return (
      <Link href='/result'className={styles.link}> 
        Go to Result 
        <IconArrowNarrowRight size={'2rem'}/>
      </Link>
    );
}
