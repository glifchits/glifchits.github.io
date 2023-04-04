---
title: Upworthy Paper
layout: post
published: true
---

Another paper from my time in grad school is officially out! We had access to a unique dataset of thousands of news headline A/B tests and looked at factors of the headlines that affected their performance. We find that some linguistic features have statistically significant effects on headline success, including that negative emotion drives clicks, while positive emotion has no effect.

On a meta level, the statistical evidence we found here is robust in three ways that are deeper than most typical research articles can achieve. First, our unit of analysis is not a headline but an entire A/B-experiment: a single A/B test can offer causal evidence to support or reject hypotheses, while we meta-analyse thousands. Second is that the dataset forced us (plus our editors and publishers) to be good scientists — we developed our hypotheses on a small subset of the data because that's all we had access to. The rest of the data were released only after our report was guaranteed to be published. Fortunately for us, our results were confirmed by the much larger confirmatory dataset. Third, our findings were also supported by researchers whose work was published independently of ours ([Robertson et al 2023](https://www.nature.com/articles/s41562-023-01538-4), in Nature Human Behaviour). All three of these meta-scientific achievements were made possible thanks to the custodians of [The Upworthy Research Archive](https://upworthy.natematias.com/).

(As a side note, each of these three points touches on some extremely juicy topics in the practice and philosophy of scientific research that I think it's definitely worth diving into detail on each. I'll try to write a blog post on this soon!)

Check out our open access paper here: <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0281682">https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0281682</a>

<i>Cross-posted from [LinkedIn](https://www.linkedin.com/posts/georgelifchits_linguistic-effects-on-news-headline-success-activity-7046145751621513216-HA2X?utm_source=share&utm_medium=member_desktop)</i>

<figure>
  <img src="/images/blog/upworthy-headlines-coeff.png" alt="Upworthy headline analysis: logistic regression coefficients">
  <figcaption>
    Fig 2. Main regression analysis on the upworthy archive confirmatory and exploratory datasets.

Error bars visualize 95% (dark bars) and 99% (light bars) confidence intervals on the logistic regression coefficients.

  </figcaption>
</figure>
