declare module "tinymotion-react" {
  interface MotionOptions {
    repeat?: boolean;
    rollback?: boolean;
    instantRollback?: boolean;
    delay?: number;
    stepDelay?: number;
    factor?: number;
    skip?: number;
    duration?: number;
    ease?: "ease-in-out" | "ease-in" | "ease-out" | "ease-linear";
  }

  interface MotionProps {
    children?: React.ReactNode;
    className?: string;
    tag?: keyof HTMLElementTagNameMap;
    auto?: string[];
    click?: string[];
    hover?: string[];
    target?: string[];
    value?: number | string | boolean;
    options?: MotionOptions;
  }

  export const Motion: (props: MotionProps) => JSX.Element;
}
