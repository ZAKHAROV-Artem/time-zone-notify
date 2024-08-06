import zod from "zod";

export const AddTaskSchema = zod.object({
  category: zod.string().min(1, "Required"),
  description: zod.string().min(1, "Required"),
  dueDate: zod.date().min(new Date(), "Required"),
  name: zod.string().min(1, "Required"),
});

export type AddTaskFields = zod.infer<typeof AddTaskSchema>;
