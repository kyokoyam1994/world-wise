import styles from "./Button.module.css";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  type: "primary" | "back" | "position";
}

export default function Button({ children, onClick, type }: ButtonProps) {
  return (
    <button
      onClick={(e) => onClick?.(e)}
      className={`${styles.btn} ${styles[type]}`}
    >
      {children}
    </button>
  );
}
