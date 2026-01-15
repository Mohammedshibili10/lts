"use client";
import * as z from "zod";
import { formSchema } from "@/lib/form-schema";
import { serverAction } from "@/actions/server-action";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { useAction } from "next-safe-action/hooks";
// import { motion } from "motion/react";
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


/* eslint-disable @typescript-eslint/no-explicit-any */
export function DraftForm() {
    const form = useForm<Schema>({
        resolver: zodResolver(formSchema as any),
    });
    const formAction = useAction(serverAction, {
        onSuccess: () => {
            // TODO: show success message
            form.reset();
        },
        onError: () => {
            // TODO: show error message
        },
    });
    /* eslint-enable @typescript-eslint/no-explicit-any */
    const handleSubmit = form.handleSubmit(async (data: Schema) => {
        formAction.execute(data);
    });

    const { isExecuting, hasSucceeded } = formAction;
    if (hasSucceeded) {
        return (
            <div className="p-2 sm:p-5 md:p-8 w-full rounded-[4px] gap-2 border">
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, stiffness: 300, damping: 25 }}
                    className="h-full py-6 px-3"
                >
                    <motion.div
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{
                            delay: 0.3,
                            type: "spring",
                            stiffness: 500,
                            damping: 15,
                        }}
                        className="mb-4 flex justify-center border rounded-full w-fit mx-auto p-2"
                    >
                        <Check className="size-8" />
                    </motion.div>
                    <h2 className="text-center text-2xl text-pretty font-bold mb-2">
                        Thank you
                    </h2>
                    <p className="text-center text-lg text-pretty text-muted-foreground">
                        Form submitted successfully, we will get back to you soon
                    </p>
                </motion.div>
            </div>
        );
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="p-2 sm:p-5 md:p-8 w-full rounded-md gap-2 border max-w-3xl mx-auto bg-[#000000]"
        >
            <FieldGroup className="grid md:grid-cols-6 gap-4 mb-6">
                {/* <h2 className="mt-4 mb-1 font-bold text-2xl tracking-tight col-span-full">
                    Contact us
                </h2>
                <p className="tracking-wide text-muted-foreground mb-5 text-wrap text-sm col-span-full">
                    Please fill the form below to contact us
                </p> */}

                <Controller
                    name="name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field
                            data-invalid={fieldState.invalid}
                            className="gap-1 md:col-span-3"
                        >
                            <FieldLabel htmlFor="name" className="text-white">Full Name *</FieldLabel>
                            <Input
                                {...field}
                                id="name"
                                type="text"
                                onChange={(e) => {
                                    field.onChange(e.target.value);
                                }}
                                aria-invalid={fieldState.invalid}
                                placeholder="Enter your name"
                                className="bg-white rounded-[4px] h-[60px]"
                            />

                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />

                <Controller
                    name="Phone Number"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field
                            data-invalid={fieldState.invalid}
                            className="gap-1 md:col-span-3"
                        >
                            <FieldLabel htmlFor="Phone Number" className="text-white">Phone Number *</FieldLabel>
                            <Input
                                {...field}
                                id="Phone Number"
                                type="text"
                                onChange={(e) => {
                                    field.onChange(e.target.value);
                                }}
                                aria-invalid={fieldState.invalid}
                                placeholder="Enter your  Phone Number"
                                className="bg-white rounded-[4px] h-[60px] "
                            />

                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />

                <Controller
                    name="Email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field
                            data-invalid={fieldState.invalid}
                            className="gap-1 col-span-full"
                        >
                            <FieldLabel htmlFor="Email" className="text-white">Email </FieldLabel>
                            <Input
                                {...field}
                                id="Email"
                                type="text"
                                onChange={(e) => {
                                    field.onChange(e.target.value);
                                }}
                                aria-invalid={fieldState.invalid}
                                placeholder="Enter your Email"
                                className="bg-white rounded-[4px] h-[60px] "
                            />

                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />

                <Controller
                    name="message"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field
                            data-invalid={fieldState.invalid}
                            className="gap-1 col-span-full"
                        >
                            <FieldLabel htmlFor="message" className="text-white">Message *</FieldLabel>
                            <Textarea
                                {...field}
                                aria-invalid={fieldState.invalid}
                                id="message"
                                placeholder="Enter your message"
                                className="bg-white rounded-[4px]  h-[164px]"
                            />

                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />
            </FieldGroup>
            <div className="flex  items-center justify-center w-full ">
                <Button className="bg-gradient-to-r from-[#76B828] to-[#C7D300] w-full h-[62px]">{isExecuting ? "Submitting..." : "SUBMIT"}</Button>
            </div>
    
            
        </form>
    );
}
