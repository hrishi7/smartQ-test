import CryptoJS from "crypto-js";
import UNIVERSAL from "../../config/config";

export const encryptData = (data) =>
  CryptoJS.AES.encrypt(
    JSON.stringify(data),
    UNIVERSAL.ENCRYPTION_KEY
  ).toString();

export const decryptData = (data) =>
  JSON.parse(
    CryptoJS.AES.decrypt(data, UNIVERSAL.ENCRYPTION_KEY).toString(
      CryptoJS.enc.Utf8
    )
  );
