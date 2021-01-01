import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type datesEmployees {
    _id: String,
    name: String,
    salary: Float,
    position: String
  }
  input inputType {
    name: String,
    salary: Float,
    position: String
  }
  input inputRemove {
    _id: String,
    name: String,
    salary: Float,
    position: String
  }
  type Query {
    getEmp(input: inputType): [datesEmployees]
  }
  type Mutation {
    saveEmp(input: inputType): datesEmployees
    removeEmp(input: inputRemove): datesEmployees
  }
`;