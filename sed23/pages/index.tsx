import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Introduction from "@/components/Introduction";
import Registration from "@/components/Registration";
import About from "@/components/About";
import Team from "@/components/Team";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gray-100 h-screen snap-y snap-mandatory overflow-scroll z-0">
      {/* Header */}
      <Header />
      {/*----------------------- Content----------------- */}
      <section className="snap-center">
        {/* Banner and title */}
        <Banner />
      </section>

      <section className="snap-center">
        {/* About SED 2023 */}
        <Introduction />
      </section>

      <section className="snap-center" id="register">
        {/* Registration */}
        <Registration />
      </section>

      <section className="snap-start">
        {/* About Us */}
        <About />
      </section>

      <section className="snap-center">
        {/* Meet the Team  */}
        <Team />{" "}
      </section>
    </main>
  );
}
