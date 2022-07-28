/* eslint-disable no-undef */
module.exports = {
   preset: "ts-jest",
   verbose: true,
   setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
   moduleDirectories: ["node_modules", "src"],
   collectCoverageFrom: ["**/*.{js,jsx,ts,tsx}", "!**/*.d.ts", "!**/node_modules/**"],
   moduleNameMapper: {
      // "constants/(.*)": "<rootDir>/src/constants/$1",
      /* Handle CSS imports (with CSS modules)
    https://jestjs.io/docs/webpack#mocking-css-modules */
      "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

      // Handle CSS imports (without CSS modules)
      "^.+\\.(css|sass|scss)$": "<rootDir>/test/__mocks__/styleMock.js",

      /* Handle image imports
    https://jestjs.io/docs/webpack#handling-static-assets */
      "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$": "<rootDir>/test/__mocks__/fileMock.js",
   },
   testPathIgnorePatterns: ["<rootDir>/node_modules/"],
   testEnvironment: "jsdom",
   transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.(css|sass|scss)$"],
   roots: ["<rootDir>/src"],
   transform: {
      "^.+\\.tsx?$": "ts-jest",
   },
   modulePaths: ["node_modules", "<rootDir>/src"],
}
