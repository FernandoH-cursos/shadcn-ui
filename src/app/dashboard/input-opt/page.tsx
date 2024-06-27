"use client"

import { useState } from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

/* 
* <InputOTP> es util para 2FA agregando un codigo de verificacion, OPT significa One Time Password que es un
* codigo de verificacion que solo se puede usar una vez.
* 'maxLength' es la cantidad de digitos que se pueden ingresar.
* 'index' es el numero de slot que se esta ingresando.
*/
const Page = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-2 justify-center items-center h-[250px]">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={(value) => setValue(value)}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
        </InputOTPGroup>
        <InputOTPSeparator />

        <InputOTPGroup>
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
        <InputOTPSeparator />

        <InputOTPGroup>
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>

      <div className="block text-center text-sm">
        {value === "" ? (
          <>Enter your one-time password.</>
        ) : (
          <>You entered: {value}</>
        )}
      </div>
    </div>
  );
};

export default Page;
