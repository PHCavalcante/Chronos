"use client";

import { useState, useEffect, useRef, lazy } from "react";
import { getSession } from "../../utils/getSession";
import axios from "axios";
import eventTypes from "../types/eventTypes";
import { Session } from "next-auth";
import Image from "next/image";
import edit from "../../assets/edit.svg";
import trash from "../../assets/delete.svg";
import plus from "../../assets/plus.svg";

const Modal = lazy(() => import("../components/Modal"));
const ConfirmationModal = lazy(() => import("../components/ConfirmationModal"));

export default function SideMenu() {
  const [events, setEvents] = useState<eventTypes[]>([]);
  const [session, setSession] = useState<Session | null>(null);
  const [openModal, setOpenModal] = useState({
    newEventModal: false,
    confirmationModal: false,
  });
  const [showContextButtons, setShowContextButtons] = useState<string | null>(null);
  const eventId = useRef<string>("");
  const action = useRef<string>("");
   useEffect(() => {
     const fetchSession = async () => {
       const userSession = await getSession();
       setSession(userSession);
       localStorage.setItem("session", JSON.stringify(userSession));
     };

     fetchSession();
   }, []);
   
  useEffect(() => {
    const fetchEvents = async () => {
    try{
        const response = await axios.get(`http://localhost:3000/events/`);
        setEvents(response.data);   
        localStorage.setItem("events", JSON.stringify(response.data));
    } catch (error){
        console.error(error);
    }
  }
    fetchEvents();
  });

  function parseData() {
    if (!events) return;
    if (events.length == 0) return <li className="text-center my-auto">Não há eventos programados</li>;
    return events.filter((event: eventTypes) => event.userEmail === session?.user?.email).map((event: eventTypes) => {
      return (
        <li
          className="w-full flex justify-between hover:bg-[#ebe5e2] my-1 transition-all ease-in duration-400"
          onMouseOver={() => setShowContextButtons(event.title)}
          onMouseLeave={() => setShowContextButtons(null)}
          key={event._id}
        >
          <div className="flex flex-col items-cente content-center px-2">
            <h2 className="font-bold text-lg">{event.title}</h2>
            <span className="flex justify-evenly opacity-60">
              <span>
                {new Date(event.start).toLocaleTimeString("pt-BR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
              <span>-</span>
              <span>
                {new Date(event.end).toLocaleTimeString("pt-BR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </span>
          </div>
          {showContextButtons == event.title && (
            <div className="flex gap-2 px-2 transition-all ease duration-400">
              <button
                onClick={() => {
                  eventId.current = event._id;
                  setOpenModal({ ...openModal, newEventModal: true });
                  action.current = "Editar";
                }}
              >
                <Image src={edit} alt="Editar evento" width={20} height={20} />
              </button>
              <button
                onClick={() => {
                  eventId.current = event._id;
                  setOpenModal({ ...openModal, confirmationModal: true });
                }}
              >
                <Image
                  src={trash}
                  alt="Deletar evento"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          )}
        </li>
      );
    });
  }

  return (
    <div className="min-w-[336px] h-full flex flex-col p-4 bg-[#DFD6CF] border shadow-lg rounded-lg">
      <h1 className="text-xl font-medium">Algum novo evento em mente?</h1>
      <button
        onClick={() => {
          setOpenModal({ ...openModal, newEventModal: true });
          action.current = "Adicionar";
        }}
        className="flex items-center px-2 gap-2 bg-[#8067A9]/80 hover:bg-[#8067A9] h-12 text-2xl text-[#F6F1EE] font-medium rounded-xl my-7 py-2 transition-all ease-in-out duration-200"
      >
        <Image src={plus} alt="Icone adicionar evento" width={30} height={30} />
        Adicionar Evento
      </button>
      <div className="flex flex-col w-full h-full rounded-xl bg-[#F6F4F0]/40">
        <h2 className="text-lg font-medium text-center my-2 opacity-40">
          Todos os eventos
        </h2>
        <ul className="w-full h-full flex flex-col items-center">
          {parseData()}
        </ul>
      </div>
      {session && (
        <Modal
          openModal={openModal.newEventModal}
          eventId={eventId.current}
          action={action.current}
          setOpenModal={setOpenModal}
          sessionUserEmail={session.user?.email}
        />
      )}
      <ConfirmationModal
        openModal={openModal.confirmationModal}
        eventId={eventId.current}
        setOpenModal={setOpenModal}
        action="Deletar"
      />
    </div>
  );
}
