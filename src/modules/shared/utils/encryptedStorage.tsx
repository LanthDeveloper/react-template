import CryptoJS from "crypto-js";

const ENCRYPTION_KEY = "b86330f0-0595-4376-8b44-77106bbc7466";

const encrypt = (data: any) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), ENCRYPTION_KEY).toString();
};

const decrypt = (encryptedData: any) => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, ENCRYPTION_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (error) {
    console.error("Error decrypting data:", error);
    return null;
  }
};

export const encryptedStorage = {
  getItem: (name: any) => {
    const encryptedData = localStorage.getItem(name);
    if (!encryptedData) return null;
    return decrypt(encryptedData);
  },
  setItem: (name: any, value: any) => {
    const encryptedData = encrypt(value);
    localStorage.setItem(name, encryptedData);
  },
  removeItem: (name: any) => {
    localStorage.removeItem(name);
  },
};
