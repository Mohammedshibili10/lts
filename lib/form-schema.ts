import * as z from "zod";

export interface ActionResponse<T = any> {
    success: boolean;
    message: string;
    errors?: {
        [K in keyof T]?: string[];
    };
    inputs?: T;
}
export const formSchema = z.object({
    name: z.string({ error: "This field is required" }),
    "Phone Number": z.email({ error: "Please enter a valid email" }),
    Email: z.string({ error: "This field is required" }).optional(),
    message: z.string({ error: "This field is required" }),
});
