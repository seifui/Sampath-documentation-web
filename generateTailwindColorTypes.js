const fs = require("fs");
const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js"); // Adjust the path if needed

const fullConfig = resolveConfig(tailwindConfig);

const colors = fullConfig.theme.colors;

const generateColorTypes = (colorObj) => {
  const colorTypes = [];

  const traverseColors = (obj, keys = []) => {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        traverseColors(obj[key], [...keys, key]);
      } else {
        colorTypes.push(`${[...keys, key].join("-")}`);
      }
    }
  };

  traverseColors(colorObj);
  return colorTypes;
};

const bgColorTypes = generateColorTypes(colors);

const typeDef = `export type TailwindColors = ${bgColorTypes
  .map((c) => `'${c}'`)
  .join(" | ")};`;

fs.writeFileSync("./src/types/tailwindColors.d.ts", typeDef);
console.log("Tailwind color types generated successfully!");
