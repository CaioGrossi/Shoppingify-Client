import { ListItem } from 'hooks/use-shoppinglist/index';

const APP_KEY = 'SHOPPINGIFY';

export function getStorageItem(key: string) {
  if (typeof window === 'undefined') return;

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return JSON.parse(data!);
}

export function setStorageItem(key: string, value: ListItem[]) {
  if (typeof window === 'undefined') return;
  const data = JSON.stringify(value);
  window.localStorage.setItem(`${APP_KEY}_${key}`, data);
}

export function clearStorage() {
  if (typeof window === 'undefined') return;
  window.localStorage.clear();
}
