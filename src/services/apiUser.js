import supabase from "./supabase";

export async function login(email, password) {
  const {
    data: { user, session },
    error,
  } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  console.log(JSON.stringify(error));
  return { user, session, error };
}

export async function logout() {
  await supabase.auth.signOut();
}
