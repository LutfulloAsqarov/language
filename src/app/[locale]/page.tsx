"use client";
import { useTranslations } from "next-intl";
import { useLocale } from "../../contexts/LocaleContext";

const Home = () => {
    const t = useTranslations();
    const { locale, setLocale } = useLocale();

    const handleChangeLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLocale(e.target.value);
    };

    return (
        <div>
            <select value={locale} onChange={handleChangeLocale}>
                <option value="en">English</option>
                <option value="uz">Uzbek</option>
                <option value="ru">Russian</option>
            </select>
            <h1>{t("welcome")}</h1>
            <a href={`/${locale}/about`}>{t("about")}</a>
        </div>
    );
};

export default Home;
