"use server";

import { PropsWithChildren } from "react";

type Props = PropsWithChildren<Record<string, unknown>>;

const GlobalServerProvider: React.FC<Props> = (props) => {
  return <>{props.children}</>;
};

export default GlobalServerProvider;
