---
published: true
title: Neural Networks and Hotdogs
layout: post
---

In a recent [interview](https://www.wired.com/story/googles-ai-guru-computers-think-more-like-brains/), Geoff Hinton said that the quest for explainable AI is futile:

> People can’t explain how they work, for most of the things they do. When you hire somebody, the decision is based on all sorts of things you can quantify, and then all sorts of gut feelings. People have no idea how they do that. If you ask them to explain their decision, you are forcing them to make up a story.

> Neural nets have a similar problem. When you train a neural net, it will learn a billion numbers that represent the knowledge it has extracted from the training data. If you put in an image, out comes the right decision, say, whether this was a pedestrian or not. But if you ask “Why did it think that?” well if there were any simple rules for deciding whether an image contains a pedestrian or not, it would have been a solved problem ages ago.

I think this is really striking: it sets such a low bar for human cognition, but its one we can't get around. The simple fact is that there is just _no answer_ to so many problems that humans encounter on a regular basis.

But doesn't this just feel wrong? If I write down a 5 on a piece of paper and ask you to tell me what number this is, you spend 1 microsecond identifying the digit and 1 second wondering if this is a trick. But the trick is this: _why_ is it a 5? For decades, some of the smartest people in the world have tried to answer that question, and they got nowhere.

In the 1950s and 1960s the field of [artificial intelligence](https://en.wikipedia.org/wiki/History_of_artificial_intelligence) was born, and there was lots of hype then too! There was optimism in the reasoning power of computers, because they found an algorithm that can solve problems in a generic way:

> Many early AI programs used the same basic algorithm. To achieve some goal (like winning a game or proving a theorem), they proceeded step by step towards it (by making a move or a deduction) as if searching through a maze, backtracking whenever they reached a dead end. This paradigm was called "reasoning as search".

Think of it like this: if we can express a problem with enough detail, and tell the computer what we want our desired state to be, the computer will just search for the solution like following a maze.

There were many practical problems that stifled the success of the "reasoning as search" approach, but the most interesting one is [Moravec's paradox](https://en.wikipedia.org/wiki/Moravec%27s_paradox):

> As Moravec writes, "it is comparatively easy to make computers exhibit adult level performance on intelligence tests or playing checkers, and difficult or impossible to give them the skills of a one-year-old when it comes to perception and mobility".

> "In general, we're least aware of what our minds do best", [Minsky] wrote, and added "we're more aware of simple processes that don't work well than of complex ones that work flawlessly".

The most simple tasks that get us through our days, are also essentially impossible to describe in any level of precision. It reminds me of this [comic](http://existentialcomics.com/comic/268): is a hotdog a sandwich? The rules of logic and the power of human deduction totally fail. Wittgenstein comes along at the end to say that logic and complex thought is essentially useless in such a practical concern.

Let's get back to Geoff Hinton. He is partially responsible for all of the AI hype right now: since 2012, neural networks, which he has been championing for decades, have been setting the state-of-the-art in basically every area of machine intelligence.

I think the most important reason for the success of neural networks is that they get so close to that unconscious level of human thought. For the first time in computing history, there is a way of telling the computer what we want and letting a black-box fill in the details. This is so important, because frankly... we had years to figure out how to design a mechanism to put in that box, and we completely failed at it (as Moravec's paradox would predict).

So, if we want our neural networks to explain themselves, what do we do? Test how they perform. Unlike humans, neural networks will be consistent in their decision making, so we can subject them to rigorous evaluation. We might never know _why_ a neural network makes a decision -- but we can determine _when_ it produces a certain outcome, and if we don't like it, we should fix it. (Important: neural networks do not solve things like bias, they are just a cheap replacement for a decision making process.)

I'll end with a great [quote](https://arxiv.org/pdf/1802.07740.pdf):

> Let us stop and ask: what does it actually mean to “understand” another agent? As humans, we face this challenge every day, as we engage with other humans whose latent characteristics, latent states, and computational processes are almost entirely inaccessible. Yet we function with remarkable adeptness. We can make predictions about strangers’ future behaviour, and infer what information they have about the world; we plan our interactions with others, and establish efficient and effective communication.
