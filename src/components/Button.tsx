import type { ComponentPropsWithoutRef, ElementType } from 'react';
import clsx from 'clsx';

type ButtonVariants = 'primary' | 'secondary' | 'ghost';

type PolymorphicProps<T extends ElementType> = {
  as?: T;
  variant?: ButtonVariants;
  className?: string;
} & ComponentPropsWithoutRef<T>;

const baseClass =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

const variantClass: Record<ButtonVariants, string> = {
  primary: 'bg-primary text-white shadow-glow hover:bg-primary/90 focus-visible:outline-primary',
  secondary: 'bg-secondary text-white hover:bg-secondary/90 focus-visible:outline-secondary',
  ghost: 'border border-white/20 bg-transparent text-white hover:border-white/40 focus-visible:outline-white',
};

export function Button<T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  className,
  ...props
}: PolymorphicProps<T>) {
  const Component = as ?? 'button';
  return <Component className={clsx(baseClass, variantClass[variant], className)} {...props} />;
}
