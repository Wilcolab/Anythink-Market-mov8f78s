/**
 * Converts a string to kebab-case format with comprehensive handling of edge cases.
 * @param {*} str - The input string to convert
 * @returns {string} - The kebab-case formatted string, or empty string if input is invalid
 */
function toKebabCase(str) {
    // Type safety check
    if (typeof str !== 'string') {
        console.warn(`Invalid input: expected string, received ${typeof str}`);
        return '';
    }

    // Performance optimization: check if already in valid kebab-case
    if (/^[a-z0-9]+(-[a-z0-9]+)*$/.test(str)) {
        return str;
    }

    return str
        // Insert hyphen before uppercase letters (handle camelCase)
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        // Insert hyphen before uppercase followed by lowercase (handle ACRONYMs)
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
        // Replace non-alphanumeric characters with hyphens
        .replace(/[^a-zA-Z0-9]+/g, '-')
        // Convert to lowercase
        .toLowerCase()
        // Remove multiple consecutive hyphens
        .replace(/-+/g, '-')
        // Strip leading and trailing hyphens
        .replace(/^-+|-+$/g, '');
}

// Testing
console.assert(toKebabCase('') === '', 'Empty string test failed');
console.assert(toKebabCase(123) === '', 'Number input test failed');
console.assert(toKebabCase('___leading') === 'leading', 'Leading underscores test failed');
console.assert(toKebabCase('PascalCase_to-kebab') === 'pascal-case-to-kebab', 'Mixed casing test failed');
console.assert(toKebabCase('getHTTPResponse') === 'get-http-response', 'Acronym handling test failed');