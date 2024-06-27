"use client"

import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

//* 'side' permite que el contenido de la hoja se muestre en la parte superior, derecha, inferior 
//* o izquierda de la pantalla.
const Page = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="grid grid-cols-2 gap-3">

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger onClick={() => setOpen(true)}>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">{side}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when youre done.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
};

export default Page;
