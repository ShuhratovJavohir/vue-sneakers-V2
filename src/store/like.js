import { defineStore } from "pinia";

export const useLikeStore = defineStore("like", {
  state: () => ({ items: [] }),
	actions: {
		addLike(item){
			const find = this.items.find((el) => el.id === item.id)

			if(find){
				item.inLike = false
				this.items = this.items.filter((el) => el.id !== item.id)
			}else{
				item.inLike = true
				this.items.push(item)
			}
		}
	}
});
