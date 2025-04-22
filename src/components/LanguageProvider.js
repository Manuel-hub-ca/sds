// "use client";

// import { createContext, useContext } from "react";

// const TranslationContext = createContext({});

// export function useTranslations() {
//   return useContext(TranslationContext);
// }

// export function LanguageProvider({ dictionary, children }) {
//   return (
//     <div>
//       <TranslationContext.Provider value={dictionary}>
//         {children}
//       </TranslationContext.Provider>
//     </div>
//   );
// }


"use client";

import { createContext, useContext } from "react";

const TranslationContext = createContext();

export function useTranslations() {
  const t = useContext(TranslationContext);
  if (!t) {
    throw new Error("useTranslations must be used within a LanguageProvider");
  }
  return t;
}

export function LanguageProvider({ dictionary, children }) {
  // wrap the dictionary in a t() function
  const t = (key) => {
    const value = dictionary?.[key];
    if (!value) {
      console.warn(`Missing translation for key: ${key}`);
      return key;
    }
    return value;
  };

  return (
    <TranslationContext.Provider value={t}>
      {children}
    </TranslationContext.Provider>
  );
}
