---
published: true
title: React.js is great
layout: post
---
I've been using [React](http://facebook.github.io/react) for just over a year now, in small little projects and in large undertakings like our front-end at [Beagle](http://beagle.ai/). I spend a lot of time on Hacker News where a lot of people are already on the bandwagon, so when I talk to tech people just around me in real life, I remember that React is still the new kid on the block in web dev, and a lot of people who see it get quickly turned off by some key design features that seem questionable at first glance. So I wrote a long rant to exude my giddy excitement about React. Hopefully I'll convince you that it's worth trying out.

I initially intended for this to be a short post, but it evolved to a manifesto. In the first few paragraphs, I talk about why the React architecture is just inherently good, and leads you to build great apps. In the next section I discuss the ecosystem of React and the tools that help you write amazing apps. Finally, I quickly discuss two new technologies that emerged from the React community that promise to change the way we write client applications (both web and native).

# Why I think React is an awesome, well-designed library

By far the best thing about React is the **component paradigm**. Forget virtual DOM, forget HTML in your Javascript, or any of the other hype you might have heard about React. Components are why you'll fall in love with it.

Components are great because they can *totally encapsulate* an entire chunk of user interface. Using just the concepts of **props** and **state**, a component will completely wrap up the functionality and appearance of a logical chunk of UI. Then your React app is just an arrangement of your components. You write components that contain other components, and components that just have "primitive" base components: divs and spans.

