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
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

const userUpdateSchema = z.object({
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
});

function CurUserUpdateForm() {
  const [updateError, setUpdateError] = useState("");
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(userUpdateSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const userUpdateMutation = useMutation({
    mutationFn: async (userData) => {
      try {
        const response = await fetch("/api/auth/updateUser", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
          credentials: "include",
        });

        if (!response.ok) {
          const errorData = await response.json();
          return Promise.reject(
            new Error(
              errorData.message || "An error occured while updating user",
            ),
          );
        }

        return response;
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
    },

    onError: (error) => {
      setUpdateError(error.message);
      console.log("User update error", error);
    },
  });

  async function formSubmit(formData) {
    setUpdateError("");
    try {
      await userUpdateMutation.mutateAsync(formData);
    } catch {
      error;
    }
  }

  return (
    <div className="max-w-[450px]">
      <Form {...form} onSubmit={form.handleSubmit(formSubmit)}>
        <form className="flex flex-col space-y-6">
          {updateError && (
            <div className="px-4 text-center text-sm text-accent-400">
              {updateError}
            </div>
          )}
          <div className="space-y-4 xl:space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} type="name" placeholder="John Doe" />
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
          </div>
          <Button
            type="submit"
            className="self-end bg-accent-500 capitalize hover:bg-accent-400"
            //   disabled={registerMutation.isLoading}
          >
            {/* {registerMutation.isLoading ? "signing user..." : "signup"} */}
            save changes
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default CurUserUpdateForm;
