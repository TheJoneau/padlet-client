export class User {
  constructor(
    public id : number,
    public firstname : string,
    public lastname : string,
    public created_at : Date,
    public updated_at : Date,
    public email : string,
    public picture_url : string
  ) {}
}
