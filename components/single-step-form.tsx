"use client";
import * as z from "zod";
import { formSchema } from "@/lib/form-schema";
import { serverAction } from "@/actions/server-action";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { useAction } from "next-safe-action/hooks";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Schema = z.infer<typeof formSchema>;

export function DraftForm() {
  const form = useForm<Schema>({
    resolver: zodResolver(formSchema as any),
  });

  const formAction = useAction(serverAction, {
    onSuccess: () => form.reset(),
  });

  const handleSubmit = form.handleSubmit(async (data: Schema) => {
    formAction.execute(data);
  });

  const { isExecuting, hasSucceeded } = formAction;

  if (hasSucceeded) {
    return (
      <div className="w-full max-w-[640px] p-8 border rounded-md">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex justify-center mb-4">
            <Check className="size-8" />
          </div>
          <h2 className="text-center text-2xl font-bold mb-2">Thank you</h2>
          <p className="text-center text-lg text-muted-foreground">
            Form submitted successfully
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-black border rounded-md p-4 sm:p-6 md:p-8"
    >
      <FieldGroup className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-10 mb-6">
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field className="md:col-span-3">
              <FieldLabel className="text-white">Full Name *</FieldLabel>
              <Input
                {...field}
                className="bg-white h-[56px]"
                placeholder="Your Full Name"
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="Phone Number"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field className="md:col-span-3">
              <FieldLabel className="text-white">Phone Number *</FieldLabel>
              <Input
                {...field}
                className="bg-white h-[56px]"
                placeholder="Your Phone Number"
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="Email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field className="col-span-full">
              <FieldLabel className="text-white">Email</FieldLabel>
              <Input
                {...field}
                className="bg-white h-[56px]"
                placeholder="Your Email Address"
              />
            </Field>
          )}
        />

        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field className="col-span-full">
              <FieldLabel className="text-white">Message *</FieldLabel>
              <Textarea
                {...field}
                className="bg-white h-[150px]"
                placeholder="..."
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      <Button
        className="w-full h-[60px] sm:h-[72px] mt-10  bg-gradient-to-r from-[#76B828] to-[#C7D300]" >
        {isExecuting ? "Submitting..." : "SUBMIT"}
      </Button>

      <p className="text-xs sm:text-sm text-[#BABABA] mt-6">
        By clicking “Submit”, you agree to our
        <span className="text-white ml-2">Privacy Policy</span>
      </p>
    </form>
  );
}
