import Link from "next/link";
import SignInButtons from "../../components/SignInButtons";

export default function LoginPage() {
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
            className="bg-transparent border-b-[3px] border-black focus:outline-none"
            placeholder="Ex: ********"
          />
        </div>
        <button className="w-44 bg-[#8067A9] text-white rounded-[15px] text-2xl py-2 mb-7">
          LOGAR
        </button>
        <div className="w-full flex items-center mb-7 gap-4">
          <hr className="w-full border border-black" />
          <span className="text-sm">OU</span>
          <hr className="w-full border border-black" />
        </div>
        <SignInButtons />
        <span>
          Não possui conta?{" "}
          <Link href="./register" className="font-bold">
            Registre-se
          </Link>
        </span>
      </div>
    </div>
  );
}
