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

## User context

It will handle user auth **and** sales channel selection

```javascript
const user = { isLoggedIn: true, salesChannel: "guid" };
const App = ({}) => (
  <UserContextProvider user={user}>
    <Routes />
  </UserContextProvider>
);

const Route = ({}) => {
  const { isLoggedIn, salesChannel } = UserContext.useUser();

  if (!isLoggedIn) return <Redirect />;

  return <p>{salesChannel}</p>;
};
```

## Powered by CRA

[CRA documentation](.docs/CRA.md).
