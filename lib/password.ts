import { compareSync } from "bcrypt";

export default async function checkPassword(password: string, hashPassword: string) {
    const passwordMatch = compareSync(password, hashPassword);
    if (!passwordMatch) {
        return false;
    } else {
        return true;
    }
}