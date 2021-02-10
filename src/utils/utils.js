import namor from 'namor'


const newPerson = () => {
  const statusChance = Math.random()
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? 'relationship'
        : statusChance > 0.33
        ? 'complicated'
        : 'single',
  }
}

const newBusiness = () => {
  const statusChance = Math.random()
  return {
    name: namor.generate({ words: 1, numbers: 0 }),
    turnover: Math.floor(Math.random() * 100),
    budget: Math.floor(Math.random() * 100),
  }
}

const newAddress = () => {
  const statusChance = Math.random()
  return {
    pincode: namor.generate({ words: 1, numbers: 0 }),
    city: Math.floor(Math.random() * 100),
    state: Math.floor(Math.random() * 100),
  }
}

export async function getAPIdata1(sub){
  let data = await fetch('https://jsonplaceholder.typicode.com/posts')
  data = await data.json();
  let newData=[];
  for(let object of data){
      newData.push( {
      ...object,
      haveChild: sub
    });
  }

  return newData;
}

export function makeData(length,type, sub) {
  
  const data = [];
  for(let i=0; i < length; i++){
    let object ={};
    if(type ==='person'){
      object = newPerson();
    }
    else if(type ==='business'){
      object = newBusiness();
    }
    else{
    	object = newAddress();
    }
    data.push( {
      ...object,
      haveChild: sub
    });
  }

  return data;

 
}