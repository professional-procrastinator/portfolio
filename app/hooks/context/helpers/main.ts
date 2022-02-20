import axios from '../../../utils/axios';

export const updateUserTheme = async (theme: string) => {
  const { data } = await axios.post('/me/theme', { theme });

  return data;
};

export const getUserTheme = async () => {
  const { data } = await axios.get('/me');

  return data;
};

/*User*/

type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  theme: string;
  method: string;
  picture: string;
  createdAt: Date;
  updatedAt: Date;
};
export type IUser = Partial<User>;

export const getUserData = async () => {
  const { data } = await axios.get('/me');

  return data;
};
