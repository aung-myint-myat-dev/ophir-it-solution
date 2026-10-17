import { Moon, Sun } from "lucide-react";
import { useSettings } from "../../context/settings";

export default function NavbarSettings() {
  const { language, setLanguage, theme, setTheme, t } = useSettings();

  return (
    <>
      <button
        type="button"
        onClick={() => setLanguage(language === "en" ? "my" : "en")}
        aria-label={t(language === "en" ? "Switch to Myanmar" : "Switch to English")}
        title={t(language === "en" ? "Switch to Myanmar" : "Switch to English")}
        className="cursor-pointer px-2"
      >
        {language === "en" ? (
          <span className="fi fi-mm"></span>
        ) : (
          <span className="fi fi-us"></span>
        )}
      </button>
      <button
        type="button"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        aria-label={t(theme === "light" ? "Dark mode" : "Light mode")}
        title={t(theme === "light" ? "Dark mode" : "Light mode")}
        className="mx-2 active:animate-spin cursor-pointer"
      >
        {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
      </button>
    </>
  );
}
