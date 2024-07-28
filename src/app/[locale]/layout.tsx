import { ReactNode } from "react";
import { IntlProvider } from "next-intl";
import { notFound } from "next/navigation";

interface Props {
    children: ReactNode;
    params: {
        locale: string;
    };
}

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = params;
    const messages = (await import(`../../locales/${locale}.json`).catch(() =>
        notFound()
    )) as Record<string, string>;

    return (
        <html lang={locale}>
            <body>
                <IntlProvider locale={locale} messages={messages}>
                    {children}
                </IntlProvider>
            </body>
        </html>
    );
}
