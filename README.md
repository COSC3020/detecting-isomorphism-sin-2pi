# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

## Analysis

**calculateNodeConnections()** uses a map() operation which is $V$. The dominant term however is the standard sorting function, which is $\Theta (VlogV)$.

**isValid()** there are nested for loops, going over $V$ elements. $V \cdot V = \Theta (V^2)$

**buildMapping()** there are $V!$ ways that $V$ nodes can be mapped, resulting in $V!$. Each time **buildMapping()** is called, **isValid()** is triggered as well. This results in $\Theta (V! * V^2)$.

**are_isomorphic()** there are two for loops, going over $V$ elements each in this function. $V + V = 2V = \Theta (V)$

Therefore, $VlogV + V + (V! \cdot V^2) \cdot V ∈ \Theta (V! * V^3)$
