import { cookies } from "next/headers";
import Link from "next/link";

export default async function KalenderCard({ userData }) {
  const cookieStore = await cookies();

  const userId = cookieStore.get("landrup_userid");
  const token = cookieStore.get("landrup_token");
  const role = cookieStore.get("landrup_role");

  return (
    <>
      {role.value === "instructor" ? (
        <Link href={`/kalender/${userData.id}`}>
          {userData.activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white w-[90%] flex flex-col justify-center items-start h-[8em] mt-[2em] pl-[2em] rounded-lg"
            >
              <h2 className="text-black font-semibold text-[2em]">
                {activity.name}
              </h2>
              <p className="font-semibold text-xl">{activity.time}</p>
            </div>
          ))}
        </Link>
      ) : (
        <div>
          {userData.activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white w-[90%] flex flex-col justify-center items-start h-[8em] mt-[2em] pl-[2em] rounded-lg"
            >
              <h2 className="text-black font-semibold text-[2em]">
                {activity.name}
              </h2>
              <p className="font-semibold text-xl">{activity.time}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
