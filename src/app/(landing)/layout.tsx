
import Footer from "@/app/component/Footer";
import Header from "@/app/component/Header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main >
        <Header/>
        {children}
        <Footer/>
      </main>
  );
}
