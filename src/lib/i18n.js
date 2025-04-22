import en from "@/locales/en.json";
import es from "@/locales/es.json";
import fr from "@/locales/fr.json";

const dictionaries = { en, fr, es };

export async function getDictionary(locale) {
  return dictionaries[locale] || dictionaries.en;
}
