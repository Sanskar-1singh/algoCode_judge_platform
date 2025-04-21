//before each and after each
//before all and after all

//HOOKS>>>>

const mathOperation=require('../calculator');

describe("test",()=>{
    var inp1=0;
    var inp2=0

    beforeEach(()=>{
        console.log("before rach is called");
    })
    beforeAll(()=>{
        console.log("before all is called");
    })
    afterAll(()=>{
        console.log("after all is called");
    })
    afterEach(()=>{
        console.log("aftereach is called");
    })

    test("add",()=>{
        expect(mathOperation.sum(1,2)).toBe(3);
    })

    test("diff",()=>{
        expect(mathOperation.diff(2,3)).toBe(-1);
    })
})