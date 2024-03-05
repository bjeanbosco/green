import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { MdAddCircleOutline } from "react-icons/md";
import { decodeToken } from "@/lib/jwt";
import axios from "axios";
import User from "@/types/user";
import LeaderTable from "../LeaderTable";

const LeadershipPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [user, setUser] = useState<User>();
  const [Leader, setLeader] = useState<User[]>([]);
  const [userToUpdate, setUserToUpdate] = useState<User | null>(null);

  const [newLeaderData, setNewLeaderData] = useState({
    name: "",
    title: "",
    category: "", // Added category state
    imageUrl: "",
  });
  const resetNewLeaderData = () => {
    setNewLeaderData({
      name: "",
      title: "",
      category: "",
      imageUrl: "",
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("user_session");
    if (token) {
      const decodedUser = decodeToken(token);
      setUser(decodedUser);
    }

    // Fetch Leader data
    axios.get("/api/leadership").then((res) => setLeader(res.data));
  }, []);

  const handleOpenModal = (id: string, newData: User) => {
    setUserToUpdate(newData);
    setIsModalOpen(true);
  };

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setNewLeaderData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveLeader = () => {
    axios.post("/api/leadership", newLeaderData).then((res) => {
      setLeader((prevLeader) => [...prevLeader, res.data]);
      closeModal();
      resetNewLeaderData(); // Reset newLeaderData
    });
  };

  const handleDelete = (_id: string) => {
    axios.delete(`/api/leadership?id=${_id}`).then(() => {
      setLeader((prevLeader) => prevLeader.filter((Leader) => Leader._id !== _id));
    });
  };

  const handleUpdate = () => {
    if (!userToUpdate || !userToUpdate._id) return; // Check if userToUpdate or its ID is not null or undefined

    const { _id, name, title, imageUrl, category } = userToUpdate;
    axios
      .put(`/api/leadership?id=${_id}`, { name, title, imageUrl, category })
      .then(() => {
        setLeader((prevLeader) =>
          prevLeader.map((Leader) =>
            Leader._id === userToUpdate._id
              ? { ...Leader, ...userToUpdate }
              : Leader
          )
        );
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error("Error updating Leader:", error);
        // Handle error here
      });
  };
  
  return (
    <main>
      <div className="flex justify-end gap-8 items-center mt-8">
        <button
          onClick={openModal}
          className="flex gap-2 items-center justify-center px-4 py-2 bg-[#4A6FBB] text-white text-center rounded-[6px]"
        >
          <MdAddCircleOutline className="text-2xl" />
          Add Member
        </button>
      </div>
      <LeaderTable
        user={user}
        users={Leader}
        onDelete={handleDelete}
        onUpdate={handleOpenModal}
      />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel={userToUpdate ? "Update Leader Modal" : "Add Leader Modal"}
        style={customStyles}
      >
        <div className="p-4 z-50">
          {userToUpdate ? (
            <div>
              <h3 className="font-bold text-[#4A6FBB]">Update Leader</h3>
              {userToUpdate && (
                <div>
                  <div className="flex w-full gap-4">
                    <div className="w-1/2">
                      <p className="font-bold mt-8 pb-2">Name</p>
                      <input
                        className="bg-[#B3B3B3]/25"
                        type="text"
                        name="name"
                        value={userToUpdate.name}
                        onChange={(e) =>
                          setUserToUpdate({
                            ...userToUpdate,
                            name: e.target.value,
                          })
                        }
                        placeholder="Enter Full Name..."
                      />
                    </div>
                    <div className="w-1/2">
                      <p className="font-bold mt-8 pb-2">Title</p>
                      <input
                        className="bg-[#B3B3B3]/25"
                        type="text"
                        name="title"
                        value={userToUpdate.title}
                        onChange={(e) =>
                          setUserToUpdate({
                            ...userToUpdate,
                            title: e.target.value,
                          })
                        }
                        placeholder="Enter Your Title..."
                      />
                    </div>
                  </div>
                  <div className="flex w-full gap-4">
                    <div className="w-1/2">
                      <p className="font-bold mt-8 pb-2">Image</p>
                      <input
                        className="bg-[#B3B3B3]/25"
                        type="file"
                        value={userToUpdate.imageUrl}
                        onChange={(e) =>
                          setUserToUpdate({
                            ...userToUpdate,
                            imageUrl: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="w-1/2">
                      <p className="font-bold mt-8 pb-2">Category</p>
                      <select
                        className="bg-[#B3B3B3]/25"
                        name="category"
                        value={userToUpdate.category}
                        onChange={(e) =>
                          setUserToUpdate({
                            ...userToUpdate,
                            category: e.target.value,
                          })
                        }
                      >
                        <option value="staff">Staff</option>
                        <option value="boarding">Boarding</option>
                        <option value="high_school">High School</option>
                        <option value="middle_school">Middle School</option>
                        <option value="primary_school">Primary School</option>
                        <option value="nursery_school">Nursery School</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-center gap-8 my-8">
                    <button
                      className="px-4 py-2 bg-[#4A6FBB] w-[120px] h-[50px] rounded-[9px] shadow text-white font-bold"
                      onClick={handleUpdate}
                    >
                      Update
                    </button>
                    <button
                      className="px-4 py-2 bg-white w-[120px] h-[50px] rounded-[9px] shadow font-bold"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              <h3 className="font-bold text-[#4A6FBB]">Create New Leader</h3>
              <p className="text-[#4A6FBB]">Add New Leader Member</p>
              <div className="flex w-full gap-4">
                <div className="w-1/2">
                  <p className="font-bold mt-8 pb-2">Name</p>
                  <input
                    className="bg-[#B3B3B3]/25"
                    type="text"
                    name="name"
                    value={newLeaderData.name}
                    onChange={handleInputChange}
                    placeholder="Enter Full Name..."
                  />
                </div>
                <div className="w-1/2">
                  <p className="font-bold mt-8 pb-2">Title</p>
                  <input
                    className="bg-[#B3B3B3]/25"
                    type="text"
                    name="title"
                    value={newLeaderData.title}
                    onChange={handleInputChange}
                    placeholder="Enter Title..."
                  />
                </div>
              </div>
              <div className="flex w-full gap-4">
                <div className="w-1/2">
                  <p className="font-bold mt-8 pb-2">Image</p>
                  <input
                    className="bg-[#B3B3B3]/25"
                    type="file"
                    value={newLeaderData.imageUrl}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-1/2">
                  <p className="font-bold mt-8 pb-2">Category</p>
                  <select
                    className="bg-[#B3B3B3]/25"
                    name="category"
                    value={newLeaderData.category}
                    onChange={handleInputChange}
                  >
                    <option value="staff">Staff</option>
                    <option value="boarding">Boarding</option>
                    <option value="high_school">High School</option>
                    <option value="middle_school">Middle School</option>
                    <option value="primary_school">Primary School</option>
                    <option value="nursery_school">Nursery School</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center gap-8 my-8">
                <button
                  className="px-4 py-2 bg-[#4A6FBB] w-[120px] h-[50px] rounded-[9px] shadow text-white font-bold"
                  onClick={handleSaveLeader}
                >
                  Save
                </button>
                <button
                  className="px-4 py-2 bg-white w-[120px] h-[50px] rounded-[9px] shadow font-bold"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </main>
  );
}

export default LeadershipPage;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    color: "#000",
    maxWidth: "50vw",
    width: "100%",
  },
};
