"use client";
import {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

interface LocaleContextProps {
    locale: string;
    setLocale: (locale: string) => void;
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [locale, setLocale] = useState<string>("en");

    useEffect(() => {
        setLocale(router.locale || "en");
    }, [router.locale]);

    const changeLocale = (newLocale: string) => {
        setLocale(newLocale);
        router.push(pathname, {
            locale: newLocale,
        });
    };

    return (
        <LocaleContext.Provider value={{ locale, setLocale: changeLocale }}>
            {children}
        </LocaleContext.Provider>
    );
};

export const useLocale = () => {
    const context = useContext(LocaleContext);
    if (context === undefined) {
        throw new Error("useLocale must be used within a LocaleProvider");
    }
    return context;
};
