import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors shadow-md cursor-pointer",
  {
    variants: {
      variant: {
        default: "w-full bg-gray-200 rounded hover:bg-gray-300",
        solid:
          "bg-background flex flex-col items-center justify-center rounded-md border border-[#eee] tracking-tight break-all transition",
        floating:
          "bg-gray-800/50 text-white rounded-full flex items-center justify-center text-2xl transition",
        more: "text-sm rounded-lg bg-gray-200 hover:bg-gray-300 transition",
        icon_text:
          "flex justify-center items-center gap-1.5 text-md rounded-lg bg-neutral-100 border border-neutral-300 text-neutral-600 shadow-none",
        account: "flex justify-between items-center w-full shadow-none",
        slider_icon: "absolute text-foreground z-10 cursor-pointer shadow-none",
      },
      size: {
        default: "px-10 py-3",
        floating: "w-12 h-12",
        icon: "px-2 py-1",
        icon_text: "px-2 py-2",
        account: "py-3 px-6",
        slider_icon: "text-3xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      children,
      ...props
    },
    ref
  ) => {
    return asChild ? (
      <Slot
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Slot>
    ) : (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={loading}
        {...props}
      >
        {loading && (
          <Loader2
            className={`${size !== "icon" && "mr-2"} h-4 w-4 animate-spin`}
          />
        )}
        {loading ? (size === "icon" ? "" : children) : children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
