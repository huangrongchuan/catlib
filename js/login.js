// 给全局mainbox创建一个vue实例，在mainbox中便可以使用vant
// sex:0为雌性		sex:1为雄性	sex:NaN为不知道
// age:NaN为不知道		age的单位为月
// isSterilized:0为未绝育	isSterilized:1为绝育	isSterilized:NaN为不知道
var mainbox =new Vue({
    el:'#mainbox',
	data:{
		imgArr:[
			"../pic/UI/select_deactivate.svg",
			"../pic/UI/select_activated.svg",
		],
		index1:0 , index2:0 , index3:0 , index4:0 , index5:0 , index6:0 , index7:0 , index8:0,
		sex:0 , age:0 , isSterilized:0 ,
		selectedyear: 0,//select选中的值
   				year: [
					{ text:0, value: 0 },
     				{ text:1, value: 1 },
     				{ text:2, value: 2 },
					{ text:3, value: 3 },
     				{ text:4, value: 4 },
					{ text:5, value: 5 },
     				{ text:6, value: 6 },
					{ text:7, value: 7 },
     				{ text:8, value: 8 },
					{ text:9, value: 9 },
     				{ text:10, value: 10 },
					{ text:11, value: 11 },
     				{ text:12, value: 12 },
					{ text:13, value: 13 },
     				{ text:14, value: 14 },
					{ text:15, value: 15 },
     				{ text:16, value: 16 },
					{ text:17, value: 17 },
     				{ text:18, value: 18 },
     				{ text:19, value: 19 }
					],
		selectedmonth: 0,//select选中的值
   				month: [
     				{ text:0, value: 0 },
					{ text:1, value: 1 },
     				{ text:2, value: 2 },
     				{ text:3, value: 3 },
					{ text:4, value: 4 },
					{ text:5, value: 5 },
     				{ text:6, value: 6 },
					{ text:7, value: 7 },
     				{ text:8, value: 8 },
					{ text:9, value: 9 },
     				{ text:10, value: 10 },
					{ text:11, value: 11 },
					],
	},
    methods: {
		point1:function(){
			if(this.index1==0)
				this.index1=1,this.index2=0,this.index3=0,this.sex=0;
			else this.index1=0,this.index2=0,this.index3=0;
	},
		point2:function(){
			if(this.index2==0)
				this.index1=0,this.index2=1,this.index3=0,this.sex=1;
			else this.index2=0,this.index1=0,this.index1=0;
	},
		point3:function(){
			if(this.index3==0)
				this.index1=0,this.index2=0,this.index3=1,this.sex=NaN;
			else this.index1=0,this.index2=0,this.index3=0;
	},
		point4:function(){
			if(this.index4==0)
				this.index4=1,this.index5=0,this.age=this.selectedyear*12+this.selectedmonth;
			else this.index4=0,this.index5=0;
	},
		point5:function(){
			if(this.index5==0)
				this.index4=0,this.index5=1,this.age=NaN;
			else this.index4=0,this.index5=0;
	},
		point6:function(){
			if(this.index6==0)
				this.index6=1,this.index7=0,this.index8=0,this.isSterilized=1;
			else this.index6=0,this.index7=0,this.index8=0;
	},
		point7:function(){
			if(this.index7==0)
				this.index6=0,this.index7=1,this.index8=0,this.isSterilized=0;
			else this.index6=0,this.index7=0,this.index8=0;
	},
		point8:function(){
			if(this.index8==0)
				this.index6=0,this.index7=0,this.index8=1,this.isSterilized=NaN;
			else this.index6=0,this.index7=0,this.index8=0;
	},
		next:function(){
			if((this.index1+this.index2+this.index3+this.index4+this.index5+this.index6+this.index7+this.index8)<3||(this.index4==1&&(this.selectedmonth+this.selectedyear)==0))
				alert("请完成页面所有选项")
			else
				alert("完成")
		},
    created() {
		var list=JSON.parse(localStorage.getinfo.key("info"));
	},
}
})
