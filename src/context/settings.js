import { createContext, useContext } from "react";

export const SettingsContext = createContext(null);

export function useSettings() {
  const settings = useContext(SettingsContext);
  if (!settings) throw new Error("useSettings must be used within SettingsProvider");
  return settings;
}
