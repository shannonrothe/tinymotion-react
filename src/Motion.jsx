import React, { useEffect, useRef } from "react";
import Animator from "./animator";

const Motion = (props) => {
  const containerRef = useRef(null);
  let parameters = {
    hover: [],
    click: [],
    trigger: [],
    auto: [],

    instantRollback: false,
    rollback: true,
    repeat: false,
    factor: 0,
    delay: 0,
    stepDelay: 0,
    skip: 0,

    duration: 300,
    ease: "ease-in-out",
  };
  const animators = [];
  const activated = false;

  useEffect(() => {
    setup();

    return () => {
      animators.forEach((animator) => animator.destroyListeners());
    };
  }, []);

  const setup = () => {
    parameters = {
      ...parameters,
      ...props.options,
      trigger: props.trigger || parameters.trigger,
      hover: props.hover || parameters.hover,
      click: props.click || parameters.click,
      auto: props.auto || parameters.auto,
    };

    if (parameters.repeat && !props.options.rollback) {
      parameters.rollback = false;
    }

    addAnimationClasses();
    initAnimators();
  };

  const initAnimators = () => {
    ["hover", "click", "trigger", "auto"].forEach((action) => {
      if (parameters[action].length) {
        const animator = new Animator(
          containerRef.current,
          parameters,
          props.value,
          action
        );

        animator.setup();
        animators.push(animator);
      }
    });
  };

  const addAnimationClasses = () => {
    containerRef.current.classList.add("transition-all");
    containerRef.current.classList.add("transform");
    containerRef.current.classList.add(parameters.ease);
  };

  return React.createElement(props.tag, {
    children: props.children,
    ref: containerRef,
    className: props.className,
  });
};

export default Motion;
