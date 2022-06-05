import api from "./api";

type SignupDTO = {
  email: string;
  password: string;
  name: string;
};

export async function getUserMe() {
  try {
    const { data } = await api.get("/users/me");
    console.log(data);
    // localStorage.setItem("user", result.data.access_token);
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function signup(data: SignupDTO) {
  try {
    const result = await api.post("auth/signup", data);
    return result.data;
  } catch (err) {
    console.log(err);
  }
}
export async function signin(data: { email: string; password: string }) {
  try {
    const result = await api.post("auth/signin", data);
    localStorage.setItem("token", result.data.access_token);
    const response = await getUserMe();
    localStorage.setItem("user", JSON.stringify(response));
    return result.data;
  } catch (err) {
    console.log(err);
  }
}
