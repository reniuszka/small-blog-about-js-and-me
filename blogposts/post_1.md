---
title: "JS - post 1"
date: "2023-03-25"
---

### I am reading JS series written by Kyles Simpson - You Don't Know JS Yet

#### Decided to make short notes what is important to know about JS and its rules and facts based on the book

##### One rule: to make it easy I want to write down 5 important info about JS

1. The official name of the language specified by TC39 and formalized by the ECMA standards body is ECMAScript. Don't use JS6 or ES8. You should use "ES20xx" ex: ES2019 or just JS

2. TC39 means Technical Committee number 39. TC39 works on maintaining and updating the standard for the ECMAScript programming language. There are 50-100 members of TC39, from different big companies (Mozilla, Google, Apple, Samsung...). Usually they meet up once per 2 months for up to 3 days. They meet to vote on any agreed changes, which they then submit to ECMA, the standards organization

3. JS works on the Web or in Node.js environment

4. So alert(..) and console.log(..) are not defined by JS - but they look like JS. They are functions and object methods and they obey JS syntax rules. The behaviors behind them are controlled by the environment running the JS engine, but on
   the surface they definitely have to abide by JS to be able to
   play in the JS playground

5. JavaScript is backwards-compatible. This means that once something is accepted as valid JS, there will not be a future change to the language that causes that code to become invalid JS. JS code written in 1995 - however primitive or limited - should still work now.
