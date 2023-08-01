import { defineStore } from "pinia";

export const useLike = defineStore({
  id: "like",
  state: () => ({
    likes: [],
  }),
});
