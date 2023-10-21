import type { AstroGlobal } from "astro";

import type { ResponseUser } from "@/types/auth";
import { currentUser } from "@/stores/auth";

export function setUser<T extends ResponseUser>(astro: AstroGlobal, result: T) {
  astro.cookies.set("token", result.user.token, { httpOnly: true });

  currentUser.set(result);
}
