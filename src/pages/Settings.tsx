import React, { Suspense, useState } from "react";

import CustomTable from "@/components/organisms/CustomTable";
import PromiseErrorBoundary from "@/components/molecules/CustomTable/PromiseErrorBoundary";

import { userColumns } from "@/models/tables/UsersTable";
import { api } from "@/api/axios";
import { API_ENDPOINTS } from "@/api/constants/endpoints";

import { Spinner } from "@/components/ui/spinner";

import type { ErrorFromPromise } from "@/components/molecules/CustomTable/PromiseErrorBoundary";
import type { UsersTData } from "@/models/tables/UsersTable";
import type { PaginationState } from "@tanstack/react-table";

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

  const [usersPagination, setUsersPagination] = useState<PaginationState>({
    pageSize: 10,
    pageIndex: 0,
  });

  return (
    <>
      <section className="mt-5 w-screen min-h-[500px] rounded-md bg-gray-50/60">
        <Suspense fallback={<Spinner className="size-8" />}>
          <PromiseErrorBoundary<UsersTData[]>
            dataPromise={usersPromise}
            renderChildren={(data) => (
              <CustomTable
                columns={userColumns}
                data={data}
                tableStates={{ pagination: usersPagination }}
                tableSetStates={{ onPaginationChanged: setUsersPagination }}
              />
            )}
          />
        </Suspense>
      </section>
    </>
  );
};

export default Settings;
