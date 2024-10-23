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
import { useDispatch } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { clearUser, setUser } from "@/app/_lib/store/authSlice";
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
  const [registerError, setRegisterError] = useState();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (userData) => {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      return response.json();
    },
    onSuccess: (data) => {
      dispatch(setUser(data.data));
      queryClient.setQueryData(["user"], data);
      queryClient.invalidateQueries(["user"]);
      // Force a router refresh to trigger server component re-render
      router.refresh();
    },
    onError: (error) => {
      dispatch(clearUser());
      setRegisterError(error.message);
      console.error("Registration error:", error);
    },
  });

  async function formSubmit(formData) {
    setRegisterError("");
    await registerMutation.mutateAsync(formData);
  }

  return (
    <div>
      <CardWrapper label="Create your account" title="Sign up">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(formSubmit)} className="space-y-6">
            {registerError && (
              <div className="text-center text-sm text-accent-400">
                {registerError}
              </div>
            )}
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
              Signup
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
}

export default RegisterForm;
