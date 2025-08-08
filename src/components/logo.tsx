"use client";

import Link from "next/link";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/lib/translations";
import Image from "next/image";

export function Logo() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Stertup Consulting Home">
      <Image
        src="/logo.png"
        alt="Stertup Consulting LLC Logo"
        width={180}
        height={40}
        priority
      />
    </Link>
  );
}
