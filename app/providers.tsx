"use client";

import { ThemeProvider } from "@/components/theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <div className="bg-white text-black dark:bg-black dark:text-white transition-colors min-h-screen">
        <main>{children}</main>
      </div>
    </ThemeProvider>
  );
}
