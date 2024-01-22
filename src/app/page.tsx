import Link from "next/link";
import styles from "./page.module.scss";
import {IconArrowNarrowRight} from '@tabler/icons-react'
import { Card } from "@mantine/core";

export default function Index() {
    return (
        <Card padding='xl'>
          <Link href='/result'className={styles.link}> 
              Go to Result 
              <IconArrowNarrowRight size={'2rem'}/>
          </Link>
        </Card>
    );
}
