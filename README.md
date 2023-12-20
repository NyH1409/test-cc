# Complexity Analysis

In this readme, I compare the worst-case complexity of two provided implementations of the `Rice Cooker Simulator` created by Mayah. The original code is located in the `mayah.js` file, and I subsequently refactored it in the `model.js` and `main.js` files.

## First Analysis: ORIGINAL CODE
I have documented the computation count within comments in the file:
- `//{number}`: indicates the number of computations required by the respective line of code.
- `//O(1) or //O(n)`: signifies the worst-case complexity of the code or the given function.

Upon analysis, it is evident that the original algorithm has infinite complexity because it never terminates. Additionally, if there were an exit option, it would exhibit linear complexity `2n + 57 -> O(n)`, where n is the number of times the user executes an action.

## Second Analysis: REFACTORED CODE
Similar to the previous code, it also possesses infinite complexity. However, if an exit option were introduced, it would have linear complexity `2n + 50 -> O(n)` (detailed information is provided in the comments within the `model.js` and `main.js` files).
