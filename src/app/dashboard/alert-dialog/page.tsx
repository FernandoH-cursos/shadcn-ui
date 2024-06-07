"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";
import { useState } from "react";

//* 'onOpenChange' es una funcion que devuelve un booleano que ve si el dialogo esta abierto o cerrado 
//* 'open' es un booleano que maneja el estado del dialogo ya sea abierto o cerrado
const Page = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <div className="grid grid-cols-2 gap-4">
      <AlertDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        // onOpenChange={(open) => console.log({ open })}
      >
        <AlertDialogTrigger asChild>
          <Button variant="outline">Show Dialog</Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>

            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => console.log("cancel")}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => console.log("continue")}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Button onClick={() => setDialogOpen(true)}>Open Dialog Manually</Button>
    </div>
  );
}

export default Page;
