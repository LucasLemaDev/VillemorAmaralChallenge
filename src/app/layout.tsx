// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import "./globals.css";

export const metadata: Metadata = {
  title: 'My Mantine app',
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
        <MantineProvider defaultColorScheme='auto'>{children}</MantineProvider >
      </body>
    </html>
  );
}