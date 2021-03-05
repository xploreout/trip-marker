import React, { useContext } from 'react'


export const AuthContext  = React.createContext({
  token: null,
  setToken: (data) => {},
  data: null,
  setData: (data)=>{}
})

export const  useAuthContext = () => {
  return useContext(AuthContext);
}

