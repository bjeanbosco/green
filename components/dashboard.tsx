/* eslint-disable @next/next/no-img-element */
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import withAuth from "./withAuth";
import { ClipLoader } from "react-spinners";
import NotificationsModal from "./Atoms/NotificationsModal";

interface DashboardProps {
  user: any;
  children: React.ReactNode;
}
interface LoadingState {
  [key: string]: boolean;
}
const Dashboard: React.FC<DashboardProps> = ({ user, children }) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);

  const modifiedChildren = React.Children.map(children, (child) => {
    const modifiedChild = React.cloneElement(child as React.ReactElement, {
      user,
    });
    return modifiedChild;
  });

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user_session");
    router.push("/");
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: searchQuery,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setFilteredItems(data.results);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching search results:", error);
      // Handle the error.
    }
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "Event 1",
      date: new Date("2023-12-01"),
    },
    {
      id: 2,
      title: "Event 2",
      date: new Date("2023-12-15"),
    },
  ];

  const calculateUpcomingEvents = () => {
    const currentDate = new Date();
    const upcomingEventsCount = upcomingEvents.filter(
      (event) => event.date > currentDate
    ).length;
    return upcomingEventsCount;
  };

  const upcomingEventsCount = calculateUpcomingEvents();

  const [loadingState, setLoadingState] = useState<LoadingState>({});

  const handleLinkClick = (route: string) => {
    setLoadingState((prevLoadingState) => ({
      ...prevLoadingState,
      [route]: true, // Set loading state for the specific link to true
    }));

    setTimeout(() => {
      setLoadingState((prevLoadingState) => ({
        ...prevLoadingState,
        [route]: false,
      }));
    }, 2000);
  };

  return (
    <div className="flex w-full h-screen fixed top-0 left-0 overflow-y-scroll scrollbar-none bg-red-600">
      <div
        className={`bg-white shadow-inner overflow-y-scroll scrollbar-none  shadow-green rounded-lg text-[#4A4754] h-full ${
          isMenuOpen ? "text-opacity-0" : "w-[300px]"
        }`}
      >
        <div>
          <Link
            href={"/"}
            passHref
            className="my-6 grid place-items-center w-full"
          >
            <img
              src="https://greenhillsacademy.rw:8081/images/logo_pjrxda.png"
              alt="Logo Top"
              className={`${
                isMenuOpen
                  ? "h-[80px] w-[80px]"
                  : "h-[150px] w-[150px] sm:h-[80px] sm:w-[80px]"
              }`}
            />
          </Link>
        </div>
        <Link
          href="/dashboard"
          passHref
          onClick={() => handleLinkClick("/dashboard")}
          className={`${
            router.pathname === "/dashboard"
              ? "border-primary border-l-[5px]"
              : ""
          } m-4 px-4 h-[50px] flex items-center gap-4 hover:border-primary hover:border-l-[5px]`}
        >
          {loadingState["/dashboard"] ? (
            <ClipLoader color={"#018C79"} loading={true} size={20} />
          ) : (
            <img
              loading="lazy"
              src="/icons/dashboard_gozwxv.svg"
              alt=""
              className=""
            />
          )}
          {isMenuOpen ? null : <p className="text-xl">Dashboard</p>}
        </Link>
        <Link
          href="/webpages"
          onClick={() => handleLinkClick("/webpages")}
          className={`${
            router.pathname === "/webpages"
              ? "border-primary border-l-[5px]"
              : ""
          } m-4 px-4 h-[50px] flex items-center gap-4 hover:border-primary hover:border-l-[5px]`}
        >
          {loadingState["/webpages"] ? (
            <ClipLoader color={"#018C79"} loading={true} size={20} />
          ) : (
            <img
              loading="lazy"
              src="/icons/web_qi5vre.svg"
              alt=""
              className=""
            />
          )}
          {isMenuOpen ? null : (
            <p className="text-xl capitalize">Web&nbsp;Pages</p>
          )}
        </Link>
        <Link
          href="/numbers"
          onClick={() => handleLinkClick("/numbers")}
          className={`${
            router.pathname === "/numbers"
              ? "border-primary border-l-[5px]"
              : ""
          } m-4 px-4 h-[50px] flex items-center gap-4 hover:border-primary hover:border-l-[5px]`}
        >
          {loadingState["/numbers"] ? (
            <ClipLoader color={"#018C79"} loading={true} size={20} />
          ) : (
            <img
              loading="lazy"
              src="/icons/Document_lfenwn.svg"
              alt=""
              className=""
            />
          )}
          {isMenuOpen ? null : <p className="text-xl capitalize">Numbers</p>}
        </Link>
        <Link
          onClick={() => handleLinkClick("/staff")}
          href="/staff"
          className={`${
            router.pathname === "/staff" ? "border-primary border-l-[5px]" : ""
          } m-4 px-4 h-[50px] flex items-center gap-4 hover:border-primary hover:border-l-[5px]`}
        >
          {loadingState["/staff"] ? (
            <ClipLoader color={"#018C79"} loading={true} size={20} />
          ) : (
            <img
              loading="lazy"
              src="/icons/3User_wsbadb.svg"
              alt=""
              className=""
            />
          )}
          {isMenuOpen ? null : <p className="text-xl capitalize">Staff</p>}
        </Link>
        <Link
          onClick={() => handleLinkClick("/posts")}
          href="/posts"
          className={`${
            router.pathname === "/posts" ? "border-primary border-l-[5px]" : ""
          } m-4 px-4 h-[50px] flex items-center gap-4 hover:border-primary hover:border-l-[5px]`}
        >
          {loadingState["/posts"] ? (
            <ClipLoader color={"#018C79"} loading={true} size={20} />
          ) : (
            <img
              loading="lazy"
              src="/icons/posts_fxtzhz.svg"
              alt=""
              className=""
            />
          )}
          {isMenuOpen ? null : <p className="text-xl capitalize">Posts</p>}
        </Link>
        <Link
          onClick={() => handleLinkClick("/gallery")}
          href="/gallery"
          className={`${
            router.pathname === "/gallery"
              ? "border-primary border-l-[5px]"
              : ""
          } m-4 px-4 h-[50px] flex items-center gap-4 hover:border-primary hover:border-l-[5px]`}
        >
          {loadingState["/gallery"] ? (
            <ClipLoader color={"#018C79"} loading={true} size={20} />
          ) : (
            <img
              loading="lazy"
              src="/icons/gallery_qffuuc.svg"
              alt=""
              className=""
            />
          )}
          {isMenuOpen ? null : <p className="text-xl capitalize">Gallery</p>}
        </Link>
        <Link
          onClick={() => handleLinkClick("/others")}
          href="/others"
          className={`${
            router.pathname === "/others" ? "border-primary border-l-[5px]" : ""
          } m-4 px-4 h-[50px] flex items-center gap-4 hover:border-primary hover:border-l-[5px]`}
        >
          {loadingState["/others"] ? (
            <ClipLoader color={"#018C79"} loading={true} size={20} />
          ) : (
            <img
              loading="lazy"
              src="/icons/more_g6utph.svg"
              alt=""
              className=""
            />
          )}
          {isMenuOpen ? null : <p className="text-xl capitalize">Others</p>}
        </Link>
        <div className="h-[40px]" />
        <Link
          onClick={() => handleLinkClick("/users")}
          href="/users"
          className={`${
            router.pathname === "/users" ? "border-primary border-l-[5px]" : ""
          } m-4 px-4 h-[50px] flex items-center gap-4 hover:border-primary hover:border-l-[5px]`}
        >
          {loadingState["/users"] ? (
            <ClipLoader color={"#018C79"} loading={true} size={20} />
          ) : (
            <img
              loading="lazy"
              src="/icons/addUser_enxyzo.svg"
              alt=""
              className=""
            />
          )}
          {isMenuOpen ? null : <p className="text-xl capitalize">Users</p>}
        </Link>
        <Link
          onClick={() => handleLinkClick("/profile")}
          href="/profile"
          className={`${
            router.pathname === "/profile"
              ? "border-primary border-l-[5px]"
              : ""
          } m-4 px-4 h-[50px] flex items-center gap-4 hover:border-primary hover:border-l-[5px]`}
        >
          {loadingState["/profile"] ? (
            <ClipLoader color={"#018C79"} loading={true} size={20} />
          ) : (
            <img
              loading="lazy"
              src="/icons/profile_nvsex3.svg"
              alt=""
              className=""
            />
          )}
          {isMenuOpen ? null : <p className="text-xl capitalize">Profile</p>}
        </Link>
        {/* <Link
          href="/"
          className={`${
            router.pathname === "/" ? "border-primary border-l-[5px]" : ""
          } m-4 px-4 h-[50px] flex items-center gap-4 hover:border-primary hover:border-l-[5px]`}
        >
         {loadingState['/webpages'] ? (
            <ClipLoader color={'#018C79'} loading={true} size={20} />
          ) : ( <img                       loading="lazy"src="/icons/settings.svg" alt="" className="" />)}
          {isMenuOpen ? null : <p className="text-xl capitalize">Settings</p>}
        </Link> */}
        <div className="flex justify-center my-12">
          {user && (
            <div>
              <button
                className={`md:w-[124px]  md:h-[43px] sm:h-[24px] sm:w-[100px] ${
                  isMenuOpen ? "" : "h-[24px] w-[100%] text-md"
                } sm:text-md bg-[#4A6FBB] text-white text-center rounded-[6px]`}
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="bg-[#F5FBFF] h-full w-full overflow-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-secondary text-darkGrey">
        <div className="bg-white px-4 py-2 h-[80px] justify-between items-center flex shadow-2xl">
          <Hamburger toggled={isMenuOpen} toggle={handleMenuToggle} size={32} />
          <form
            onSubmit={handleSearch}
            className="flex items-center gap-2 h-full"
          >
            <div
              onClick={handleSearch}
              className={`bg-[#B3B3B3]/25 rounded-[7px] text-primary h-[40px] w-[52px] grid place-items-center cursor-pointer `}
            >
              <img
                loading="lazy"
                src="/icons/search_aesxbk.svg"
                alt=""
                className=""
              />
            </div>
            <input
              type="text"
              placeholder="Enter Your Search Here..."
              className="w-full text-black text-lg border-0 font-['Outfit'] border"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <div className="flex gap-12 px-4 items-center">
            <Link href="#" onClick={() => setIsNotificationModalOpen(true)}>
              <div className="relative">
                <img
                  loading="lazy"
                  src="/icons/Notification_neaje7.svg"
                  alt=""
                  className=""
                />
                {upcomingEventsCount > 0 && (
                  <div className="absolute top-0 right-0 h-4 w-4 bg-[red] rounded-full text-white text-[11px] text-center">
                    {upcomingEventsCount}
                  </div>
                )}
              </div>
            </Link>
            <Link href="/profile">
              <div className="flex gap-2 items-center">
                <div className="relative">
                  <img
                    src={
                      user?.profilePicture ||
                      "https://greenhillsacademy.rw:8081/images/profile_wumtxt.png"
                    }
                    alt=""
                    className="rounded-full w-[55px] h-[55px]"
                  />
                  <div className="absolute top-0 right-0 h-4 w-4 bg-primary rounded-full" />
                </div>
                {user && (
                  <div>
                    <p className="font-bold text-black">
                      {user.name?.split(" ")[0] || "Guest"}
                    </p>

                    <p className="text-xs">{user.email}</p>
                  </div>
                )}
              </div>
            </Link>
          </div>
        </div>
        <div className="m-12">{modifiedChildren}</div>

        <NotificationsModal
          isOpen={isNotificationModalOpen}
          onRequestClose={() => setIsNotificationModalOpen(false)}
          upcomingEvents={upcomingEvents}
        />
      </div>
    </div>
  );
};

export default withAuth(Dashboard);
