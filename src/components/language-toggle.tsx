"use client";

import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 p-1 rounded-full border bg-secondary">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('en')}
        className={cn(
          'rounded-full px-3 py-1 text-sm',
          language === 'en' && 'bg-background shadow-sm'
        )}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('es')}
        className={cn(
          'rounded-full px-3 py-1 text-sm',
          language === 'es' && 'bg-background shadow-sm'
        )}
      >
        ES
      </Button>
    </div>
  );
}
