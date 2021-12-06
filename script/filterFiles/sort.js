let selectType = "Name";

const getSortType =() =>{
    let nameOrRate = document.getElementById("nameOrRate").value; 
    selectType = nameOrRate;
}

const sort = (data, sortType,selectType) =>{
    if(selectType ==="Name"){
        if(sortType ==='ascending'){
            data.sort(function(a,b){return a.title < b.title ? -1 : 1});
            return data
        } else {
            data.sort(function(a,b){return a.title < b.title ? 1: -1});
            return data
        }
    } else {
        if(sortType === 'ascending'){
            data.sort(function(a, b) {
                return a.rating - b.rating
            });
            return data;
        } else {
            data.sort(function(a, b) {
                return b.rating - a.rating
            });
            return data;
        }
    }
}