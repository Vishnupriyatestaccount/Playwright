# Playwright Practice Repository

This repository is a learning workspace for JavaScript, TypeScript, and Playwright automation. It contains chapter-wise practice files, examples, and mini exercises for hands-on learning.

## Repository overview

- `Chapter_01_Basics/` - basics of JavaScript and setup examples
- `Chapter_02_JavaScript_Basics/` - JavaScript fundamentals
- `Chapter_03_Identifiers_Literals/` - identifiers, literals, comments, and shortcut notes
- `Chapter_04_Javascript_Concepts/` - var/let/const, scope, hoisting, and functions
- `Chapter_05_Literals/` - literals and template strings
- `chapter_06_Operator/` - arithmetic, comparison, logical, and ternary operators
- `chapter_07_If_else/` - if/else and decision logic
- `chapter_08_Switch_Statement/` - switch-case examples
- `chapter_09_UserInput/` - console input and user input examples
- `chapter_10_Loops/` - loops and iterations
- `chapter_11_Arrays/` - array operations and practice exercises
- `chapter_12_Funtions/` - function types, arrow functions, closures, and IIFE
- `chapter_13_Strings/` - string methods and transformations
- `chapter_14_Objects/` - object creation, destructuring, and object patterns
- `chapter_15_2D_Array/` - 2D arrays and matrix-style exercises
- `Chapter_16_Callback/` - callback patterns and examples
- `Chapter_17_Promises/` - promise examples and async flow practice
- `Chapter_18_async_await/` - async/await examples
- `Chapter_19_Playwright/` - Playwright automation practice and reports
- `Chapter_20_OOPS Basics/` - object-oriented programming basics
- `Chapter_21_TypeScriptBasic/` - TypeScript basics and module examples
- `Chapter_22_Class_Objects/` - classes and object modeling
- `Chapter_23_Encapsulation/` - encapsulation and access control examples
- `Chapter_24_Inheritence/` - inheritance examples and patterns
- `Chapter_25_Polymorphism/` - method overriding and polymorphism
- `Chapter_26_Typescript/` - TypeScript fundamentals and examples
- `Chapter_27_Interfaces/` - interface examples, optional properties, readonly fields, and interface contracts

## TypeScript setup

To run the TypeScript examples locally, install the project dependencies:

```bash
npm install --save-dev ts-node typescript @types/node
```

Then execute a lesson file such as:

```bash
npx ts-node Chapter_26_Typescript/198_ts4.ts
```

Or compile the interface examples:

```bash
npx tsc --noEmit Chapter_27_Interfaces/201_Interface.ts Chapter_27_Interfaces/202_interface.ts Chapter_27_Interfaces/203_InterfaceRO.ts Chapter_27_Interfaces/204_Interfaceex.ts Chapter_27_Interfaces/205_interface.ts
```

## Playwright usage

```bash
npx playwright test
```

## Notes

- This repository is mainly for learning and practicing JavaScript, TypeScript, and Playwright.
- Generated Playwright reports and test-results are ignored by the Git rules to keep the repository focused on source files and exercises.
- TypeScript interface lessons include examples for simple object contracts, optional properties, readonly values, and calculator-style implementations.
- The project structure is organized by chapter, and the root README is kept current as new exercises are added and older files are cleaned up.
- Node.js and npm are required to run the TypeScript and Playwright examples.
