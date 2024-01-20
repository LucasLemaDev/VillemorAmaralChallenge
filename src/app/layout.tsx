// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider, Stack } from '@mantine/core';
import "./globals.css";
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Villemor Amaral Challenge',
  description: 'I have followed setup instructions carefully',
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
              <h1 style={{textAlign: 'center', maxWidth: '15ch'}}><Link href={'/'} >Villemor Amaral Challenge</Link></h1>
            </header>

            {children}
          </Stack>
        </MantineProvider >
      </body>
    </html>
  );
}