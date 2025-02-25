import { Dispatch, SetStateAction, useRef } from "react";
import axios from "axios";

type ModalProps = {
    openModal: boolean;
    eventId: string;
    action: string;
    setOpenModal: Dispatch<SetStateAction<{newEventModal: boolean; confirmationModal: boolean}>>;
    sessionUserEmail: string | null | undefined;
};

export default function Modal({openModal, eventId, action, setOpenModal, sessionUserEmail} : ModalProps) {
    const eventData = useRef({
      userEmail: sessionUserEmail,
      title: "",
      start: "",
      end: "",
      backgroundColor: "#8067A9",
      borderColor: "#BFB0D2",
      textColor: "#ffffff",
    });
    return (
      <div
        className={
          openModal
            ? "block content-center fixed z-10 left-0 top-0 w-full h-ful overflow-auto bg-[rgba(0,0,0,0.4)] backdrop-blur-sm"
            : "hidden"
        }
      >
        <div className="flex items-center justify-center min-h-screen transform animate-modal transition-all 3s ease-in-out">
          <div className="bg-[#F6F4F0] w-1/2 h-1/2 rounded-lg p-5">
            <div className="flex justify-between items-center mb-7">
              <h1 className="text-2xl font-semibold">{action} Evento</h1>
              <span
                onClick={() =>
                  setOpenModal({
                    newEventModal: false,
                    confirmationModal: false,
                  })
                }
                className="font-bold text-3xl cursor-pointer"
              >
                &#9747;
              </span>
            </div>
            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Título"
                className="border border-gray-300 rounded-lg p-2 bg-[#DFD6CF]"
                required
                onChange={(e) => {
                  eventData.current.title = e.target.value;
                }}
              />
              <div className="flex justify-evenly gap-5 items-center">
                <div className="flex items-center gap-2">
                  <label htmlFor="start">Início</label>
                  <input
                    id="start"
                    type="datetime-local"
                    placeholder="Data"
                    required
                    className="border border-gray-300 rounded-lg p-2 bg-[#DFD6CF]"
                    onChange={(e) => {
                      eventData.current.start = e.target.value;
                    }}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="end">Fim</label>
                  <input
                    id="end"
                    type="datetime-local"
                    placeholder="Data"
                    required
                    className="border border-gray-300 rounded-lg p-2 bg-[#DFD6CF]"
                    onChange={(e) => {
                      eventData.current.end = e.target.value;
                    }}
                  />
                </div>
              </div>
              <div className="w-full justify-evenly flex items-center">
                <div className="flex gap-2 items-center">
                  <label htmlFor="backgroundColor">Cor de fundo:</label>
                  <input
                    id="backgroundColor"
                    type="color"
                    value={eventData.current.backgroundColor}
                    onChange={(e) => {
                      eventData.current.backgroundColor = e.target.value;
                    }}
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <label htmlFor="backgroundColor">Cor da borda:</label>
                  <input
                    id="borderColor"
                    type="color"
                    value={eventData.current.borderColor}
                    onChange={(e) => {
                      eventData.current.borderColor = e.target.value;
                    }}
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <label htmlFor="backgroundColor">Cor do titulo:</label>
                  <input
                    id="titleColor"
                    type="color"
                    value={eventData.current.textColor}
                    onChange={(e) => {
                      eventData.current.textColor = e.target.value;
                    }}
                  />
                </div>
              </div>
              <button
                onClick={
                  action === "Adicionar"
                    ? () => {
                        axios.post(`https://chronos-api-mbtd.onrender.com/events`, {
                          userEmail: eventData.current.userEmail,
                          title: eventData.current.title,
                          start: eventData.current.start,
                          end: eventData.current.end,
                          backgroundColor: eventData.current.backgroundColor,
                          borderColor: eventData.current.borderColor,
                          textColor: eventData.current.textColor,
                        });
                        setOpenModal({newEventModal: false, confirmationModal: false});
                      }
                    : action === "Editar"
                      ? () => {
                          axios.put(
                            `https://chronos-api-mbtd.onrender.com/events/${eventId}`,
                            {
                              userEmail: eventData.current.userEmail,
                              title: eventData.current.title,
                              start: eventData.current.start,
                              end: eventData.current.end,
                              backgroundColor:
                                eventData.current.backgroundColor,
                              borderColor: eventData.current.borderColor,
                              textColor: eventData.current.textColor,
                            }
                          );
                          setOpenModal({
                            newEventModal: false,
                            confirmationModal: false,
                          });
                        }
                      : () => null
                }
                className="bg-[#8067A9] text-white h-12 text-2xl font-medium rounded-xl my-7 py-2"
              >
                {action} Evento
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}