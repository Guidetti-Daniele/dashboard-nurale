import React from "react";

import { AsyncCustomTable, type ErrorFromPromise } from "@/components";

import { api, API_ENDPOINTS } from "@/api";
import { userColumns, type UsersTData } from "@/models";

export const Settings: React.FC = () => {
  const usersPromise = api
    .get(API_ENDPOINTS.users)
    .then((response) => response.data as UsersTData[])
    .catch((error) => {
      return { error } as ErrorFromPromise;
    });

  return (
    <AsyncCustomTable<UsersTData>
      dataPromise={usersPromise}
      columns={userColumns}
    />
  );
};
