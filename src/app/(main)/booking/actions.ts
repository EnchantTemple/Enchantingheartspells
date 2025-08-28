"use server";

import { z } from "zod";

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const bookingSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  whatsappNumber: z.string().min(10, { message: "Please enter a valid WhatsApp number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  spellType: z.string().min(1, { message: "Please select a spell type." }),
  targetPerson: z.string().min(2, { message: "Target person's name must be at least 2 characters." }),
  message: z.string().min(10, { message: "Please describe your situation (at least 10 characters)." }),
  photo: z.any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ).optional().or(z.literal("")),
  terms: z.boolean().refine(val => val, { message: "You must accept the terms and conditions." }),
});

export type State = {
  errors?: {
    fullName?: string[];
    whatsappNumber?: string[];
    email?: string[];
    spellType?: string[];
    targetPerson?: string[];
    message?: string[];
    photo?: string[];
    terms?: string[];
  };
  message?: string | null;
  success: boolean;
};

export async function bookSpell(prevState: State, formData: FormData) : Promise<State> {
    const validatedFields = bookingSchema.safeParse({
        fullName: formData.get("fullName"),
        whatsappNumber: formData.get("whatsappNumber"),
        email: formData.get("email"),
        spellType: formData.get("spellType"),
        targetPerson: formData.get("targetPerson"),
        message: formData.get("message"),
        photo: formData.get("photo"),
        terms: formData.get("terms") === 'on',
    });

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
