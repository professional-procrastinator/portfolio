export default interface IResponse {
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
}
