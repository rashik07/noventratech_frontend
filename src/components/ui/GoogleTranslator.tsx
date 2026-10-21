"use client";

import { useEffect } from "react";
import Script from "next/script";

export function GoogleTranslator() {
  useEffect(() => {
    // Define the initialization callback expected by Google Translate script
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,bn,pt",
            autoDisplay: false,
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      }
    };
  }, []);

  return (
    <>
      {/* Hidden container where Google renders its select widget */}
      <div id="google_translate_element" className="hidden" aria-hidden="true" />
      <Script
        id="google-translate-script"
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
}
