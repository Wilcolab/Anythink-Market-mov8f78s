/**
 * Convert a human-readable, snake_case, or kebab-case string to `camelCase`.
 *
 * The converter splits on spaces, underscores, and hyphens, lowercases the first
 * token, then capitalizes the first character of every subsequent token while
 * lowercasing the remaining characters.
 *
 * Behavior details:
 * - Delimiters matched: `/[\s_-]+/`
 * - Token case is normalized (for example, `SCREEN_NAME` -> `screenName`)
 * - No input validation is applied; the caller should pass a string value
 *
 * @param {string} str Source text to convert.
 * @returns {string} A camelCase representation of `str`.
 * @example
 * toCamelCase('first name'); // 'firstName'
 * @example
 * toCamelCase('mobile-number'); // 'mobileNumber'
 */
function toCamelCase(str) {
    return str
        .split(/[\s_-]+/) // Split on spaces, underscores, or hyphens
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Test cases
console.log(toCamelCase('first name'));        // firstName
console.log(toCamelCase('user_id'));           // userId
console.log(toCamelCase('SCREEN_NAME'));       // screenName
console.log(toCamelCase('mobile-number'));     // mobileNumber