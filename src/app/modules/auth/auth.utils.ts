import config from "../../../config";
import bcrypt from "bcrypt";

export const hashingPassword = async (password: string): Promise<string> => {
  const saltRounds = Number(config.bcrypt_salt_rounds); // You need to define your salt rounds from your configuration
  return await bcrypt.hash(password, saltRounds);
};
