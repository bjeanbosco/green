import React, { useEffect, useState } from "react";
import Dashboard from "@/components/dashboard";
import PaginatedTable from "@/components/Molecules/UserPaginatedTable";
import Modal from "react-modal";
import { MdAddCircleOutline } from "react-icons/md";
import UnauthorizedPage from "@/components/UnauthorizedPage";
import User from "@/types/user";
import { decodeToken } from "@/lib/jwt";
import axios from "axios";

const UsersPage = () => {
  const [names, setNames] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [permissions, setPermissions] = useState<string[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [userStaff, setUserStaff] = useState<User[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [staffList, setStaffList] = useState<User[]>([]);
  const [selectedStaff, setSelectedStaff] = useState<string>("");
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    department: "",
    password: "",
    permissions: [""],
  });
  const [userToUpdate, setUserToUpdate] = useState<User | null>(null);

  const handleOpenModal = (id: string, newData: User) => {
    setUserToUpdate(newData);
    setIsModalOpen(true);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStaff("");
    setNewUser({
      name: "",
      email: "",
      phoneNumber: "",
      department: "",
      password: "",
      permissions: [],
    });
  };

  const handlePermissionChange = (permission: string, checked: boolean) => {
    setPermissions((prevPermissions) => {
      if (checked) {
        // Add the permission if checked
        return [...prevPermissions, permission];
      } else {
        // Remove the permission if unchecked
        return prevPermissions.filter((p) => p !== permission);
      }
    });
  };

  const [user, setUser] = useState<User>();
  const [isAuthorized, setIsAuthorized] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  useEffect(() => {
    const token = localStorage.getItem("user_session");
    if (token) {
      const decodedUser = decodeToken(token);
      setUser(decodedUser);
    }

    // Fetch staff data
    axios.get("/api/users").then((res) => setUsers(res.data));
  }, []);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStaffName = e.target.value;
    // Find the selected staff member by name
    const selectedStaff = staffList.find(
      (staff) => staff.name === selectedStaffName
    );
    if (selectedStaff) {
      // Update the state of the new user with the corresponding values
      setNewUser({
        ...newUser,
        name: selectedStaff.name,
        email: selectedStaff.email,
        phoneNumber: selectedStaff.phoneNumber,
        department: selectedStaff.department,
      });
    }
  };

  const handleSaveUser = () => {
    if (newUser.password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (newUser.password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    newUser.permissions = permissions;
    // Send POST request to create user
    axios
      .post("/api/users", newUser)
      .then((res) => {
        // Handle successful creation
        closeModal();
      })
      .catch((error) => {
        // Handle error
      });
  };

  useEffect(() => {
    // Fetch staff list
    axios.get("/api/staff").then((res) => setStaffList(res.data));
  }, []);

  const handleDelete = (_id: string) => {
    axios.delete(`/api/users/id=${_id}`).then(() => {
      setUsers((prevStaff) => prevStaff.filter((staff) => staff._id !== _id));
    });
  };

  const handleUpdate = () => {
    if (!userToUpdate || !userToUpdate._id) return; // Check if userToUpdate or its ID is not null or undefined

    axios
      .put(`/api/users?id=${userToUpdate._id}`, userToUpdate) // Pass userToUpdate object directly
      .then(() => {
        setUsers((prevStaff) =>
          prevStaff.map((staff) =>
            staff._id === userToUpdate._id
              ? { ...staff, ...userToUpdate }
              : staff
          )
        );
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error("Error updating staff:", error);
        // Handle error here
      });
  };

  // if (!isAuthorized) {
  //   return <UnauthorizedPage />;
  // } else {
  return (
    <Dashboard>
      <main>
        <div>
          <h3 className="font-bold">The Users</h3>
          <p className="">Welcome Back, {user?.username || "Guest"} !</p>
        </div>
        <div className="flex justify-end gap-8 items-center mt-8">
          <button
            onClick={openModal}
            className="flex gap-2 items-center justify-center h-[50px] bg-[#4A6FBB] text-white text-center rounded-[6px]"
          >
            <MdAddCircleOutline className="text-2xl" />
            Add User
          </button>
        </div>
        <PaginatedTable
          users={users}
          onDelete={handleDelete}
          onUpdate={handleOpenModal}
        />

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel={userToUpdate ? "Update User Modal" : "Add User Modal"}
          style={customStyles}
        >
          {userToUpdate ? (
            <div>
              <h3 className="font-bold text-[#4A6FBB]">Update User</h3>
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
                      <p className="font-bold mt-8 pb-2">Email</p>
                      <input
                        className="bg-[#B3B3B3]/25"
                        type="email"
                        name="email"
                        value={userToUpdate.email}
                        onChange={(e) =>
                          setUserToUpdate({
                            ...userToUpdate,
                            email: e.target.value,
                          })
                        }
                        placeholder="Enter Your Email..."
                      />
                    </div>
                  </div>
                  <div className="flex w-full gap-4">
                    <div className="w-1/2">
                      <p className="font-bold mt-8 pb-2">Phone Number</p>
                      <input
                        className="bg-[#B3B3B3]/25"
                        type="text"
                        name="phoneNumber"
                        value={userToUpdate.phoneNumber}
                        onChange={(e) =>
                          setUserToUpdate({
                            ...userToUpdate,
                            phoneNumber: e.target.value,
                          })
                        }
                        placeholder="Enter Phone Number..."
                      />
                    </div>
                    <div className="w-1/2">
                      <p className="font-bold mt-8 pb-2">Department</p>
                      <input
                        className="bg-[#B3B3B3]/25"
                        type="text"
                        name="department"
                        value={userToUpdate.department}
                        onChange={(e) =>
                          setUserToUpdate({
                            ...userToUpdate,
                            department: e.target.value,
                          })
                        }
                        placeholder="Enter Department..."
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-lg my-2">Password</p>
                    <input
                      type="password"
                      name="password"
                      onChange={(e) =>
                        setUserToUpdate({
                          ...userToUpdate,
                          password: e.target.value,
                        })
                      }
                      className="border border-gray-400 py-2 px-4 rounded w-full focus:outline-none focus:border-primary"
                    />
                    <p className="text-lg my-2">Confirm Password</p>
                    <input
                      type="password"
                      placeholder="xxxxxx"
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                      }}
                      className=""
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-lg my-2">Permissions</p>
                    <div className="flex flex-col gap-2 w-1/4">
                      <div className="flex items-center gap-4">
                        <input
                          type="checkbox"
                          id="viewPermission"
                          checked={permissions.includes("view")}
                          onChange={(e) =>
                            handlePermissionChange("view", e.target.checked)
                          }
                        />
                        <label htmlFor="viewPermission">View</label>
                      </div>
                      <div className="flex items-center gap-4">
                        <input
                          type="checkbox"
                          id="editPermission"
                          checked={permissions.includes("edit")}
                          onChange={(e) =>
                            handlePermissionChange("edit", e.target.checked)
                          }
                        />
                        <label htmlFor="editPermission">Edit</label>
                      </div>
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
            <div className="p-4 z-50">
              <h3 className="font-bold text-[#4A6FBB]">Create User</h3>
              <p className="text-[#4A6FBB]">Add New User To the System</p>
              <div className="flex w-full gap-4 mt-4">
                <div className="w-1/2">
                  <p className="mb-3 text-lg">
                    Names<span className="">(Select Staff)</span>
                  </p>
                  <select
                    value={selectedStaff}
                    onChange={handleSelectChange}
                    className="border border-gray-400 py-2 px-4 rounded w-full focus:outline-none focus:border-primary"
                  >
                    <option value="">none</option>
                    {staffList.map((staff, index) => (
                      <option key={index} value={staff.name}>
                        {staff.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-1/2">
                  <p className="mb-3 text-lg">Email</p>
                  <input
                    name="email"
                    value={newUser.email}
                    onChange={handleInputChange}
                    className="border border-gray-400 py-2 px-4 rounded w-full focus:outline-none focus:border-primary"
                    disabled
                  />
                </div>
              </div>
              <div className="flex w-full gap-4 mt-4">
                <div className="w-1/2">
                  <p className="mb-3 text-lg">Phone Number</p>
                  <input
                    name="phoneNumber"
                    value={newUser.phoneNumber}
                    onChange={handleInputChange}
                    className="border border-gray-400 py-2 px-4 rounded w-full focus:outline-none focus:border-primary"
                    disabled
                  />
                </div>
                <div className="w-1/2">
                  <p className="mb-3 text-lg">Department</p>
                  <input
                    name="department"
                    value={newUser.department}
                    onChange={handleInputChange}
                    className="border border-gray-400 py-2 px-4 rounded w-full focus:outline-none focus:border-primary"
                    disabled
                  />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-lg my-2">Password</p>
                <input
                  type="password"
                  name="password"
                  value={newUser.password}
                  onChange={handleInputChange}
                  className="border border-gray-400 py-2 px-4 rounded w-full focus:outline-none focus:border-primary"
                />
                <p className="text-lg my-2">Confirm Password</p>
                <input
                  type="password"
                  placeholder="xxxxxx"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  className=""
                />
              </div>
              <div className="mt-4">
                <p className="text-lg my-2">Permissions</p>
                <div className="flex flex-col gap-2 w-1/4">
                  <div className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      id="viewPermission"
                      checked={permissions.includes("view")}
                      onChange={(e) =>
                        handlePermissionChange("view", e.target.checked)
                      }
                    />
                    <label htmlFor="viewPermission">View</label>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      id="editPermission"
                      checked={permissions.includes("edit")}
                      onChange={(e) =>
                        handlePermissionChange("edit", e.target.checked)
                      }
                    />
                    <label htmlFor="editPermission">Edit</label>
                  </div>
                  {/* Add more permission checkboxes as needed */}
                </div>
              </div>
              <div className="flex justify-center gap-8 my-8">
                <button
                  className="px-4 py-2 bg-[#4A6FBB] w-[120px] h-[50px] rounded-[9px] shadow text-white font-bold"
                  onClick={handleSaveUser}
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
        </Modal>
      </main>
    </Dashboard>
  );
  // }
};

export default UsersPage;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    color: "#000",
    maxWidth: "50vw", // Set 75% of the viewport width
    width: "100%", // Ensure the modal takes up the full width within 75vw
  },
};
