import "@/styles/pages/globals.scss";
import MainLayout from "@/layouts/mainLayout";

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
