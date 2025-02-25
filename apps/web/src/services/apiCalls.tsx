import axios from "axios";

export async function deleteEvent(eventId: string){
    try{
        const response = await axios.delete(
          `https://chronos-api-mbtd.onrender.com/events/${eventId}`
        );
        return response;
    }catch(error){
        console.error(error);
    }
}