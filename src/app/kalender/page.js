import KalenderCard from "@/components/KalenderCard";
import PageHeader from "@/components/PageHeader";
import { cookies } from "next/headers";

export default async function kalender() {
  const cookieStore = await cookies();
  const token = cookieStore.get("landrup_token");
  const userId = cookieStore.get("landrup_userid");


  const baseUrl = process.env.NEXT_PUBLIC_LANDRUP_API_BASE_URL;
  
  try {
    const res = await fetch(
      `${baseUrl}/api/v1/users/${userId.value}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token.value,
        },
      }
    );
    console.log("res", res);

    const data = await res.json();

    return (
      <>
        <PageHeader indhold={"Kalender"} />
        <div className="flex flex-col justify-center items-center">
          <KalenderCard userData={data} />
        </div>
      </>
    );
  } catch (err) {
    console.error(err);
  }
}
