window.onload = function () {
	// チャートの初期化
	var chartA = renderChart("chartA", "chartContainerA", itemData[1]);

	// ダメージフォームにフォーカスが当たったら中身を全選択する
	$(".formContainer > form > input").focus(function(){
	  $(this).select();
	})

	// リターンキーを押した時の挙動
	$("form").on("keypress", function (e) {
		if (e.which === 13) {
			// 温度を50度下げる
			$('#temperature').val($('#temperature').val() - 50);
			$("#slider").slider("value", $('#temperature').val());
			// チャートをリフレッシュする
			refreshChart(chartA, "#damageA", itemData[1]);
			return false;
		}
	});

	// スライダーの挙動
	$(function() {
    $( "#slider" ).slider({
			min: 50,
			max: 2000,
			step: 50,
			value: 1000,
			slide: function(e, ui) {
	      $('#temperature').val(ui.value);
				refreshChart(chartA, "#damageA", itemData[1]);
	    },
			change: function(e, ui) {
				$('#temperature').val(ui.value);
				refreshChart(chartA, "#damageA", itemData[1]);
			},
			create: function(e, ui) {
	      $('#temperature').val($(this).slider('option', 'value'));
	    }
		});
  });

	// フォームの値が変化した時の挙動
	$("#damageA").change(function(){
		refreshChart(chartA, "#damageA", itemData[1]);
	});

}
