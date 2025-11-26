"use client";

import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Card, CardTitle, CardContent, CardHeader } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

const todos = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish the project proposal" },
  { id: 3, todo: "Schedule a dentist appointment" },
  { id: 4, todo: "Walk the dog" },
  { id: 5, todo: "Pay the electricity bill" },
  { id: 6, todo: "Water the plants" },
  { id: 7, todo: "Reply to important emails" },
  { id: 8, todo: "Go for a 30-minute run" },
  { id: 9, todo: "Read one chapter of a book" },
  { id: 10, todo: "Plan the weekend menu" },
];

export default function TodoList() {
  const [date, setDate] = useState<Date>(new Date());
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Todo List</CardTitle>
      </CardHeader>

      <CardContent>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button className="w-full mb-4">
              <CalendarIcon />
              {date ? format(date, "PPP") : <span>Select a date.</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 w-auto border-0 bg-none">
            <Calendar
              required
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border shadow-sm"
              captionLayout='dropdown'
            />
          </PopoverContent>
        </Popover>

        <ScrollArea className="">
          <div className="flex flex-col gap-4 max-h-[400px]">
            {todos.map(({ todo, id }) => (
              <Label
                key={`todo-${id}`}
                className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950"
              >
                <Checkbox
                  id={`todo-${id}`}
                  className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                />

                <p className="text-muted-foreground text-sm line-clamp-2 font-normal">
                  {todo}
                </p>
              </Label>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
