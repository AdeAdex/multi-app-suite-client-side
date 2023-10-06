import React from "react";
import { useParams } from "react-router-dom";

const Users = () => {
  let name = useParams();
  return (
    <>
      <div>Welcome {name.username}</div>
    </>
  );
};

export default Users;
