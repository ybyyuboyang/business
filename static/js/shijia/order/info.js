$(function(){
	init();

	/*
	 ** 初始化函数
	 */
	function init(){
		setSelect();
		datePicker();
		bindEvent();
	}

	/*
	 ** 事件绑定函数
	 */
	function bindEvent(){
		var wrap = $('.wrap');

	}

	/*
	 ** 设置级联
	 */
	function setSelect(){
		$('.choose-4s').cxSelect({ 
			selects: ['city', 'store-name'], 
			jsonName: "name",
			jsonValue: "value",
			jsonSub: "sub",
			url: [
				{
					"name":"北京市",
					"value": 0,
					'sub':[
						{	
							"name": "东城区",
							"value":1
						},
						{	
							"name": "西城区",
							"value":5
						}

					]
				},
				{
					"name":"上海市",
					"value": 3,
					'sub':[
						{	
							"name": "浦西",
							"value": 4
						}
					]
				}
			]
		});
		$('.city').change(function(){
			$('.store-name').data('value','')
		})
	}

	/*
	 ** 日期组件
	 */
	function datePicker(){

		// 设置起始时间
		$('#start-date').datetimepicker({
	        language:  'zh-CN',  
	        format: "yyyy-mm-dd",
	        weekStart: 1,  
	        todayBtn:  1,  
	        autoclose: 1,  
	        todayHighlight: 1,  
	        startView: 2,  
	        minView: 2,  
	        forceParse: 0 
		}).on('changeDate', function(){

		})

		// 设置结束时间
		$('#end-date').datetimepicker({
	        language:  'zh-CN',  
	        format: "yyyy-mm-dd",
	        weekStart: 1,  
	        todayBtn:  1,  
	        autoclose: 1,  
	        todayHighlight: 1,  
	        startView: 2,  
	        minView: 2,  
	        forceParse: 0 
		}).on('changeDate', function(){

		})
	}
})










