export function classToQueryString<T>(instance: T): string {
  const queryParams = Object.entries(instance)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');

  return queryParams;
}
