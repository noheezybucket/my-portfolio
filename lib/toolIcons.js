/** Tool SVG icons drawn white for dark backgrounds — invert in light mode */
export const LIGHT_INVERT_TOOL_ICONS = [
  "cursor",
  "openai",
  "elementor",
  "github",
  "next",
  "express",
];

export const toolIconClassName = (icon) =>
  LIGHT_INVERT_TOOL_ICONS.includes(icon) ? "theme-icon-invert" : undefined;
