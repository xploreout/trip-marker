import react, { useContext } from 'react';
import { UserContext } from './context/UserContext';

const ViewBlog = () => {
  const msg = useContext(UserContext);
  return (
    <>
      <h4>this is viewBlog</h4>
      <div>{msg}</div>
    </>
  );
};

export default ViewBlog;
