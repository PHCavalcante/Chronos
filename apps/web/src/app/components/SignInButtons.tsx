"use client";

import Image from "next/image";
import google from "../../assets/google.svg";
import github from "../../assets/github.svg";
import { login } from "../../utils/authFunctions";

export default function SignInButtons() {
  return (
    <div className="flex gap-8 mb-7">
      <button onClick={() => login("google")}>
        <Image src={google} alt="logar com google" />
      </button>
      <button onClick={() => login("github")}>
        <Image src={github} alt="logar com github" />
      </button>
    </div>
  );
}
