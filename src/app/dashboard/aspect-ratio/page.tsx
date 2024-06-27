import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";


//* El componente AspectRatio es un contenedor que mantiene la relación de aspecto de su hijo.
//* Puede ser útil para contener imágenes, videos, iframes, etc.
//* El ratio 16/9 es el ratio de aspecto de una pantalla de televisión estándar.
//* 'fill' es una propiedad de la imagen que hace que la imagen se ajuste al contenedor. 
export default function Page() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted">
      <Image
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        fill
        className="rounded-md object-cover"
      />
    </AspectRatio>
  );
}
