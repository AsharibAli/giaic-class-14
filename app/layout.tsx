import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clerk Auth Demo",
  description: "This is a demo app for Clerk Authentication.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen bg-gray-50">
          <header className="fixed w-full p-4 border-b bg-white shadow-sm">
            <nav className="max-w-7xl mx-auto flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-800">Clerk Auth</h1>
              <div className="flex items-center gap-4">
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                      Sign In
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: "w-10 h-10 rounded-full",
                      },
                    }}
                  />
                </SignedIn>
              </div>
            </nav>
          </header>
          <main className="pt-20 px-4">
            <div className="max-w-7xl mx-auto">{children}</div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
