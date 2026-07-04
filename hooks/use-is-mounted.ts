import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

// Returns false during SSR/hydration and true afterwards, without the
// setState-in-effect pattern flagged by react-hooks/set-state-in-effect.
export const useIsMounted = () =>
  useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
