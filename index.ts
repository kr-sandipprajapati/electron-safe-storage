import { safeStorage } from "electron";
const { getSelectedStorageBackend } = safeStorage;

export {
    safeStorage,
    getSelectedStorageBackend,
}
