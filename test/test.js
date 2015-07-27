import push from '../lib/';

describe("obj-push instance test", () => {

  it("should add an object", (done) => {
    let foo = {'foo':'bar'};
    let bar = {'bar':'foo'};

    foo = push(foo, bar);
    if(foo.bar != bar)
      throw new Error("Fail to add object, "+JSON.stringify(foo));
    done();
  });
    
});
