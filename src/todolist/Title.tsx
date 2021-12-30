import * as React from "react";

type Props = {
  title: string;
};

export function Title(props: Props) {
  return <h1>{props.title}</h1>;
}
