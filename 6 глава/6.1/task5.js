const elementsOfList = (list) => {
    let nextOfList = list;
    let arrForList = [];
    while(nextOfList) {
        arrForList.push(nextOfList.value);
        nextOfList = nextOfList.next;
    }

    for(let i = arrForList.length - 1; i >= 0; i--) {
        console.log(arrForList[i]);
    }
}

const elementsOfListRec = (list) => {

    if(list.next) {
        elementsOfListRec(list.next);
    }

    console.log(list.value);
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};


elementsOfList(list);
elementsOfListRec(list)
