import { saveEmployee, getEmployees, removeEmployee } from '../mongodb/models';
import { propsEmployees } from '../types/types';


export const resolvers = {
    Query: {
        getEmp: (_: any, args: propsEmployees) => getEmployees(args)
    },
    Mutation: {
        saveEmp: (_: any, args: propsEmployees) => saveEmployee(args),
        removeEmp: (_: any, args: propsEmployees) => removeEmployee(args)
    }
};