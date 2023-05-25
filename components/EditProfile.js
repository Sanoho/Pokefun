import React from "react";
import { useCurrentUser } from "@/app/context/currentUserContext";

export default function EditProfie() {
  const { currentUser, setCurrentUser } = useCurrentUser();
  const [openEdit, setOpenEdit] = React.useState(false);
  const [editName, setEditName] = React.useState("");
  const [editAge, setEditAge] = React.useState("");
  const [editPicture, setEditPicture] = React.useState("");
  const [editBio, setEditBio] = React.useState("");
  //   const [editDetails, setEditDetails] = React.useState({
  //     username: "",
  //     age: null,
  //     picture: "",
  //     bio: "",
  //   });

  const handleEditOpen = (currentUser) => {
    setEditName(currentUser.username);
    setEditAge(currentUser.age);
    setEditPicture(currentUser.picture);
    setEditBio(currentUser.bio);
    setOpenEdit(true);
  };

  const handleUpdate = (user) => {
    if (currentUser) {
      fetch("/api/updateUser?email=" + currentUser.email, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: editName,
          age: editAge,
          picture: editPicture,
          bio: editBio,
        }),
      });
      setCurrentUser(user);
      setOpenEdit(false);
    }
  };

  return (
    <>
      <button
        className="bg-blue-500 text-white active:bg-blue-700 font-bold uppercase text-sm px-6 py-1 rounded shadow transform transition-all duration-200 hover:scale-95 z-10 cursor-pointer focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => handleEditOpen(currentUser)}
      >
        Edit
      </button>
      {openEdit ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <form className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold">User Info</h3>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setOpenEdit(false)}
                  >
                    Close
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-5 flex-auto">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Username"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                  </label>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="age"
                      type="integer"
                      placeholder="age"
                      value={editAge}
                      onChange={(e) => setEditAge(parseInt(e.target.value))}
                    />
                  </label>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="pic"
                      type="text"
                      placeholder="image url"
                      value={editPicture}
                      onChange={(e) => setEditPicture(e.target.value)}
                    />
                  </label>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="bio"
                      type="text"
                      placeholder="bio"
                      value={editBio}
                      onChange={(e) => setEditBio(e.target.value)}
                    />
                  </label>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleUpdate()}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
