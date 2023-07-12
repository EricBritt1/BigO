/* 
Step One (Simplifying Expressions):
1. O(n + 10)
O(n)
2. O(100 * n)
O(n)
3. O(25)
O(1)
4. O(n^2 + n^3)
O(n^3)
5. O(n + n + n + n)
O(n log n) wrong review 
6. O(1000 * log(n) + n)
O(n)
7. O(1000 * n * log(n) + n)
O(n log n) wrong
8. O(2^n + n^2)
O(n^2)
9. O(5 + 3 + 1)
O(1)
10. O(n + n^(1/2) + n^2 + n * log(n)^10)
O(n^2)

Step 2 Calculating Time Complexity:

1.
function logUpTo(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

Time complexity: O(n)

2. 
function logAtLeast10(n) {
  for (let i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
  }
}

Time complexity: O(n) (This can reach toward infinity)

3.
function logAtMost10(n) {
  for (let i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}

Time complexity: O(n) Inccorect How come this is O(1)? Is this because n cannot head toward positive infinity? 


4. 

function onlyElementsAtEvenIndex(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

Time complexity O(n)

5. function subtotals(array) {
  let subtotalArray = [];
  for (let i = 0; i < array.length; i++) {
    let subtotal = 0;
    for (let j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray.push(subtotal);
  }
  return subtotalArray;
}

Time complexity = n*n + 1 = O(n^2)

6. function vowelCount(str) {
  let vowelCount = {};
  const vowels = "aeiouAEIOU";

  for (let char of str) {
    if(vowels.includes(char)) {
      if(char in vowelCount) {
        vowelCount[char] += 1;
      } else {
        vowelCount[char] = 1;
      }
    }
  }

  return vowelCount;
}

Time complexity = n + 1 = O(n)


Part 3 (I need help with this on javaScript methods.) (Ask Kwame)
1. True or false: n^2 + n is O(n^2).
True
2. True or false: n^2 * n is O(n^3).
True
3. True or false: n^2 + n is O(n).
False
4. What’s the time complexity of the .indexOf array method?
O(n)
5. What’s the time complexity of the .includes array method?
O(n)
6. What’s the time complexity of the .forEach array method?
O(n) 
7. What’s the time complexity of the .sort array method?
O(n^2) (Wrong)
8. What’s the time complexity of the .unshift array method? (Didn't have an idea)

9. What’s the time complexity of the .push array method? O(1)

10. What’s the time complexity of the .splice array method? O(n)

11. What’s the time complexity of the .pop array method? O(1)

12. What’s the time complexity of the Object.keys() function? (No clue)

What’s the space complexity of the Object.keys() function? (No clue)

*/