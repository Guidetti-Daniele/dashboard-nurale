import React, { Suspense } from "react";

import {
  CustomTable,
  PromiseErrorBoundary,
  Spinner,
  type ErrorFromPromise,
} from "@/components";

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
    <>
      <section className="mt-5 w-screen min-h-[500px] rounded-md bg-gray-50/60 overflow-scroll">
        <Suspense fallback={<Spinner className="size-8" />}>
          <PromiseErrorBoundary<UsersTData[]>
            dataPromise={usersPromise}
            renderChildren={(data) => (
              <CustomTable columns={userColumns} data={data} />
            )}
          />
        </Suspense>
      </section>
    </>
  );
};
