"use strict"


//トゥートする
export const toot = (M, string)=>new Promise((resolve, reject)=>{
    M.post('statuses', {status:string},
        (err,data,res)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
    })
})
    
