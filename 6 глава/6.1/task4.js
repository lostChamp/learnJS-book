const elementsOfList = (list) => {
    let nextOfList = list;
    while(nextOfList) {
        console.log(nextOfList.value);
        nextOfList = nextOfList.next;
    }
}

const elementsOfListRec = (list) => {
    console.log(list.value);
    if(list.next) {
        return elementsOfListRec(list.next);
    }
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
elementsOfListRec(list);