type StorageKeys = 'language';

class StorageController {
  private static readonly keys: Record<StorageKeys, string> = {
    language: 'P.AI@LANGUAGE',
  };

  static set(
    key: StorageKeys,
    data: any,
    persistAfterSession: boolean = true,
  ): void {
    const storage = persistAfterSession ? localStorage : sessionStorage;
    storage?.setItem(StorageController.keys[key], data);
  }

  static setJSON(
    key: StorageKeys,
    data: any,
    persistAfterSession: boolean = true,
  ): void {
    data = JSON.stringify(data);
    const storage = persistAfterSession ? localStorage : sessionStorage;
    storage?.setItem(StorageController.keys[key], data);
  }

  static get<T = unknown>(
    key: StorageKeys,
    persistAfterSession: boolean = true,
  ): undefined | T {
    const storage = persistAfterSession ? localStorage : sessionStorage;
    let data: string | null | T = storage?.getItem(StorageController.keys[key]);
    if (!data || data === null) return undefined;
    return data as T;
  }

  static getJSON<T = unknown>(
    key: StorageKeys,
    persistAfterSession: boolean = true,
  ): undefined | T {
    const storage = persistAfterSession ? localStorage : sessionStorage;
    let data: string | null | T = storage?.getItem(StorageController.keys[key]);
    if (!data || data === null) return undefined;
    data = JSON.parse(data) as T;
    return data;
  }

  static clear(): void {
    localStorage.clear();
    sessionStorage.clear();
  }
}

export default StorageController;
