import { z } from "zod";
import { createColumnHelper, type ColumnDef } from "@tanstack/react-table";

import FilterColumnTextInput from "@/components/molecules/CustomTable/Controls/FilterTableControls/Inputs/FilterColumnTextInput";

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
    meta: {
      filterComponentFunction: (column) => (
        <FilterColumnTextInput column={column} />
      ),
    },
  }),
  columnHelper.accessor("name", {
    header: "Nominativo",
    meta: {
      filterComponentFunction: (column) => (
        <FilterColumnTextInput column={column} />
      ),
    },
  }),
  columnHelper.accessor("username", {
    header: "Username",
    meta: {
      filterComponentFunction: (column) => (
        <FilterColumnTextInput column={column} />
      ),
    },
  }),
  columnHelper.accessor("role", {
    header: "Ruolo",
    meta: {
      filterComponentFunction: (column) => (
        <FilterColumnTextInput column={column} />
      ),
    },
  }),
  columnHelper.accessor("dateOfBirth", {
    header: "Data di nascita",
    meta: {
      filterComponentFunction: (column) => (
        <FilterColumnTextInput column={column} />
      ),
    },
  }),
  columnHelper.accessor("email", {
    header: "Email",
    meta: {
      filterComponentFunction: (column) => (
        <FilterColumnTextInput column={column} />
      ),
    },
  }),
  columnHelper.group({
    id: "address",
    header: "Indirizzo",
    columns: [
      columnHelper.accessor("address.street", {
        header: "Via",
        meta: {
          filterComponentFunction: (column) => (
            <FilterColumnTextInput column={column} />
          ),
        },
      }),
      columnHelper.accessor("address.suite", {
        header: "Numero civico",
        meta: {
          filterComponentFunction: (column) => (
            <FilterColumnTextInput column={column} />
          ),
        },
      }),
      columnHelper.accessor("address.city", {
        header: "Città",
        meta: {
          filterComponentFunction: (column) => (
            <FilterColumnTextInput column={column} />
          ),
        },
      }),
      columnHelper.accessor("address.zipcode", {
        header: "Codice postale",
        meta: {
          filterComponentFunction: (column) => (
            <FilterColumnTextInput column={column} />
          ),
        },
      }),
      columnHelper.group({
        id: "address.geo",
        header: "Coordinate",
        columns: [
          columnHelper.accessor("address.geo.lat", {
            header: "Lat.",
            meta: {
              filterComponentFunction: (column) => (
                <FilterColumnTextInput column={column} />
              ),
            },
          }),
          columnHelper.accessor("address.geo.lng", {
            header: "Lon.",
            meta: {
              filterComponentFunction: (column) => (
                <FilterColumnTextInput column={column} />
              ),
            },
          }),
        ],
      }),
    ],
  }),
  columnHelper.accessor("phone", {
    header: "Telefono",
    meta: {
      filterComponentFunction: (column) => (
        <FilterColumnTextInput column={column} />
      ),
    },
  }),
  columnHelper.accessor("website", {
    header: "Sito web",
    meta: {
      filterComponentFunction: (column) => (
        <FilterColumnTextInput column={column} />
      ),
    },
  }),
  columnHelper.group({
    id: "company",
    header: "Azienda",
    columns: [
      columnHelper.accessor("company.name", {
        header: "Nome",
        meta: {
          filterComponentFunction: (column) => (
            <FilterColumnTextInput column={column} />
          ),
        },
      }),
      columnHelper.accessor("company.catchPhrase", {
        header: "Slogan",
        enableSorting: false,
        meta: {
          filterComponentFunction: (column) => (
            <FilterColumnTextInput column={column} />
          ),
        },
      }),
      columnHelper.accessor("company.bs", {
        header: "Mission",
        enableSorting: false,
        meta: {
          filterComponentFunction: (column) => (
            <FilterColumnTextInput column={column} />
          ),
        },
      }),
    ],
  }),
] as ColumnDef<UsersTData>[];
