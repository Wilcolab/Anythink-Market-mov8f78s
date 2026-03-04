/**
 * Convert text from common naming styles to `dot.case`.
 *
 * This utility accepts strings in formats such as:
 * - space-separated words
 * - `snake_case`
 * - `kebab-case`
 * - `camelCase` / `PascalCase`
 * - mixed acronym boundaries (for example, `XMLHttpRequest`)
 *
 * Conversion rules:
 * - Splits camel/pascal/acronym transitions into word boundaries
 * - Normalizes non-alphanumeric separators to a single boundary
 * - Lowercases every token
 * - Joins tokens with `.`
 *
 * Invalid inputs (non-string values) return an empty string and log a console error.
 * Inputs containing no alphanumeric content also return an empty string.
 *
 * @param {*} input Raw value to convert to dot.case.
 * @returns {string} Dot-separated lowercase output, or `''` when conversion is not possible.
 * @example
 * toDotCase('AlreadyCamelCase'); // 'already.camel.case'
 * @example
 * toDotCase('UPPERCASE_SNAKE_CASE'); // 'uppercase.snake.case'
 */
function toDotCase(input) {
    if (typeof input !== 'string') {
        console.error(`Invalid input type: expected string, got ${typeof input}`);
        return '';
    }

    // Break camelCase/PascalCase/acronym transitions into word boundaries.
    const withWordBoundaries = input
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
        .replace(/([a-z\d])([A-Z])/g, '$1 $2');

    // Normalize all separators to spaces, then split and lowercase.
    const words = withWordBoundaries
        .replace(/[^a-zA-Z0-9]+/g, ' ')
        .trim()
        .split(/\s+/)
        .filter(Boolean);

    if (words.length === 0) {
        return '';
    }

    return words.map(word => word.toLowerCase()).join('.');
}

// Test cases
const testCases = [
    '--leading-hyphen',
    'trailing_underscore__',
    'Multiple   Spaces',
    'AlreadyCamelCase',
    'HTML_Parser',
    'XMLHttpRequest',
    'snake_case_example',
    'kebab-case-example',
    'PascalCaseExample',
    'UPPERCASE_SNAKE_CASE',
    'already.dot.case',
    12345,
    null,
    undefined,
];

console.log('=== toDotCase Function Tests ===\n');

testCases.forEach(testCase => {
    const result = toDotCase(testCase);
    console.log(`Input: ${JSON.stringify(testCase)}`);
    console.log(`Output: "${result}"`);
    console.log('---');
});

