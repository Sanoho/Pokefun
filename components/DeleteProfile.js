import React from "react";

export default function DeleteProfile() {
  return (
    <>
      <button
        className="bg-red-600 text-white active:bg-red-700 font-bold uppercase text-sm px-3 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setEdit(true)}
      >
        Delete
      </button>
    </>
  );
}
