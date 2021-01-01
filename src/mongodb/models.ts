import Employees from './schemas/employees';
import { datesEmployees, propsEmployees } from '../types/types'


export const getEmployees = async ({ input }: propsEmployees): Promise<datesEmployees[]> => Employees.find(input)

export const saveEmployee = async ({ input }: propsEmployees): Promise<datesEmployees> => {
    const employees = new Employees(input);
    return await employees.save();
}

export const removeEmployee = async ({ input }: propsEmployees): Promise<datesEmployees | null> => await Employees.findOneAndRemove(input)