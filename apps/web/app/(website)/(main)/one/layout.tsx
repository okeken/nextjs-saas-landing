import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
  <Navbar />
  {children}
  <Footer />
  </>;
}
