# 🚀 Lodash-Type Utils

A modern, lightweight JavaScript utility library inspired by [Lodash](https://lodash.com/). Built for developers who need high-performance, well-tested helper functions for common programming tasks.

## ✨ Key Features

- 🎯 **50+ utility functions** across arrays, objects, strings, and more
- 📦 **Tree-shakeable** - import only what you need
- ⚡️ **Optimized for performance** with efficient algorithms
- 🧪 **Thoroughly tested** with comprehensive test coverage
- 📚 **Well documented** with examples and TypeScript definitions
- 🔧 **TypeScript support** out of the box

## 📥 Installation

```bash
npm install @zahidg0/easy-js
```

Or using Yarn:

```bash
yarn add @zahidg0/easy-js
```

## 🚀 Quick Start

```javascript
// Import only what you need
const { chunkArray, capitalize, debounce } = require('@zahidg0/easy-js');

// Chunk an array
const chunks = chunkArray([1, 2, 3, 4, 5], 2);
console.log(chunks); // [[1, 2], [3, 4], [5]]

// Capitalize a string
console.log(capitalize('hello world')); // 'Hello world'

// Debounce a function
const debouncedFn = debounce(() => console.log('Called!'), 300);
```

## 🧰 Available Utilities

### 🔹 Array Utilities
- `chunk(array, size)` - Split array into chunks
- `compact(array)` - Remove falsy values
- `flatten(array)` - Flatten nested arrays
- `uniq(array)` - Remove duplicate values
- `intersection(arrays...)` - Find common elements
- `difference(array, values...)` - Find different elements
- `shuffle(array)` - Randomly shuffle array
- `sample(array)` - Get random element
- `take(array, n)` - Take first n elements
- `drop(array, n)` - Drop first n elements

### 🔹 String Utilities
- `capitalize(string)` - Capitalize first letter
- `camelCase(string)` - Convert to camelCase
- `kebabCase(string)` - Convert to kebab-case
- `snakeCase(string)` - Convert to snake_case
- `truncate(string, length)` - Truncate with ellipsis
- `pad(string, length, chars)` - Pad string
- `trim(string, chars)` - Trim characters
- `escape(string)` - Escape HTML characters
- `unescape(string)` - Unescape HTML characters
- `startsWith(string, target)` - Check string start

### 🔹 Object Utilities
- `pick(object, keys)` - Pick specific properties
- `omit(object, keys)` - Omit specific properties
- `merge(objects...)` - Deep merge objects
- `clone(object)` - Shallow clone object
- `cloneDeep(object)` - Deep clone object
- `has(object, path)` - Check if path exists
- `get(object, path, defaultValue)` - Get nested value
- `set(object, path, value)` - Set nested value
- `keys(object)` - Get object keys
- `values(object)` - Get object values
- `isEmpty(value)` - Check if empty

### 🔹 Function Utilities
- `debounce(func, wait)` - Debounce function calls
- `throttle(func, wait)` - Throttle function calls
- `once(func)` - Execute function only once
- `memoize(func)` - Cache function results

### 🔹 Math & Validation
- `random(min, max)` - Generate random number
- `clamp(number, min, max)` - Clamp number to range
- `sum(array)` - Sum array values
- `mean(array)` - Calculate average
- `isArray(value)` - Check if array
- `isObject(value)` - Check if object
- `isString(value)` - Check if string
- `isNumber(value)` - Check if number

## 📖 Documentation

For detailed documentation and examples, visit our [documentation site](https://your-docs-url.com) or check the `/docs` folder in this repository.

## 🧪 Testing

```bash
npm test
```

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [Lodash](https://lodash.com/)
- Built with ❤️ for the JavaScript community

---

**Made with 💻 by developers, for developers**