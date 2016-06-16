window.onload = function () {
	var damageRange = damageCal(1700); // 仮に2000度。本番では1000度に直す。
	alert(damageRange[1][0]);
	var chartA = new CanvasJS.Chart("chartContainerA",
	{
		// title:{
		// 	text: "My First Chart in CanvasJS"
		// },
		axisY: {
			includeZero:true,
			title: "ダメージ値",
			interval: 30,
			stripLines: [
				{
					startValue: itemData[1][0] - damageRange[3][1],
					endValue: itemData[1][1] - damageRange[3][0],
				  opacity: .4
				},
				{
					startValue: itemData[1][0] - damageRange[3][0],
					endValue: itemData[1][1] - damageRange[3][1],
				  opacity: .8
				},
				{
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
				indexLabel: "{y[#index]}",
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
				indexLabel: "{y[#index]}",
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
				indexLabel: "{y[#index]}",
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
				indexLabel: "{y[#index]}",
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


	chartA.render();
	chartB.render();
	chartC.render();
	chartD.render();

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
		chartD.render();
	}

	$("#refresh").click(function () {

	refreshChartA();
	refreshChartB();
	refreshChartC();
	refreshChartD();

	});

}
