import React from "react";

export type TypographyProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

type TypographyComponent = (
  props: TypographyProps
) => React.ReactElement;

const createTypography = (
  defaultTag: React.ElementType,
  className: string
): TypographyComponent => {
  // eslint-disable-next-line react/display-name
  return ({
    children,
    className: customClassName = "",
    as: Component = defaultTag,
  }) => {
    return (
      <Component
        className={`${className} ${customClassName}`.trim()}
      >
        {children}
      </Component>
    );
  };
};


/* ============================================================
   DISPLAY
   ============================================================ */

export const Display1Bold = createTypography(
  "h1",
  "typo-display-1-bold"
);

export const Display2Bold = createTypography(
  "h1",
  "typo-display-2-bold"
);


/* ============================================================
   HEADINGS
   ============================================================ */

export const H1Bold = createTypography(
  "h1",
  "typo-h1-bold"
);

export const H2Bold = createTypography(
  "h2",
  "typo-h2-bold"
);

export const H2Medium = createTypography(
  "h2",
  "typo-h2-medium"
);

export const H3Bold = createTypography(
  "h3",
  "typo-h3-bold"
);

export const H4Bold = createTypography(
  "h4",
  "typo-h4-bold"
);

export const H4Medium = createTypography(
  "h4",
  "typo-h4-medium"
);

export const H5Bold = createTypography(
  "h5",
  "typo-h5-bold"
);

export const H5Medium = createTypography(
  "h5",
  "typo-h5-medium"
);

export const H6Bold = createTypography(
  "h6",
  "typo-h6-bold"
);


/* ============================================================
   BODY
   ============================================================ */

export const BodyXs = createTypography(
  "p",
  "typo-xs-regular"
);

export const BodySm = createTypography(
  "p",
  "typo-sm-regular"
);

export const BodyBase = createTypography(
  "p",
  "typo-base-regular"
);

export const BodyBaseMedium = createTypography(
  "p",
  "typo-base-medium"
);

export const BodyBaseSemibold = createTypography(
  "p",
  "typo-base-semibold"
);

export const BodyMd = createTypography(
  "p",
  "typo-md-regular"
);

export const BodyMdMedium = createTypography(
  "p",
  "typo-md-medium"
);

export const BodyMdSemibold = createTypography(
  "p",
  "typo-md-semibold"
);

export const BodyMdBold = createTypography(
  "p",
  "typo-md-bold"
);

export const BodyLg = createTypography(
  "p",
  "typo-lg-regular"
);

export const BodyLgMedium = createTypography(
  "p",
  "typo-lg-medium"
);

export const BodyLgSemibold = createTypography(
  "p",
  "typo-lg-semibold"
);


/* ============================================================
   BUTTON
   ============================================================ */

export const ButtonSmMedium = createTypography(
  "span",
  "typo-button-sm-medium"
);

export const ButtonSmBold = createTypography(
  "span",
  "typo-button-sm-bold"
);

export const ButtonBaseMedium = createTypography(
  "span",
  "typo-button-base-medium"
);

export const ButtonBaseBold = createTypography(
  "span",
  "typo-button-base-bold"
);

export const ButtonLgMedium = createTypography(
  "span",
  "typo-button-lg-medium"
);


/* ============================================================
   UPPERCASE
   ============================================================ */

export const UppercaseMedium = createTypography(
  "span",
  "typo-uppercase-medium"
);