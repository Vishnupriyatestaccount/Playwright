# JavaScript Identifier Rules

## Valid identifier rules
- Identifiers must start with a letter (`A-Z`, `a-z`), underscore (`_`), or dollar sign (`$`).
- After the first character, identifiers may include letters, digits (`0-9`), underscores, or dollar signs.
- Identifiers are case-sensitive.
- Identifiers cannot be a reserved keyword in JavaScript.

## Examples of valid identifiers
- `myVariable`
- `_myVariable`
- `$value`
- `firstName`
- `count123`

## Examples of invalid identifiers
- `123abc` (starts with a digit)
- `my-variable` (contains hyphen)
- `my variable` (contains space)
- `var` (reserved keyword)

## Additional notes
- Unicode letters are allowed in identifiers, so characters beyond ASCII can be used in many environments.
- Identifiers may not include punctuation such as `@`, `#`, `!`, `%`, `^`, `&`, `*`, `(`, `)`, `+`, `=`.
- In strict mode, the same reserved-word restrictions apply.
- Though valid, using `_` or `$` as the first character is typically reserved for special or private conventions.
