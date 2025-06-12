import "@/styles/globals.css";
import { Provider } from "@/components/ui/provider";
import NavBar from "./components/NavBar";
import { ToastProvider } from "@/context/ToastContext";
export default function App({ Component, pageProps }) {
    return (
        <Provider>
            <ToastProvider>
                <NavBar />
                <Component {...pageProps} />;
            </ToastProvider>
        </Provider>
    );
}
