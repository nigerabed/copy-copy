import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function KalenderDetails({ params }) {
  const kalenderActivityId = params?.id;

  const baseUrl = process.env.NEXT_PUBLIC_LANDRUP_API_BASE_URL;

  const cookieStore = await cookies();

  const userId = cookieStore.get("landrup_userid");
  const token = cookieStore.get("landrup_token");
  const role = cookieStore.get("landrup_role");
  if(role !== "instructor"){
redirect("/")
  }

  const data = await serverFetch(
    `${baseUrl}/api/v1/users/${userId}/roster/${kalenderActivityId}`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token.value,
      },
    }
  );
  return (
    <>
      <div></div>
    </>
  );
}
