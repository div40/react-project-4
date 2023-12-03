import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  //this will take the userid value from the url and display in  in the div below
  return (
    <div className="bg-gray-600 text-white text-3xl flex items-center justify-center">
      User: {userid}
    </div>
  );
}

export default User;
