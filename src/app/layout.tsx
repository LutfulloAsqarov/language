import { ReactNode } from "react";
import { LocaleProvider } from "../contexts/LocaleContext";
// import "../styles/globals.css";

interface Props {
    children: ReactNode;
}

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en">
            <body>
                <LocaleProvider>{children}</LocaleProvider>
            </body>
        </html>
    );
}
