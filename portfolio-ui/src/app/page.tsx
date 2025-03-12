import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar/Navbar";
import Image from "next/image";
import About from "@/components/layouts/About";
import Tools from "@/components/layouts/Tools";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-5 grid-rows-1 gap-1">
          <About />
          <Tools />
      </div>
      <Footer />
    </>
  );
}
