import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const diaries = writable([]);
// export const users = writable([]);
// export const acticeUser = writable(null);

if (browser) {
  const _diaries =
    localStorage.getItem("diaries") && localStorage.getItem("diaries") != "null"
      ? JSON.parse(localStorage.getItem("diaries"))
      : [];

  if (_diaries && _diaries.length > 0) {
    diaries.set(_diaries);
  }

  diaries.subscribe(value => {
    localStorage.setItem("diaries", JSON.stringify(value));
  });
}

export default {
  diaries,
};
