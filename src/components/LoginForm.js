"use client";

import { useActionState, useEffect } from "react";
import { userLoginAction } from "../action/userLoginAction";
import Button from "./Button";
import { redirect } from "next/navigation";

export default function LoginForm() {
  const [formState, formAction] = useActionState(userLoginAction, null);

  useEffect(
    function () {
      if (!formState) return;

      if (!formState.success) {
        alert("FEJL!!");
      }

      if (formState.success) {
        redirect("/kalender");
      }
    },
    [formState]
  );
  return (
    <form
      action={formAction}
      method="POST"
      className="w-full flex flex-col justify-center items-center"
    >
      <input
        type="text"
        placeholder="brugernavn"
        className="placeholder:text-slate-400 block bg-white w-[80%] border border-slate-300 rounded-[.2em] 
            py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 
            sm:text-sm mt-[.5em]"
        name="username"
      />
      <span className="text-red-600 text-[.8em] mt-[.3em]">
        {formState?.username?._errors.map((error) => error)}
      </span>

      <input
        type="Password"
        name="password"
        placeholder="adgangskode"
        className="placeholder:text-slate-400 block bg-white w-[80%] border border-slate-300 rounded-[.2em] 
            py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mt-[.5em] mb-[2em]"
      />

      <span className="text-red-600 text-xs mt-[.3em]">
        {formState?.password?._errors.map((error) => error)}
      </span>
      <div className="">
        <Button text={"Log ind"} />
      </div>
    </form>
  );
}
