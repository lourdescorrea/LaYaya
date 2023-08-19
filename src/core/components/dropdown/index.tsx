import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "../../utils";

function useOutsideAlerter(ref: any, setX: any) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setX(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setX]);
}

type Props = {
  button?: ReactNode;
  children?: ReactNode;
  className?: string;
  animation?: string | any;
};

export const Dropdown = (props: Props) => {
  const { button, children, className, animation } = props;
  const wrapperRef = useRef(null);
  const [openWrapper, setOpenWrapper] = useState(false);
  useOutsideAlerter(wrapperRef, setOpenWrapper);

  const openClass = openWrapper ? "scale-100" : "scale-0";
  const animationClass = animation
    ? animation
    : "origin-top-right transition-all duration-300 ease-in-out";

  return (
    <div ref={wrapperRef} className="relative flex">
      <div className="flex" onMouseDown={() => setOpenWrapper(!openWrapper)}>
        {button}
      </div>
      <div
        className={cn("absolute z-10", className, openClass, animationClass)}
      >
        {children}
      </div>
    </div>
  );
};
