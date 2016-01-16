$(function(){
	init();

	/*
	 ** 初始化函数
	 */
	function init(){
		setSelect();
		bindEvent();
	}

	/*
	 ** 事件绑定函数
	 */
	function bindEvent(){
		var wrap = $('.wrap');

		wrap.on('click', '.pre-btn', submitPre)
	}

	/*
	 ** 提交优惠信息
	 */
	function submitPre(){
		var textArea = $('.driver-text');
		var mobile = $('.driver-text');
		var params = {
			"text": textArea.val(),
			"mobile": mobile.val()
		};

		$.ajax({
			url: "/submit/pre",
            data: params,
            method: "POST",
			success: function(result){

				// 成功提示
				$('#submit-success').modal();

				// 失败提示
				// $('#submit-fail').modal();
			}
		})
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

		// 修复城市默认选项的bug
		$('.city').change(function(){
			$('.store-name').data('value','')
		})
	}
})