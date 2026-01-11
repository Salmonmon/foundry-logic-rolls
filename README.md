# Logic Rolls for the Foundry VTT

This module adds logic functions to the roll formulas.

## Functions

All functions operate based on the assumption that zero is false and non-zero is true. All functions return 1 for true and 0 for false. This is convenient for multiplication.

The functions include `eq(a, b)` (equals) `ne(a, b)` (not equal), `not(a)` (negation), `gt(a, b)` (a greater than b), `gte(a, b)` (a greater than or equal to b), `lt(a, b)` (a less than b), `lte(a, b)` (a less than or equal to b), `and(a, b, ...)` (all arguments are non-zero), `or(a, b, ...)` some arguments are non-zero.

There is also an if function, but if is a reserved word in javascript so I had to pick something else so I settled on `pick(condition, then, otherwise)`. The second and third parameter can be omitted, they will default to 1 and 0. The inverse is `unless(condition, then, otherwise)` that inverts the condition, i.e. picks `then` if the condition is false.

Ranges gives an else if equivalent for things like d100 dependent bonuses. `ranges(roll,minimum1,maximum1,result1,minimum2,[...])` where you can have any number of minimum-maximum-result trios. If some have an overlapping range and the roll falls into that range the first of the two ranges will have their result given. i.e. `ranges(d100,1,50,1,51,99,2,100,100,5)` returns 1 for rolls 1-50, 2 for rolls 51-99, and a 5 if 100 is rolled.

## Rolls

These can be used wherever rolls can be made/evaluated. If you give a dagger this damage formula `1d4 + @mod + pick(gt(@abilities.int.mod, 1), 1d12)`, the dagger will include an extra 1d12 in the damage if the user's intelligence modifier is greater than 1.

Note that the functions do not change dice rolled. All dice in the statement are always rolled, the conditionals just change which numbers are included in the final calculation. This limits their usefulness in some cases, while they are useful elsewhere.
