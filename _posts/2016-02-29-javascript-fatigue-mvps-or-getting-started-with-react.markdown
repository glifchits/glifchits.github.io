---
published: true
title: Javascript fatigue, MVPs, or Getting started with React
layout: post
tags: [react, webdev, javascript]
---
There's a lot of talk right now around the idea of Javascript fatigue. There is so much stuff to put in a JS project nowadays. Let's build a new app: we want to use ES2015 (aka. ES6) so we need the Babel transpiler. We want to use Babel so we need a module bundler like Browserify or Webpack. So which one do we pick? Then we want to start using React, but universal (aka. isomorphic) apps seem like a great idea, let's try that out. Hmm... how do we do that? Ok, let's download a boilerplate. Which boilerplate do we pick? Ah, lets grab this one. It's got Babel for ES6, it uses Webpack, it's configured for universal React, it's got an Express server ready, uses Redux as the Flux store, handles user sessions with the browser local storage API, JSON web tokens for authentication, React Router for universal routing...

What were we building again?

I think React, in all its power and flexibility, started the hype around the awesome toolchains you can build around it. But that's accelerated the collective fatigue that developers are feeling these days.

If you want to start doing React, check out the project [jarsbe/react-simple](https://github.com/jarsbe/react-simple) on GitHub. It's nothing but an `index.html` with 4 scripts loaded via CDN that lets you write beautiful React code with ES6. Just like the good old days where all you needed was `<script src="jquery.js"></script>` to get hacking.

My first React project got started much in the same way: one `<script>` for React core, and another for the in-browser JSX transformer. Webpack, Babel, React Router, and their ilk fell into the project very naturally as the product gradually fleshed out, and those technologies became necessary.

![MVP](/images/blog/mvp.png "MVP")

To me, Javascript fatigue feels like picking out an engine, transmission, and tires when I just want to build a skateboard. Fortunately, it doesn't have to be this way!
