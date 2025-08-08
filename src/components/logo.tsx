"use client";

import Link from "next/link";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/lib/translations";

export function Logo() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Stertup Consulting Home">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E90FF" />
            <stop offset="100%" stopColor="#87CEEB" />
          </linearGradient>
        </defs>
        <path
          d="M12 2L2 8.5L12 15L22 8.5L12 2Z"
          fill="url(#logo-gradient)"
        />
        <path
          d="M2 15.5L12 22L22 15.5L12 9L2 15.5Z"
          fill="url(#logo-gradient)"
          opacity="0.6"
        />
      </svg>
      <div className="flex flex-col">
        <span className="font-headline font-bold text-lg leading-tight text-foreground">
          Stertup
        </span>
        <span className="text-xs text-muted-foreground leading-tight">
          {t.logo.consulting}
        </span>
      </div>
    </Link>
  );
}
