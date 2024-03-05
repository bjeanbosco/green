// pages/client
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Input from "@/components/Atoms/Input";
import useLogin from "@/hooks/useLogin";

export default function Login() {
  const router = useRouter();
  const { errors, touched, getFieldProps, values, loading, onSubmit } =
    useLogin();

  useEffect(() => {
    const userSessionToken = localStorage.getItem("user_session");
    if (userSessionToken) {
      router.push("/dashboard");
    }
  }, []);

  return (
    <Layout>
      <main>
        <div className="w-full h-screen grid place-items-center">
          <div className="md:w-1/2 p-28 bg-white shadow-xl">
            <div className="mb-8 rounded-[32px] py-8 bg-[#DDF0FF]">
              <h2 className="text-center text-primary font-bold">
                Welcome back!
              </h2>
              <p className="w-full text-center text-neutral-600 md:font-normal">
                Fill in your credentials
              </p>
            </div>
            <div className="mt-4">
              <p className="mb-3">Email</p>
              <Input
                placeholder="Email or Username"
                type="text"
                isDirty={errors.username && touched.username ? true : false}
                fieldProps={getFieldProps("username")}
                error={errors.username}
              />
            </div>
            <div className="mt-4">
              <p className="mb-3">Password</p>
              <Input
                placeholder="Password"
                type="password"
                isDirty={errors.password && touched.password ? true : false}
                fieldProps={getFieldProps("password")}
                error={errors.password}
              />
            </div>
            <div className=" text-end cursor-pointer text-primary font-medium mt-3 capitalize">
              Forgot password?
            </div>
            <div className="flex justify-center">
              <button
                onClick={onSubmit}
                className="text-center px-4 py-1 text-white capitalize mt-3 bg-primary md:rounded-2xl"
              >
                {loading ? "Logging in ..." : "Log in"}
              </button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
