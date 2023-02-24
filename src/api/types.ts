export interface APIResponse {
  message: string;
  status: string;
  success: boolean;
  data: any | undefined;
  errors: string[] | undefined;
}
