const pack = require("./package");

module.exports = {
  preset: "ts-jest",
  roots: ["<rootDir>/src", "<rootDir>/__tests__"],
  testPathIgnorePatterns: ["/node_modules/", "/output/"],
  testEnvironment: "node",
  testRegex: [".spec.ts$"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  coveragePathIgnorePatterns: ["<rootDir>/__tests__"],
  verbose: true,
  name: pack.name,
  displayName: pack.name
};
