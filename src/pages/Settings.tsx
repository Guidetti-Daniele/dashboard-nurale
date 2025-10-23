import React, { Suspense } from "react";

import CustomTable from "@/components/organisms/CustomTable";
import PromiseErrorBoundary from "@/components/molecules/CustomTable/PromiseErrorBoundary";

import { userColumns } from "@/models/tables/UsersTable";
import { api } from "@/api/axios";
import { API_ENDPOINTS } from "@/api/constants/endpoints";

import { Spinner } from "@/components/ui/spinner";

import type { ErrorFromPromise } from "@/components/molecules/CustomTable/PromiseErrorBoundary";
import type { UsersTData } from "@/models/tables/UsersTable";

const Settings: React.FC = () => {
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

export default Settings;
