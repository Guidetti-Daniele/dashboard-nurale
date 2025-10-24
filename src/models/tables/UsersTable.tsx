import { z } from "zod";
import { createColumnHelper, type ColumnDef } from "@tanstack/react-table";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const usersTDataModel = z.object({
  id: z.int(),
  name: z.string(),
  username: z.string(),
  role: z.enum(["user", "admin"]),
  dateOfBirth: z.date(),
  email: z.email(),
  address: z.object({
    street: z.string(),
    suite: z.string(),
    city: z.string(),
    zipcode: z.string(),
    geo: z.object({
      lat: z.float64(),
      lng: z.float64(),
    }),
  }),
  phone: z.string(),
  website: z.string(),
  company: z.object({
    name: z.string(),
    catchPhrase: z.string(),
    bs: z.string(),
  }),
});

export type UsersTData = z.infer<typeof usersTDataModel>;

const columnHelper = createColumnHelper<UsersTData>();

export const userColumns: ColumnDef<UsersTData>[] = [
  columnHelper.accessor("id", {
    header: "Id",
    filterFn: "equals",
    enableGlobalFilter: false,
  }),
  columnHelper.accessor("name", {
    header: "Nominativo",
  }),
  columnHelper.accessor("username", {
    header: "Username",
  }),
  columnHelper.accessor("role", {
    header: "Ruolo",
    enableGlobalFilter: false,
  }),
  columnHelper.accessor("dateOfBirth", {
    header: "Data di nascita",
    enableGlobalFilter: false,
  }),
  columnHelper.accessor("email", {
    header: "Email",
  }),
  columnHelper.group({
    id: "address",
    enableGlobalFilter: false,
    header: "Indirizzo",
    columns: [
      columnHelper.accessor("address.street", {
        header: "Via",
        enableGlobalFilter: false,
      }),
      columnHelper.accessor("address.suite", {
        header: "Numero civico",
        enableGlobalFilter: false,
      }),
      columnHelper.accessor("address.city", {
        header: "Città",
        enableGlobalFilter: false,
      }),
      columnHelper.accessor("address.zipcode", {
        header: "Codice postale",
        enableGlobalFilter: false,
      }),
      columnHelper.group({
        id: "address.geo",
        enableGlobalFilter: false,
        header: "Coordinate",
        columns: [
          columnHelper.accessor("address.geo.lat", {
            header: "Lat.",
            enableGlobalFilter: false,
          }),
          columnHelper.accessor("address.geo.lng", {
            header: "Lon.",
            enableGlobalFilter: false,
          }),
        ],
      }),
    ],
  }),
  columnHelper.accessor("phone", {
    header: "Telefono",
    enableGlobalFilter: false,
  }),
  columnHelper.accessor("website", {
    header: "Sito web",
    enableGlobalFilter: false,
  }),
  columnHelper.group({
    id: "company",
    header: "Azienda",
    enableGlobalFilter: false,
    columns: [
      columnHelper.accessor("company.name", {
        header: "Nome",
        enableGlobalFilter: false,
      }),
      columnHelper.accessor("company.catchPhrase", {
        header: "Slogan",
        enableGlobalFilter: false,
        enableSorting: false,
      }),
      columnHelper.accessor("company.bs", {
        header: "Mission",
        enableGlobalFilter: false,
        enableSorting: false,
      }),
    ],
  }),
] as ColumnDef<UsersTData>[];
