"use client";

import { Input } from "@/components/ui/input";
import CardWrapper from "../CardWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import FormLabel from "../FormLabel";

const loginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(6, {
    message: "Password must be atleast 6 characters long",
  }),
  passwordConfirm: z.string().min(6, {
    message: "Password must be atleast 6 characters long",
  }),
});

function LoginForm() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit() {
    console.log("submitted");
  }

  return (
    <div>
      <CardWrapper label="Login to your account" title="login">
        <Form onSubmit={form.handleSubmit(onSubmit)}>
          <form>
            <div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => {
                  <FormItem>
                    safsgf
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="johndoe@example.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>;
                }}
              />
              <FormField
                control={form.control}
                name="Password"
                render={({ field }) => {
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" placeholder="******" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>;
                }}
              />
            </div>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
}

export default LoginForm;
