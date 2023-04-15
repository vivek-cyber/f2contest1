let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    let newPDbm = arr.map(function(item){
        if(arr.item.profession=="developer")
        {
        return `${item(0)}` ;
        }
   });
   console.log(newPDbm)
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
  }
  
  function addData() {
    //Write your code here, just console.log
    arr.push({id:4,name:"susan",age:"20",profession:"intern"})
    console.log(arr[3])
  }
  
  function removeAdmin() {
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i].profession=="admin")
        {
            arr.splice(i,1)
        }
    }
    console.log(arr)
  }
  
  function concatenateArray() {
    let arr2=[]
    for(let i=0;i<arr.length;i++)
    {
        arr2[i]=arr[i];
    }
    console.log(arr2)
  }


  