import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { Button } from "./ui/button";

import { Edit } from "lucide-react";

import { z } from "zod";

const formSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be greather than 3 characters" })
    .max(50),
  email: z.email({message: 'Invalid email address'}),
  phone: z.string().min(10).max(15),
  location: z.string().min(2),
  role: z.enum(['admin', 'user'])
});

export default function EditUser() {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Are you absolutely sure?</SheetTitle>
        <SheetDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
}
