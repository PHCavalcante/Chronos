import { Dispatch, SetStateAction } from "react";
import { deleteEvent } from "../../services/apiCalls";
import eventTypes from "../types/eventTypes";

type ConfirmationModalProps = {
  openModal: boolean;
  eventId: string;
  setOpenModal: Dispatch<
    SetStateAction<{ newEventModal: boolean; confirmationModal: boolean }>
  >;
  action: string;
};

export default function ConfirmationModal({
  openModal,
  eventId,
  setOpenModal,
  action,
}: ConfirmationModalProps) {
  return (
    <div
      className={
        openModal
          ? "block content-center fixed z-10 left-0 top-0 w-full h-ful overflow-auto bg-[rgba(0,0,0,0.4)] backdrop-blur-sm"
          : "hidden"
      }
    >
      <div className="flex items-center justify-center min-h-screen transform animate-modal transition-all 3s ease-in-out">
        <div className="flex flex-col bg-white w-fit rounded-lg p-4 items-center gap-2">
          <h1 className="font-bold text-2xl">{action} evento</h1>
          <span className="mt-3">
            você tem certeza que deseja {action} este evento?
          </span>
          <div className="flex gap-2">
            <button
              onClick={() =>
                setOpenModal({ newEventModal: false, confirmationModal: false })
              }
              className="h-12 text-lg font-medium rounded-xl my-4 p-2 py-2 bg-gray-200 hover:bg-gray-300"
            >
              Cancelar
            </button>
            <button
              onClick={() => {
                deleteEvent(eventId);
                localStorage.setItem(
                  "events",
                  JSON.stringify(
                    localStorage.removeItem(
                      JSON.parse(localStorage.getItem("events") || "[]").filter(
                        (event: eventTypes) => event._id !== eventId
                      )
                    )
                  )
                );
                setOpenModal({
                  newEventModal: false,
                  confirmationModal: false,
                });
              }}
              className="bg-red-400 hover:bg-red-500 h-12 text-lg text-white p-2 font-medium rounded-xl my-4 py-2"
            >
              Deletar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
