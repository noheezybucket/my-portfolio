"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@i18n/routing";
import { useTransition } from "react";

const LanguageSwitcher = () => {
  const t = useTranslations("Language");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (nextLocale) => {
    if (nextLocale === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div
      className="border-op flex h-8 items-center rounded-lg p-0.5 text-xs font-medium"
      role="group"
      aria-label={t("label")}
    >
      {["en", "fr"].map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            disabled={isPending}
            onClick={() => switchLocale(code)}
            aria-pressed={active}
            className={`rounded-md px-2 py-1 transition-colors ${
              active
                ? "bg-surface text-foreground"
                : "text-muted hover:text-foreground"
            }`}
          >
            {t(code)}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
