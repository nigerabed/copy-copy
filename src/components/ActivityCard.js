import Image from "next/image";
import Link from "next/link";

export default function ActivityCard({activity}){

  const baseUrl = process.env.NEXT_PUBLIC_LANDRUP_API_BASE_URL;
  const url = activity.asset.url;
  const newUrl = baseUrl + url.slice("http://localhost:4000".length);

    return(
        <>
        <section className="p-[2em]">
            

      <Link href={`/activitier/${activity.id}`}>

      <div>
        <Image src={newUrl} height={150} width={150}alt="activity-pic" 
        className="h-[25em] w-full  rounded-t-[2em] rounded-bl-[2em] object-cover"  />
        <div className="relative">

        <div className="absolute bottom-0 text-[2em] bg-[#f0cdf5] h-[4em]
         w-[100%] rounded-tr-[2em] rounded-bl-[1em] opacity-75 pl-[1em] pt-[1em] ">
        <h2 className="text-[.8em] font-semibold" >{activity.name}</h2>
        <div className="font-semibold text-[.8em]">{activity.minAge}-{activity.maxAge} år</div>
        </div>
        </div>
      </div>
       
      </Link>
    </section>
        </>
    )
}