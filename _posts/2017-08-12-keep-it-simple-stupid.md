---
published: true
title: Keep It Simple, Stupid
layout: post
---

Something that's been on my mind lately is KISS. I'm not talking about the Prince song, and I'm not even talking about the 80's rock band; KISS is a generic principle that I've been personally struggling with for almost as long as I can remember being a developer of software.

KISS stands for [Keep It Simple, Stupid](https://en.wikipedia.org/wiki/KISS_principle), and it's one part to the secret sauce of being a productive software developer.

Software developers are trained in the ability to look at a problem and abstract it into something a computer can do efficiently. Most problems are solved easily with some simple code. However, software developers worry about *scaling*, where the simple code isn't fast enough, doesn't support enough concurrent users, or becomes hard to maintain in a team, etc. To tackle problems of scale, developers are equipped with a wealth of best practices, elegant design patterns, clever abstractions, and efficient data structures. We know of languages, libraries, and frameworks that effectively solve generic problems for us so we can sweat the details. We read blog posts about how other people solved their scale problems by creatively employing an algorithm or exploiting features of a cool new programming language.

However, scalable software has a cost, which is increased risk of implementation errors (bugs) as well as increased cognitive overhead. Anything that isn't *simple* incurs this cost, whether it is a clever algorithm or data structure, a library or a framework, an internal microservice or a third-party API. These all add lines of code to the software, which increases the chance of introducing a bug and/or obfuscates the fundamental purpose of the program.

Some developers are prone to overengineering their software. Overengineering is the process of designing elegant solutions to problems that don't exist, thereby making the code more complicated than it needs to be. Most of the time, it is caused by worrying about scalability before it is a real problem.

> "Premature optimization is the root of all evil." -- Donald Knuth <sup>1</sup>

Overengineering is extremely tempting. Thinking about scale problems can be interesting, and identifying solutions to scale problems before they are real issues seems at first like a very disciplined way of developing software. But the additional complexity soon becomes a huge burden as you find software bugs, and you end up wasting lots of time digging around for problems just trying to get your first implementation working as expected.

So the moral is, **keep it simple, stupid**! The meaning of the word *stupid* in this context seems to vary by interpretation. But being someone who is often prone to "overengineering", I believe that "stupid" should be directed towards the overengineering developer. It reminds me a quote by Brian Kernighan of the famous K&R:

> Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it. <sup>2</sup>

Writing clever code seems like a clever idea, but it isn't.

As a software developer, "keeping it simple" means that your software is only as complicated as it has to be to solve the problem:

> "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away." -- Antoine de Saint-Exupery <sup>3</sup>

Simple software meets its purpose, solves its problem, and is faster to bring to market. The software that is on the market is the software that will get customers and encounter scale problems -- and only once scale problems are encountered does the complexity of scalability become necessary! A productive developer is not one that writes the most lines of code or designs the most elegant systems: a productive developer solves lots of problems with code. That's why, when I write software, I try to keep KISS on my mind.

----

Cliché programming quote sources:

0. [https://en.wikiquote.org/wiki/Donald_Knuth#Computer_Programming_as_an_Art_.281974.29](https://en.wikiquote.org/wiki/Donald_Knuth#Computer_Programming_as_an_Art_.281974.29)
0. [http://quotes.cat-v.org/programming/](http://quotes.cat-v.org/programming/)
0. [http://www.techrepublic.com/blog/it-security/the-danger-of-complexity-more-code-more-bugs/](http://www.techrepublic.com/blog/it-security/the-danger-of-complexity-more-code-more-bugs/)
