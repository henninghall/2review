export function onlyUnique<T>(value: T, index: number, self: T[]) {
  return self.indexOf(value) === index;
}

export function exists<T>(item: T | undefined): item is T {
  return item !== undefined;
}
