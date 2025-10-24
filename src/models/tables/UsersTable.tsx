import { z } from "zod";
import { createColumnHelper, type ColumnDef } from "@tanstack/react-table";

import { FilterColumnInputField } from "@/components";

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
    meta: {
      filterComponentFunction: (column) => (
        <FilterColumnInputField column={column} type="text" />
      ),
    },
  }),
  columnHelper.accessor("name", {
    header: "Nominativo",
    meta: {
      filterComponentFunction: (column) => (
        <FilterColumnInputField column={column} type="text" />
      ),
    },
  }),
  columnHelper.accessor("username", {
    header: "Username",
    meta: {
      filterComponentFunction: (column) => (
        <FilterColumnInputField column={column} type="text" />
      ),
    },
  }),
  columnHelper.accessor("role", {
    header: "Ruolo",
    enableGlobalFilter: false,
    meta: {
      filterComponentFunction: (column) => (
        <FilterColumnInputField column={column} type="text" />
      ),
    },
  }),
  columnHelper.accessor("dateOfBirth", {
    header: "Data di nascita",
    enableGlobalFilter: false,
    meta: {
      filterComponentFunction: (column) => (
        <FilterColumnInputField column={column} type="text" />
      ),
    },
  }),
  columnHelper.accessor("email", {
    header: "Email",
    meta: {
      filterComponentFunction: (column) => (
        <FilterColumnInputField column={column} type="text" />
      ),
    },
  }),
  columnHelper.group({
    id: "address",
    enableGlobalFilter: false,
    header: "Indirizzo",
    columns: [
      columnHelper.accessor("address.street", {
        header: "Via",
        enableGlobalFilter: false,
        meta: {
          filterComponentFunction: (column) => (
            <FilterColumnInputField column={column} type="text" />
          ),
        },
      }),
      columnHelper.accessor("address.suite", {
        header: "Numero civico",
        enableGlobalFilter: false,
        meta: {
          filterComponentFunction: (column) => (
            <FilterColumnInputField column={column} type="text" />
          ),
        },
      }),
      columnHelper.accessor("address.city", {
        header: "Città",
        enableGlobalFilter: false,
        meta: {
          filterComponentFunction: (column) => (
            <FilterColumnInputField column={column} type="text" />
          ),
        },
      }),
      columnHelper.accessor("address.zipcode", {
        header: "Codice postale",
        enableGlobalFilter: false,
        meta: {
          filterComponentFunction: (column) => (
            <FilterColumnInputField column={column} type="text" />
          ),
        },
      }),
      columnHelper.group({
        id: "address.geo",
        enableGlobalFilter: false,
        header: "Coordinate",
        columns: [
          columnHelper.accessor("address.geo.lat", {
            header: "Lat.",
            enableGlobalFilter: false,
            meta: {
              filterComponentFunction: (column) => (
                <FilterColumnInputField column={column} type="text" />
              ),
            },
          }),
          columnHelper.accessor("address.geo.lng", {
            header: "Lon.",
            enableGlobalFilter: false,
            meta: {
              filterComponentFunction: (column) => (
                <FilterColumnInputField column={column} type="text" />
              ),
            },
          }),
        ],
      }),
    ],
  }),
  columnHelper.accessor("phone", {
    header: "Telefono",
    enableGlobalFilter: false,
    meta: {
      filterComponentFunction: (column) => (
        <FilterColumnInputField column={column} type="text" />
      ),
    },
  }),
  columnHelper.accessor("website", {
    header: "Sito web",
    enableGlobalFilter: false,
    meta: {
      filterComponentFunction: (column) => (
        <FilterColumnInputField column={column} type="text" />
      ),
    },
  }),
  columnHelper.group({
    id: "company",
    header: "Azienda",
    enableGlobalFilter: false,
    columns: [
      columnHelper.accessor("company.name", {
        header: "Nome",
        enableGlobalFilter: false,
        meta: {
          filterComponentFunction: (column) => (
            <FilterColumnInputField column={column} type="text" />
          ),
        },
      }),
      columnHelper.accessor("company.catchPhrase", {
        header: "Slogan",
        enableGlobalFilter: false,
        enableSorting: false,
        meta: {
          filterComponentFunction: (column) => (
            <FilterColumnInputField column={column} type="text" />
          ),
        },
      }),
      columnHelper.accessor("company.bs", {
        header: "Mission",
        enableGlobalFilter: false,
        enableSorting: false,
        meta: {
          filterComponentFunction: (column) => (
            <FilterColumnInputField column={column} type="text" />
          ),
        },
      }),
    ],
  }),
] as ColumnDef<UsersTData>[];
