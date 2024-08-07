export default function createEmployeesObject(departmentName, employees) {
/*
departmentName (String)
employees (Array of Strings)
The function should return an object with the following format:
{
  $departmentName: [
    $employees,
  ],
}
*/
  const dict = {};
  dict[`${departmentName}`] = employees;
  return dict;
}
