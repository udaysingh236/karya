import supabase from "./supabase";

export async function getAllTasks() {
  let { data } = await supabase
    .from("todo")
    .select("*")
    .order("task_date", { ascending: false });
  return data;
}

export async function getUpcomingOpenTasks() {
  const currDate = new Date().toISOString().split("T")[0];
  const { data } = await supabase
    .from("todo")
    .select("*")
    .or(
      `and(every_day_task.eq.true,is_open.eq.true),and(task_date.eq.${currDate},is_open.eq.true)`,
    );
  return data;
}

export async function insertTaskInDb(task) {
  await supabase.from("todo").insert([task]);
}

export async function updateTaskInDb(task, id) {
  await supabase.from("todo").update(task).eq("id", id);
}

export async function markTaskDone(id) {
  await supabase.from("todo").update({ is_open: false }).eq("id", id);
}

export async function openTask(id) {
  await supabase.from("todo").update({ is_open: true }).eq("id", id);
}

export async function deleteTask(id) {
  await supabase.from("todo").delete().eq("id", id);
}
