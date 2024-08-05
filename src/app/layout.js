// src/app/layout.js
import ClientLayout from "./clientlaysout.js";
import { UserProvider } from '@auth0/nextjs-auth0/client';

export const metadata = {
  title: "Sustained Paths",
  description: "A sustainable development project to centralize all data and resources related to sustainable development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
