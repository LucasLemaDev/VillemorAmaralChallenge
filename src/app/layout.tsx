import '@mantine/core/styles.css';
import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider, Stack } from '@mantine/core';
import "./globals.css";
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Villemor Amaral Challenge',
  description: 'An test given from Villemor Amaral admission team',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      
      <body>
        <MantineProvider defaultColorScheme='dark'>
          <Stack align='center' h={'100vh'} >
            <header style={{padding: '1rem', fontSize: '2rem'}}>
              <h1 style={{textAlign: 'center'}}><Link href={'/'} >Villemor Amaral Challenge</Link></h1>
            </header>

            {children}
          </Stack>
        </MantineProvider >
      </body>
    </html>
  );
}