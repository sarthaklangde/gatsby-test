import Typography from "typography";
import CodePlugin from "typography-plugin-code";
import oceanBeach from "typography-theme-ocean-beach";

oceanBeach.plugins = [
  new CodePlugin(),
];

const typography = new Typography(oceanBeach);


export default typography;
