export default function push(obj, obj1) {
  if(!obj1) return obj;
  let key = Object.keys(obj1)[0];
  if(key != undefined) obj[key] = obj1;
  return obj;
}
