$(function(){
	init();

	/*
	 ** 初始化函数
	 */
	function init(){
		bindEvent();
	}

	/*
	 ** 事件绑定函数
	 */
	function bindEvent(){
		var wrap = $('.wrap');

		wrap.on('click', '.del-driver', delSingleDriver)
			.on('click', '.del-list', delAllDriver);
	}

	/*
	 ** 删除单条试驾信息
	 */
	function delSingleDriver(){

		// 弹出弹层
		$('#del-single').modal();

		// 删除单条
		var _this = $(this);
		var driverId = _this.data('id');

		$('#del-single .btn-primary').on('click', function(){
			var params = {
				'shopId': driverId
			};

			$.ajax({
				url: "/api/shijia/publish/delete",
	            data: params,
	            method: "POST",
				success: function(result){
					location.reload();
				}
			})
		})
	}

	/*
	 ** 删除全部试驾信息
	 */
	function delAllDriver(){

		// 弹出弹层
		$('#del-all').modal()

		// 全部删除
		var arr = [];

		// 搜集数据
		$('.del-driver').each(function(){
			var _this = $(this);
			var id = _this.data('id');

			arr.push(id);
		})		
		$('#del-all .btn-primary').on('click', function(){
			var params = {
				'shopId': arr
			};

			$.ajax({
				url: "/api/shijia/publish/delete",
	            data: params,
	            method: "POST",
				success: function(result){
					location.reload();
				}
			})
		})
	}
})