$(function(){
	var api = chooseApi();

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

		wrap.on('change', '.store-name', getContent)
		    .on('click', '.pre-btn', submitPre);
	}

	/*
	 ** 切换4s店重新拉去数据
	 */
	function getContent(){
		var _this = $(this);
		var optionVal = _this.val();

		// 请选择的状态不会拉去数据
		if(optionVal == ''){
			return
		}else{
			console.log('掉接口')
			// location.href="www.baidu.com";
		}
	}

	/*
	 ** 根据有没有内容判断调用创建还是修改的接口
	 */
	function chooseApi(){
		var flag;
		var promoContent = $('.driver-text').val();

		if(promoContent === ''){
			return flag = 'add' 
		}else{
			return falg = 'edit'
		}
	}

	/*
	 ** 提交优惠信息
	 */
	function submitPre(){
		var textArea = $('.driver-text');
		var mobile = $('.driver-text');
		var id = $('.promo-id').val();
		var promoTypeText = $('.promo-type').val();
		var params = {
			"id": id,
			"promoContent": textArea.val(),
			"promoTypeText": promoTypeText,
			"promoPhone": mobile.val()
		};
		
		if(api == "add"){
			$.ajax({
				url: "/api/shijia/promo/add",
	            data: params,
	            method: "POST",
				success: function(result){
					if(result.status == 200){

						// 成功提示
						$('#submit-success').modal();
					}else{

						// 失败提示
						$('#submit-fail').modal();
					}
				}
			})
		}else{
			$.ajax({
				url: "/api/shijia/promo/update",
	            data: params,
	            method: "POST",
				success: function(result){
					if(result.status == 200){

						// 成功提示
						$('#submit-success').modal();
					}else{

						// 失败提示
						$('#submit-fail').modal();
					}
				}
			})
		}
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