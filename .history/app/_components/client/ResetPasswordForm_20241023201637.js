"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CardWrapper from "../CardWrapper";
import FormLabel from "../FormLabel";

const resetPasswordSchema = z
  .object({
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long",
    }),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords don't match",
    path: ["passwordConfirm"],
  });

function ResetPasswordForm({ token }) {
  const [resetError, setResetError] = useState("");
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      passwordConfirm: "",
    },
  });

  const resetPasswordMutation = useMutation({
    mutationFn: async (userData) => {
      try {
        const response = await fetch(`/api/auth/resetPassword/${token}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
          credentials: "include",
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to reset password");
        }

        return response.json();
      } catch (error) {
        throw error;
      }
    },
    onSuccess: (data) => {
      toast.success(data.message);
      router.push("/my-account");
    },
    onError: (error) => {
      setResetError(error.message);
      console.error("Reset password error:", error);
    },
  });

  async function onSubmit(formData) {
    setResetError("");
    try {
      await resetPasswordMutation.mutateAsync(formData);
    } catch (error) {
      // Error is handled by mutation
    }
  }

  return (
    <div className="mx-auto max-w-[500px]">
      <CardWrapper label="Enter your new password" title="Reset Your Password">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {resetError && (
              <div className="px-4 text-center text-sm text-accent-400">
                {resetError}
              </div>
            )}
            <div className="space-y-4">
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
                        placeholder="Confirm your new password"
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
              disabled={resetPasswordMutation.isPending}
            >
              {resetPasswordMutation.isPending
                ? "Resetting password..."
                : "Reset Password"}
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
}

export default ResetPasswordForm;
