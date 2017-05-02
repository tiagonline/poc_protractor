# POC Protractor
[![Hiptest Status](https://hiptest.net/badges/folder/238437)](https://hiptest.net/app/projects/48054/test-plan/folders/238437)



The structure is based on three layers: features, steps and pages.

1. Features: Contains all the features of the project;
2. Steps: Contains all the steps implementations;
3. Pages: Contains all the pages in the website. A page must contain the declaration of all the elements of the page and the declaration of its actions.

## Pre Conditions

1. Node.js LTS (6.10.2)
2. Chromedriver

## Instalation

Install it as:

    $ npm install
    $ npm install -g protractor

## Usage

Too run tests in terminal, type:

```
  protractor protractor.conf.js
```
