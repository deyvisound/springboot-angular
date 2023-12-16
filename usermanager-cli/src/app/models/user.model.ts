import { Deserializable } from "./deserializable.model";

export class User implements Deserializable {

    id!: string;
    name!: string;
    email!: string;
    password!: string;
    passwordConfirm!: string;
   
    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}