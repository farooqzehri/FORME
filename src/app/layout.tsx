import type { Metadata } from "next";
import { StoreProvider } from "@/components/store-provider";
import { StoreShell } from "@/components/store-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "FORME — Thoughtful pieces for everyday living",
  description: "Explore thoughtful objects, enduring forms, and considered essentials in the FORME sample storefront by HAXUDIO Digital Solutions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <StoreShell>{children}</StoreShell>
        </StoreProvider>
      </body>
    </html>
  );
}
