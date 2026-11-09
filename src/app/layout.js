import './globals.css';
import {ClerkProvider} from '@clerk/nextjs';


export const metadata = {
    title: 'FrontEnd - Codeverse',
    description: 'Template do Codeverse',
};

export default function RootLayout({ children }) {
    return (
        <ClerkProvider>
            <html lang="pt-BR">
                <body>{children}</body>
            </html>
        </ClerkProvider>
    );
}
