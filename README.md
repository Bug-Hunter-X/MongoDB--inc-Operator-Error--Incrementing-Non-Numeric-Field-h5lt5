# MongoDB $inc Operator Error
This example demonstrates a common error when using the `$inc` operator in MongoDB: attempting to increment a field that is not a number or does not exist.

## Bug
The `bug.js` file contains code that attempts to increment a field that might not exist or might not be a number. This will result in an error or unexpected behavior.

## Solution
The `bugSolution.js` file demonstrates the correct use of the `$inc` operator, including handling cases where the field does not exist or is not a number.