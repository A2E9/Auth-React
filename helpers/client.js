import { createClient } from "altogic";

const altogic = createClient(
  process.env.NEXT_PUBLIC_ALTOGIC_ENV_URL,
  process.env.NEXT_PUBLIC_ALTOGIC_CLIENT_KEY,
  {
    signInRedirect: "/auth/register",
  }
);

// altogic.auth.signUpWithEmail("rei.vl@gmail.com", "password", "username");

export default altogic;
