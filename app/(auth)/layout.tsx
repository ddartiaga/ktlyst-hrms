import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "DALOY",
  description: "Cloud Water Operation Management Systems",
  keywords: [
    "DALOY",
    "Cloud Water Operation Management Systems",
    "Water Operation Management Systems",
  ],
  authors: [
    {
      name: "Katalyst I.T. Services",
      url: "https://katalystph.com",
    },
  ],
};

import "@/public/assets/libs/bootstrap/css/bootstrap.min.css";
import "@/public/assets/css/styles.min.css";
import "@/public/assets/css/icons.min.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      dir="ltr"
      data-nav-layout="vertical"
      data-vertical-style="overlay"
      data-theme-mode="light"
      data-header-styles="light"
      data-menu-styles="light"
      data-toggled="close"
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="icon"
          href="/images/brand-logos/favicon.ico"
          type="image/x-icon"
        />
      </head>
      <body>
        {children}
        <Script
          src="/assets/js/authentication-main.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/libs/bootstrap/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        <Script src="/assets/js/show-password.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
