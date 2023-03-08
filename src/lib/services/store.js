import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const diaries = writable([]);
export const users = writable([]);
export const activeUser = writable(null);

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

  const _users =
    localStorage.getItem("users") && localStorage.getItem("users") != "null"
      ? JSON.parse(localStorage.getItem("users"))
      : [];

  if (_users && _users.length > 0) {
    users.set(_users);
  }

  users.subscribe(value => {
    localStorage.setItem("users", JSON.stringify(value));
  });

  const _activeUser =
    localStorage.getItem("activeUser") &&
    localStorage.getItem("activeUser") != "null"
      ? JSON.parse(localStorage.getItem("activeUser"))
      : null;

  if (_activeUser && _activeUser.length > 0) {
    activeUser.set(_activeUser);
  }

  activeUser.subscribe(value => {
    localStorage.setItem("activeUser", JSON.stringify(value));
  });
}

export default {
  diaries,
  users,
  activeUser,
};
