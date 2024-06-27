"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";


//* <Slider> es un componente de UI que permite seleccionar un valor numérico dentro de un rango determinado.
//* 'defaultValue' es el valor inicial del slider.
//* 'onValueChange' es una función que se ejecuta cada vez que el valor del slider cambia.
//* 'max' es el valor máximo que puede tener el slider.
//* 'step' es el incremento o decremento que se realiza al mover el slider, por ejemplo, 
//* si el valor es 5, el slider se moverá de 5 en 5.  
const Page = () => {
  const [sliderValue, setSliderValue] = useState(10);
  const [rangeValue, setRangeValue] = useState([10, 20])

  return (
    <div className="grid grid-cols-1 gap-3">
      <span>Slider value: {sliderValue}</span>
      <Slider
        defaultValue={[sliderValue]}
        onValueChange={(value) => setSliderValue(value[0])}
        max={100}
        step={1}
      />

      <span>Slider value: {rangeValue.join(', ')}</span>
      <Slider
        defaultValue={rangeValue}
        onValueChange={setRangeValue}
        max={100}
        step={1}
      />
    </div>
  );
};

export default Page;
