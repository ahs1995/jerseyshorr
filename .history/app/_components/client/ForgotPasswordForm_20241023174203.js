"use client";

import CardWrapper from "../CardWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";

const loginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});

function LoginForm() {
  const [loginError, setLoginError] = useState("");
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useMutation({
    mutationFn: async (userData) => {
      try {
        const response = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
          credentials: "include",
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "An error occured during login");
        }

        return response.json();
      } catch (error) {
        if (error instanceof Error) {
          throw error;
        } else {
          throw new Error("An unexpected error occured");
        }
      }
    },
    onSuccess: (data) => {
      // dispatch(setUser(data));
      // queryClient.setQueryData(["user"], data);
      // queryClient.invalidateQueries(["user"]);

      // Force a router refresh to trigger server component re-render
      router.refresh();
      // Optional: Force a full page reload if needed
      // window.location.reload();
    },
    onError: (error) => {
      // dispatch(clearUser());
      setLoginError(error.message);
      console.error("Login error:", error);
    },
  });

  async function formSubmit(formData) {
    setLoginError("");
    try {
      await loginMutation.mutateAsync(formData);
    } catch (error) {}
  }

  return (
    <div className="mx-auto max-w-[500px]">
      <CardWrapper
        label="Please enter your email address or mobile number to search for your account."
        title="Find Your Account"
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(formSubmit)} className="space-y-6">
            {loginError && (
              <div className="px-4 text-center text-sm text-accent-400">
                {loginError}
              </div>
            )}
            <div className="space-y-4">
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
            </div>
            <Button
              type="submit"
              className="w-full bg-accent-500 capitalize hover:bg-accent-400"
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending ? "Logging in..." : "reset password"}
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
}

export default LoginForm;
