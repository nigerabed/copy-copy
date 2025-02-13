
export const metadata = {
  title: "login side",
  description: "Brugere logind here.",
};
import LoginForm from "@/components/LoginForm";

export default function login() {
   
  return (
    <>
      <section className="relative">
        <div className="bg-[url(/splash-image.jpg)] w-screen bg-cover bg-center h-screen bg-no-repeat">
          <div className="flex justify-center items-center h-screen">
            <div className="h-[95%] w-full bg-[#4e3949] opacity-30 rotate-45 block"></div>
          </div>
        </div>
        <div className="absolute bottom-[22em] flex flex-col justify-center items-start w-full">
          <h1 className="text-white text-[3em] font-semibold ml-[1em]">Log ind</h1>
          <LoginForm/>
          
        </div>
       
      </section>
    </>
  );
}
