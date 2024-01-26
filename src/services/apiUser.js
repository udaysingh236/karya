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
  return { user, session, error };
}

export async function loginWithGit() {
  await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo:
        import.meta.env.VITE_LOGIN_REDIRECT ??
        "https://mykarya.netlify.app/login/updatePassword",
    },
  });
}

export async function loginWithGoogle() {
  await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo:
        import.meta.env.VITE_LOGIN_REDIRECT ??
        "https://mykarya.netlify.app/login/updatePassword",
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });
}

export async function forgetPassword(email) {
  await supabase.auth.resetPasswordForEmail(email, {
    redirectTo:
      import.meta.env.VITE_UPDATE_PASS_REDIRECT ??
      "https://mykarya.netlify.app/login/updatePassword",
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
