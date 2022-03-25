import { createStore } from "vuex";
import axios from 'axios'
import router from './router'

const store = createStore({
	state: {
		token: "",
		products: []
	},
	getters: {
		productSend(state) {
			return state.products
		}

	},
	mutations: {
		uptadeToken(state, payload) {
			state.token = payload;
		},
		uptadeProducts(state, payLoad) {
			state.products.push(payLoad);
		}
	},
	actions: {
		sendData({ commit }, comingData) {
			let api = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";

			if (comingData.show) {
				api = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
			}

			axios.post(api + "AIzaSyAcvxK2L_JNG6tQA_rJDL_81VZ_IZdF22E", {
				email: comingData.email,
				password: comingData.password,
				returnSecureToken: true,
			}).then(response => {
				let gelenToken = response.data.idToken;
				commit('uptadeToken', gelenToken);
				router.replace('/');
			}).catch(() => {
				console.log("Xəta baş verdi.");
			});
		},
		sendDataTwo({ commit }, commingDataTwo) {
			axios.post('https://tapaz-67211-default-rtdb.firebaseio.com/products.json', commingDataTwo)
				.then(response => {
					commit('uptadeProducts', commingDataTwo);
					router.replace('/');
				})
		}
	}
});

export default store