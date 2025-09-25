import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type BaseProps = {
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
};

type ButtonAsButton = BaseProps & {
  as?: 'button';
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsAnchor = BaseProps & {
  as: 'a';
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const baseClass =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

const variantClass: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-primary text-white shadow-glow hover:bg-primary/90 focus-visible:outline-primary',
  secondary: 'bg-secondary text-white hover:bg-secondary/90 focus-visible:outline-secondary',
  ghost: 'border border-white/20 bg-transparent text-white hover:border-white/40 focus-visible:outline-white',
};

export function Button({ variant = 'primary', className, as = 'button', ...props }: ButtonProps) {
  const Component = as;
  return <Component className={clsx(baseClass, variantClass[variant], className)} {...props} />;
}
