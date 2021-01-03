
class ApiError {
  error: string;

  constructor(error: string) {
    this.error = error;
  }
}

export const NotFound = new ApiError('Not found');
export const Unknown = new ApiError('And unexpected error occured');
