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
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <label>Email</label>
            <input
              {...form.register("email")}
              type="email"
              placeholder="johndoe@example.com"
            />
            {form.formState.errors.email && (
              <span>{form.formState.errors.email.message}</span>
            )}
          </div>

          <div>
            <label>Password</label>
            <input
              {...form.register("password")}
              type="password"
              placeholder="******"
            />
            {form.formState.errors.password && (
              <span>{form.formState.errors.password.message}</span>
            )}
          </div>

          <button type="submit">Login</button>
        </form>
      </CardWrapper>
    </div>
  );
}

export default LoginForm;
