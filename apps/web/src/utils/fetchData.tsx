// import getSession from "./getSession";
// import axios from "axios";

// export default async function fetchData() {

//     // const handle = async (req: Request, res: Response) => {
//     //     const sessionResponse = await getSession(req);
//     //     return sessionResponse
//     // }

//     const session = await getSession();
//     if (!session) return;
//     const response = await axios.get(`http://localhost:3000/events/${session.user?.id}`);
//     return response.data;
// }