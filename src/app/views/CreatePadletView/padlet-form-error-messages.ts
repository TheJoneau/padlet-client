export class ErrorMessage {

  constructor (
    public forControl: string,
    public text: string
  ) {}

}

  export const BookFormErrorMessages = [
    new ErrorMessage('title', 'Please enter title'),
  ];



