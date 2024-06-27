import { FontBoldIcon, FontItalicIcon, UnderlineIcon } from "@radix-ui/react-icons";

import { Toggle } from "@/components/ui/toggle";

const Page = () => {
  return (
    <div className="flex gap-4">
      <Toggle aria-label="Toggle bold">
        <FontBoldIcon className="h-4 w-4" />
      </Toggle>

      <Toggle variant="outline" aria-label="Toggle italic">
        <FontItalicIcon className="h-4 w-4" />
      </Toggle>

      <Toggle aria-label="Toggle italic">
        <FontItalicIcon className="mr-2 h-4 w-4" />
        Italic
      </Toggle>

      <Toggle size="sm" aria-label="Toggle italic">
        <FontItalicIcon className="h-4 w-4" />
      </Toggle>

      <Toggle size="lg" aria-label="Toggle italic">
        <FontItalicIcon className="h-4 w-4" />
      </Toggle>

      <Toggle aria-label="Toggle underline" disabled>
        <UnderlineIcon className="h-4 w-4" />
      </Toggle>
    </div>
  );
};

export default Page;
