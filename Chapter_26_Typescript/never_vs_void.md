# Difference between `void` and `never`

In TypeScript, both `void` and `never` describe functions that do not return a normal value, but they are not the same.

## 1) `void`

`void` means the function does not return any meaningful value, but it may still complete normally.

```ts
function sayhello(msg:string): void{
    console.log(msg);
}
```

### Meaning:
- The function can execute successfully.
- It may print something or perform an action.
- It does not return a value like `string`, `number`, etc.

## 2) `never`

`never` means the function will never finish normally. It always throws an error or loops forever.

```ts
function throwerror(message: string): never{
    throw new Error(message);
}
```

```ts
function infiniteloop(): never{
    while(true) {}
}
```

### Meaning:
- The function never reaches a normal return.
- It either throws an exception or runs forever.
- It is used for impossible or terminating code paths.

## Quick comparison

| Type | Meaning | Example |
| ---- | ------- | ------- |
| `void` | Returns no value, but may finish normally | `console.log()` |
| `never` | Never returns at all; always throws or loops | `throw new Error()` |

## In simple words

- `void` = no result, but normal completion.
- `never` = no completion at all.

This difference is clearly shown in the example file:

```ts
function sayhello(msg:string): void{
    console.log(msg);
}

function throwerror(message: string): never{
    throw new Error(message);
}
```

`sayhello` completes normally, while `throwerror` never completes successfully.
