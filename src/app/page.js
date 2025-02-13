import Image from "next/image";
import logo from "../assets/logo-2.png";
import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[url(/splash-image.jpg)] w-screen bg-cover bg-center h-screen bg-no-repeat relative">
      <Image
        src={logo}
        alt="logo"
        height={200}
        className="absolute bottom-[18em]"
      />
      <div className="absolute bottom-[5em] left-[4em]">
        <Link href="/activitier">
          <Button text={"Kom i gang"} />
        </Link>
      </div>
    </div>
  );
}
