import { ReactNode } from "react";
import { IntlProvider } from "react-intl";
import { selectLocale } from "../components/features/app/localeSlice";
import en_messages from "../languages/i18.en.json";
import es_messages from "../languages/i18.es.json";
import { useAppSelector } from "./hooks";

interface Messages {
  [locale: string]: Record<string, string>;
}

const AppIntlProvider = ({ children }: { children: ReactNode }) => {
  const locale = useAppSelector(selectLocale);

  const messages: Messages = {
    en: en_messages,
    es: es_messages,
  };

  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale="en"
    >
      {children}
    </IntlProvider>
  );
};

export default AppIntlProvider;
