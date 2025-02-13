import Button from "@/components/Button";
import Footer from "@/components/Footer";
import TidmeldButton from "@/components/TidmeldButton";
import { serverFetch, serverFetchWithAuth } from "@/lib/server-fetch";
import { cookies } from "next/headers";
import Image from "next/image";

export const metadata = {
  title: "Details-Activities",
  description: "se activiti detailer here.",
};

export default async function ActivityDetails({ params }) {

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ;

  const cookieStore = await cookies();

  const activityId = params?.id;

  const data = await serverFetch(
    `${baseUrl}/api/v1/activities/${activityId}`
  );

  const userId = cookieStore.get("landrup_userid");
  const token = cookieStore.get("landrup_token");
  let isTilmeldt = false;

  if(userId && token){

    // serverFetchWithAuth this function fetch data with api and token ( jeg har brught den function i 
    // tilmeld activityDetails fordi skal jeg brug user api med token)

    const userData = await serverFetchWithAuth(
      `${baseUrl}/api/v1/users/${userId.value}`,
      token.value
    );
  
    const tilmeldtActivity = userData.activities.filter((act) => activityId == act.id);
    
    if (tilmeldtActivity.length > 0) {
      isTilmeldt = true;
    } 
  }

  return (
    <>
      <section>
        <div className="relative">
          <Image
            src={data.asset.url}
            alt="activity"
            width={250}
            height={150}
            className="h-[30em] w-full object-cover"
          />
          {!isTilmeldt ? <TidmeldButton activityId={activityId} /> : <div className="absolute bottom-7 left-[6em]"> <Button text ={"Forlad"} /> </div>}
        </div>
        <div className="p-[2em]">
          <h2 className="text-white text-[1.9em] font-semibold">{data.name}</h2>
          <div className="text-white text-[1.4em]">
            {data.minAge}-{data.maxAge} år
            <p className="text-[18px]">{data.description}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
