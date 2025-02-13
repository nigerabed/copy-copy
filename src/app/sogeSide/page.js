import PageHeader from "@/components/PageHeader";

import { serverFetch } from "@/lib/server-fetch";
import ActivityCard from "@/components/ActivityCard";
import Footer from "@/components/Footer";
import SearchField from "@/components/SearchFeield";

export const metadata = {
  title: "Søge",
  description: "Søge activitere here.",
};

export default async function SogeSide({ searchParams }) {
  let searchedText = searchParams.search;

  const baseUrl = process.env.NEXT_PUBLIC_LANDRUP_API_BASE_URL;
  let allActivities = await serverFetch( `${baseUrl}/api/v1/activities`);

  if(searchedText){
    allActivities = allActivities.filter(activity=> activity.name.toLowerCase().includes(searchedText.toLowerCase()));
  }

  return (
    <>
      <section className="pb-[5em]">
        <PageHeader indhold={<h1 className="text-[1em] text-white">Søg</h1>} />
        <SearchField />
        <ul>
          {allActivities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </ul>
      </section>
      <Footer />
    </>
  );
}
