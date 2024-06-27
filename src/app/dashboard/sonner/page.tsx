"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";


//* Un sonner es un componente de UI que muestra un mensaje temporal en la pantalla. Es como un toast
//* pero con más opciones de personalización.
const Page = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {/* Sonner por defecto */}
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: `Sunday, ${new Date().getFullYear()}, 2023 at 9:00 AM`,
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>

      {/* Sonner ifno, que es de mensaje de info */}
      <Button
        variant="outline"
        onClick={() =>
          toast.info("Event has been created", {
            className: "bg-green-500",
            description: `Sunday, ${new Date().getFullYear()}, 2023 at 9:00 AM`,
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast Success
      </Button>
    </div>
  );
};

export default Page;
