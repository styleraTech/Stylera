import { getUsers } from "@/database/users";
import React from "react";

const page = async () => {
  const users = await getUsers({});
  console.log(users);
  return <div>page</div>;
};

export default page;
