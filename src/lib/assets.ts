export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL?.replace(/\/$/, '') ?? '';
  const cleanedPath = path.startsWith('/') ? path.slice(1) : path;
  if (!cleanedPath) {
    return base || '/';
  }
  return base ? `${base}/${cleanedPath}` : `/${cleanedPath}`;
}
