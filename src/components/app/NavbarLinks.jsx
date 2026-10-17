import { ChevronDown } from "lucide-react";
import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function NavbarLinks({ links, mobile = false, onNavigate }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const closeOutsideDropdowns = (event) => {
      document.querySelectorAll("[data-navbar-dropdown][open]").forEach((dropdown) => {
        if (!dropdown.contains(event.target)) {
          dropdown.open = false;
        }
      });
    };

    document.addEventListener("pointerdown", closeOutsideDropdowns);
    return () => document.removeEventListener("pointerdown", closeOutsideDropdowns);
  }, []);

  return (
    <div className={mobile ? "flex flex-col" : "hidden items-center gap-0.5 lg:flex"}>
      {links.map((link) => (
        link.items ? (
          <details
            key={link.label}
            data-navbar-dropdown
            className={`group ${mobile ? "w-full" : "relative"}`}
          >
            <summary
              className={`flex cursor-pointer list-none items-center gap-1 rounded-full px-4 py-2 text-[12px] font-medium transition-colors duration-200 [&::-webkit-details-marker]:hidden ${
                pathname === link.url || pathname.startsWith(`${link.url}/`)
                  ? "bg-[#e8f1eb] text-brand dark:bg-[#1e3a2f] dark:text-white"
                  : "text-[#68756d] hover:text-[#19251f] dark:text-[#a6b4aa] dark:hover:text-[#e3ebe5]"
              } ${mobile ? "w-full justify-between rounded-xl px-4 py-3 text-sm" : ""}`}
            >
              {link.label}
              <ChevronDown
                size={14}
                aria-hidden="true"
                className="shrink-0 transition-transform duration-200 group-open:rotate-180"
              />
            </summary>
            <div
              className={`z-30 min-w-52 rounded-xl border border-[#e9eee9] bg-white p-2 shadow-lg dark:border-[#2a3930] dark:bg-[#1b2620] ${
                mobile ? "ml-3 mt-1" : "absolute left-0 top-full mt-2"
              }`}
            >
              {link.items.map((item) => (
                <NavLink
                  key={item.url}
                  to={item.url}
                  onClick={(event) => {
                    event.currentTarget.closest("details").open = false;
                    onNavigate?.(event);
                  }}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2.5 text-sm transition-colors ${
                      isActive
                        ? "bg-[#e8f1eb] font-semibold text-brand dark:bg-[#1e3a2f] dark:text-white"
                        : "text-[#68756d] hover:bg-[#f3f6f2] hover:text-[#19251f] dark:text-[#a6b4aa] dark:hover:bg-[#18221c] dark:hover:text-[#e3ebe5]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </details>
        ) : (
          <NavLink
            key={link.url}
            to={link.url}
            end={link.url === "/"}
            onClick={onNavigate}
            className={({ isActive }) =>
              mobile
                ? `rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${isActive
                  ? "bg-[#e8f1eb] text-brand dark:bg-[#1e3a2f] dark:text-white"
                  : "text-[#68756d] hover:bg-[#f3f6f2] hover:text-[#19251f] dark:text-[#a6b4aa] dark:hover:bg-[#18221c] dark:hover:text-[#e3ebe5]"
                }`
                : `rounded-full px-4 py-2 text-[12px] font-medium transition-all duration-200 ${isActive
                  ? "bg-[#e8f1eb] text-brand dark:bg-[#1e3a2f] dark:text-white"
                  : "text-[#68756d] hover:text-[#19251f] dark:text-[#a6b4aa] dark:hover:text-[#e3ebe5]"
                }`
            }
          >
            {link.label}
          </NavLink>
        )
      ))}
    </div>
  );
}
