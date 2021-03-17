import react, { useContext } from 'react';
import { UserContext } from './context/UserContext';

const ViewBlog = () => {
  const { userAuth, setUserAuth} = useContext(UserContext);
  return (
    <>
      <h4>component viewBlog</h4>
      <div>{userAuth}</div>
    </>
  );
};

export default ViewBlog;
