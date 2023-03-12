import { invoke } from "@tauri-apps/api";
import { createResource, createSignal } from "solid-js";

// FUCK YEAH SOLID!! NO INFINITE LOOPS IN MY COMPONENTS!!!
export const [rwd, { mutate, refetch }] = createResource(
  async () => await invoke("rust_pwd")
);
