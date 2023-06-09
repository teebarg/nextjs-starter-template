import './globals.css'
import { Outfit } from 'next/font/google';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { SessionProvider } from "@/components/sessionProvider";

const inter = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'A Nextjs 13 boilerplate',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // @ts-expect-error
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
