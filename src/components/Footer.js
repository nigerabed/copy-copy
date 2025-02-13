import Image from "next/image";
import Gp1 from "../assets/Gp1.png";
import Gp2 from "../assets/Gp2.png";
import Gp3 from "../assets/Gp3.png";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="fixed bottom-0 h-[5em] w-full bg-white ">
        <div className="flex justify-around items-center h-full">
          <Link href={"/activitier"}>
            <Image src={Gp1} alt="gp1" height={60} width={60} />
          </Link>
          <Link href={"/sogeSide"}>
            <Image src={Gp2} alt="gp2" height={60} width={60} />
          </Link>
          <Link href={"/kalender"}>
            <Image src={Gp3} alt="gp3" height={60} width={60} />
          </Link>
        </div>
      </footer>
    </>
  );
}
