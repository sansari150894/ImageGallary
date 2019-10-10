
import _ from 'lodash';

const getCourierPrice = weight => {
    if(weight > 0 && weight <= 200){
        return 5;
    }else if(weight > 200 && weight <= 500){
        return 10;
    }else if(weight > 500 && weight <= 1000){
        return 15;
    }else if (weight > 1000 && weight <= 5000){
        return 20;
    }
  };

const mergeItems =(selectedItems) =>{
    selectedItems = _.sortBy(selectedItems, (o)=>{
        return o.price;
    });

    while(selectedItems[0].price<=125 && selectedItems[1].price<=125){
        let objOne= selectedItems[0], objTwo= selectedItems[1];
        selectedItems.shift();
        selectedItems.shift();
        let obj ={
            name: objOne.name+', '+objTwo.name,
            price: objOne.price + objTwo.price,
            weight: objOne.weight + objTwo.weight
        }
        selectedItems.push(obj);
        selectedItems = _.sortBy(selectedItems, (o)=>{
            return o.price;
        });
        mergeItems(selectedItems);
    }
    return selectedItems;
}

const createPackage = selectedItems => {
    let pacakages = [],
      totalPrice;
    totalPrice = selectedItems.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price;
    }, 0);
    let totalWeight = selectedItems.reduce((accumulator, currentValue)=>{
        return accumulator + currentValue.weight;
    },0);

    if (totalPrice >= 250) {
        // sorting the selected object on the basis of price
        selectedItems = _.sortBy(selectedItems, (o)=>{
            return o.price;
        });
        pacakages = mergeItems(selectedItems);  
    } else {
      let item = selectedItems.map((item)=>{
        return item.name+", "
      })
      if(totalWeight && totalPrice && item.length){
        pacakages.push({
            name: item,
            weight: totalWeight,
            price: totalPrice
          });
      }
      
    }
    return pacakages;
  };

  export {
    createPackage,
    getCourierPrice
  }