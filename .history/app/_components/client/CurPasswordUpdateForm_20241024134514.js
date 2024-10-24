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

const curPasswordUpdateSchema = z
  .object({
    currentPassword: z.string().min(8, {
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
  const form = useForm({
    resolver: zodResolver(userUpdateSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  return (
    <div>
      <Form {...form}>
        <form className="flex flex-col space-y-6">
          <div className="space-y-4">
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
            save password
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default CurUserUpdateForm;
