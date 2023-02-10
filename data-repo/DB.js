const _db = {};

exports.findOne = k => _db[k];

exports.exists = k => _db[k] != null;

exports.save = data => { 
    const key = data?.email;
    const id = (Object.keys(_db).length) + 1; // create the length of the list of the keys
    data.id = id;
    _db[key] = data;
    return data;
}

exports.findById = id => {
    const found = Object.values(_db ).filter(v=>v.id == id);
    
    if(isEmpty(found)) throw new Error('No user with id found');
    
    // console.log('after filter', found);
    
    return found[0];
    
}

exports.findAll = user => {
  const found = Object.values(_db );
  
  if(isEmpty(found)) throw new Error('No user with id found');

  return found

}

function isEmpty(col){
    return col == null || col == undefined || col.length <= 0;
}