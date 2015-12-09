---
published: false
title: Immutable data in React
layout: post
---
In the midst of learning React, I ran into Immutable.js, which is a library for immutable data structures in Javascript. I started using it in our codebase. I was met with the question of "why"? I didn't have a very compelling answer at the time. Today, I resolve to stick with immutability wherever I can.

The biggest bottom-line benefit of immutability to a React programmer is that it lets you make an easy, but powerful optimization. When you build React components, you can implement a function called `shouldComponentUpdate(newData)` which would return `true` if the component's new data is different from it's current data, making a re-render necessary. The tricky part is that if your component has a complicated state object, it's hard to say whether it should re-render or not. Here's an example.

Let's say you have a shopping cart component, and this Javascript object contains all the data used to render that component:

```javascript
let shoppingCart = {
  user: 125192,
  items: [
    { name: "Item 1", quantity: 1, itemID: 23912, cost: 49.99 },
    { name: "Item 2", quantity: 2, itemID: 69212, cost: 119.99 },
  ],
  lastUpdated: 1449679117751,
  taxRate: 0.12
};
```

It looks like this:

```javascript
+---------------+--------+----------+
+ Item 1--------+-----1--+---49.99--+
+ Item 2--------+-----2--+--239.98--+
+-Total---------+--------+--289.97--+
+---------------+--------+----------+
```

Now, let's say the user reduces the quantity of "item 2" down to 1. Our code does this:

```javascript
shoppingCart.items[1].quantity = 1;
```

How does the component know that it should redraw itself? It's looking at a mutated object, and the component cannot tell the difference between the old version of the data and the new version. The only way to definitively return an answer is by doing a **deep compare**, which is costly. If you have a large object, doing a deep compare every time the component asks whether it should re-render itself could be even slower than just re-rendering the damn thing (this is due to other optimizations React makes when it renders components).

Now let's revisit that line of code where the user changed the quantity of "item 2". Let's use an Immutable.js Map for our `shoppingCart` object. Now, changing the quantity looks like this:

```javascript
newShoppingCart = shoppingCart.setIn(['items', 1, 'quantity'], 2);
```

It doesn't look as nice, but now we can do a simple equality check: `shoppingCart !== newShoppingCart`. In the first implementation, deep compare was the only solution.

This is a matter of **data identity**. Sometimes we want an easy way to determine if two pieces of data are the same or not. Immutable data structures acknowledge that anytime data changes, the identity of that data changes. Likewise, this This is a clear and simple truth, and these kinds of clear facts make your life much easier when you're writing a complex program.
