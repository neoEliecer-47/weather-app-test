export function buildBackgroundWidgetColorName(color: string) {
  //i tried to create backgrounds of even hovers for the dynamic widget component but it is not possible with Tailwind so built this
  if (color === "green") return "rgba(187,247,108,0.5)";
  if (color === "blue") return "rgba(191,219,254,0.5)";
  if (color === "red") return "rgba(254,202,202,0.5)";
  if (color === "gray") return "rgba(209,213,219,0.7)";
}
