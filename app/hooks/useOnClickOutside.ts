import React, { useCallback, useEffect } from 'react';

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

  const handleKeyDown = (e: any) => {
    if (e.key === 'Escape') {
      return handler(e);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick, true);
    document.addEventListener('keydown', handleKeyDown, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [handleClick]);
}
