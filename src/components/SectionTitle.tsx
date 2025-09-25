import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

type SectionTitleProps = PropsWithChildren<{
  eyebrow?: string;
  alignment?: 'left' | 'center';
}>;

export function SectionTitle({ eyebrow, children, alignment = 'center' }: SectionTitleProps) {
  return (
    <div className={clsx('mb-12', alignment === 'center' && 'text-center')}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={clsx('text-3xl font-bold text-white sm:text-4xl', alignment === 'center' ? 'mx-auto max-w-3xl' : 'max-w-xl')}>
        {children}
      </h2>
    </div>
  );
}
