import { useEffect, useMemo, useState } from "react";
import { SettingsContext } from "./settings";
import { myanmarText } from "../lang/myanmar";

export function SettingsProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem("ophir-language") || "en");
  const [theme, setTheme] = useState(() => localStorage.getItem("ophir-theme") || "light");

  useEffect(() => {
    localStorage.setItem("ophir-language", language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    localStorage.setItem("ophir-theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    theme,
    setTheme,
    t: (text) => language === "my" ? myanmarText[text] ?? text : text,
  }), [language, theme]);

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}
