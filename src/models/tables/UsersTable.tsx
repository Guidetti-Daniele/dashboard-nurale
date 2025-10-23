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
  }),
  columnHelper.accessor("name", {
    header: "Nominativo",
  }),
  columnHelper.accessor("username", {
    header: "Username",
  }),
  columnHelper.accessor("role", {
    header: "Ruolo",
  }),
  columnHelper.accessor("dateOfBirth", {
    header: "Data di nascita",
  }),
  columnHelper.accessor("email", {
    header: "Email",
  }),
  columnHelper.group({
    id: "address",
    header: "Indirizzo",
    columns: [
      columnHelper.accessor("address.street", {
        header: "Via",
      }),
      columnHelper.accessor("address.suite", {
        header: "Numero civico",
      }),
      columnHelper.accessor("address.city", {
        header: "Città",
      }),
      columnHelper.accessor("address.zipcode", {
        header: "Codice postale",
      }),
      columnHelper.group({
        id: "address.geo",
        header: "Coordinate",
        columns: [
          columnHelper.accessor("address.geo.lat", {
            header: "Lat.",
          }),
          columnHelper.accessor("address.geo.lng", {
            header: "Lon.",
          }),
        ],
      }),
    ],
  }),
  columnHelper.accessor("phone", {
    header: "Telefono",
  }),
  columnHelper.accessor("website", {
    header: "Sito web",
  }),
  columnHelper.group({
    id: "company",
    header: "Azienda",
    columns: [
      columnHelper.accessor("company.name", {
        header: "Nome",
      }),
      columnHelper.accessor("company.catchPhrase", {
        header: "Slogan",
        enableSorting: false,
      }),
      columnHelper.accessor("company.bs", {
        header: "Mission",
        enableSorting: false,
      }),
    ],
  }),
] as ColumnDef<UsersTData>[];
