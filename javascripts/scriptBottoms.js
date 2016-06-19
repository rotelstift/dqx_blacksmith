window.onload = function () {
	// チャートの初期化
	var chartA = renderChart("chartA", "chartContainerA", itemData[1]);
	var chartB = renderChart("chartB", "chartContainerB", itemData[2]);
	var chartC = renderChart("chartC", "chartContainerC", itemData[3]);
	var chartD = renderChart("chartD", "chartContainerD", itemData[4]);
	var chartE = renderChart("chartE", "chartContainerE", itemData[5]);
	var chartF = renderChart("chartF", "chartContainerF", itemData[6]);
	var chartG = renderChart("chartG", "chartContainerG", itemData[7]);
	var chartH = renderChart("chartH", "chartContainerH", itemData[8]);

	// リターンキーを押した時の挙動
	$("form").on("keypress", function (e) {
		if (e.which === 13) {
			refreshChart(chartA, "#damageA", itemData[1]);
			refreshChart(chartB, "#damageB", itemData[2]);
			refreshChart(chartC, "#damageC", itemData[3]);
			refreshChart(chartD, "#damageD", itemData[4]);
			refreshChart(chartE, "#damageE", itemData[5]);
			refreshChart(chartF, "#damageF", itemData[6]);
			refreshChart(chartG, "#damageG", itemData[7]);
			refreshChart(chartH, "#damageH", itemData[8]);
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
				refreshChart(chartB, "#damageB", itemData[2]);
				refreshChart(chartC, "#damageC", itemData[3]);
				refreshChart(chartD, "#damageD", itemData[4]);
				refreshChart(chartE, "#damageE", itemData[5]);
				refreshChart(chartF, "#damageF", itemData[6]);
				refreshChart(chartG, "#damageG", itemData[7]);
				refreshChart(chartH, "#damageH", itemData[8]);
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
	$("#damageB").change(function(){
		refreshChart(chartB, "#damageB", itemData[2]);
	});
	$("#damageC").change(function(){
		refreshChart(chartC, "#damageC", itemData[3]);
	});
	$("#damageD").change(function(){
		refreshChart(chartD, "#damageD", itemData[4]);
	});
	$("#damageE").change(function(){
		refreshChart(chartE, "#damageE", itemData[5]);
	});
	$("#damageF").change(function(){
		refreshChart(chartF, "#damageF", itemData[6]);
	});
	$("#damageG").change(function(){
		refreshChart(chartG, "#damageG", itemData[7]);
	});
	$("#damageH").change(function(){
		refreshChart(chartH, "#damageH", itemData[8]);
	});

}