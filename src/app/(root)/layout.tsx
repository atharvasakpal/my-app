
import localFont from "next/font/local";
import "../globals.css";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const loggedIn = {firstName: "Atharva", lastName :"Sakpal"}

  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn}/>

        <div className="flex size-full flex-col">
        <div className="flex h-16 items-center justify-between p-5 shadow-creditCard sm:p-8 md:hidden">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            {/* <MobileNav user={loggedIn} /> */}

            {/* IMPLEMENT MOBILENAV LATER */}
          </div>
        </div>
        {children}
      </div>

        
    </main>
  );
}
