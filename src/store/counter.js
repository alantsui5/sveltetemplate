import { writable } from 'svelte/store';

export const count = writable(0)

export function add(){
    count.update(n => n + 1)
}

export function minus(){
    count.update(n => n - 1)
}