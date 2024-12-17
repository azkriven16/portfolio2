import { PropsWithChildren } from "react";
import { ThemeProvider } from "./theme-provider";
import { ConvexClientProvider } from "./convex-client-provider";

export default function Providers({ children }: PropsWithChildren) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <ConvexClientProvider>{children}</ConvexClientProvider>
        </ThemeProvider>
    );
}
