"use server";

import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

const GlobalServerProvider: React.FC<Props> = (props) => {
  return <>{props.children}</>;
};

export default GlobalServerProvider;
