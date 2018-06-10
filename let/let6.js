let a = 'a';

function fooA() {
    let a;
    // 暂时性死区开始
    console.log(a);

    // 暂时性死区的结束
    a = 'b';
}

fooA();

// 需要将任何变量的声明都提到函数的顶端