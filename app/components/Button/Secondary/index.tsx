import { useState, useEffect, useRef } from "react";
import ButtonStyles from "./index.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(ButtonStyles);
export default function Secondary({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={cx(className, {
        button: true,
      })}
    >
      {children}
    </button>
  );
}
