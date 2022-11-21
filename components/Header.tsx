import Link from "next/link"
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export const Header = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: 20,
        backgroundColor: "#121212",
      }}
    >
      <Link href="/">Next Internalization</Link>

      <div>
        {router.locales?.map((lng) => {
          return (
            <Link
              key={lng}
              href={router.basePath}
              locale={lng}
              style={{
                textDecoration: lng === i18n.language ? "underline" : "none",
                padding: 5,
              }}
            >
              {lng.toUpperCase()}
            </Link>
          );
        })}
      </div>
    </header>
  )
}