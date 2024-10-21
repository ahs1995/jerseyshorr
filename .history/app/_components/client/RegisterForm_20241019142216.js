"use client";

import CardWrapper from "../CardWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import FormLabel from "../FormLabel";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";

const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, {
        message: "Please enter your name",
      })
      .max(50, {
        message: "Name cannot exceed 50 characters",
      })
      .regex(/^[a-zA-Z\s]+$/, {
        message: "Name can only contain alphabets",
      }),
    email: z.string().email({
      message: "Please enter a valid email address",
    }),

    password: z
      .string()
      .min(6, {
        message: "Password must be atleast 6 characters long",
      })
      .max(20, {
        message: "Password cannot exceed 20 characters",
      })
      .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
        message:
          "Password must include at least one letter, one number, and one special character",
      }),
    passwordConfirm: z
      .string()
      .min(6, {
        message: "Password must be atleast 6 characters long",
      })
      .max(20, {
        message: "Password cannot exceed 20 characters",
      }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
  });

function RegisterForm() {
  const queryClient = useQueryClient();

  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  async function createUser(userData) {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to register user");
    }

    return response.json();
  }

  const { mutate, isLoading: isRegistering } = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      console.log("User registered successfully", data);
      toast.success("User is successfully registered!");
      queryClient.setQueriesData(
        "registerSuccess",
        `Registeration successful! Please check your email: ${data.email} to verify your account.`,
      );
    },

    onError: (error) => {
      console.log("Error registering user", error.message);
      queryClient.setQueriesData("registerFail", `${error.message}`);
    },
  });

  function formSubmit({ name, email, password, passwordConfirm }) {
    mutate({ name, email, password, passwordConfirm });
  }

  return (
    <div>
      <CardWrapper label="Create your account" title="Sign up">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(formSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} type="name" placeholder="john doe" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="johndoe@example.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" placeholder="******" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="passwordConfirm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" placeholder="******" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-accent-500 hover:bg-accent-400"
            >
              {!isRegistering ? "Signup" : "Registering user..."}
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
}

export default RegisterForm;
