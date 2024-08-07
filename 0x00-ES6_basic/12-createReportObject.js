export default function createReportObject(employeesList) {
  const object = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      const countArray = Object.keys(employeesList);
      return countArray.length;
    },
  };
  return object;
}
