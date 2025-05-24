import type { Metadata } from "next";
import Script from "next/script";
import Footer from "@/components/Footer";
import VerticalHeader from "@/components/nav/sidebar/top-menu-bar/VerticalHeader";
import SideMenuBar from "@/components/nav/sidebar/SideMenuBar";
import Loader from "@/components/Loader";
import CountryModal from "@/components/modals/CountryModal";
import SearchModal from "@/components/modals/SearchModal";
import OffCanvas from "@/components/Switcher";

export const metadata: Metadata = {
  title: "Katalyst HRMS",
  description: "Cloud-Native Human Resource Management System with Government Compliance Features",
  keywords: [
    "Katalyst HRMS",
    "Cloud-Native Human Resource Management System",
    "Government Compliance Features",
    "Human Resource Management System",
    "HRMS",
    "HRMS System",
    "HRMS Software",
    "HRMS Software for Government",
    "HRMS Software for Government",
    "HRMS Software for Government",
  ],
  authors: [
    {
      name: "Katalyst I.T. Services",
      url: "https://katalysttechservices.com",
    },
  ],
};

import "@/public/assets/libs/bootstrap/css/bootstrap.min.css";
import "@/public/assets/css/styles.min.css";
import "@/public/assets/css/icons.css";
import "@/public/assets/libs/node-waves/waves.min.css";
import "@/public/assets/libs/simplebar/simplebar.min.css";

import "@/public/assets/libs/flatpickr/flatpickr.min.css";
import "@/public/assets/libs/@simonwep/pickr/themes/nano.min.css";
import "@/public/assets/libs/choices.js/public/assets/styles/choices.min.css";
import "@/public/assets/libs/jsvectormap/css/jsvectormap.min.css";
import "@/public/assets/libs/swiper/swiper-bundle.min.css";

import "react-phone-number-input/style.css";

import "@/public/app/css/app.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      data-nav-layout="vertical"
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
          href="/assets/images/brand-logos/favicon.ico"
          type="image/x-icon"
        />

        <Script
          src="/assets/libs/choices.js/public/assets/scripts/choices.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </head>
      <body>
        <OffCanvas />
        <Loader />
        <div className="page">
          <VerticalHeader />
          <SideMenuBar />
          <div id="main-content" className="main-content app-content">
            <div id="child-content" className="container-fluid py-4">
              {children}
            </div>
          </div>
          <SearchModal />
          <CountryModal />
          <Footer />
        </div>

        <div className="scrollToTop">
          <span className="arrow">
            <i className="ri-arrow-up-s-fill fs-20"></i>
          </span>
        </div>
        <div id="responsive-overlay"></div>

        <Script
          src="/assets/libs/@popperjs/core/umd/popper.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/libs/bootstrap/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/defaultmenu.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/libs/node-waves/waves.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/sticky.js" strategy="afterInteractive" />
        <Script
          src="/assets/libs/simplebar/simplebar.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/simplebar.js" strategy="afterInteractive" />
        <Script
          src="/assets/libs/@simonwep/pickr/pickr.es5.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/libs/jsvectormap/js/jsvectormap.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/libs/jsvectormap/maps/world-merc.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/libs/apexcharts/apexcharts.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/libs/chart.js/chart.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/libs/moment/moment.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/libs/flatpickr/flatpickr.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/date&time_pickers.js"
          strategy="afterInteractive"
        />

        {/* <Script
          src="/assets/js/analytics-dashboard.js"
          strategy="afterInteractive"
        /> */}

        <Script src="/assets/js/custom.js" strategy="afterInteractive" />

        <Script
          src="/assets/js/custom-switcher.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
