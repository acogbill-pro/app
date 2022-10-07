import { defineStore } from 'pinia'

export const useInViewStore = defineStore('InViewStore', {
	state: () => ({
		intervalCount: 1,
	}),
	actions: {
		setFrequency(withFrequency) {
			this.intervalCount = 1
		},
	},
	getters: {
		currentInterval(state) {
            return state.intervalCount
        },
		plansForLine: (state) => (arg) => {
            // return state.plansPerLineMap
			return 1
		}
	},
})