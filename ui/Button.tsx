'use client';

import { motion } from 'framer-motion';
import {
  MouseEvent,
  ReactNode,
  Ref,
  forwardRef,
  useEffect,
  useState,
} from 'react';
import { twMerge } from 'tailwind-merge';
import Spinner from './Spinner';

const getVariantClasses = ({
  error,
  clear,
  disabled,
  secondary,
}: {
  error: boolean;
  clear: boolean;
  disabled: boolean;
  secondary: boolean;
}) => {
  if (disabled) {
    return 'bg-zinc-300 text-zinc-600 hover:bg-zinc-300 active:bg-zinc-300';
  }

  if (error) {
    if (clear) {
      return 'shadow-none hover:bg-red-200 active:bg-red-300 text-red-700 hover:text-red-800 active:text-red-900 hover:shadow-red-300 active:shadow-red-400';
    }

    return 'bg-red-600 hover:bg-rose-600 active:bg-red-800 text-white shadow-red-700 hover:shadow-red-600 active:shadow-red-800';
  }

  if (secondary) {
    if (clear) {
      return 'shadow-none hover:bg-slate-200 active:bg-slate-300 text-slate-700 hover:text-slate-800 active:text-slate-900 hover:shadow-slate-300 active:shadow-slate-400';
    }

    return 'bg-slate-600 hover:bg-slate-600 active:bg-slate-800 text-white shadow-slate-700 hover:shadow-slate-600 active:shadow-slate-800';
  }

  if (clear) {
    return 'shadow-none hover:bg-pry-100 active:bg-pry-200 text-pry-700 hover:text-pry-800 active:text-pry-900 hover:shadow-pry-200 active:shadow-pry-300';
  }

  return 'bg-pry-600 hover:bg-pry-500 active:bg-pry-800 text-white shadow-pry-700 hover:shadow-pry-600 active:shadow-pry-800';
};

type Props = {
  cta?: boolean;
  clear?: boolean;
  error?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  submit?: boolean;
  isLoading?: boolean;
  sm?: boolean;
  children: ReactNode;
};

const Button = forwardRef<HTMLElement | undefined, Props>(
  (
    {
      clear = false,
      cta = false,
      error = false,
      secondary = false,
      disabled = false,
      className,
      onClick = () => {},
      submit,
      isLoading = false,
      sm = false,
      children,
    },
    ref,
  ) => {
    const [shouldShowSpinner, setShouldShowSpinner] = useState(!!isLoading);

    useEffect(() => {
      setShouldShowSpinner(isLoading);
      return () => setShouldShowSpinner(false);
    }, [isLoading]);

    const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
      if (shouldShowSpinner) return;
      setShouldShowSpinner(true);
      await onClick(event);
      setShouldShowSpinner(false);
    };

    return (
      <motion.button
        {...(!disabled && {
          whileHover: {
            scale: 1.05,
          },
        })}
        {...(!disabled && {
          whileTap: {
            scale: 0.95,
          },
        })}
        ref={ref as Ref<HTMLButtonElement>}
        layout
        transition={{ duration: 0.1, ease: 'easeOut' }}
        onClick={handleClick}
        disabled={disabled}
        className={twMerge(
          'px-6 py-2 font-bold rounded-lg uppercase',
          `${cta && 'py-4 rounded-xl'}`,
          `${sm && 'py-1 px-3 text-sm'}`,
          className,
          `${
            !disabled
              ? 'shadow-sm hover:shadow active:shadow-inner cursor-pointer'
              : 'cursor-not-allowed'
          }`,
          `${shouldShowSpinner && 'cursor-not-allowed'}`,
          `${getVariantClasses({
            error,
            secondary,
            clear,
            disabled,
          })}`,
        )}
        type={submit ? 'submit' : 'button'}
      >
        <div className="flex gap-2 items-center">
          {shouldShowSpinner && (
            <Spinner clear={clear} error={error} secondary={secondary} />
          )}
          {children}
        </div>
      </motion.button>
    );
  },
);

export default Button;
