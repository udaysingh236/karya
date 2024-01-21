import supabase from "./supabase";

export async function login(email, password) {
  const {
    data: { user, session },
  } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return { user, session };
}

export async function logout() {
  await supabase.auth.signOut();
}
