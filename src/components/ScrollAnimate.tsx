import { type ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface ScrollAnimateProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'slide-bottom';
  delay?: number;
  className?: string;
  threshold?: number;
}

export function ScrollAnimate({
  children,
  animation = 'fade-up',
  delay = 0,
  className,
  threshold = 0.1,
}: ScrollAnimateProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce: true,
  });

  const animationClass = {
    'fade-up': 'animate-fade-in-up',
    'fade-left': 'animate-fade-in-left',
    'fade-right': 'animate-fade-in-right',
    scale: 'animate-scale-in',
    'slide-bottom': 'animate-slide-in-bottom',
  }[animation];

  const delayClass = delay > 0 ? `stagger-${Math.min(delay, 6)}` : '';

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        'scroll-animate',
        isVisible && animationClass,
        isVisible && delayClass,
        className,
      )}
    >
      {children}
    </div>
  );
}
