import axios from "axios";

export async function deleteEvent(eventId: string){
    try{
        const response = await axios.delete(
          `http://localhost:3000/events/${eventId}`
        );
        return response;
    }catch(error){
        console.error(error);
    }
}