import axios from "axios";

export const UserInstance = axios.create({
  baseURL: "https://brick-red-hermit-crab-ring.cyclic.app/v1/user",
});

export const NoteInstance = axios.create({
  baseURL: "https://brick-red-hermit-crab-ring.cyclic.app/v1/note",
});
