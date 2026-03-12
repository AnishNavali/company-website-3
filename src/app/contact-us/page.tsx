import { ConatctPage } from "@/components/contact-us/contact";
import { ExploreMoreSection } from "@/components/ExploreMoreSection";
import { FooterDemo } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";

export default function contact() {
  return (
    <div>
      <Navbar />
      <ConatctPage />
      <ExploreMoreSection />
      <FooterDemo />
    </div>
  );
}
