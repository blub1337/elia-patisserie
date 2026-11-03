import { useSyncExternalStore } from "react";

export type Locale = "en" | "el";

// Version the key so visitors who previously had English saved get the new Greek default.
const STORAGE_KEY = "sofia-stelios-locale-v3";
const CHANGE_EVENT = "elia-locale-change";

function getLocaleSnapshot(): Locale {
  if (typeof window === "undefined") return "el";
  return window.localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "el";
}

function getServerLocaleSnapshot(): Locale {
  return "el";
}

function subscribeToLocale(callback: () => void): () => void {
  if (typeof window === "undefined") return () => undefined;
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

export function useLocale(): Locale {
  return useSyncExternalStore(
    subscribeToLocale,
    getLocaleSnapshot,
    getServerLocaleSnapshot
  );
}

export function saveLocale(locale: Locale): void {
  window.localStorage.setItem(STORAGE_KEY, locale);
  window.dispatchEvent(new Event(CHANGE_EVENT));
}
