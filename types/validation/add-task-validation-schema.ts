import zod from "zod";

export const AddTaskSchema = zod.object({
  description: zod.string(),
  dueDate: zod.date().min(new Date(), "Due date cannot be in the past"),
  name: zod.string().min(1, "Task name is required"),
});

export type AddTaskFields = zod.infer<typeof AddTaskSchema>;
