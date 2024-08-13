export default function getListStudentIds(objectList) {
  // use map() function to create new array
  // using id data of objects in argument
  if (!Array.isArray(objectList)) {
    return ([]);
  }
  const idList = objectList.map((x) => x.id);
  return idList;
}
