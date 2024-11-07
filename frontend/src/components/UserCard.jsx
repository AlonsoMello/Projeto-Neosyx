"use client";

import { useUser } from "@/context/UserContext";

const UserCard = ({ user }) => {  
  const {selectedUser} = useUser()
  return (
    <div
      className={`flex flex-row p-4 pl-7 pr-7 my-2 ${selectedUser?.name === user?.name ? 'bg-gray-300' : 'bg-white'} rounded-lg`}>
      <p className="text-black pr-2 text-align-left ">{user?.name}</p>

      <div className="">
        {user?.stats === 1 && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-green-500">
            <circle cx="12" cy="12" r="10" />
          </svg>
        )}

        {user?.stats === 2 && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-gray-500" >
            <circle cx="12" cy="12" r="10" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default UserCard;
