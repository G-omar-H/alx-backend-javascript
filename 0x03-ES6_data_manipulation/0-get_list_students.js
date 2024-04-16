export default function getListStudents() {
  const res = [];
  const obj1 = { id: 1, firstName: 'Guillaume', location: 'San Francisco' };
  res.push(obj1);
  const obj2 = { id: 2, firstName: 'James', location: 'Columbia' };
  res.push(obj2);
  const obj3 = { id: 5, firstName: 'Serena', location: 'San Francisco' };
  res.push(obj3);

  return res;
}
