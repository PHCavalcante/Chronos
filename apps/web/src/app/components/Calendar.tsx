"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import ptBrlocale from "@fullcalendar/core/locales/pt-br";
import Image from "next/image";
import { Session } from "next-auth";
import { FormatterInput } from "@fullcalendar/core";

export default function Calendar() {
  const events = JSON.parse(localStorage.getItem("events") || "[]");
  const session: Session | null = JSON.parse(
    localStorage.getItem("session") || "null"
  );
  // const handleEventClick = (clickInfo) => {
 
  const titleFormat: FormatterInput = {
    year: "numeric",
    month: "long",
  };

  return (
    <div className="w-full h-full bg-[#DFD6CF] rounded-lg p-[20px] shadow-lg">
      <FullCalendar
        height="100%"
        locale={ptBrlocale}
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventContent={(eventInfo) => {
          return (
            <div
              style={{
                backgroundColor: eventInfo.event.backgroundColor,
                borderColor: eventInfo.event.borderColor,
                color: eventInfo.event.textColor,
              }}
              className="w-full p-1 text-sm flex flex-col justify-between items-center"
            >
              <div className="flex flex-wrap justify-between items-center w-full">
                <h1 className="font-bold">📌 {eventInfo.event.title}</h1>
                <Image
                  src={session?.user?.image || ""}
                  width={35}
                  height={35}
                  alt="Imagem do criador do evento"
                  className="rounded-full"
                />
              </div>
              <span className="self-start px-2">🕒 {eventInfo.timeText}</span>
            </div>
          );
        }}
        selectable={true}
        editable={true}
        headerToolbar={{
          left: "prevYear,prev",
          center: "title",
          right: "next,nextYear",
        }}
        titleFormat={titleFormat}
        footerToolbar={{
          center: "today,dayGridMonth,timeGridWeek,timeGridDay",
        }}
      />
    </div>
  );
}
