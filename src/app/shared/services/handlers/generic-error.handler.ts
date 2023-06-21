import { HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';

export function handleError(error: HttpErrorResponse): Observable<never> {
  // Log or handle the error as per your application's needs
  console.error('An error occurred:', error);
  // Return an observable with a user-friendly error message
  return throwError('Something went wrong. Please try again later.');
}
