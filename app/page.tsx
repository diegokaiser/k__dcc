import { Terminal } from "@/components/organisms";
import Image from "next/image";

const bkgImage = '/assets/images/bkg.png'

export default function Home() {
  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 top-0 z-1">
        <Image 
          src={bkgImage} 
          alt="" 
          fill
          objectFit="cover"
        />
      </div>
      <Terminal />
    </>
  );
}
