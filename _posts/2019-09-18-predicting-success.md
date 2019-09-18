---
title: Using popularity to predict success
layout: post
published: true
location: Toronto
---

Recently, a data science class project made it to the front-page of Hacker News. Its title, ["Using Spotify data to predict what songs will be hits"](https://news.ycombinator.com/item?id=20918080), was tantalizing --- unfortunately (and unsurprisingly), it was misleading. However, it gave me the chance to share some ideas I've taken from the literature on predicting success, which I'll polish up as a neat blog post.

<i>Sidenote: this was a nice project, I think the students are talented, and it's not entirely clear whether actually they made the error I discuss here. The purpose of this post is not to disparage this class project.</i>

Their project uses machine learning to predict whether songs will become hits. Their fatal flaw is simple: _they use popularity to predict success._ In their write-up (posted on [arXiv](https://arxiv.org/pdf/1908.08609.pdf)), they describe the 27 features that were included in their dataset. Most of these are the features you'd expect, like the track title, duration, and "acoustic analysis" features such as "instrumentalness", "energy", "danceability", and so on. However, even before we get far down the list, we see one baffling feature:

> _popularity_: a value between 0 and 100, with 100 being the most popular. Popularity is calculated by Spotify, and is based, "in the most part, on the total number of plays the track has had and how recent those plays are."

They go on to describe other features derived from Billboard chart data, such as the number of weeks spent on the chart, and so on.

With the inclusion of these features, the research question boils down to: "can the popularity of songs be used to predict the success of songs?" This circularity makes prediction tasks like this one seem easy (~90% test accuracy was achieved in the project). However, the inclusion of inappropriate features is just a particularly egregious example out of a broad class of errors that may overinflate the "test set" predictive performance to how it would perform in the real-world (other errors include overfitting, insufficient cross-validation, or p-hacking).

# Predicting success

More broadly, how do we predict the success of cultural objects? Many people believe that if something is high-quality, others will agree and recognize it as such, and it will naturally become successful. Others believe that success is a lot of luck: oftentimes low-quality things will find success while high-quality things are overlooked, for no better reason than not being in the "right place at the right time". (As a sidenote, individual beliefs on quality vs. luck seem to underlie deeply held beliefs about society and fairness, but I'll save that for later.)

So is success due to quality, or is it luck? In one influential study called MusicLab, Salganik, Dodds, and Watts (2006)[^musiclab_science] showed that luck might have a bigger impact than we expect. They got people to measure the "quality" of a set of 48 songs, and then ran multiple experiments, allowing people to listen to and download these songs. They found that when people saw how many times a song was downloaded by other people, the link between the quality of the song and its success became very muddy. This study reveals that quality is far from the only factor at play when it comes to measuring the success of songs, and "social influence" plays a significant role (in this study, via the counts of how many other people downloaded the songs).

Maybe we should include "social influence" as a feature in our prediction task! But think of what this would entail in the real world, for a movie as an example: you'd have to know how much advertising there was, how effective it was at engaging people, how much word-of-mouth occurred, the effect of film critic reviews, whether or not current events that coincided with the plot of the movie, and so on, and so on. While some of these complications might seem tractable, others simply are not. For example, if the leading actor becomes involved in a scandal after the movie is released, that could certainly affect its success --- but in many cases, an event like that could be really hard to anticipate ahead of time.

What this reveals is that social influence might be a complex system, and if that's the case, then the only thing we can predict about it is that we won't be able to predict it. Martin et al. (2016)[^limpred] argue that in such complex systems, there are theoretical upper limits to the accuracy of predictions. First they show that predicting the success of tweets is extremely difficult, even when using some of the best machine learning techniques available to them. Then they set up a simulated world where tweets become successful, and show that even when they run the simulation with fixed parameters, they still can't predict success when quality varies substantially. As soon as we acknowledge that there's a decent amount of randomness in the process, the ability to predict success plummets.

But there is one thing we do know about success --- and its that _success breeds success_. You may know this as "the rich get richer" or "cumulative advantage". In MusicLab, every song started out on a level playing field with a download count of zero, so the first songs to start accumulating downloads were picked without social influence at play. This early success ended up leading to future success (Salganik and Watts 2008[^herd_astray]; Salganik, Dodds, and Watts 2006[^musiclab_science]). However, what determines early success is essentially random: it depends on who the first few people on the site were, what their musical moods were at the moment, and whether they felt like clicking "download". Again, much of it is essentially random.

When success breeds success, you can use early popularity to get a much better idea of how something will succeed later on. When they predicted the success of tweets, Martin et al. (2016)[^limpred] found that out of all the many features they had in their data, just one --- past success of the user --- was as predictive as all features combined. This is consistent with Shulman, Sharma, and Cosley (2016)[^predictability], who studied the predictability of success in other online platforms. If they used features that included how popular the item is after a few days, they call it "peeking", and they find that just a single feature that peeks can be more predictive than all other features they had.

What we know about predicting success is that it is extremely difficult. Even sophisticated machine learning techniques can't predict whether a particular song succeeds or if a particular tweet goes viral. What we do know is that the effects of cumulative advantage are strong, so if you are able to estimate early popularity of an item, then you'll have a pretty good idea of whether or not it will succeed. However, this is asking a fundamentally different problem:

> ... whereas ex-ante predictions claim, in effect, that "X will succeed because it has properties A, B, and C", peeking strategies instead claim that "X will succeed tomorrow because it is successful today." (Martin et al. 2016)[^limpred]

If you happen to scroll on Hacker News and find a project which claims to be able to predict whether something will become a hit, take a closer look and see exactly which of these questions they're actually answering. Predicting success using popularity is a breeze, but predicting success based only on the qualities of the item is (probably) impossible!

(By the way, there is an easy smell test to see if someone is truly able to predict hits ahead of time --- just look at whether they're billionaires already!)

# References

[^limpred]: Martin, Travis, Jake M. Hofman, Amit Sharma, Ashton Anderson, and Duncan J. Watts. 2016. “Exploring Limits to Prediction in Complex Social Systems.” In _Proceedings of the 25th International Conference on World Wide Web - WWW ’16_, 683–94. New York, New York, USA: ACM Press. [https://doi.org/10.1145/2872427.2883001](https://doi.org/10.1145/2872427.2883001).
[^musiclab_science]: Salganik, Matthew J., Peter Sheridan Dodds, and Duncan J. Watts. 2006. “Experimental Study of Inequality and Unpredictability in an Artificial Cultural Market.” _Science_ 311 (5762): 854–56. [https://doi.org/10.1126/science.1121066](https://doi.org/10.1126/science.1121066).
[^herd_astray]: Salganik, Matthew J., and Duncan J. Watts. 2008. “Leading the Herd Astray: An Experimental Study of Self-Fulfilling Prophecies in an Artificial Cultural Market.” _Social Psychology Quarterly_ 71 (4): 338–55. [https://doi.org/10.1177/019027250807100404](https://doi.org/10.1177/019027250807100404).
[^predictability]: Shulman, Benjamin, Amit Sharma, and Dan Cosley. 2016. “Predictability of Popularity: Gaps between Prediction and Understanding.” In _Proceedings of the Tenth International AAAI Conference on Web and Social Media – ICWSM 2016_. [https://www.aaai.org/ocs/index.php/ICWSM/ICWSM16/paper/view/13129](https://www.aaai.org/ocs/index.php/ICWSM/ICWSM16/paper/view/13129).
