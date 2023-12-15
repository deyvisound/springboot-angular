import { Deserializable } from "./deserializable.model";

export class User implements Deserializable {

    id!: number;
    name!: string;
    email!: string;
    password!: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}