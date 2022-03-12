let a={
    "_id":'12334',
    "name":"krishna",
    "emp_id":1234,
    "age":26,
    "loc":"BLR"
}
const db="Employee";

db.collection("empl").insert(a)