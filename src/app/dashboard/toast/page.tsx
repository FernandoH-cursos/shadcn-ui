"use client";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

//* Un toast es un componente de UI que muestra un mensaje temporal en la pantalla. Es como un sonner
//* pero con menos opciones de personalización.  
const Page = () => {
  const { toast } = useToast();
  return (
    <div className="grid grid-cols-4 gap-4">
      {/* toast con accion */}
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Scheduled: Catch up ",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          });
        }}
      >
        Add to calendar
      </Button>

      {/* Toast destructivo (de error) */}
      <Button
        variant="outline"
        onClick={() => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }}
      >
        Destructive
      </Button>

      {/* Toast success (de exito) */}
      <Button
        variant="outline"
        onClick={() => {
          toast({
            variant: "success",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          });
        }}
      >
        Success
      </Button>
    </div>
  );
};

export default Page;
