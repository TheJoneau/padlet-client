import {User} from "./User";

export class Entry {
  constructor(
    public id : number,
    public created_at : Date,
    public updated_at : Date,
    public title : string,
    public text : string,
    public padlet_id : string,
    public creator_id : string,
    public creator : User,
  ) {}
}
