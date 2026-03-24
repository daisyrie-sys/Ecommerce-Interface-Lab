function isValidParentheses(str) {
    let stack = [];
    let pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// TEST CASES
console.log(isValidParentheses("()"));       // true
console.log(isValidParentheses("([)]"));     // false
console.log(isValidParentheses("{[]}"));     // true