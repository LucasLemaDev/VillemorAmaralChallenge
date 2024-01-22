import '@mantine/core/styles.css';
import "./globals.scss";
import Link from 'next/link';
import { ColorSchemeScript, MantineProvider, Stack } from '@mantine/core';
import type { Metadata } from "next";
import { Titillium_Web } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Villemor Amaral Challenge',
  description: 'An test given from Villemor Amaral admission team',
};

const titilliumWeb = Titillium_Web({
  weight: '300',
  style: 'normal',
  subsets: ['latin']
})

const theme = {
  fontFamily: titilliumWeb.style.fontFamily
}

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
        <MantineProvider defaultColorScheme='auto' theme={theme}>
          <Stack align='center' h='100vh' gap={'2rem'}>
            <header className='header'>
              <h1><Link href={'/'} >Villemor Amaral <br/><div>Challenge</div></Link></h1>
            </header>

            {children}
          </Stack>
        </MantineProvider >
      </body>
    </html>
  );
}