"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";

import { Payment } from "@/data/payments.data";

import {
  ArrowDownIcon,
  ArrowUpIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";

import { ColumnDef, FilterFn, Row, SortDirection } from "@tanstack/react-table";
import { toast } from "sonner";

type StatusVariant = {
  [key: string]: "secondary" | "info" | "success" | "destructive";
};

//* Esta función personalizada permite filtrar por múltiples valores en una sola celda.
//* Cuando devuelve 'true', la fila se muestra en la tabla, de lo contrario, se oculta. 
const myCustomFilterFn: FilterFn<Payment> = (
  row: Row<Payment>,
  columnId: string,
  filterValue: any,
  addMeta: (meta: any) => void
) => {
  //* 'filterValue' es el valor del filtro, es decir, el valor que se ingresa en el campo de búsqueda 
  filterValue = filterValue.toLowerCase();
  //* Guarda los valores del filtro en un array
  const filterParts = filterValue.split(" ");
  //* Guarda los valores de la fila en un string 
  const rowValues = `${row.original.email} ${row.original.clientName} ${row.original.status}`.toLowerCase();


  //* Devuelve verdadero si todos los valores del filtro están presentes en la fila 
  return filterParts.every((part: string) => rowValues.includes(part));;
};

const SortedIcon = ({ isSorted }: { isSorted: SortDirection | false }) => {
  if (isSorted === "asc") {
    return <ArrowUpIcon className="h-4 w-4" />;
  }

  if (isSorted === "desc") {
    return <ArrowDownIcon className="h-4 w-4" />;
  }

  return null;
};

export const columns: ColumnDef<Payment>[] = [
  //* 'table.getIsAllPageRowsSelected()' permite seleccionar todas las filas de la página actual
  //* 'table.getIsSomePageRowsSelected()' permite seleccionar algunas filas de la página actual
  //* 'table.toggleAllPageRowsSelected()' permite alternar la selección de todas las filas de la página actual
  //* 'row.getIsSelected()' permite seleccionar una fila
  //* 'row.toggleSelected()' permite alternar la selección de una fila
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    //* Permite deshabilitar la funcionalidad de ordenar la selección de filas
    enableSorting: false,
    //* Permite deshabilitar la funcionalidad de ocultar la columna de selección de filas
    enableHiding: false,
  },
  //* 'column.toggleSorting(boolean)' permite alternar el ordenamiento de la columna
  //* 'column.getIsSorted()' permite obtener el estado de ordenamiento de la columna ya sea 'asc', 'desc' o 'false'
  {
    accessorKey: "clientName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Client Name
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
    cell: ({ row }) => {
      //* Creando variantes de Badge por estado de pago
      const status = row.getValue("status") as string;

      const statusVariant: StatusVariant = {
        pending: "secondary",
        processing: "info",
        success: "success",
        failed: "destructive",
      };

      return (
        <Badge variant={statusVariant[status] ?? "default"} capitalize>
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <div className="flex justify-end">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "email",
    //* 'filterFn' permite aplicar un filtro personalizado a la columna
    filterFn: myCustomFilterFn,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(payment.id);

                toast("Payment ID copied to clipboard", {
                  position: "top-right",
                });
              }}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
