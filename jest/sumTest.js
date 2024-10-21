// const sum = require("./sum");
// const fetchData = require("./fetchdata");
// module = require("./par");

// test ('adds 1+2 to equal 3', () => {
//     expect(sum(1,2)).toBe(3);
// });

// test ('verify if a number is par', () => {
//     expect(module.isPar(2)).toBe(true);
// });


// // using matchers

// test ('atribuição de objeto', () => {
//     const data = {one: 1};
//     data ['two'] = 2;
//     expect(data).toEqual({one: 1, two: 2});
// });

// test ('add positive numbers != 0', () => {
//     for (let i = 1; i < 10; i++) {
//         for (let j = 1; j < 10; j++) {
//             expect(i+j).not.toBe(0);
//         }
//     }
// });

// test ('null', () => {
//     const n = null;
//     expect(n).toBeNull();
//     expect(n).toBeDefined();
//     expect(n).not.toBeUndefined();
//     expect(n).not.toBeTruthy();
//     expect(n).toBeFalsy();
// })

// test ('zero', () => {
//     const n = 0;
//     expect(n).not.toBeNull();
//     expect(n).toBeDefined();
//     expect(n).not.toBeUndefined();
//     expect(n).not.toBeTruthy();
//     expect(n).toBeFalsy();
// })


// //regex with toMatch
// test ('christoph contains "stop', () => {
//     expect("Christoph").toMatch(/stop/);
// })

// // verify item in array with toContain 

// const names = [
//     'guilherme',
//     'caio',
//     'joao',
//     'pedro'
// ];

// test ('names contais caio', () => {
//     expect(names).toContain("caio");
// });


// // exceptions 

// function throwError() {
//     throw new Error('ERROR');
// }

// test ('expect error', () => {
//     expect(() => throwError()).toThrow();
//     expect(() => throwError()).toThrow(Error);
// })

// // assync 

// // test ('the data is async', async () => {
// //     const data = await fetchData();
// //     expect(data).toBe("async");
// // });

// // test ('the data is async', async () => {
// //     await expect(fetchData()).resolves.toBe('async');
// // });

// // test ('the fetch fails', async () => {
// //     await expect(fetchData()).rejects.toMatch('error');
// // });


// // callback

// test ('the data is callback', done => {
//     function callback(error,data) {
//         if(error) {
//             done(error);
//             return;
//         }
//         try {
//             expect(data).toBe('callback');
//             done();
//         } catch (error) {
//             done(error);
//         }
//     }

//     fetchData(callback);
// });