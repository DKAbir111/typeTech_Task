import Image from "next/image";
import banner from '@/assets/images/banner_image.jpeg'

export default function Home() {
  return (
    <div>
      <Image src={banner} alt="Banner" />
    </div>
  );
}
