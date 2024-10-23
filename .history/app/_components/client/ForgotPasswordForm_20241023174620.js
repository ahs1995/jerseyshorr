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

const forgetPassSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});

function LoginForm() {
  const [forgetPassError, setForgetPassError] = useState("");
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(forgetPassSchema),
    defaultValues: {
      email: "",
    },
  });

  const forgetPassMutation = useMutation({
    mutationFn: async (userData) => {
      try {
        const response = await fetch("/api/auth/forgetPassword", {
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
      router.refresh();
      // Optional: Force a full page reload if needed
      // window.location.reload();
    },
    onError: (error) => {
      setForgetPassError(error.message);
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
            {forgetPassError && (
              <div className="px-4 text-center text-sm text-accent-400">
                {forgetPassError}
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
              disabled={forgetPassMutation.isPending}
            >
              {forgetPassMutation.isPending
                ? "resetting password..."
                : "reset password"}
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
}

export default LoginForm;
