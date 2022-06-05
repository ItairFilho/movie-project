import api from "./api";

type SignupDTO = {
  email: string;
  password: string;
  name: string;
};

export async function signup(data: SignupDTO) {
  try {
    const result = await api.post("auth/signup", data);
    return result.data;
  } catch (err) {
    console.log(err);
  }
}
