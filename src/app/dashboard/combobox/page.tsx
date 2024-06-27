"use client"

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CaretSortIcon,CheckIcon } from "@radix-ui/react-icons";

//* Data de combobox 
const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

type Status = {
  value: string;
  label: string;
};


//* Data de popover 
const statuses: Status[] = [
  {
    value: "backlog",
    label: "Backlog",
  },
  {
    value: "todo",
    label: "Todo",
  },
  {
    value: "in progress",
    label: "In Progress",
  },
  {
    value: "done",
    label: "Done",
  },
  {
    value: "canceled",
    label: "Canceled",
  },
];

const Page = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  
  
  const [open2, setOpen2] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<Status | null>(
    null
  );
  return (
    <div className="grid grid-cols-2">
      {/* Combobox */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? frameworks.find((framework) => framework.value === value)?.label
              : "Select framework..."}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search framework..." />

            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>

              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <CheckIcon
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Popover */}
      <div className="flex items-center space-x-4">
        <p className="text-sm text-muted-foreground">Status</p>
        <Popover open={open2} onOpenChange={setOpen2}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="w-[150px] justify-start"
            >
              {selectedStatus ? (
                <>
                  {selectedStatus.label}
                </>
              ) : (
                <>+ Set status</>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0" side="right" align="start">
            <Command>
              <CommandInput placeholder="Change status..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                  {statuses.map((status) => (
                    <CommandItem
                      key={status.value}
                      value={status.value}
                      onSelect={(value) => {
                        setSelectedStatus(
                          statuses.find(
                            (priority) => priority.value === value
                          ) || null
                        );
                        setOpen2(false);
                      }}
                    >
                      <span>{status.label}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export default Page;
