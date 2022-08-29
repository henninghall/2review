import { AtomEffect, DefaultValue } from "recoil";

export function persistAtom<T>({
  setSelf,
  onSet,
  node,
}: Parameters<AtomEffect<T>>[0]): ReturnType<AtomEffect<T>> {
  const key = `recoil/${node.key}`;
  setSelf(
    (async () => {
      const savedValue = localStorage.getItem(key);
      if (savedValue == null) return new DefaultValue();
      return JSON.parse(savedValue);
    })()
  );

  onSet((newValue, _, isReset) => {
    isReset || newValue == null
      ? localStorage.removeItem(key)
      : localStorage.setItem(key, JSON.stringify(newValue));
  });
}
