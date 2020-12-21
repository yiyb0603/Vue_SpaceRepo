export interface ISuccessTypes {
  status: number;
  message: string;
};

export interface IErrorTypes {
  response: {
    data: {
      status: number;
      message: string;
    };
  };
};