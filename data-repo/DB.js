

const _db = {};




export const findOne = k => _db[k];

export const exists = k => _db[k] !== null;

export const save = data => { 
    const key = data?.email;
    _db = {key: data, ...Object.entries(_db)}
    
    return data;

}