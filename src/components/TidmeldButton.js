"use client";

import Button from "./Button";
import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";

export default function TidmeldButton({ activityId }) {
  async function handleTilmeldButton() {
    //import { getCookie } from "cookies-next" fordi den er client side.
    const token = getCookie("landrup_token");
    const userId = getCookie("landrup_userid");

    if (!token || !userId) {
      redirect("/login");
    }

    let isTilmeldtDone = false;
    const baseUrl = process.env.NEXT_PUBLIC_LANDRUP_API_BASE_URL;
    const url = `${baseUrl}/api/v1/users/${userId}/activities/${activityId}`;
    console.log("uuuuuuuuuurl", url)
    try {
    
      const response = await fetch(
        url,
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + token,
            "content-type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        isTilmeldtDone = true;
      }
    } catch (e) {
      console.log(e);
    }

    if (isTilmeldtDone) {
      redirect("/activitier/" + activityId);
    }
  }

  return (
    <>
      <div
        onClick={handleTilmeldButton}
        className="pl-[5em] absolute bottom-[2em] left-[2em]"
      >
        <Button text={"Tilmeld"} />
      </div>
    </>
  );
}
