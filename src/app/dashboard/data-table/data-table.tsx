"use client";

import { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import type{ Payment } from "@/data/payments.data";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

//? El hook 'useReactTable' nos permite crear una tabla de datos con paginación y selección de filas. Sus opciones hacen lo siguiente:

//* data: Los datos que se mostrarán en la tabla.
//* columns: Las columnas que se mostrarán en la tabla.
//* getCoreRowModel: La función que se encarga de crear el modelo de fila básico.
//* getPaginationRowModel: La función que se encarga de crear el modelo de fila con paginación.

//* onSortingChange: La función que se ejecuta cuando cambia el orden de las filas.
//* getSortedRowModel: La función que se encarga de crear el modelo de fila ordenado.

//* onColumnFiltersChange: La función que se ejecuta cuando cambian los filtros de columna.
//* getFilteredRowModel: La función que se encarga de crear el modelo de fila filtrado.

//* onColumnVisibilityChange: La función que se ejecuta cuando cambia la visibilidad de las columnas.

//* onRowSelectionChange: La función que se ejecuta cuando cambia la selección de filas.

//* state: El estado de la tabla, que incluye el orden de las filas, los filtros de columna, visibilidad de columnas, 
//* selección de filas.
export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const [currentStatus, setCurrentStatus] = useState("all");
  //* Devuelve 'true' si hay filas seleccionadas para que aparezca el botón 'Delete'
  const isDeleteVisible = Object.keys(rowSelection).length > 0;

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),

    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),

    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),

    onColumnVisibilityChange: setColumnVisibility,

    onRowSelectionChange: setRowSelection,

    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  // TODO: Filtro por columna
  //? 'table.getColumn("columna")?.getFilterValue()'
  //* - Permite obtener el valor del filtro de una columna.
  //? 'table.getColumn("columna")?.setFilterValue(valor)'
  //* - Permite establecer el valor del filtro de una columna.

  // TODO: Paginación
  //? 'table.previousPage()'
  //* - Permite ir a la página anterior.
  //? 'table.getCanPreviousPage()'
  //* - Permite saber si se puede ir a la página anterior.
  //? 'table.nextPage()'
  //* - Permite ir a la página siguiente.
  //? 'table.getCanNextPage()'
  //* - Permite saber si se puede ir a la página siguiente.

  // TODO: Visibilidad de columnas
  //? 'table.getAllColumns()'
  //* - Permite obtener todas las columnas de la tabla.
  //? 'column.getCanHide()'
  //* - Permite saber si una columna se puede ocultar.
  //? 'column.getIsVisible()'
  //* - Permite saber si una columna está visible.
  //? 'column.toggleVisibility(estado)'
  //* - Permite cambiar la visibilidad de una columna.

  // TODO: Selección de filas
  //? 'table.getSelectedRowModel()'
  //* - Permite obtener las filas seleccionadas.

  return (
    <div>
      <div className="flex items-center justify-between gap-4 py-4">
        <Input
          placeholder="Filter anything... (client name, email, status)"
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) => {
            //* Permite que al escribir en el filtro de 'email' quite el filtro de la columna 'status' en el elemento 'Select'
            setCurrentStatus("all");
            //* Permite que al escribir en el filtro de 'email' se reestablezcan las filas filtradas por el 'status'
            table.getColumn("status")?.setFilterValue(undefined);

            //* Permite que al escribir en el filtro de 'email' se filtren las filas por el 'email' ingresado
            table.getColumn("email")?.setFilterValue(event.target.value);
          }}
          className="max-w-sm"
        />

        <Select
          value={currentStatus}
          onValueChange={(value) => {
            if (value === "all") {
              //* Permite que al seleccionar 'all' se reestablezca el filtro de la columna 'status'
              table.getColumn("status")?.setFilterValue(undefined);
              //* Permite que al seleccionar 'all' en el select en este aparezca 'All'
              setCurrentStatus("all");

              return;
            }

            //* Permite que al seleccionar un estado se filtre las filas por el 'status' seleccionado
            table.getColumn("status")?.setFilterValue(value);
            //* Estableciendo el valor del filtro de la columna 'status' en el elemento 'Select'
            setCurrentStatus(value);

            //* Estableciendo la visibilidad de la columna 'status' en 'true' para que aparezca en la tabla al seleccionar un estado
            setColumnVisibility((prev) => ({
              ...prev,
              status: true,
            }));
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status - All" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              <SelectItem value="all" className="text-sm">
                All
              </SelectItem>

              <SelectItem value="pending" className="text-sm">
                Pending
              </SelectItem>

              <SelectItem value="processing" className="text-sm">
                Processing
              </SelectItem>

              <SelectItem value="success" className="text-sm">
                Success
              </SelectItem>

              <SelectItem value="failed" className="text-sm">
                Failed
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {isDeleteVisible && <Button variant="destructive" onClick={() => {
          //* Permite eliminar las filas seleccionadas
          const ids = table.getSelectedRowModel().rows.map((row) => (row.original as Payment).clientName);

          console.log(ids);
        }}>
          Delete
        </Button>}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              //* Filtrando las columnas que se pueden ocultar
              .filter((column) => column.getCanHide())
              //* Filtrando las columnas que no son 'actions'
              .filter((column) => column.id !== "actions")
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <div className="space-x-2 py-4 mx-2 flex justify-between items-center">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>

          <div className="flex items-center justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>

        <Select onValueChange={(value) => {
          //* Permite cambiar el número de filas por página
          table.setPageSize(parseInt(value));
        }}>
          <SelectTrigger className="w-[11.25rem] m-2">
            <SelectValue placeholder="10 Rows"/>
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectLabel>Rows per page</SelectLabel>
              <SelectItem value="10">
                10
              </SelectItem>
              <SelectItem value="20">
                20
              </SelectItem>
              <SelectItem value="30">
                30
              </SelectItem>
              <SelectItem value="50">
                50
              </SelectItem>
              <SelectItem value="100">
                100
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

    </div>
  );
}
