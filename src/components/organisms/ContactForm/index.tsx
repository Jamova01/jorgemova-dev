"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    message: yup.string().required("Message is required"),
  })
  .required();

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      console.log("Message sent successfully:", data);
      reset();
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-col gap-6 w-full md:w-2/5 mx-auto ${
        isSubmitting ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      <fieldset className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            placeholder="Your full name"
            disabled={isSubmitting}
            className="px-3 py-2 bg-input border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("name")}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="your.email@example.com"
            disabled={isSubmitting}
            className="px-3 py-2 bg-input border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Write your message here"
            disabled={isSubmitting}
            className="px-3 py-2 bg-input border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            rows={5}
            {...register("message")}
          />
          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>
          )}
        </div>
      </fieldset>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`px-4 py-2 w-full md:w-44 rounded-full text-lg font-bold
            ${
              isSubmitting
                ? "bg-muted text-muted-foreground cursor-not-allowed"
                : "bg-primary text-foreground hover:opacity-80 transition-all"
            }`}
      >
        Send Message
      </button>
    </form>
  );
};
