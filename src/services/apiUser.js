import supabase from "./supabase";

export async function signUpUser(email, password, userName) {
  await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        name: userName,
        displayName: userName,
      },
    },
  });
}

export async function login(email, password) {
  const {
    data: { user, session },
    error,
  } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  console.log("Login error api" + JSON.stringify(error));
  return { user, session, error };
}

export async function loginWithGit() {
  await supabase.auth.signInWithOAuth({
    provider: "github",
  });
}

export async function loginWithGoogle() {
  await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });
}

export async function forgetPassword(email) {
  await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: import.meta.env.VITE_UPDATE_PASS_REDIRECT,
  });
}

export async function updatePassword(pass) {
  await supabase.auth.updateUser({
    password: pass,
  });
}

export async function logout() {
  await supabase.auth.signOut();
}
