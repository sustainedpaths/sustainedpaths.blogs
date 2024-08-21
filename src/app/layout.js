import ClientLayout from "./clientlaysout.js";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Script from 'next/script';

export const metadata = {
  title: "Sustained Paths",
  description: "A sustainable development project to centralize all data and resources related to sustainable development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-MCZXSESDDH`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MCZXSESDDH');
          `}
        </Script>
      </head>
      <body>
        <UserProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </UserProvider>
      </body>
    </html>
  );
}
