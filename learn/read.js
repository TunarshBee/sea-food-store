function searchValue(str){
    let load = require('./sampledata.json')
    console.log(load);
    let newArr = load.employees.employee.filter(x=>x.firstName.includes(str))
    return newArr;
}
console.log(searchValue("Sc"));
