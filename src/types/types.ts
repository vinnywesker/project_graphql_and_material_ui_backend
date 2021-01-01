import { Document } from "mongoose"

export interface datesEmployees extends Document {
    name: string,
    salary: number,
    position: string
}

export interface propsAndInput {
    _id?: string;
    name: string,
    salary: number,
    position: string
}

export interface propsEmployees {
    input: propsAndInput
}