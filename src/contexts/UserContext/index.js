import { bool, node, shape, string } from "prop-types";
import React from "react";

const initialUser = {};

const UserContext = React.createContext(initialUser);

const useUser = () => React.useContext(UserContext);

const Provider = ({ user, children }) => {
  const [currentUser] = React.useState(user);

  return (
    <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
  );
};

Provider.propTypes = {
  user: shape({
    isLoggedIn: bool,
    salesChannel: string,
  }),
  children: node,
};

export default {
  Provider,
  useUser,
};
