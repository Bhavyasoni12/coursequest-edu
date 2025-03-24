
import React, { ReactNode } from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends ButtonProps {
  children: ReactNode;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  showArrow?: boolean;
}

const AnimatedButton = ({ 
  children, 
  className, 
  variant = 'default',
  size = 'default',
  showArrow = false,
  ...props 
}: AnimatedButtonProps) => {
  return (
    <Button
      className={cn(
        "relative group overflow-hidden transition-all duration-300 ease-out",
        showArrow && "pr-10",
        className
      )}
      variant={variant}
      size={size}
      {...props}
    >
      <span className="relative z-10 group-hover:translate-x-0 transition-transform duration-300 ease-out">
        {children}
      </span>
      {showArrow && (
        <span className="absolute right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform translate-x-2 group-hover:translate-x-0">
          →
        </span>
      )}
      <span className="absolute inset-0 bg-primary/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
    </Button>
  );
};

export default AnimatedButton;
