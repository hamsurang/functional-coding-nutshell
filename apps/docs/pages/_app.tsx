import type { AppProps } from "next/app";
import "./reset.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
