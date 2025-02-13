export default function Button({text}) {
  return (
    <>
    <div className="flex justify-center ">
      <button className="bg-[#5E2E53] text-white h-[2em] w-[10em] rounded-lg  text-[1.7em]">
      {text}
      </button>
    </div>
    </>
);
}
