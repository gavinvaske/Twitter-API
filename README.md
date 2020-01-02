# Twitter-API

Table of Contents
- [Getting started](#getting-started)


This repository contains a Restful network API that allows you to...

 - [ ] Post tweets to your logged in account. Tweets can only be 120 characters in length.
 - [ ] You can upload photos to your logged in account. No videos, no live streaming, no high resolution photos. Just low res, photos. 
 - [ ] View most recent tweets that people have posted. 
 - [ ] Twitter was designed to be the place you told the world what you ate that day, how many miles you ran. It was pretty much a timeline for yourself. So, we will be doing the same. You will hook up your GitHub profile to your social media account in the API and every time that you push code up to the API's git repo, you will send a tweet to your profile. 
 
 <a id="getting-started"></a>
# Getting started

- First, clone this repo:

```
npm install
bundle install
```

- Next, ....


# Development

_Warning: Make sure to follow the [getting started](#getting-started) section to configure your project before you try and run it locally._

Do you wish to build and run this application locally on your machine for development? Let's do it.

You need Docker and Nodejs installed. That is it!

```bash
npm install
bundle install
npm run dev:setup
npm run dev
```

This will install everything you need, start up services such as Postgres, then start your node application.


# Services


## Contribute code to the repository

After your machine is setup for [development](#development), all you need to do is follow these steps:

- Make a git branch off of `master`, make your code edits.
- Make a pull request in GitHub into the `master` branch. Wait until CI build passes, get your code reviewed by your team members, then it gets merged in.


### Debug code in development

To debug your code, this project is setup to work with VSCode's built-in debugger. All you need to do is run the "Local development debug" task in VSCode and done! It will even reset the debugger and recompile your code on code change.


# Tests

This project is setup to create and run unit and integration tests against your code base super easily. For information on how to _write_ tests, check out the `tests/` directory.

```bash
npm run test:setup
npm run test
```

This will run all of your unit and integration tests.

It's recommended that while you are developing your tests you use the [Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner) VSCode extension for when you want to run or debug individual tests.

# Deploy (TODO)

# Documentation

This API is uses [apidoc](http://apidocjs.com/) for API documentation.

It is pretty easy to use. View the [official docs](http://apidocjs.com/) on the templating language and generate them using `npm run generate:doc`. Docs are generated in the `doc/` directory.

# Vocabulary Terms and Resources Explained

 - Virtual Machine ("VM"): TODO
 - Docker: TODO
 - Docker Container: TODO
 - Docer Image: TODO
 - Middleware: TODO
 
