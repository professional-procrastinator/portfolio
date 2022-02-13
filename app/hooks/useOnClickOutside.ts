import { useCallback, useEffect } from "react";

export default function useOnClickOutside(
  ref: React.RefObject<HTMLDivElement>,
  handler: Function
) {
  const handleClick = useCallback(
    (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        return handler(e);
      }

      return;
    },
    [handler, ref]
  );

  useEffect(() => {
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [handleClick]);
}
