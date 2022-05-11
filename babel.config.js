import { readdirSync } from "fs"

const resolveAlias = readdirSync("./src", { withFileTypes: true })
   .filter((entry) => entry.isDirectory())
   .reduce(
      (aliases, dir) => {
         aliases[dir.name] = "./src/" + dir.name
         return aliases
      },
      { "*": ["src/*", "node_modules/*"] },
   )

export default function (api) {
   api.cache(true)

   return {
      presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
      plugins: [
         ["module-resolver", { root: "./", alias: resolveAlias }],
         [
            "@babel/plugin-transform-runtime",
            {
               regenerator: true,
            },
         ],
      ],
   }
}
