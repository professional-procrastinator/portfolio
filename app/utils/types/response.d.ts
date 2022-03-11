type Response = {
  success: boolean;
  message: string;
  error?: {
    code: number;
    details: string;
  };
  response?: {
    data: any;
    timestamp: number;
  };
};

export default Response;
