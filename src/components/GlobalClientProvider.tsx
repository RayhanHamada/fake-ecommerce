"use client";

import { PropsWithChildren } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/configs";

type Props = PropsWithChildren<{}>;

const GlobalClientProvider: React.FC<Props> = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
};

export default GlobalClientProvider;
