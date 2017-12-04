# domealgo
Basic boilerplate with gulp, sass and browser sync working

## Introduction
This is a very simple boilerplate that lets me start prototyping in a structure with working gulp, sass compiling and browserSync.

## Getting started
To get started just run these commands

``` bash
git clone https://github.com/raulalgo/domealgo.git crazyproject
cd crazyproject
rm -rf .git
npm install
gulp
```

You are good to go. This will launch a server and a browser window that will automatically refresh every time you save yor .html or .scss files.

## Use of Basscss
[Basscss](http://www.basscss.com/) is an amazing project for fast HTML layout by Brent Jackson which you should definitely check out. This makes use of `basscss.min.css` to load all the classes in basscss.

This is not, however, a good solution for making a custom build of it. If this is your intention you should check out [Bassplate](https://github.com/basscss/bassplate) which comes with everything in place and working for making your own basscss themes.
