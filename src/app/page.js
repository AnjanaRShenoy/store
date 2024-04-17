import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Body from "@/components/Body";

export default function Home() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Header />
      <Body/>
      <Footer />
    </div>
  );
}
