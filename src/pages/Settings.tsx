import React, { Suspense } from "react";

import CustomTable from "@/components/organisms/CustomTable";
import PromiseErrorBoundary from "@/components/molecules/CustomTable/PromiseErrorBoundary";

import { userColumns } from "@/models/tables/UsersTable";
import { api } from "@/api/axios";
import { API_ENDPOINTS } from "@/api/constants/endpoints";

import type { UsersTData } from "@/models/tables/UsersTable";
import type { ErrorFromPromise } from "@/components/molecules/CustomTable/PromiseErrorBoundary";
import { Spinner } from "@/components/ui/spinner";

const Settings: React.FC = () => {
  const usersPromise = api
    .get(API_ENDPOINTS.users)
    .then((response) => response.data as UsersTData[])
    // Test the Loading Spinner
    // .then(
    //   (data) =>
    //     new Promise<UsersTData[]>((resolve) =>
    //       setTimeout(() => resolve(data), 10000)
    //     )
    // )
    // Test the error boundary
    // .then(() => {
    //   throw new Error("ciao");
    // })
    .catch((error) => {
      return { error } as ErrorFromPromise;
    });

  return (
    <>
      <section className="mt-5 w-screen min-h-[500px] border-1 border-black rounded-md bg-gray-50/60 flex justify-center items-center">
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
