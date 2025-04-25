import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import NavBar from "@/components/NavBar";
import { getDictionary } from "@/lib/i18n";
import AudioPlayer from "@/src/components/AudioPlayer";
import ClientCustomCursor from "@/src/components/ClientCustomCursor";
import ContactUs from "@/src/components/ContactUs";
import "./globals.css";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }, { locale: "es" }];
}

export const metadata = {
  title: "SDS Renovation Inc. – Construction & Renovation in Laval, QC",
  description:
    "SDS Renovation Inc. offers expert construction services in Laval, Quebec, including wood & metal work, drywall, flooring, painting, finishing, tiles, joint pulling, and demolition.",
  keywords: [
    "SDS Renovation",
    "construction Laval",
    "travaux en bois et métal",
    "rénovation Québec",
    "plancher",
    "gypse",
    "carreaux",
    "démolition",
    "peinture",
    "tireur de joints",
    "SDS Construction",
  ],
  metadataBase: new URL("https://yourdomain.com"), // replace with your actual domain
  openGraph: {
    title: "SDS Renovation Inc.",
    description:
      "Professional construction and renovation services in Laval and surrounding areas. Always open, always reliable.",
    url: "https://yourdomain.com", // update this
    siteName: "SDS Renovation",
    locale: "fr_CA",
    type: "website",
    images: [
      {
        url: "/img/logoFooter.png", // make sure this image exists in /public
        width: 800,
        height: 600,
        alt: "SDS Renovation Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SDS Renovation Inc.",
    description:
      "Construction and renovation company in Laval, QC. Specializing in finishing, drywall, flooring, painting, tiles, and more.",
    images: ["/img/logoFooter.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
};

export default async function RootLayout(props) {
  const { children } = props;

  // ✅ Await props.params before accessing locale
  const { locale } = await props.params;

  const dictionary = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body className="w-screen">
        <LanguageProvider dictionary={dictionary}>
          <AudioPlayer />
          <NavBar />
          <ClientCustomCursor />
          <main>{children}</main>
          <ContactUs />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
