//fetchData com async

// const fetchData = async () => {
//     let fetchFail = false ;
//     return new Promise ((resolve, reject) => {
//         if (!fetchFail) {
//             resolve('callback');
//         } else {
//             reject('error: fetch was rejected');
//         }
//     });
// }


//fetchData com callback

const fetchData = (callback) => {
    setTimeout(() => {
        callback(null,"opaa");
    }, 3000);
};


module.exports = fetchData;