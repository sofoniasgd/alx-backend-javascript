export default function getListStudents(trueOrFalse) {
  // create objects
  const ob1 = {
    id: 1,
    firstName: "Guillaume",
    location: "San Francisco"
  };
  const ob2 = {
    id: 2,
    firstName: "James",
    location: "Columbia"
  };
  const ob3 = {
    id: 5,
    firstName: "Serena",
    location: "San Francisco"
  };
  // creaate list of objects
  const list = [ob1, ob2, ob3];
  // console.log(list);
  return list;
}
