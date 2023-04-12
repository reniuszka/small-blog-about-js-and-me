---
title: "JS - post 2"
date: "2023-04-09"
---

### I am reading JS series written by Kyles Simpson - You Don't Know JS Yet

#### Decided to make short notes what is important to know about JS and its rules and facts based on the book

##### One rule: to make it easy I want to write down 5 important info about JS

1. 'use-strict' - strict mode is a guide to
   the best way to do things so that the JS engine has the best
   chance of optimizing and efficiently running the code. It helps to avoid some of the problematic errors - it relates to the early errors(aren’t strictly syntax errors) which are thrown at compile time (before the code is run).

2. Remember: each standalone file is its own separate program.

3. Many projects use build process tools that end up
   combining separate files from the project into a
   single file to be delivered to a web page. When
   this happens, JS treats this single combined file
   as the entire program.

4. The most fundamental unit of information in a program is a
   value. Values are data. They’re how the program maintains
   state. Values come in two forms in JS: primitive and object.

5. String interpolation in JavaScript is a process in which an expression is inserted or placed in the string. To insert or embed this expression into the string a template literal is used. By using string interpolation in JavaScript, values like variables and mathematical expressions and calculations can also be added:
   - const firstName = 'Renata'
   - console.log(`Hello Beautiful, my name is ${ firstName}`);
   - // Hello Beautiful, my name is Renata
