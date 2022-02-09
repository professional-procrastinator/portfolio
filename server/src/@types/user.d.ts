type Method = "password" | "google";
export default interface IUser {
  name: string;
  email: string;
  password: string;
  picture?: string;
  method: Method;
}
