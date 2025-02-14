import Country from "@/components/Country";
import Banner from "../components/Banner";
import Navbar from "@/components/Navbar";
import Location from "@/components/Location";

export default function Home() {
  return (
    <div className="pb-20">
      <Navbar />
      <Banner />
      <Country name={'Broward County'} />
      <Location />
      <Country name={'Broward County'} />
      <Country name={'Monroe County'} />
    </div>
  );
}
