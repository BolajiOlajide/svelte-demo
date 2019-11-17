import { writable } from 'svelte/store';

export const randomStore = writable(Math.random())
