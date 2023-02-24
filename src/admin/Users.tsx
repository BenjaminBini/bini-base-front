import { useQuery } from "react-query";

import { APIResponse } from "../api/types";

const Users = () => {
  const { data } = useQuery<APIResponse>({
    queryKey: ["user"],
  });

  return (
    <>
      Users:
      <ul>
        {data &&
          data.data.map((user: any) => (
            <li key={user.id}>
              {user.username} - {user.email}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Users;
