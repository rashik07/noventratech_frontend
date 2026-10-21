"use client";

import { useEffect, useState, useRef } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

interface LanguageOption {
  code: string; // 'en', 'bn', 'pt'
  name: string;
  nativeName: string;
  flag: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸" },
  { code: "bn", name: "Bangla", nativeName: "বাংলা", flag: "🇧🇩" },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇵🇹" },
];

export function LanguageSelector({ isMobile = false }: { isMobile?: boolean }) {
  const [selectedLang, setSelectedLang] = useState<string>("en");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Initialize current language from googtrans cookie if present
  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
      return null;
    };

    const transCookie = getCookie("googtrans");
    if (transCookie) {
      // Format is usually /en/bn or /auto/bn or /en/pt
      const parts = transCookie.split("/");
      const targetLang = parts[parts.length - 1];
      if (LANGUAGES.some((l) => l.code === targetLang)) {
        setSelectedLang(targetLang);
      }
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLanguage = (langCode: string) => {
    setSelectedLang(langCode);
    setIsOpen(false);

    // Set google translate cookies for current domain & path
    const domain = window.location.hostname;
    const cookieValue = `/auto/${langCode}`;

    document.cookie = `googtrans=${cookieValue}; path=/;`;
    document.cookie = `googtrans=${cookieValue}; domain=.${domain}; path=/;`;

    // Attempt to directly change Google Translate combo if available
    const selectEl = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (selectEl) {
      selectEl.value = langCode;
      selectEl.dispatchEvent(new Event("change"));
    } else {
      // Reload page to apply translation smoothly
      window.location.reload();
    }
  };

  const currentLang = LANGUAGES.find((l) => l.code === selectedLang) || LANGUAGES[0];

  if (isMobile) {
    return (
      <div className="px-6 py-3 border-b border-slate-100">
        <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          <Globe className="w-4 h-4 text-[#008080]" />
          <span>Language / ভাষা / Idioma</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {LANGUAGES.map((lang) => {
            const isActive = selectedLang === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => switchLanguage(lang.code)}
                className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? "bg-[#008080] text-white shadow-sm font-semibold"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.nativeName}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative notranslate" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select Language"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-slate-700 bg-slate-100/80 hover:bg-slate-200/80 border border-slate-200/60 transition-all shadow-xs"
      >
        <span className="text-base leading-none">{currentLang.flag}</span>
        <span className="font-semibold text-slate-800">{currentLang.nativeName}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100">
            Language
          </div>
          {LANGUAGES.map((lang) => {
            const isActive = selectedLang === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => switchLanguage(lang.code)}
                className={`w-full flex items-center justify-between px-3 py-2 text-left text-xs transition-colors ${
                  isActive
                    ? "bg-teal-50 text-[#008080] font-semibold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base leading-none">{lang.flag}</span>
                  <div>
                    <div className="text-xs font-medium leading-none">{lang.nativeName}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{lang.name}</div>
                  </div>
                </div>
                {isActive && <Check className="w-3.5 h-3.5 text-[#008080]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
