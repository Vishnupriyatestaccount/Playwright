function getToken(){
 return Promise.resolve('token');
}

async function run(){
    let token=await getToken();
    console.log(token);
}

run();