import React from "react";
import style from "./Button.module.scss";

type Props = {
	children: React.ReactNode;
};

export default function Button({ children }: Props) {
	return <div className={`${style.button} ${style.outline}`}>{children}</div>;
}
