---
title: "Revisiting my 12-year old question about determinism and quantum mechanics"
layout: post
published: true
location: Kitchener
---

A while ago I asked [this StackExchange question](https://philosophy.stackexchange.com/q/1210/738). I am reminded of this every time I log into StackOverflow, since it became a popular question, and it has continuously sent me notifications over the years as folks continue to have conversations on the post.

The question I had was essentially this:

> **In which way does quantum mechanics disprove determinism?**

At the time I asked the physics StackExchange question on determinism and quantum physics, I lived in an apartment with a nano-engineering student and a physics student, and I dropped in on them talking about quantum mechanics, but I had no idea what they were talking about. Since then I’ve dabbled with quantum mechanics a tiny bit but never enough to get any closer to really understanding this question.

A few days ago I revisited this StackExchange question, and took a bit of a deep dive to learn some more concepts and understand this all a bit better.

In this post, I'll start off with a bit of an introduction to this question and where it comes from. Then, I’ll rephrase [the excellent answer](https://philosophy.stackexchange.com/a/1224/738) that [Artem Kaznatcheev](https://philosophy.stackexchange.com/users/686/artem-kaznatcheev) posted. I originally appreciated this answer the most, even though I certainly did not understand very much of it! Finally, I'll sum everything up as best as I can muster for a free blog post.

------

Whether or not nature is deterministic gets to the core nature of our reality. Is the randomness we experience in every day life a simple artefact of not really understanding everything about the universe, or is randomness more fundamental?

In other words: does nature just feel unpredictable, while in reality it is predictable, once humans develop enough knowledge? or is nature _intrinsically_ unpredictable? And if it's the latter... why? and how?

In classical physics, the accuracy of your predictions is limited by the accuracy of your model, because classical physics is fully deterministic. You should be able to predict any specific property of your model that you want. And why shouldn't we be able to break down our model into smaller and smaller parts, until we get to the atomic level? When I first asked the question, I phrased determinism in this way:

> My belief of determinism is generally that if you knew every single variable that existed as a factor at the very beginning and birth of the universe, you could correctly determine all properties of any individual particle at any point in time.

If you can predict where particles are, you can predict the matter they are making and what that matter is doing; you could perhaps even predict the particles of the eyes and the screen you're reading on, as well as the brain behind those eyes, the pulses going through that brain, and the thoughts that brain is producing. So determinism can even tell us if we have free will (whether our behaviour is our choice), or if our thoughts and actions are just predetermined by "fate".

Albert Einstein, the famous physicist who developed the theory of special relativity, was a determinist. [In his words](https://en.wiktionary.org/wiki/God_does_not_play_dice_with_the_universe), "God does not throw dice".

When Einstein wrote those words in 1926, a community of physicists primary based in Europe were rapidly building out the theory of quantum mechanics, a theory of physics describing nature at the scale of atoms. Quantum mechanics explained some extremely strange experimental observations that confused physicists for decades, including the double-slit experiment. However, quantum mechanics can make reality-defying assumptions, and giving up determinism was the line that Einstein refused to concede.

What I wanted to better understand was exactly _why_ determinism had to be given up, and how the theory gives rise to that monumental outcome. This part is built on[the answer](https://philosophy.stackexchange.com/a/1224/738) that [Artem Kaznatcheev](https://philosophy.stackexchange.com/users/686/artem-kaznatcheev) posted to my question (I take all responsibility for errors).

------

The mathematics of quantum physics say a system (for example, a theoretical model of atoms) can evolve in two ways: unitary/free evolution is deterministic, so that’s fine; but the other is a “measurement”, and this is non-unitary and thus non-reversible, thus probabilistic.

Put another way: quantum mechanics says that performing a measurement on the system actively changes the system, and it does so by probabilistic laws. The "measurement problem" is the problem of interpreting how this is possible and what it means. Some even suggest it is the consciousness of the observer that causes the measurement, but at this point we’re already in too deep.

One can simply sidestep this problem and just build on top of the math. Bell did this and ended up with Bell's Theorem (a.k.a. the Bell inequality), which states that any phenomenon that is “both deterministic and local must satisfy the Bell inequality”, yet quantum mechanics violates the Bell inequality. Therefore quantum mechanics must violate either locality or determinism, but locality gives rise to causality, which we can’t really live without, so instead we give up determinism.

------

But, I still wasn't clear on a bunch of things, so I did some digging, and here are my fairly raw notes.

### What exactly is locality?

The [principle of locality](https://en.wikipedia.org/wiki/Principle_of_locality) states that an object is influenced directly only by its immediate surroundings. From the speed of light, we know that we cannot exert an influence on some far away object **instantaneously**; if a particle is one light year away, locality and the speed of light tells us it will take at least one year for our influence to reach that particle.


### What is Bell’s theorem and how does it factor in?

Wiki starts off with this: Bell’s theorem suggests “that quantum mechanics is incompatible with local hidden-variable theories, given some basic assumptions about the nature of measurement.”

>In the words of physicist John Stewart Bell, for whom this family of results is named, "If [a hidden-variable theory] is local it will not agree with quantum mechanics, and if it agrees with quantum mechanics it will not be local."

Again, “local” means causality that obeys the speed of light. So it sounds like locality is what’s disputed here, and not necessarily determinism.

#### What does Bell’s theorem (at least the Wiki) say about determinism?

Einstein, Podolsky and Rosen (EPR) proposed a scenario where two particles were in quantum entanglement, they were spread far apart, but by measuring one particle, the state of the other particle “collapses” instantaneously, thus disobeying locality.

> This suggests that either the measurement of the first particle somehow also interacted with the second particle at faster than the speed of light, or that the entangled particles had some unmeasured property which pre-determined their final quantum states before they were separated.

From this quote, it seems that EPR concluded _either_ non-locality, _or_ hidden variables (meaning that quantum theory is incomplete, and there are unknown factors which, if known, would explain this strange behaviour). I know EPR were big on hidden variables, so my sense is that they refused to accept non-locality as well. (But I’m curious to learn where determinism becomes questioned — when does uncertainty become part of the theory, rather than the hidden variables of the theory?)

Bell’s analysis of quantum entanglement gave rise to the Bell inequality, and:

> Bell then showed that quantum physics predicts correlations that violate this inequality. Consequently, the only way that hidden variables could explain the predictions of quantum physics is if they are "nonlocal"...

In other words: _if_ hidden variables, _then_ non-local.

### What is measurement?

[Wikipedia: Measurement in quantum mechanics](https://en.wikipedia.org/wiki/Measurement_in_quantum_mechanics)

In quantum physics experiments, we can examine quantum particles such as an electron. Quantum theory can describe the system (e.g. the arrangement of the particles) however it’s a probabilistic system. When the system is measured we observe the state of the particle, and we see that it’s in some state, so the probabilistic nature of the system “collapses” (I’m using this term casually).

> The uncertainty principle implies that, whatever the quantum state, the range of predictions for the electron's position and the range of predictions for its momentum cannot both be narrow. Some quantum states imply a near-certain prediction of the result of a position measurement, but the result of a momentum measurement will be highly unpredictable, and vice versa.

This has slightly concretized my understanding of how quantum mechanics describes a system of e.g. particles and the difference between “unitary evolutions” and “measurement” as operators on the quantum system. However, I’m seeing non-locality everywhere, and beginning to question if it’s really locality vs determinism as the original answer stated.

### Is it true that we can _choose_ locality?

> … [[q]uantum nonlocality](https://en.wikipedia.org/wiki/Quantum_nonlocality) refers to the phenomenon by which the measurement statistics of a multipartite quantum system do not admit an interpretation in terms of a local realistic theory. Quantum nonlocality has been experimentally verified under different physical assumptions.

However…

> Quantum nonlocality does not allow for faster-than-light communication, and hence is compatible with special relativity and its universal speed limit of objects. Thus, quantum theory is local in the strict sense defined by special relativity and, as such, the term "quantum nonlocality" is sometimes considered a misnomer.

… so this was a small tangent. Quantum non-locality is different from true non-locality, so it seems that from this article, locality is still believed to be the case under quantum physics.
This means that we can come back to the hidden variables theory — can I tie this back into non-determinism?

#### Side note: non-local hidden variables ([wikipedia](https://en.wikipedia.org/wiki/Bell%27s_theorem#Non-local_hidden_variables))

There appears to be a community of people who “give up locality”:

> Most advocates of the hidden-variables idea believe that experiments have ruled out local hidden variables. They are ready to give up locality, explaining the violation of Bell's inequality by means of a non-local hidden variable theory, in which the particles exchange information about their states. This is the basis of the Bohm interpretation of quantum mechanics, which requires that all particles in the universe be able to instantaneously exchange information with all others.

### [Local hidden-variable theory](https://en.wikipedia.org/wiki/Local_hidden-variable_theory)

> a local hidden-variable theory is a hidden-variable theory that satisfies the condition of being consistent with local realism. This definition restricts all types of those theories that attempt to account for the probabilistic features of quantum mechanics via the mechanism of underlying inaccessible variables with the additional requirement that distant events be independent, ruling out instantaneous (that is, faster-than-light) interactions between separate events.

How do we deal with the fact that quantum mechanics is probabilistic? We accept there are hidden variables that do not explain the probabilistic behaviour. The term “local hidden-variable theory” itself is everywhere in this wiki expedition, implying that “locality” is pretty much a given.

However, we need to recall from the above:

> In the words of physicist John Stewart Bell …  "If [a hidden-variable theory] is local it will not agree with quantum mechanics, and if it agrees with quantum mechanics it will not be local."

Let me expand out this logic:

- If a hidden variable theory is local, it will not agree with quantum
- If a hidden variable theory agrees with quantum, it is not local
- **_If the theory is not a hidden variable theory, could it be both quantum + local?_** Is this essentially saying that by rejecting the hidden variable requirement, we are accepting uncertainty + non-determinism, while keeping locality (and obviously accepting quantum physics)?

### [Hidden variable theory](https://en.wikipedia.org/wiki/Hidden-variable_theory)

> a hidden-variable theory is a proposal which seeks to explain quantum mechanical phenomena through the introduction of (possibly unobservable) hypothetical entities. The existence of fundamental indeterminacy for some measurements is assumed as part of the mathematical formulation of quantum mechanics; moreover, bounds for indeterminacy can be expressed in a quantitative form by the Heisenberg uncertainty principle. Most hidden-variable theories are attempts to avoid this indeterminacy, but possibly at the expense of requiring that nonlocal interactions be allowed.

In other words, I believe yes, my above assessment was correct. The idea of hidden variables is there to explain why we’re seeing randomness, in the sense that if the variables were uncovered, we would get a fully deterministic theory. However, we cannot reject quantum mechanics and we cannot reject locality, so it seems the most realistic thing we can give up is hidden variables, and accept that indeterminacy is intrinsic to quantum mechanics.

### Superdeterminism (wiki) and De Broglie–Bohm theory (wiki)

Superdeterminism describes the set of local hidden-variable theories consistent with the results of experiments derived from Bell's theorem which include a local correlation between the measurement settings and the state being measured.

In the triad between hidden variables, quantum, and locality, the only one that cannot be disputed is quantum mechanics itself (it has been experimentally proven at this point). In this wiki spelunking I’ve found that we also hesitate to accept non-locality, but let’s enumerate the possibilities:

| Quantum? | Local?  | Hidden Vars?      | State of this theory |
|----------|---------|-------------------|----------------------|
| T        | T       | T                 | [Local hidden-variable theories](https://en.wikipedia.org/wiki/Local_hidden-variable_theory); Superdeterminism; Impossible as per Bell’s quotation |
| T        | T       | F                 | **Prevailing belief**. No hidden variables = quantum is complete, and therefore probabilistic. |
| T        | F       | T                 | Non-local hidden variables |
| T        | F       | F                 | I am not sure anyone is arguing for non-locality but also no hidden variables; rejection of Bell’s theorem? |
| F        | ?       | ?                 | Rejection of quantum mechanics itself; absurd, as there is a lot of experimental evidence |


Superdeterminism allows us to accept determinism, locality, and quantum mechanics. However it’s not generally a mainstream theory. The most prominent theory of this type is:

> de Broglie–Bohm theory, also known as the pilot wave theory, Bohmian mechanics, Bohm's interpretation, and the causal interpretation, is an interpretation of quantum mechanics. It postulates that in addition to the wavefunction, an actual configuration of particles exists, even when unobserved. The evolution over time of the configuration of all particles is defined by a guiding equation. The evolution of the wave function over time is given by the Schrödinger equation. The theory is named after Louis de Broglie (1892–1987) and David Bohm (1917–1992).

> The theory is deterministic and explicitly nonlocal: the velocity of any one particle depends on the value of the guiding equation, which depends on the configuration of all the particles under consideration.

> Measurements are a particular case of quantum processes described by the theory—for which it yields the same quantum predictions generally associated with the Copenhagen interpretation. The theory does not have a "measurement problem", due to the fact that the particles have a definite configuration at all times. The Born rule in de Broglie–Bohm theory is not a basic law. Rather, in this theory, the link between the probability density and the wave function has the status of a hypothesis, called the "quantum equilibrium hypothesis", which is additional to the basic principles governing the wave function.

At this point I think I’ve answered my original question. However, this theory sounds quite fascinating, if only in the sense that it seems promising to me (big old layman here) as a potential future direction for quantum mechanics. I think Einstein reacted in a human way when he said “God does not play dice”, and there’s something about determinism that feels necessary for a scientific theory. Really, it seems like the whole point of probability is to account for something that is too inefficient to model properly. If we need probabilities for two particles, it calls into question the usefulness of the theory. (I wouldn’t say that quantum mechanics isn’t useful, but if its interpretation is still disputed, it feels like a problem.)

What’s more fascinating to me now is that Bohm’s theory has a political dimension:

> [De Broglie–Bohm] theory was historically developed in the 1920s by de Broglie, who, in 1927, was persuaded to abandon it in favour of the then-mainstream Copenhagen interpretation. David Bohm, dissatisfied with the prevailing orthodoxy, rediscovered de Broglie's pilot-wave theory in 1952. Bohm's suggestions were not then widely received, partly due to reasons unrelated to their content, such as Bohm's youthful communist affiliations. The de Broglie–Bohm theory was widely deemed unacceptable by mainstream theorists, mostly because of its explicit non-locality. On the theory, John Stewart Bell, author of the 1964 Bell's theorem wrote in 1982:

> > Bohm showed explicitly how parameters could indeed be introduced, into nonrelativistic wave mechanics, with the help of which the indeterministic description could be transformed into a deterministic one. More importantly, in my opinion, the subjectivity of the orthodox version, the necessary reference to the “observer”, could be eliminated. ...

> > But why then had Born not told me of this “pilot wave”? If only to point out what was wrong with it? Why did von Neumann not consider it? More extraordinarily, why did people go on producing “impossibility” proofs, after 1952, and as recently as 1978?... Why is the pilot wave picture ignored in text books? Should it not be taught, not as the only way, but as an antidote to the prevailing complacency? To show us that vagueness, subjectivity, and indeterminism, are not forced on us by experimental facts, but by deliberate theoretical choice?

> Since the 1990s, there has been renewed interest in formulating extensions to de Broglie–Bohm theory…

Which reveals how even physics --- the apex of natural science --- is plagued by problems we see all over science and academia. It shows how scientific pursuit is not so much an inexorable, emotionally void quest for the truth as much as it is a consensus-building project like any other in our society, suffering from peer pressure, groupthink, confirmation bias, and sunk costs.

------


Anyways. I've spent a few too many late nights over this so I'm going to call it now. Hope you learned something --- and I hope I learned something. We'll see in another twelve years.