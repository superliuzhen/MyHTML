//去除字符串首位空格,自定义对象
String.prototype.trim=function(){
			var start,end;
			start=0
			end=this.length-1
			while(start<=end && this.charAt(start)==' '){
				start++;
			}
			while(start<=end && this.charAt(end)==' '){
				end--;
			}
		    return this.substring(start,end+1)
		}

String.prototype.toArray=function(){  //将字符串转为数组
	var arr=[]
	for(var x=0;x<this.length;x++){	
		arr[x]=this.charAt(x)
	}
	return arr;
}

String.prototype.reverse=function(){ //将字符串倒置
//将字符串转为数组
var arr=this.toArray()
//进行数组的反转
for(var x=0,y=this.length-1;x<=y;x++,y--){
	swap(arr,x,y);
}
//再将数组转为字符串
return arr.join("$nbsp")
}
function swap(arr,x,y){
			var th=arr[x];
			arr[x]=arr[y];
			arr[y]=th;
}

Date.prototype.getWeek=function(){  //获得星期
	var week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
	return week[this.getDay()]
}	

