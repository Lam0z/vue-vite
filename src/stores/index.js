import { defineStore } from "pinia";

export const useStore = defineStore("store", {
    state: () => ({
        hello: "Hello from 🍍",
    }),
    getters: {
        getSomeLengt() {
            this.hello.length;
        },
    },
    actions: {
        changeHelloText(newText) {
            this.hello = newText;
        },
    },
});
