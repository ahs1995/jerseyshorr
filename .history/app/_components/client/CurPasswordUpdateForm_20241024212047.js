"use client";

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
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useState } from "react";

const curPasswordUpdateSchema = z
  .object({
    passwordCurrent: z.string().min(8, {
      message: "Password must be at least 8 characters long",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long",
    }),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords don't match",
    path: ["passwordConfirm"],
  });

function CurUserUpdateForm() {
  const [errorPassword, setErrorPassword] = useState("");
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(curPasswordUpdateSchema),
    defaultValues: {
      passwordCurrent: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const passUpdateMutation = useMutation({
    mutationFn: async (userData) => {
      try {
        const response = await fetch("api/auth/updatePassword", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
          credentials: "include",
        });

        if (!response.ok) {
          const errorData = await response.json();
          return Promise.reject(
            new Error(
              errorData.message || "An error occured while updating password.",
            ),
          );
        }

        return response.json();
      } catch (error) {
        if (error instanceof Error) {
          throw error;
        } else {
          throw new Error("An unexpected error occured!");
        }
      }
    },

    onSuccess: (data) => {
      router.refresh();
      toast.success(data.message);
    },

    onError: (error) => {
      setErrorPassword(error.message);
      console.log(error.message);
    },
  });

  async function formSubmit(formData) {
    setErrorPassword("");
    try {
      await passUpdateMutation.mutateAsync(formData);
    } catch (error) {}
  }

  return (
    <div className="max-w-[450px]">
      <Form {...form}>
        <form
          className="flex flex-col space-y-6"
          onSubmit={form.handleSubmit(formSubmit)}
        >
          {errorPassword && (
            <div className="px-4 text-center text-sm text-accent-400">
              {errorPassword}
            </div>
          )}
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="passwordCurrent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Enter your current password"
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
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Enter your new password"
                    />
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
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Confirm your current password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="self-end bg-accent-500 capitalize hover:bg-accent-400"
            disabled={passUpdateMutation.isLoading}
          >
            {passUpdateMutation.isLoading
              ? "updating password..."
              : "save changes"}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default CurUserUpdateForm;
