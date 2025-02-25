import { useRouter } from "next/router";

export default function Redirect(){
    const router = useRouter();
    router.push("/auth/login");
    return (
        <div>Redirecting...</div>
    );
}