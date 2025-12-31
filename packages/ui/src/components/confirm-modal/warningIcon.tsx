import * as React from "react";

type WarningIconProps = React.SVGProps<SVGSVGElement> & {
  circleClassName?: string;
  strokeClassName?: string;
  auraClassName?: string;
  label?: string;
  strokeWidth?: number;
  withAura?: boolean;
  animateStroke?: boolean;
};

export function WarningIcon({
  className,
  circleClassName,
  strokeClassName,
  auraClassName = "text-red-500",
  label = "Warning",
  strokeWidth = 2,
  withAura = false,
  animateStroke = false,
  ...rest
}: WarningIconProps) {
  const decorative = label === "";

  return (
    <svg
      viewBox="0 0 24 24"
      role={decorative ? undefined : "img"}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : label}
      className={className}
      {...rest}
    >
      {!decorative && <title>{label}</title>}

      {withAura && (
        <>
          <circle
            cx="12"
            cy="12"
            r="10"
            fill="none"
            stroke="currentColor"
            className={auraClassName}
            opacity="0.22"
            filter="url(#warning-glow)"
          >
            <animate
              attributeName="r"
              values="10;12;10"
              dur="2.8s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values=".22;.10;.22"
              dur="2.8s"
              repeatCount="indefinite"
            />
          </circle>
        </>
      )}

      <circle
        cx="12"
        cy="12"
        r="10"
        fill="currentColor"
        className={circleClassName}
      />

      <path
        d="M12 7v6m0 4h.01"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={strokeClassName}
        {...(animateStroke
          ? {
              strokeDasharray: 2.5,
              children: (
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;3;0"
                  dur="2.2s"
                  repeatCount="indefinite"
                />
              ),
            }
          : {})}
      />
    </svg>
  );
}
