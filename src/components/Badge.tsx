import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

type BadgeProps = PropsWithChildren<{ variant?: 'primary' | 'neutral' }>;

export function Badge({ children, variant = 'primary' }: BadgeProps) {
  const base = 'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide';
  const variants: Record<typeof variant, string> = {
    primary: 'bg-primary/10 text-primary ring-1 ring-inset ring-primary/30',
    neutral: 'bg-white/10 text-white ring-1 ring-inset ring-white/20',
  };

  return <span className={clsx(base, variants[variant])}>{children}</span>;
}
