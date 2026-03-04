/**
 * Convert a delimiter-separated string to `camelCase`.
 *
 * Supported delimiters are spaces (` `), underscores (`_`), and hyphens (`-`).
 * The first token is fully lowercased and every subsequent token is converted to
 * `Capitalized` form before joining without separators.
 *
 * Notes:
 * - Consecutive delimiters are treated as a single separator by the split regex.
 * - Existing capitalization in each token is normalized.
 * - This function expects a string input and does not perform runtime type checks.
 *
 * @param {string} str Input text in space, snake_case, or kebab-case style.
 * @returns {string} The normalized camelCase string.
 * @example
 * toCamelCase('hello world'); // 'helloWorld'
 * @example
 * toCamelCase('snake_case_example'); // 'snakeCaseExample'
 */
function toCamelCase(str) {
    return str
        .split(/[\s_-]+/) // Split on spaces, underscores, or hyphens
        .map((word, index) =>
            index === 0
                ? word.toLowerCase() // Keep first word lowercase
                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalize first letter of subsequent words
        )
        .join('');
}

// Test case 1: String with spaces
console.log(toCamelCase('hello world')); // Output: helloWorld

// Test case 2: Snake case example
console.log(toCamelCase('snake_case_example')); // Output: snakeCaseExample

// Test case 3: Kebab case example
console.log(toCamelCase('kebab-case-example')); // Output: kebabCaseExample