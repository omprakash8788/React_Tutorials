function counter(initVal){
    let count = initVal;


    function inc(){
        count=count+1;
        console.log(count);
    }

    let msg=`current value is ${count}`

    function getCount(){
        console.log(msg);
    }

    return [inc, getCount]
}

const [inc, getCount]=counter(0)
inc()
inc()
inc()
inc()
getCount()
