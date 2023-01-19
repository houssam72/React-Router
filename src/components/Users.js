import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";
export const Users = () => {
  //It's similar to useState
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";

  return (
    <div>
      <h2>User1</h2>
      <h2>User2</h2>
      <h2>User3</h2>
      <Outlet />
      <div>
        <button
          onClick={() => setSearchParams({ filter: "active", test: "Rca" })}
        >
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
        {showActiveUsers ? (
          <h2>Showing active user</h2>
        ) : (
          <h2>Showing all user</h2>
        )}
      </div>
    </div>
  );
};
