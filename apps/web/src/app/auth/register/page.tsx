"use server";

import Link from "next/link";
import SignInButtons from "../../components/SignInButtons";

export default async function RegisterPage(){
    return (
      <div className="w-full h-full items-center justify-center flex">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-5xl">Bem vindo!</h1>
          <div className="flex flex-col my-11">
            <label htmlFor="" className="text-xl">
              E-mail
            </label>
            <input
              type="email"
              className="bg-transparent border-b-[3px] border-black focus:outline-none mb-7"
              placeholder="Ex: joaocarlos123@gmail.com"
            />
            <label htmlFor="" className="text-xl">
              Senha
            </label>
            <input
              type="password"
              className="bg-transparent border-b-[3px] border-black focus:outline-none mb-7"
              placeholder="Ex: ********"
            />
            <label htmlFor="" className="text-xl">
              Confirme a senha
            </label>
            <input
              type="password"
              className="bg-transparent border-b-[3px] border-black focus:outline-none"
              placeholder="Repita a senha"
            />
          </div>
          <button className="w-44 bg-[#8067A9] text-white rounded-[15px] text-2xl py-2 mb-7">
            REGISTRAR
          </button>
          <div className="w-full flex items-center mb-7 gap-4">
            <hr className="w-full border border-black" />
            <span className="text-sm">OU</span>
            <hr className="w-full border border-black" />
          </div>
          <SignInButtons />
          <span>
            Já possui conta?{" "}
            <Link href="./login" className="font-bold">
              Faça Login
            </Link>
          </span>
        </div>
      </div>
    );
}