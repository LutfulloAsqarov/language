"use client";
import { useTranslations } from "next-intl";

const About = () => {
    const t = useTranslations();

    return (
        <div>
            <h1>{t("about")}</h1>
            <a href="/">{t("home")}</a>
        </div>
    );
};

export default About;
