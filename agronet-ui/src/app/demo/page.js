'use client';
import React, { use } from 'react';
import { useAPI } from '../services/api/useAPI';
import { API_ENDPOINTS } from '../services/api/endPoints';

const Users = () => {
  const { data, error, isLoading } = useAPI({
    endpointKey: API_ENDPOINTS.USERS,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className=" bg-blue-500 text-white p-4 rounded">
      <h1 className="text-xl font-bold">Users Data</h1>
      <pre className="bg-gray-100 p-2 rounded">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default Users;
