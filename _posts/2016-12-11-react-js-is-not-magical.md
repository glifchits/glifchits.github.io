---
published: true
title: React.js is not magical
layout: post
---

[Last year](/2015/11/30/react-js-is-great.html) I wrote a long rant in which I
professed my love for React.js. One year later I've not much changed in my view,
but with the honeymoon period long gone I can express that love with greater
maturity and clarity.

**I love React because it is the _least magical way_ of developing complex web
applications.**

This thesis arrived to me after reading the article [Why we chose Vue.js over
React](http://pixeljets.com/blog/why-we-chose-vuejs-over-react), and perusing
the [Vue.js documentation](https://vuejs.org/v2/guide/).

I almost never look at the React documentation, because as a React developer I
memorized the very small API surface ages ago. And since I've recently started
using [Redux](http://redux.js.org/) quite heavily, I have found myself writing
stateless components quite often, and now React is practically invisible in my
day-to-day coding.

The React code I write and read today is pretty much just functions, declared
one after the other after the other. When the file gets too long, I create a new
file and move some of the functions there. Littered throughout this code are `<`
and `/>`. That's when you know React is playing a role in this app. When I have
some data and I want to show it on the screen, I literally just write the HTML I
want to see and fill in the blanks with real data. I haven't even had to switch
files, so I haven't switched physical or mental contexts. It is _so easy_.

Increasingly, JSX is the only artefact of React I see, so it is easy to forget
that React is doing so much heavy lifting. I rarely worry that the UI is out of
date or that the UI needs to be updated because data arrived from the server. I
also rarely worry about performance. I'm relieved of those concerns because of
React's virtual DOM (but I also never worry about the virtual DOM).

For all the heavy lifting that it does, "magical" would be a suitable adjective
for the React framework. But I love React because it is the least magical. When
I'm writing code, it really does feel like I'm just writing functions and
working with Javascript primitives. (Indeed, when someone who has only ever used
jQuery looks at a modern React app, ES6 syntax is likely the most confusing
thing they'll see.) And since adopting Redux, I strongly feel that I **actually
understand** the architecture of the entire web app. I feel that there is very
little hiding away in abstraction-land, and this gives me extreme confidence as
a developer.

If you've never written React code before, I recommend getting started with
[Create React App](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html),
which is a thoughtfully-crafted tool that aims to solve the problem of
[Javascript fatigue](/2016/02/29/javascript-fatigue-mvps-or-getting-started-with-react.html)
by letting you write React and ES6 apps right away. I hope your experience with
React is as fruitful for you as it has been for me!

