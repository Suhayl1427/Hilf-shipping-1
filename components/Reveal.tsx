import { createElement } from "react";

type Props = {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  delay?: number | string;
  children?: React.ReactNode;
} & Record<string, unknown>;

/** Fade-up reveal; the observer in useReveal adds `is-in`. */
export default function Reveal({ as = "div", className = "", delay = 0, children, ...rest }: Props) {
  const d = typeof delay === "number" ? `${delay}s` : delay;
  return createElement(
    as,
    { ...rest, className: `reveal ${className}`, style: { ["--reveal-delay" as string]: d } },
    children,
  );
}

/** Hairline that draws in from the left. */
export function Rule({ delay = 0, className = "" }: { delay?: number | string; className?: string }) {
  const d = typeof delay === "number" ? `${delay}s` : delay;
  return <span aria-hidden="true" className={`rule reveal-rule ${className}`} style={{ ["--reveal-delay" as string]: d }} />;
}
