import { useCallback, useEffect, useRef } from "react";
import { atom, useRecoilState } from "recoil";
import { persistAtom } from "../persistAtom";

const state = atom({
  key: "serverMocking",
  default: false,
  effects: [persistAtom],
});

type Listener = () => void;

export const useServerMocking = () => {
  const [enabled, setEnabled] = useRecoilState(state);

  const worker = () => {
    const { worker } =
      require("../mocks/browser") as typeof import("./browser");
    return worker;
  };

  const start = useCallback(() => {
    worker().start({ quiet: true });
    setEnabled(true);
  }, [setEnabled]);

  const stop = useCallback(() => {
    worker().stop();
    setEnabled(false);
  }, [setEnabled]);

  const toggle = useCallback(() => {
    enabled ? stop() : start();
  }, [enabled, start, stop]);

  return {
    start,
    stop,
    toggle,
    enabled,
    useAtChange,
  };
};

const useAtChange = (fn: () => void) => {
  const { enabled } = useServerMocking();
  const listeners = useRef<Listener[]>([]);

  const subscribe = useCallback((_type: "onChange", listener: Listener) => {
    listeners.current.push(listener);
    const unsubscribe = () => {
      listeners.current = listeners.current.filter((l) => l !== listener);
    };
    return unsubscribe;
  }, []);

  useEffect(() => {
    listeners.current.forEach((l) => l());
  }, [enabled]);

  useEffect(() => subscribe("onChange", fn), [fn, subscribe]);
};
