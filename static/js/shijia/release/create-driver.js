$(function() {
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

		wrap.on('click', '.checkAll', checkAll)
			.on('click', 'input[name="subBox"]', checkSub)
			.on('click', '.create-driver', createDrive);
	}

	/*
	 ** 全选
	 */
	function checkAll(){
		$('input[name="subBox"]').attr("checked",this.checked); 
	}

	/*
	 ** 单选
	 */
	function checkSub(){
		var subBox = $('input[name="subBox"]');

		$(".checkAll").attr("checked",subBox.length == $("input[name='subBox']:checked").length ? true : false);	
	}

	/*
	 ** 发布试驾
	 */
	function createDrive(){
		var subCheck = $("input[name='subBox']:checked");
		var arr = [];

		subCheck.each(function(){
			var _this = $(this);
			var id = _this.data('id');

			arr.push(id);
		})

		var params = {
			'shopId': arr
		};

		$.ajax({
			url: "/api/shijia/publish/add",
            data: params,
            method: "POST",
			success: function(result){
				if(result.status == 200){
					location.href="/release/success.html"
				}else{
					location.href="/release/fail.html"
				}
			}
		})
	}
});








