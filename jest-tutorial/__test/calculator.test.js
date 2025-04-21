const mathOperation=require('../calculator');


//describe ->collection of similar tests
describe("calculator tests",()=>{
     test("adding 1 and 2 sholud return 3",()=>{
        expect(mathOperation.sum(1,2)).toBe(5);
        expect(mathOperation.diff(1,2)).not.toBe(5);
     });

     test("subtract",()=>{
        expect(mathOperation.diff(10,2)).toBe(8);
     });
})

describe("cs",()=>{
    test("adding 1 and 2 sholud return 3",()=>{
       expect(mathOperation.sum(1,2)).toBe(3);
       expect(mathOperation.diff(1,2)).not.toBe(456);
    });

    test("subtract",()=>{
       expect(mathOperation.diff(10,2)).not.toBe(853456);
    });
})

