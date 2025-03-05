
//javascript



class abc{
	
	constructor(a,b){//use to acess a and b throught out the class invoked when object is created
		this.a=a;
		this.b=b;
	}
	sum(){
		var sum = this.a + this.b
		sum print 
	}
	same as mult()
};
var obj =new abc(5,8)
obj.sum

class xyz extends abc{
	
	want to use a,b of above class then extend and use super keyword with super it cant
	constructor(A,b,c){
		super(a,b)
		this.c=c//added new c 
	}
	sum(a,b,c)
	{
		same only add c
	}
};
const obj=new xyz(1,2,3)
obj.sum()//takes three argu as obj created of xyz 
obj.mul()//takes 2 argu by default


