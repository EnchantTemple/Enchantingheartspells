"use server";

import { z } from "zod";

const bookingSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  whatsappNumber: z.string().min(10, { message: "Please enter a valid WhatsApp number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  spellType: z.string().min(1, { message: "Please select a spell type." }),
  targetPerson: z.string().min(2, { message: "Target person's name must be at least 2 characters." }),
  message: z.string().min(10, { message: "Please describe your situation (at least 10 characters)." }),
  terms: z.literal("on", {
    errorMap: () => ({ message: "You must accept the terms and conditions." }),
  }),
});

export type State = {
  errors?: {
    fullName?: string[];
    whatsappNumber?: string[];
    email?: string[];
    spellType?: string[];
    targetPerson?: string[];
    message?: string[];
    terms?: string[];
  };
  message?: string | null;
  success: boolean;
};

export async function bookSpell(prevState: State, formData: FormData) : Promise<State> {
    const validatedFields = bookingSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Booking failed. Please check the form for errors.",
            success: false,
        };
    }
    
    // Here you would typically process the data, e.g., save to a database,
    // handle the file upload, and send emails.
    // For this example, we'll just simulate success.
    
    // console.log("Booking successful with data:", validatedFields.data);
    
    return {
        message: "Booking Sent!",
        success: true,
    };
}
