import { useEffect, useMemo, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import i18next from "i18next";

export default function LanguageToggle() {
  const [currLang, setCurrLang] = useState(i18next.language);
  const displayLang = useMemo(() => {
    return currLang === "en" ? "English (EN)" : "العربية (AR)";
  }, [currLang]);

  useEffect(() => {
    document.dir = currLang === "en" ? "ltr" : "rtl";
  }, [currLang]);

  const toggleLanguage = () => {
    const newLang = currLang === "en" ? "ar" : "en";
    i18next.changeLanguage(newLang); // Change the language in i18next
    setCurrLang(newLang); // Update the local state
  };

  return (
    <div className="   w-52 text-center">
      <Menu>
        <MenuButton className="inline-flex items-center text-nowrap gap-2 rounded-md py-1.5 px-3 text-sm/6  text-primary   focus:outline-none data-[hover]:bg-gray-200  data-[focus]:outline-1 data-[focus]:outline-white">
          {displayLang}
          <ChevronDownIcon className="size-4 fill-primary/60" />
        </MenuButton>

        <MenuItems
          transition
          anchor={"bottom"}
          className="w-32  md:mt-4  origin-bottom-right rounded-b-xl border border-white/5 bg-white-100  text-sm/6 text-primary transition duration-100 ease-out  focus:outline-none data-[closed]:scale-90  data-[closed]:opacity-0"
        >
          {currLang != "en" ? (
            <MenuItem>
              <button
                onClick={toggleLanguage}
                tabIndex={10}
                className={`group flex w-full items-center justify-center gap-2 rounded-b-lg py-1.5 px-3   hover:bg-gray-200`}
              >
                English(EN)
              </button>
            </MenuItem>
          ) : (
            <MenuItem>
              <button
                onClick={toggleLanguage}
                className={`group flex w-full items-center justify-center gap-2 rounded-b-lg py-1.5 px-3  hover:bg-gray-200`}
              >
                العربيه (AR)
              </button>
            </MenuItem>
          )}
        </MenuItems>
      </Menu>
    </div>
  );
}
