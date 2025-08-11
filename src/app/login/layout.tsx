import { PropsWithChildren } from "react";

type Props = Readonly<PropsWithChildren>;

export default function Layout(props: Props) {
  return <div>{props.children}</div>;
}