So yes, you have your divs and spans in your Javascript file. I know, this is weird at first. But the beautiful part of having HTML in your Javascript is that you define the visual appearance of your component in the *same place* where the business logic of that component is. In the context of React, the usage of HTML in your Javascript comes via [JSX](https://facebook.github.io/react/docs/displaying-data.html#jsx-syntax). You might have also heard that React uses inline-styles. It sounds outdated but it's actually very nice, since it gives you the ability to very explicitly control the appearance of a component right beside the HTML description of the component! (And if you still hate inline-styles, that's ok because by no means are they required or even recommended -- in fact, there are amazing tools to help with writing normal CSS in React.)

Ok, but maybe you fundamentally believe that appearance and business logic should just be decoupled, put in different files. I felt this way this too, but I was quickly converted. With React you have the appearance of the component right next to the code that determines how it looks. If you structure your project right, you'll have different files for each component, and when something looks wrong, you know exactly which file to go to. If you want to add new functionality, you go to the parent component, break it down, add a new sub-component, or just change the elements of an existing component.

Finally, because everything is in Javascript, you don't have to learn any new syntax. If you want create an `<li>` for each element in an array, you don't need to look up the syntax of `ng-repeat`. You just write a `for` loop. If you want your button to be blue if it is enabled and red if it is disabled, you don't need to look up the syntax for an "if" -- you just use an `if` in your Javascript.

So up to this point, I've described some inherent benefits that arise out of the principles of React:

1. Components provide a great way of thinking about the total design of your app;
2. Having a component's visual description and business logic in the same file makes it very easy to understand;
3. You always have the full power of Javascript, but the simplicity of needing to know just Javascript.

But now I'll talk about some *indirect benefits* that I've reaped from using React!

# How a React tool chain takes your app to the next level

Since JSX (the controversial "HTML in your Javascript") is technically not Javascript, you need to set up a tool chain to make your JSX compile down to executable Javascript. Fortunately this tool chain is not very hard to set up, and once you have it, you get **so many** other good features! The best feature that basically comes out-of-the-box [via Babel](https://babeljs.io/) is ES6, or next-generation Javascript. It compiles down to ES5 (the typical JS we write that all browsers support well). ES6 is beautiful and comes with many nice features that work especially well with React. But there's myriad other awesome tools that complement your workflow. Another incredibly awesome tool is [live reloading](http://gaearon.github.io/react-hot-loader/), which lets you change your components on the fly and see the changes in your browser without reloading. I've seen this before for CSS and even Javascript, but live reloading lets you update components without even losing their state! It is pretty magical.

The list of great tools goes on and on. I promised earlier I'd talk about CSS in React! One tool that I'm very excited about is [CSS Modules](https://css-modules.github.io/webpack-demo/), which lets you write CSS like normal, but programmatically generates class names so that you don't have to worry much about naming issues, selector specificity, and any unintended style cascading. Another great tool is ESLint preprocessors that hook into your compile-time workflow effortlessly. With such an epic tool chain, you can tweak the hell out of your compile process. Toss in a minifier/dead-code eliminator for free. Add global variables that let you define environments and build features that will be available in `DEV` but hidden (and removed once minified) on `PROD`. You can have a preprocessor find small assets on your page and inline them in the page to save a small request. The possibilities go [on and on](https://webpack.github.io/docs/list-of-plugins.html)!

React is also inspired by many functional programming paradigms. It is considered to be *declarative*, because you just describe *what* the component is, and let the library take care of *how* to draw the component. In learning React, I've had some great exposure to some simple functional programming paradigms (map/filter, composition, immutable data structures), which have vastly improved the quality and appearance of my code. The functional idea of one-way "reactive" flow of data has also inspired the [Flux](https://facebook.github.io/flux/) architecture which goes hand-in-hand with React. The concepts of Flux have been reduced and refined into an extremely beautiful library called [Redux](http://redux.js.org/), which leverages immutable data. Apart from being simply and easy to get, Redux has great performance implications for React apps, lets you modify your data store code with the live-reloading paradigm, and even offers [developer tools](https://github.com/gaearon/redux-devtools#redux-devtools) that let you time-travel through the various states of your application's data.

The last thing I wanted to mention about how I've benefited from React is that I learned all of this great stuff from the enthusiastic React community. These people are brilliant developers, and they're driving the amazing innovation around React and Javascript. There's even a [massive chat room](http://www.reactiflux.com/) (that used to be on Slack!) where React's thought leaders all hang out, everyone helps each other out, and awesome conversations about all the greatness of React happen on the regular. I've even had a Google Hangout with a maintainer of a [popular React library](https://github.com/react-bootstrap/react-bootstrap) when I ran into a bug I couldn't figure out!

Here's a quick summary of the awesome ancillary benefits of the React developer experience:

1. React includes a quick sell on **functional programming** concepts that makes you a better programmer;
2. React encourages setting up a **sophisticated tool chain** that gives you:
  - Ability to write amazing code using really awesome features;
  - Developer tools that let you travel through time;
3. The Flux architecture which makes it **easy to manage complex application data**;
4. Being part of an **amazing community** that is on the forefront of front-end development.

# Next steps with React

I'm not done. I know, I know, this has already gone on way too long. But I also wanted to talk about two other amazing React ecosystem technologies that are truly mind-blowing.

The first technologiy is [GraphQL](http://facebook.github.io/react/blog/2015/02/20/introducing-relay-and-graphql.html), which is a very cool protocol for client data fetching. It's really a competitor to REST, in that a) it concerns the design of the back-end that serves data, and b) that it is designed to make it easier for client developers to get data from the server. GraphQL lets you write queries that look like nested JSON. Then the server responds with data in exactly the shape you asked for. So you don't really need to worry about structuring your REST endpoints anymore -- GraphQL lets you ask for exactly the data you need, no more and no less. Facebook says that they don't even need to write versioned APIs anymore, because each iteration of the client app just requests new data from GraphQL without having to deprecate anything that serves unneeded data. Then, Facebook came out with Relay, which efficiently couples GraphQL queries to React components. Now, you have files that specify the behaviour, appearance, **and** data requirements of a user interface component!

The second technology is [React Native](https://facebook.github.io/react-native/), which brings the full power of React to iOS and Android. You get the beauty of the component architecture, Flux architecture, the tooling ecosystem, and you do it all with Javascript. But the mind-blowing part is that they're not just HTML wrappers -- you actually get **native apps**! That is, you really get native iOS and Android views and components, and access to native APIs. Amazingly, now Javascript developers can build high quality, rich native apps without needing to learn a new tech stack. And that's not all -- since React Native apps are just interpreted Javascript, you can cleverly [deploy new iterations of your app immediately](https://apphub.io/), without waiting for App Store approval!

---------

That's it! Wow. This post turned out to be far longer than I anticipated. I think there's a lot to talk about when it comes to React. It is inherently very well designed. Its tool chain is an accessible entry point that lets you build a very streamlined and awesome developer environment. Its community is full of smart people which keep React on the frontiers of web development, and you'll get to ride (or push) that wave. GraphQL and React Native are incredibly innovative, and let you develop next-level applications for all platforms.

If you're still not sold, I highly recommend you take 45 seconds to read [Why React?](https://facebook.github.io/react/docs/why-react.html) If you're curious to dive in and start coding, [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html) is an amazing but very simple tutorial.

I hope that at the very least, my enthusiasm for React might inspire you to give it an honest try. I think that if you try it, you'll very quickly see how it can take your client development to new heights. I'm always excited to talk about React -- please feel free to reach out to me if you're curious about anything!