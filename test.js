/**
 * Main function to generate parentheses.
 * n is the number of pairs. For example, if n = 3, we want "()()()" or "(())()", etc.
 */
function generateParentheses(n) {

  // This array will store all our final, valid answers.
  const solutions = [];

  // This is our helper function that will build the strings.
  // It's the "worker" that explores the maze.
  function backtrack(currentString, openCount, closeCount) {

    // BASE CASE: If the string has reached the correct length...
    if (currentString.length === n * 2) {
      // ...we found a valid solution. Add it to our list.
      solutions.push(currentString);
      // And we're done with this path, so we stop.
      return;
    }

    // --- The Two Choices We Can Make At Any Step ---

    // CHOICE 1: Can we add an OPEN parenthesis?
    if (openCount < n) {
      // If we haven't used all our open parentheses yet,
      // try adding one and continue exploring from there.
      backtrack(currentString + "(", openCount + 1, closeCount);
    }

    // CHOICE 2: Can we add a CLOSE parenthesis?
    if (closeCount < openCount) {
      // If we have more open than close parentheses,
      // try adding a close one and continue exploring.
      backtrack(currentString + ")", openCount, closeCount + 1);
    }
  }

  // --- Starting the Process ---
  // We kick off the whole process by calling our worker
  // with a blank slate: an empty string and counts of 0.
  backtrack("", 0, 0);

  // Finally, return the list of solutions we found.
  return solutions;
}