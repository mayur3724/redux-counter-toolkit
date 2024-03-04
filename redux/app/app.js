import store from "./redux/app/store.js";
import { incerase, decrease, reset } from "./redux/features/counter/counterSlice.js";

console.log("initalState",store.getState());

store.dispatch(incerase());
console.log("after increase", store.getState());


store.dispatch(incerase());
console.log("After increase", store.getState());

store.dispatch(decrease());
console.log("after decrease", store.getState());

store.dispatch(reset());
console.log("after reset", store.getState());


