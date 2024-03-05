/* eslint-disable @next/next/no-img-element */
import Dashboard from "@/components/dashboard";
import React, { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { decodeToken } from "@/lib/jwt";
import User from "@/types/user";

const ProfilePage = () => {
  const [username, setUsername] = useState("");
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState<User>();
  const [error, setError] = useState<any>(null);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profile, setProfile] = useState(user?.profilePicture);

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setProfile(file);
  };

  useEffect(() => {
    const token = localStorage.getItem("user_session");
    if (token){
      const user = decodeToken(token);
      setUser(user);
    }
  }, []);

  const handlePasswordSave = () => {
    if (currentPassword !== user?.password) {
      setError("Incorrect current password. Please try again.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError(
        "New password and confirm password do not match. Please try again."
      );
      return;
    }

    //  updateUserPassword(user.userId, newPassword);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setError(null);
  };

  return (
    <Dashboard>
      <div>
        <h3 className="font-bold">Profile</h3>
        <p className="">Welcome Back, {user?.name ? user.name.split(' ')[0] : "Guest"}!</p>

        <div className="flex my-8 gap-12 p-4">
          <div className="w-1/3 h-1/2 rounded-[15px] bg-white shadow-xl border p-12">
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={user?.profilePicture || "https://greenhillsacademy.rw:8081/images/profile_wumtxt.png"}
                  alt=""
                  className="rounded-full w-[80px] h-[80px]"
                />
                <div className="absolute bottom-0 right-0 h-4 w-4 bg-primary rounded-full" />
              </div>
            </div>
            <p className="text-center pt-3">{user?.name}</p>
            <p className="text-center text-lg">{user?.email}</p>
            <div className="flex w-full gap-4 items-center mt-4">
              <p className=" w-1/2 text-lg">Phone</p>
              <span className="text-md break-words w-1/2">
                {user?.phoneNumber}
              </span>
            </div>
            <div className="flex w-full gap-4 items-center mt-4">
              <p className="text-lg w-1/2">Department</p>
              <span className="text-md break-words w-1/2">
                {user?.department}
              </span>
            </div>
          </div>
          <div className="w-2/3 rounded-[15px] bg-white shadow-xl border p-12">
            <p>Profile </p>
            <hr className="my-4" />
            <div className="w-full flex gap-8">
              
              <div className="w-1/2">
                <p className="text-lg my-2">Names</p>
                <input
                  type="text"
                  placeholder="Full names"
                  value={names || user?.name}
                  onChange={(e) => {
                    setNames(e.target.value);
                  }}
                  className=""
                />
              </div>

              <div className="w-1/2">
                <p className="text-lg my-2">Email Address</p>
                <input
                  type="email"
                  placeholder="someone@example.com"
                  value={email || user?.email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className=""
                />
              </div>
            </div>
            <div className="w-full flex gap-8">
              <div className="w-1/2">
                <p className="text-lg my-2">Phone Number</p>
                <input
                  type="tel"
                  placeholder="+250xxx"
                  value={phone || user?.phoneNumber}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  className=""
                />
              </div>
              <div className="w-1/2">
                <p className="text-lg my-2">Department</p>
                <input
                  type="text"
                  placeholder="instructor"
                  value={department || user?.department}
                  onChange={(e) => {
                    setDepartment(e.target.value);
                  }}
                  className=""
                />
              </div>
            </div>
            <div className="w-full flex gap-8">
              <div className="w-1/2">
                <p className="text-lg my-2">Profile Picture</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className=""
                />
                {profile && (
                  <img
                    src={profile}
                    alt="Selected"
                    className="mt-4 h-28 w-auto"
                  />
                )}{" "}
              </div>
            </div>
            <div className="flex justify-center gap-8 items-center my-8">
              <button className="w-[124px] h-[43px] bg-[#4A6FBB] text-white text-center rounded-[6px]">
                Save
              </button>
            </div>
            <p>Password </p>
            <hr className="my-4" />
            {error && <p className="text-[red] text-md">*{error}</p>}
            <p className="text-lg my-2">Current Password</p>
            <div className="relative">
              <input
                type={showCurrentPassword ? "text" : "password"}
                placeholder="xxxxxx"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full pr-10 rounded border-gray-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
              <div
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {showCurrentPassword ? <BsEye /> : <BsEyeSlash />}
              </div>
            </div>
            <p className="text-lg my-2">New Password</p>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="xxxxxx"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full pr-10 rounded border-gray-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
              <div
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <BsEye /> : <BsEyeSlash />}
              </div>
            </div>

            <p className="text-lg my-2">Confirm Password</p>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="xxxxxx"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pr-10 rounded border-gray-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
              <div
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <BsEye /> : <BsEyeSlash />}
              </div>
            </div>
            <div className="flex justify-center gap-8 items-center my-8">
              <button
                className="w-[124px] h-[43px] bg-[#4A6FBB] text-white text-center rounded-[6px]"
                onClick={handlePasswordSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default ProfilePage;
