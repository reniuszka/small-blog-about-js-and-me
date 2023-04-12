---
title: "JS - post 2"
date: "2023-04-02"
---

### I am reading JS series written by Kyles Simpson - You Don't Know JS Yet

#### Decided to make short notes what is important to know about JS and its rules and facts based on the book

##### One rule: to make it easy I want to write down 5 important info about JS

1. JavaScript is most definitely a multi-paradigm language. I
   can write procedural, object-oriented (OO/classes), or functional (FP-style) code

2. Transpiling is an invented term to
   describe using a tool to convert the source code of a program
   from one form to another (but still as textual source code).
   Typically, forwards-compatibility problems related to syntax
   are solved by using a transpiler (the most common one
   being Babel (https://babeljs.io)) to convert from that newer
   JS syntax version to an equivalent older syntax

3. The word polyfill is an invented term (by Remy Sharp) used to refer to taking the definition of a newer feature and producing a piece of code that’s equivalent to the behavior, but is able to run in older JS environments (ex:browser's API). If I notice, that JS syntax is not supported in every browser yet, so for this purpose I can polyfill(write my own code) the method.

4. To sum up:

   #### Polyfill

   if my target browser did not yet implement the latest bleeding edge feature (read browser APIs) I want to use.

   #### Transpiling

   will let me use language features, the target environment does not support yet

5. JS is a compiled language, so we are informed of static errors
   before our code is executed.
