export default function push(obj, obj1) {
  if(!obj1) return obj;
  let keys = Object.keys(obj1);
  for(let i in keys) {
    let key = keys[i]
    obj[key] = obj1[key];
  }
  return obj;
}
