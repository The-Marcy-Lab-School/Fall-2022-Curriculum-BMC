import { useState } from 'react';
import CurrentUserContext from './current-user-context';

export default function CurrentUserContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const context = { currentUser, setCurrentUser };

  return (
    <CurrentUserContext.Provider value={ context }>
      {children}
    </CurrentUserContext.Provider>
  );
}
