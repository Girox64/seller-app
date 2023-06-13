#Seller APP

> The best Seller app of world, by the best team.

## Getting Startes

Install dependencies:

```shell
yarn
```

Start the dev API server:

```shell
yarn start:api
```

Start the dev server:

```shell
yarn start
```

Make your changes. 🍚

Commit your feature:

```shell
yarn commit
```

Ship it! 🚀

## Folder Structure

We tend to use the Atomic Design approach while writing our components:

```
/src
    /ds
        /atoms
        /molecules
        /templates
        /pages
```

## Testing

We will tend to use anytime/anywhere our custom `render` method to represent the technical context of our application.

This `render` method is defined in : `/src/test-utils.js`

## Powered by CRA

[CRA documentation](.docs/CRA.md).
