import { FontBoldIcon, FontItalicIcon, UnderlineIcon } from "@radix-ui/react-icons";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const Page = () => {
  return (
    <div className="flex flex-col gap-4">
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <FontBoldIcon className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <FontItalicIcon className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <UnderlineIcon className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>

      <ToggleGroup variant="outline" type="multiple">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <FontBoldIcon className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <FontItalicIcon className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <UnderlineIcon className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>

      <ToggleGroup type="single">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <FontBoldIcon className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <FontItalicIcon className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <UnderlineIcon className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>

      <ToggleGroup size={"sm"} type="multiple">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <FontBoldIcon className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <FontItalicIcon className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="unlgderline" aria-label="Toggle underline">
          <UnderlineIcon className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>

      <ToggleGroup size={"sm"} type="multiple">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <FontBoldIcon className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <FontItalicIcon className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <UnderlineIcon className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>

      <ToggleGroup type="single" disabled>
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <FontBoldIcon className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <FontItalicIcon className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <UnderlineIcon className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default Page;
