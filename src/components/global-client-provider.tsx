"use client";

import { PropsWithChildren } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/configs";
import { SnackbarProvider } from "notistack";
import { NuqsAdapter } from "nuqs/adapters/next/app";

type Props = PropsWithChildren<{}>;

const GlobalClientProvider: React.FC<Props> = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider>
        <NuqsAdapter>{props.children}</NuqsAdapter>
      </SnackbarProvider>
    </QueryClientProvider>
  );
};

export default GlobalClientProvider;
