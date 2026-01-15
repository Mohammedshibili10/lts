import * as z from "zod";
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ActionResponse<T = any> {
    success: boolean;
    message: string;
    errors?: {
        [K in keyof T]?: string[];
    };
    inputs?: T;
}
/* eslint-enable @typescript-eslint/no-explicit-any */
export const formSchema = z.object({
    name: z.string({ error: "This field is required" }),
    "Phone Number": z.email({ error: "Please enter a valid email" }),
    Email: z.string({ error: "This field is required" }).optional(),
    message: z.string({ error: "This field is required" }),
});
