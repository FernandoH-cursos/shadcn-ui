"use client"

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

const Page = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([]);

  const smallDate = date?.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div className="flex sm:flex-wrap flex-col sm:flex-row gap-4">
      {/* Muestra calendario con los fin de semanas deshabilitados */}
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
      />
      
      {/* Muestra calendario con las fechas futuras deshabilitadas(a partir de la fecha actual) */}  
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={(date) => date > new Date()}
      />

      {/* Muestra calendario en modo multiple que permite seleccionar varias fechas guardandolas en un arreglo  */}
      <Calendar
        mode="multiple"
        selected={multipleDates}
        onSelect={setMultipleDates}
        className="rounded-md border"
      />

      <div>
        <h1 className="text-3xl">Información</h1>
        <div className="border-b"></div>
        <p>{smallDate}</p>
        <p>{multipleDates?.map((date) => date.toLocaleDateString()).join(", ")}</p>
      </div>
    </div>
  );
}

export default Page;
