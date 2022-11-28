export function hydrate<T extends object>(target: T, value?: Partial<T>): void {
  if (value) {
    Object.assign(target, value);
  }
}