

export default function KalenderCard({userData}){
   console.log("dataaaa", userData);
   
    return(
        <>
        {userData.activities.map(activity=>
        <div key={activity.id} className="bg-white w-[90%] flex flex-col justify-center items-start h-[8em] mt-[2em] pl-[2em] rounded-lg">
            <h2 className="text-black font-semibold text-[2em]">{activity.name}</h2>
            <p className="font-semibold text-xl">{activity.time}</p>

        </div>)}

        
        </>
    )
}