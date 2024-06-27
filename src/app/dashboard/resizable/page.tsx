import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";


//* Resizable es un componente que permite redimensionar los paneles hijos
//* Es utilizado para crear interfaces de usuario con paneles redimensionables
//* Los paneles pueden ser redimensionados vertical u horizontalmente
//* Los paneles hijos pueden ser anidados dentro de otros paneles
//* 'defaultSize' es la propiedad que define el tamaño inicial del panel  
const Page = () => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Page;
