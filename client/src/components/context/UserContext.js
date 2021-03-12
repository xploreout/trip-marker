import React, { createContext } from 'react'


export const UserContext  = createContext({
  token: null,
  setToken: (data) => {},
  data: null,
  setData: (data)=>{}
})

// export const  useAuthContext = () => {
//   return useContext(AuthContext);
// }

