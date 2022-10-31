export type Color = keyof typeof colors;

export const colors = {
  yellow: "#d9bc4b",
  white: "#ddd",
  gray100: "#B5B5B5",
  gray200: "#888",
  gray300: "#555",
  gray400: "#444",
  gray500: "#363636",
  gray550: "#313131",
  gray600: "#292929",
};

export const highlights = {
  color: colors.white,
  backgroundColor: colors.gray400,
};

export const highlightsSoft = {
  color: colors.white,
  backgroundColor: colors.gray500,
};

export const defaults = {
  color: colors.gray100,
  backgroundColor: colors.gray500,
};
