import { writable } from "svelte/store";
import { persisted } from "svelte-local-storage-store";

export const myUser = writable({});
export const token = persisted("token", null, {
	storage: "session", // 'session' for sessionStorage, defaults to 'local'
});
