import Country from "@/components/Country";
import Banner from "../components/Banner";
import Navbar from "@/components/Navbar";
import Location from "@/components/Location";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Country />
      <Location />
    </div>
  );
}
