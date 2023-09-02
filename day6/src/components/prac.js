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
inc() //1
inc() //2
inc() //3
inc() // 4
getCount() // 0
