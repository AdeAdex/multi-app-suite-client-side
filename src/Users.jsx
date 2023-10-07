import React from "react";
import { useParams } from "react-router-dom";

const Users = () => {
  let name = useParams();
  return (
    <>
      <div className="text-center" style={{marginTop: '100px'}}>Welcome {name.username}</div>
    </>
  );
};

export default Users;
