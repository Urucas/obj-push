import push from '../lib/';

describe("obj-push instance test", () => {

  it("should push an object with one key", (done) => {
    let foo = {'foo':'bar'};
    let bar = {'bar':'foo'};

    foo.push(bar);
    if(foo.bar != bar.bar)
      throw new Error("Fail to add object, "+JSON.stringify(foo));
    done();
  });

  it("should push an object with multiple keys", (done) => {
    let foo = {'foo':'bar'};
    let bar = {'bar':'foo','foo':'foo','bor':'off'};
    
    foo.push(bar);
    if(foo.bar != bar.bar || foo.foo != bar.foo || foo.bor != bar.bor)
      throw new Error("Fail to add object, "+JSON.stringify(foo));
    done();
  });
   
});
