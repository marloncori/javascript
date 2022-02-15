// notacja literaŁu

var test = {
    a: 12,
    b: "test",
    obj: {
       str: "sample text"
    },
    c: 33,
    printInfo: function(){
       console.log(ln + "\t\tVAR TEST" + "\n\t\ta: " + this.a + "\n\t\tb: " + this.b + "\n\t\tobj[str]: " + this.obj.str + "\n\t\tc: " + this.c); 
    }
};

test.a;
test.b;
test.c;
test.obj.str;
test.d = 100;

//lub
test["a"];
test["b"];
test["c"];
test["obj"];
