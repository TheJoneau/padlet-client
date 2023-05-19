import {Entry} from "./Entry";
import {User} from "./User";

export class Padlet {
  constructor(
    public id : number,
    public title : string,
    public creator_id : number,
    public created_at : Date,
    public updated_at : Date,
    public entries : Entry[],
    public users: User[],
    public creator: User,
    public is_public : boolean
  ) {}
}
