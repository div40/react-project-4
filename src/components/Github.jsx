import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/div40")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);
  // this is commented since i'm gonna use loader instead
  const data = useLoaderData();
  return (
    <div className="text-center text-3xl text-orange-700 bg-gray-200 flex items-center flex-col gap-10">
      Github Followers: {data.followers}
      <div>
        <h1 className="uppercase">Profile-Pic</h1>
        <img src={data.avatar_url} alt="github pfp" width={300} height={200} />
      </div>
    </div>
  );
}

//loader in route
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/div40");
  return response.json();
};

export default Github;
