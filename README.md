📝 TypeScript Quick Notes

1. Primitive Types
```ts
string, number, boolean, bigint, symbol, undefined, null
```
Example:

```ts
let name: string = "Nishan";
let age: number = 22;
let married: boolean = false;
```

2. Nullable Type

Variable null বা value নিতে পারে
```ts
let userName: string | null = null;
userName = "Nishan";
```
3. Unknown

Safe version of any

Must check type before using
```ts
let value: unknown = 10;
if (typeof value === "number") {
  console.log(value + 5);
}
```
4. Never

Function কখনো return না করলে / error throw করলে
```ts
function throwError(msg: string): never {
  throw new Error(msg);
}
```
5. Ternary / Nullish / Optional Chaining
```ts
Ternary (?:) → condition ? true : false

Nullish (??) → null বা undefined fallback value

Optional (?.) → safe nested property access

const age = 20;
const status = age > 18 ? "Adult" : "Minor";

const name = null;
console.log(name ?? "Guest"); // Guest

const person = { address: { city: "Dhaka" } };
console.log(person.address?.city); // Dhaka
```
6. Type Alias

Custom type declaration, reusable
```ts
type ID = string | number;
type User = { name: string; age: number; email?: string };
```
7. Union Type (|)

Variable একাধিক type নিতে পারে
```ts
let value: string | number;
value = 10;
value = "Hello";
```
8. Intersection Type (&)

Combine multiple object types
```ts
type Person = { name: string };
type Employee = { empId: number };
type Staff = Person & Employee;

const staff: Staff = { name: "Nishan", empId: 101 };
```
9. Array & Spread / Rest

Spread ... → elements ছড়িয়ে দেওয়া

Rest ... → remaining elements collect করা
```ts
const arr1 = [1,2];
const arr2 = [3,4];
const all = [...arr1, ...arr2]; // [1,2,3,4]

const [first, ...rest] = all;
```
10. Class

OOP in TypeScript
```ts
class Person {
  constructor(public name: string, public age: number) {}
  greet() { console.log(`Hi, I am ${this.name}`); }
}
const p = new Person("Nishan", 22);
p.greet();
```
11. Object

Type annotation for properties
```ts
const user: { name: string; age: number } = { name: "Nishan", age: 22 };
```
