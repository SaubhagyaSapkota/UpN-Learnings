// import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

import z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const loginZodSchema = z.object({
  name: z.string().min(3, "naam xoto bhayo"),
  email: z.string(),
  password: z.string(),
});

type inputs = {
  name: string;
  password: string;
  email: string;
};
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputs>({
    defaultValues: {},
    resolver: zodResolver(loginZodSchema),
  });

  const onSubmit: SubmitHandler<inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Login Form</h1>
        <form className="flex flex-col w-80" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name:</label>
          <input
            className="bg-cyan-200 p-2 rounded"
            id="name"
            placeholder="Enter name..."
            type="text"
            {...register("name", {
              required: { message: "Name is required", value: true },
            })}
          />
          {errors.name && <p className="text-red-400">{errors.name.message}</p>}

          <label htmlFor="email">Email:</label>
          <input
            className="bg-cyan-200 p-2 rounded"
            id="email"
            placeholder="Enter email..."
            type="email"
            {...register("email", {
              required: { message: "Email is required", value: true },
            })}
          />
          {errors.email && (
            <p className="text-red-400">{errors.email.message}</p>
          )}

          <label htmlFor="password">Password:</label>
          <input
            className="bg-cyan-200 p-2 rounded"
            id="password"
            placeholder="Enter password..."
            type="password"
            {...register("password", {
              required: { message: "Password is required", value: true },
            })}
          />
          {errors.password && (
            <p className="text-red-400">{errors.password.message}</p>
          )}

          <button
            className="mt-4 bg-green-500 text-white py-2 rounded hover:bg-green-600"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
