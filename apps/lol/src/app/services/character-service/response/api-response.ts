export interface ApiResponse<T> {
  type: string;
  format: string;
  version: string;
  data: {
    [key: string]: T
  };
}
