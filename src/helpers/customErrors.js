class ErrorWithCode extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, ErrorWithCode);
      }
    }
  }
  
export default ErrorWithCode;
