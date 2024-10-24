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
  const form = useForm({
    resolver: zodResolver(userUpdateSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  return (
    <div>
      <CardWrapper label="" title="">
        <Form {...form}>
          <form>
            <div>
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
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
}

export default CurUserUpdateForm;
