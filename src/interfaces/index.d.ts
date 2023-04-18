export interface IOrderChart {
  count: number;
  status:
    | "waiting"
    | "ready"
    | "on the way"
    | "delivered"
    | "could not be delivered";
}

export interface IOrderTotalCount {
  total: number;
  totalDelivered: number;
}

export interface ISalesChart {
  date: string;
  title: "Order Count" | "Order Amount";
  value: number;
}

export interface IOrderStatus {
  id: number;
  text: "Pending" | "Ready" | "On The Way" | "Delivered" | "Cancelled";
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  gender: string;
  gsm: string;
  createdAt: string;
  isActive: boolean;
  avatar: IFile[];
  addresses: IAddress[];
}

export interface IIdentity {
  id: number;
  name: string;
  avatar: string;
}

export interface IAddress {
  text: string;
  coordinate: [string, string];
}

export interface IFile {
  name: string;
  percent: number;
  size: number;
  status: "error" | "success" | "done" | "uploading" | "removed";
  type: string;
  uid: string;
  url: string;
}

export interface IEvent {
  date: string;
  status: string;
}

export interface IStore {
  id: number;
  gsm: string;
  email: string;
  title: string;
  isActive: boolean;
  createdAt: string;
  address: IAddress;
  products: IPosts[];
}

export interface ICourier {
  id: number;
  name: string;
  surname: string;
  email: string;
  gender: string;
  gsm: string;
  createdAt: string;
  accountNumber: string;
  licensePlate: string;
  address: string;
  avatar: IFile[];
  store: IStore;
}
export interface IOrder {
  id: number;
  user: IUser;
  createdAt: string;
  products: IPosts[];
  status: IOrderStatus;
  adress: IAddress;
  store: IStore;
  courier: ICourier;
  events: IEvent[];
  orderNumber: number;
  amount: number;
}

export interface IPosts {
  id: string;
  createdAt: string;
  title: string;
  description: string;
  image: string;
  id_post_category: IPostCategory;
  id_service_category: IServiceCategory;
  featured: boolean;
}

export interface IPostCategory {
  id: string;
  description: string;
  createdAt: string;
}

export interface IServiceCategory {
  id: string;
  title: string;
  createdAt: string;
}

export interface IOrderFilterVariables {
  q?: string;
  store?: string;
  user?: string;
  status?: string[];
}

export interface IUserFilterVariables {
  q: string;
  status: boolean;
  gender: string;
  isActive: boolean | string;
}

export interface ICourier {
  id: number;
  name: string;
  surname: string;
  gender: string;
  gsm: string;
  createdAt: string;
  isActive: boolean;
  avatar: IFile[];
}

export interface IReview {
  id: number;
  order: IOrder;
  user: IUser;
  star: number;
  createDate: string;
  status: "pending" | "approved" | "rejected";
  comment: string[];
}
