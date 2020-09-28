export type AuthRequestData = {
  login: string;
  password_hash: string;
}

type Products = string[];

export type UserInfo = {
  name: string;
  department: string;
  role: string;
  products: Products;
}

export type StoreState = {
  data: UserInfo;
  logout?: boolean;
};

export type TAction<T> = {
  type: string;
  payload?: Partial<T>;
};

export type TUser = StoreState;
