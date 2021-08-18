window.onload = function () {
	var damageRange = damageCal(1000);
	$(function() {
    $( "#slider" ).slider({
			min: 50,
			max: 2000,
			step: 50,
			value: 1000,
			slide: function(e, ui) {
	      $('#temperature').val(ui.value);
				refreshChartA();
				refreshChartB();
				refreshChartC();
				refreshChartD();
				refreshChartE();
				refreshChartF();
				refreshChartG();
				refreshChartH();
	    },
			create: function(e, ui) {
	      $('#temperature').val($(this).slider('option', 'value'));
	    }
		});
  });
	//alert(damageRange[1][0]);
	var chartA = new CanvasJS.Chart("chartContainerA",
	{
		// title:{
		// 	text: "My First Chart in CanvasJS"
		// },
		axisY: {
			includeZero:true,
			title: "ダメージ値",
			interval: 30,
			viewportMaximum: itemData[1][1] + 30,
			stripLines: [
				{ //チャレンジゾーン
					startValue: itemData[1][0] - damageRange[3][1],
					endValue: itemData[1][1] - damageRange[3][0],
				  opacity: .4
				},
				{ //絶対大丈夫だよゾーン
					startValue: itemData[1][0] - damageRange[3][0],
					endValue: itemData[1][1] - damageRange[3][1],
				  opacity: .8
				},
				{ //成功ゾーン
					startValue: itemData[1][0],
					endValue: itemData[1][1],
	        opacity: .2,
				}
    ],
		},
		axisX: {
			title: "ゲージ",
			interval: 10000,
		},
		data: [
			{
				type: "rangeBar",
				//showInLegend: true,
				yValueFormatString: "#0.##",
				//indexLabel: "{y[#index]}",
				dataPoints: [   // Y: [Low, High]
					{x: 0, y:itemData[1], label: "成功ゾーン"},
					{x: 0, y:[0, 0], label: "ダメージ総量"},
					{x: 10, y: [damageRange[1][0],damageRange[1][1]], label: "手加減打ち"},
					{x: -10, y: [damageRange[2][0],damageRange[2][1]], label: "乱れ打ち"},
					{x: 10, y: [damageRange[3][0],damageRange[3][1]], label: "叩く、狙い打ち"},
					{x: -10, y: [damageRange[4][0],damageRange[4][1]], label: "上下打ち、4連打ち、ななめ打ち"},
					{x: 10, y: [damageRange[5][0],damageRange[5][1]], label: "2倍打ち、超4連打ち"},
					{x: -10, y: [damageRange[6][0],damageRange[6][1]], label: "熱風おろし"},
					{x: 10, y: [damageRange[7][0],damageRange[7][1]], label: "3倍打ち"}

				]
			}
		]
	});
	var chartB = new CanvasJS.Chart("chartContainerB",
	{
		// title:{
		// 	text: "My First Chart in CanvasJS"
		// },
		axisY: {
			includeZero:true,
			title: "ダメージ値",
			interval: 30,
			viewportMaximum: itemData[2][1] + 30,
			stripLines: [
				{
					startValue: itemData[2][0] - damageRange[3][1],
					endValue: itemData[2][1] - damageRange[3][0],
				  opacity: .4
				},
				{
					startValue: itemData[2][0] - damageRange[3][0],
					endValue: itemData[2][1] - damageRange[3][1],
				  opacity: .8
				},
				{
					startValue: itemData[2][0],
					endValue: itemData[2][1],
	        opacity: .2,
				}
    ],
		},
		axisX: {
			title: "ゲージ",
			interval: 10000,
		},
		data: [
			{
				type: "rangeBar",
				//showInLegend: true,
				yValueFormatString: "#0.##",
				//indexLabel: "{y[#index]}",
				dataPoints: [   // Y: [Low, High]
					{x: 0, y:itemData[2], label: "成功ゾーン"},
					{x: 0, y:[0, 0], label: "ダメージ総量"},
					{x: 10, y: [damageRange[1][0],damageRange[1][1]], label: "手加減打ち"},
					{x: -10, y: [damageRange[2][0],damageRange[2][1]], label: "乱れ打ち"},
					{x: 10, y: [damageRange[3][0],damageRange[3][1]], label: "叩く、狙い打ち"},
					{x: -10, y: [damageRange[4][0],damageRange[4][1]], label: "上下打ち、4連打ち、ななめ打ち"},
					{x: 10, y: [damageRange[5][0],damageRange[5][1]], label: "2倍打ち、超4連打ち"},
					{x: -10, y: [damageRange[6][0],damageRange[6][1]], label: "熱風おろし"},
					{x: 10, y: [damageRange[7][0],damageRange[7][1]], label: "3倍打ち"}

				]
			}
		]
	});
	var chartC = new CanvasJS.Chart("chartContainerC",
	{
		// title:{
		// 	text: "My First Chart in CanvasJS"
		// },
		axisY: {
			includeZero:true,
			title: "ダメージ値",
			interval: 30,
			viewportMaximum: itemData[3][1] + 30,
			stripLines: [
				{
					startValue: itemData[3][0] - damageRange[3][1],
					endValue: itemData[3][1] - damageRange[3][0],
					opacity: .4
				},
				{
					startValue: itemData[3][0] - damageRange[3][0],
					endValue: itemData[3][1] - damageRange[3][1],
					opacity: .8
				},
				{
					startValue: itemData[3][0],
					endValue: itemData[3][1],
					opacity: .2,
				}
		],
		},
		axisX: {
			title: "ゲージ",
			interval: 10000,
		},
		data: [
			{
				type: "rangeBar",
				//showInLegend: true,
				yValueFormatString: "#0.##",
				//indexLabel: "{y[#index]}",
				dataPoints: [   // Y: [Low, High]
					{x: 0, y:itemData[3], label: "成功ゾーン"},
					{x: 0, y:[0, 0], label: "ダメージ総量"},
					{x: 10, y: [damageRange[1][0],damageRange[1][1]], label: "手加減打ち"},
					{x: -10, y: [damageRange[2][0],damageRange[2][1]], label: "乱れ打ち"},
					{x: 10, y: [damageRange[3][0],damageRange[3][1]], label: "叩く、狙い打ち"},
					{x: -10, y: [damageRange[4][0],damageRange[4][1]], label: "上下打ち、4連打ち、ななめ打ち"},
					{x: 10, y: [damageRange[5][0],damageRange[5][1]], label: "2倍打ち、超4連打ち"},
					{x: -10, y: [damageRange[6][0],damageRange[6][1]], label: "熱風おろし"},
					{x: 10, y: [damageRange[7][0],damageRange[7][1]], label: "3倍打ち"}

				]
			}
		]
	});
	var chartD = new CanvasJS.Chart("chartContainerD",
	{
		// title:{
		// 	text: "My First Chart in CanvasJS"
		// },
		axisY: {
			includeZero:true,
			title: "ダメージ値",
			interval: 30,
			viewportMaximum: itemData[4][1] + 30,
			stripLines: [
				{
					startValue: itemData[4][0] - damageRange[3][1],
					endValue: itemData[4][1] - damageRange[3][0],
					opacity: .4
				},
				{
					startValue: itemData[4][0] - damageRange[3][0],
					endValue: itemData[4][1] - damageRange[3][1],
					opacity: .8
				},
				{
					startValue: itemData[4][0],
					endValue: itemData[4][1],
					opacity: .2,
				}
		],
		},
		axisX: {
			title: "ゲージ",
			interval: 10000,
		},
		data: [
			{
				type: "rangeBar",
				//showInLegend: true,
				yValueFormatString: "#0.##",
				//indexLabel: "{y[#index]}",
				dataPoints: [   // Y: [Low, High]
					{x: 0, y:itemData[4], label: "成功ゾーン"},
					{x: 0, y:[0, 0], label: "ダメージ総量"},
					{x: 10, y: [damageRange[1][0],damageRange[1][1]], label: "手加減打ち"},
					{x: -10, y: [damageRange[2][0],damageRange[2][1]], label: "乱れ打ち"},
					{x: 10, y: [damageRange[3][0],damageRange[3][1]], label: "叩く、狙い打ち"},
					{x: -10, y: [damageRange[4][0],damageRange[4][1]], label: "上下打ち、4連打ち、ななめ打ち"},
					{x: 10, y: [damageRange[5][0],damageRange[5][1]], label: "2倍打ち、超4連打ち"},
					{x: -10, y: [damageRange[6][0],damageRange[6][1]], label: "熱風おろし"},
					{x: 10, y: [damageRange[7][0],damageRange[7][1]], label: "3倍打ち"}

				]
			}
		]
	});
	var chartE = new CanvasJS.Chart("chartContainerE",
	{
		// title:{
		// 	text: "My First Chart in CanvasJS"
		// },
		axisY: {
			includeZero:true,
			title: "ダメージ値",
			interval: 30,
			viewportMaximum: itemData[5][1] + 30,
			stripLines: [
				{ //チャレンジゾーン
					startValue: itemData[5][0] - damageRange[3][1],
					endValue: itemData[5][1] - damageRange[3][0],
					opacity: .4
				},
				{ //絶対大丈夫だよゾーン
					startValue: itemData[5][0] - damageRange[3][0],
					endValue: itemData[5][1] - damageRange[3][1],
					opacity: .8
				},
				{ //成功ゾーン
					startValue: itemData[5][0],
					endValue: itemData[5][1],
					opacity: .2,
				}
		],
		},
		axisX: {
			title: "ゲージ",
			interval: 10000,
		},
		data: [
			{
				type: "rangeBar",
				//showInLegend: true,
				yValueFormatString: "#0.##",
				//indexLabel: "{y[#index]}",
				dataPoints: [   // Y: [Low, High]
					{x: 0, y:itemData[5], label: "成功ゾーン"},
					{x: 0, y:[0, 0], label: "ダメージ総量"},
					{x: 10, y: [damageRange[1][0],damageRange[1][1]], label: "手加減打ち"},
					{x: -10, y: [damageRange[2][0],damageRange[2][1]], label: "乱れ打ち"},
					{x: 10, y: [damageRange[3][0],damageRange[3][1]], label: "叩く、狙い打ち"},
					{x: -10, y: [damageRange[4][0],damageRange[4][1]], label: "上下打ち、4連打ち、ななめ打ち"},
					{x: 10, y: [damageRange[5][0],damageRange[5][1]], label: "2倍打ち、超4連打ち"},
					{x: -10, y: [damageRange[6][0],damageRange[6][1]], label: "熱風おろし"},
					{x: 10, y: [damageRange[7][0],damageRange[7][1]], label: "3倍打ち"}

				]
			}
		]
	});
	var chartF = new CanvasJS.Chart("chartContainerF",
	{
		// title:{
		// 	text: "My First Chart in CanvasJS"
		// },
		axisY: {
			includeZero:true,
			title: "ダメージ値",
			interval: 30,
			viewportMaximum: itemData[6][1] + 30,
			stripLines: [
				{
					startValue: itemData[6][0] - damageRange[3][1],
					endValue: itemData[6][1] - damageRange[3][0],
					opacity: .4
				},
				{
					startValue: itemData[6][0] - damageRange[3][0],
					endValue: itemData[6][1] - damageRange[3][1],
					opacity: .8
				},
				{
					startValue: itemData[6][0],
					endValue: itemData[6][1],
					opacity: .2,
				}
		],
		},
		axisX: {
			title: "ゲージ",
			interval: 10000,
		},
		data: [
			{
				type: "rangeBar",
				//showInLegend: true,
				yValueFormatString: "#0.##",
				//indexLabel: "{y[#index]}",
				dataPoints: [   // Y: [Low, High]
					{x: 0, y:itemData[6], label: "成功ゾーン"},
					{x: 0, y:[0, 0], label: "ダメージ総量"},
					{x: 10, y: [damageRange[1][0],damageRange[1][1]], label: "手加減打ち"},
					{x: -10, y: [damageRange[2][0],damageRange[2][1]], label: "乱れ打ち"},
					{x: 10, y: [damageRange[3][0],damageRange[3][1]], label: "叩く、狙い打ち"},
					{x: -10, y: [damageRange[4][0],damageRange[4][1]], label: "上下打ち、4連打ち、ななめ打ち"},
					{x: 10, y: [damageRange[5][0],damageRange[5][1]], label: "2倍打ち、超4連打ち"},
					{x: -10, y: [damageRange[6][0],damageRange[6][1]], label: "熱風おろし"},
					{x: 10, y: [damageRange[7][0],damageRange[7][1]], label: "3倍打ち"}

				]
			}
		]
	});
	var chartG = new CanvasJS.Chart("chartContainerG",
	{
		// title:{
		// 	text: "My First Chart in CanvasJS"
		// },
		axisY: {
			includeZero:true,
			title: "ダメージ値",
			interval: 30,
			viewportMaximum: itemData[7][1] + 30,
			stripLines: [
				{
					startValue: itemData[7][0] - damageRange[3][1],
					endValue: itemData[7][1] - damageRange[3][0],
					opacity: .4
				},
				{
					startValue: itemData[7][0] - damageRange[3][0],
					endValue: itemData[7][1] - damageRange[3][1],
					opacity: .8
				},
				{
					startValue: itemData[7][0],
					endValue: itemData[7][1],
					opacity: .2,
				}
		],
		},
		axisX: {
			title: "ゲージ",
			interval: 10000,
		},
		data: [
			{
				type: "rangeBar",
				//showInLegend: true,
				yValueFormatString: "#0.##",
				//indexLabel: "{y[#index]}",
				dataPoints: [   // Y: [Low, High]
					{x: 0, y:itemData[7], label: "成功ゾーン"},
					{x: 0, y:[0, 0], label: "ダメージ総量"},
					{x: 10, y: [damageRange[1][0],damageRange[1][1]], label: "手加減打ち"},
					{x: -10, y: [damageRange[2][0],damageRange[2][1]], label: "乱れ打ち"},
					{x: 10, y: [damageRange[3][0],damageRange[3][1]], label: "叩く、狙い打ち"},
					{x: -10, y: [damageRange[4][0],damageRange[4][1]], label: "上下打ち、4連打ち、ななめ打ち"},
					{x: 10, y: [damageRange[5][0],damageRange[5][1]], label: "2倍打ち、超4連打ち"},
					{x: -10, y: [damageRange[6][0],damageRange[6][1]], label: "熱風おろし"},
					{x: 10, y: [damageRange[7][0],damageRange[7][1]], label: "3倍打ち"}

				]
			}
		]
	});
	var chartH = new CanvasJS.Chart("chartContainerH",
	{
		// title:{
		// 	text: "My First Chart in CanvasJS"
		// },
		axisY: {
			includeZero:true,
			title: "ダメージ値",
			interval: 30,
			viewportMaximum: itemData[8][1] + 30,
			stripLines: [
				{
					startValue: itemData[8][0] - damageRange[3][1],
					endValue: itemData[8][1] - damageRange[3][0],
					opacity: .4
				},
				{
					startValue: itemData[8][0] - damageRange[3][0],
					endValue: itemData[8][1] - damageRange[3][1],
					opacity: .8
				},
				{
					startValue: itemData[8][0],
					endValue: itemData[8][1],
					opacity: .2,
				}
		],
		},
		axisX: {
			title: "ゲージ",
			interval: 10000,
		},
		data: [
			{
				type: "rangeBar",
				//showInLegend: true,
				yValueFormatString: "#0.##",
				//indexLabel: "{y[#index]}",
				dataPoints: [   // Y: [Low, High]
					{x: 0, y:itemData[8], label: "成功ゾーン"},
					{x: 0, y:[0, 0], label: "ダメージ総量"},
					{x: 10, y: [damageRange[1][0],damageRange[1][1]], label: "手加減打ち"},
					{x: -10, y: [damageRange[2][0],damageRange[2][1]], label: "乱れ打ち"},
					{x: 10, y: [damageRange[3][0],damageRange[3][1]], label: "叩く、狙い打ち"},
					{x: -10, y: [damageRange[4][0],damageRange[4][1]], label: "上下打ち、4連打ち、ななめ打ち"},
					{x: 10, y: [damageRange[5][0],damageRange[5][1]], label: "2倍打ち、超4連打ち"},
					{x: -10, y: [damageRange[6][0],damageRange[6][1]], label: "熱風おろし"},
					{x: 10, y: [damageRange[7][0],damageRange[7][1]], label: "3倍打ち"}

				]
			}
		]
	});


	chartA.render();
	chartB.render();
	chartC.render();
	chartD.render();
	chartE.render();
	chartF.render();
	chartG.render();
	chartH.render();

	function refreshChartA(){
		//var length = chart.options.data[0].dataPoints.length;
		var damage = parseInt($("#damageA").val());
		//alert(damage);
		//alert("hoge");
		//alert(damageCal(1950));
		var temp = parseInt($("#temperature").val());
		damageRange = damageCal(temp);
		//alert(damageRange);

		chartA.options.data[0].dataPoints[1].y[1] = damage;
		for(var i = 2; i <= 8; i++){
			chartA.options.data[0].dataPoints[i].y = [damageRange[i - 1][0] + damage, damageRange[i - 1][1] + damage];
		}
		chartA.options.axisY.stripLines[0].startValue = itemData[1][0] - damageRange[3][1];
		chartA.options.axisY.stripLines[0].endValue = itemData[1][1] - damageRange[3][0];
		chartA.options.axisY.stripLines[1].startValue = itemData[1][0] - damageRange[3][0];
		chartA.options.axisY.stripLines[1].endValue = itemData[1][1] - damageRange[3][1];
		chartA.render();
	}
	function refreshChartB(){
		//var length = chart.options.data[0].dataPoints.length;
		var damage = parseInt($("#damageB").val());
		//alert(damage);
		//alert("hoge");
		//alert(damageCal(1950));
		var temp = parseInt($("#temperature").val());
		damageRange = damageCal(temp);
		//alert(damageRange);
		chartB.options.data[0].dataPoints[1].y[1] = damage;
		for(var i = 2; i <= 8; i++){
			chartB.options.data[0].dataPoints[i].y = [damageRange[i - 1][0] + damage, damageRange[i - 1][1] + damage];
		}
		chartB.options.axisY.stripLines[0].startValue = itemData[2][0] - damageRange[3][1];
		chartB.options.axisY.stripLines[0].endValue = itemData[2][1] - damageRange[3][0];
		chartB.options.axisY.stripLines[1].startValue = itemData[2][0] - damageRange[3][0];
		chartB.options.axisY.stripLines[1].endValue = itemData[2][1] - damageRange[3][1];
		chartB.render();
	}
	function refreshChartC(){
		//var length = chart.options.data[0].dataPoints.length;
		var damage = parseInt($("#damageC").val());
		//alert(damage);
		//alert("hoge");
		//alert(damageCal(1950));
		var temp = parseInt($("#temperature").val());
		damageRange = damageCal(temp);
		//alert(damageRange);
		chartC.options.data[0].dataPoints[1].y[1] = damage;
		for(var i = 2; i <= 8; i++){
			chartC.options.data[0].dataPoints[i].y = [damageRange[i - 1][0] + damage, damageRange[i - 1][1] + damage];
		}
		chartC.options.axisY.stripLines[0].startValue = itemData[3][0] - damageRange[3][1];
		chartC.options.axisY.stripLines[0].endValue = itemData[3][1] - damageRange[3][0];
		chartC.options.axisY.stripLines[1].startValue = itemData[3][0] - damageRange[3][0];
		chartC.options.axisY.stripLines[1].endValue = itemData[3][1] - damageRange[3][1];
		chartC.render();
	}
	function refreshChartD(){
		//var length = chart.options.data[0].dataPoints.length;
		var damage = parseInt($("#damageD").val());
		//alert(damage);
		//alert("hoge");
		//alert(damageCal(1950));
		var temp = parseInt($("#temperature").val());
		damageRange = damageCal(temp);
		//alert(damageRange);
		chartD.options.data[0].dataPoints[1].y[1] = damage;
		for(var i = 2; i <= 8; i++){
			chartD.options.data[0].dataPoints[i].y = [damageRange[i - 1][0] + damage, damageRange[i - 1][1] + damage];
		}
		chartD.options.axisY.stripLines[0].startValue = itemData[4][0] - damageRange[3][1];
		chartD.options.axisY.stripLines[0].endValue = itemData[4][1] - damageRange[3][0];
		chartD.options.axisY.stripLines[1].startValue = itemData[4][0] - damageRange[3][0];
		chartD.options.axisY.stripLines[1].endValue = itemData[4][1] - damageRange[3][1];
		chartD.render();
	}
	function refreshChartE(){
		//var length = chart.options.data[0].dataPoints.length;
		var damage = parseInt($("#damageE").val());
		//alert(damage);
		//alert("hoge");
		//alert(damageCal(1950));
		var temp = parseInt($("#temperature").val());
		damageRange = damageCal(temp);
		//alert(damageRange);

		chartE.options.data[0].dataPoints[1].y[1] = damage;
		for(var i = 2; i <= 8; i++){
			chartE.options.data[0].dataPoints[i].y = [damageRange[i - 1][0] + damage, damageRange[i - 1][1] + damage];
		}
		chartE.options.axisY.stripLines[0].startValue = itemData[5][0] - damageRange[3][1];
		chartE.options.axisY.stripLines[0].endValue = itemData[5][1] - damageRange[3][0];
		chartE.options.axisY.stripLines[1].startValue = itemData[5][0] - damageRange[3][0];
		chartE.options.axisY.stripLines[1].endValue = itemData[5][1] - damageRange[3][1];
		chartE.render();
	}
	function refreshChartF(){
		//var length = chart.options.data[0].dataPoints.length;
		var damage = parseInt($("#damageF").val());
		//alert(damage);
		//alert("hoge");
		//alert(damageCal(1950));
		var temp = parseInt($("#temperature").val());
		damageRange = damageCal(temp);
		//alert(damageRange);
		chartF.options.data[0].dataPoints[1].y[1] = damage;
		for(var i = 2; i <= 8; i++){
			chartF.options.data[0].dataPoints[i].y = [damageRange[i - 1][0] + damage, damageRange[i - 1][1] + damage];
		}
		chartF.options.axisY.stripLines[0].startValue = itemData[6][0] - damageRange[3][1];
		chartF.options.axisY.stripLines[0].endValue = itemData[6][1] - damageRange[3][0];
		chartF.options.axisY.stripLines[1].startValue = itemData[6][0] - damageRange[3][0];
		chartF.options.axisY.stripLines[1].endValue = itemData[6][1] - damageRange[3][1];
		chartF.render();
	}
	function refreshChartG(){
		//var length = chart.options.data[0].dataPoints.length;
		var damage = parseInt($("#damageG").val());
		//alert(damage);
		//alert("hoge");
		//alert(damageCal(1950));
		var temp = parseInt($("#temperature").val());
		damageRange = damageCal(temp);
		//alert(damageRange);
		chartG.options.data[0].dataPoints[1].y[1] = damage;
		for(var i = 2; i <= 8; i++){
			chartG.options.data[0].dataPoints[i].y = [damageRange[i - 1][0] + damage, damageRange[i - 1][1] + damage];
		}
		chartG.options.axisY.stripLines[0].startValue = itemData[7][0] - damageRange[3][1];
		chartG.options.axisY.stripLines[0].endValue = itemData[7][1] - damageRange[3][0];
		chartG.options.axisY.stripLines[1].startValue = itemData[7][0] - damageRange[3][0];
		chartG.options.axisY.stripLines[1].endValue = itemData[7][1] - damageRange[3][1];
		chartG.render();
	}
	function refreshChartH(){
		//var length = chart.options.data[0].dataPoints.length;
		var damage = parseInt($("#damageH").val());
		//alert(damage);
		//alert("hoge");
		//alert(damageCal(1950));
		var temp = parseInt($("#temperature").val());
		damageRange = damageCal(temp);
		//alert(damageRange);
		chartH.options.data[0].dataPoints[1].y[1] = damage;
		for(var i = 2; i <= 8; i++){
			chartH.options.data[0].dataPoints[i].y = [damageRange[i - 1][0] + damage, damageRange[i - 1][1] + damage];
		}
		chartH.options.axisY.stripLines[0].startValue = itemData[8][0] - damageRange[3][1];
		chartH.options.axisY.stripLines[0].endValue = itemData[8][1] - damageRange[3][0];
		chartH.options.axisY.stripLines[1].startValue = itemData[8][0] - damageRange[3][0];
		chartH.options.axisY.stripLines[1].endValue = itemData[8][1] - damageRange[3][1];
		chartH.render();
	}

	$("#damageA").change(function(){
		refreshChartA();
	});
	$("#damageB").change(function(){
		refreshChartB();
	});
	$("#damageC").change(function(){
		refreshChartC();
	});
	$("#damageD").change(function(){
		refreshChartD();
	});
	$("#damageE").change(function(){
		refreshChartE();
	});
	$("#damageF").change(function(){
		refreshChartF();
	});
	$("#damageG").change(function(){
		refreshChartG();
	});
	$("#damageH").change(function(){
		refreshChartH();
	});





}
