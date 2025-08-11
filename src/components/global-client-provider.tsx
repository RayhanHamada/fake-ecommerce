"use client";

import { PropsWithChildren } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/configs";
import { SnackbarProvider } from "notistack";

type Props = PropsWithChildren<{}>;

const GlobalClientProvider: React.FC<Props> = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider>{props.children}</SnackbarProvider>
    </QueryClientProvider>
  );
};

export default GlobalClientProvider;
