window.onload = function () {
	var damageRange = damageCal(1950); // 仮に2000度。本番では1000度に直す。
	//alert(damageRange[0][0]);
	var chartA = new CanvasJS.Chart("chartContainerA",
	{
		title:{
			text: "My First Chart in CanvasJS"
		},
		axisY: {
			includeZero:true,
			title: "ダメージ値",
			interval: 10,
			stripLines: [
				{startValue: itemData[1][0] - damageRange[3][0],
				endValue: itemData[1][1] - damageRange[3][1],
			  opacity: .6},
				{startValue: itemData[1][0],
				endValue: itemData[1][1],
        opacity: .2,}
    ],
		},
		axisX: {
			title: "ゲージ",
			interval: 10000,
		},
		data: [
			{
				type: "rangeBar",
				showInLegend: true,
				yValueFormatString: "#0.##",
				indexLabel: "{y[#index]}",
				dataPoints: [   // Y: [Low, High]
					{x: 0, y:itemData[1], label: "成功ゾーン"},
					{x: 0, y:[0, 30], label: "ダメージ総量"},
					{x: 10, y: [damageRange[1][0],damageRange[1][1]], label: "手加減打ち"},
					{x: -10, y: [damageRange[2][0],damageRange[2][1]], label: "乱れ打ち"},
					{x: 10, y: [damageRange[3][0],damageRange[3][1]], label: "叩く、狙い打ち"},
					{x: -10, y: [damageRange[4][0],damageRange[4][1]], label: "上下打ち、4連打ち、ななめ打ち"},
					{x: 10, y: [damageRange[5][0],damageRange[5][1]], label: "2倍打ち、超4連打ち"},
					{x: -10, y: [damageRange[6][0],damageRange[6][1]], label: "熱風おろし"},
					{x: 10, y: [damageRange[7][0],damageRange[7][1]], label: "3倍打ち"}

				]
			}
	/*
		{
			type: "rangeBar",
			showInLegend: true,
			yValueFormatString: "#0.##",
			indexLabel: "{y[#index]}",
			dataPoints: [   // Y: [Low, High]
				{x: 0, y:itemData[1], label: "成功ゾーン"},
			]
		},{
			type: "bar",
			showInLegend: true,
			dataPoints: [
				{x: 0, y: 30, label: "ダメージ総量"}
			]
		},{
			type: "rangeBar",
			showInLegend: true,
			dataPoints: [
				{x: 10, y: [damageRange[1][0],damageRange[1][1]]},
				//{x: -1, y: [damageRange[2][0],damageRange[2][1]]},
				{x: 10, y: [damageRange[3][0],damageRange[3][1]]},
			]
		},{
			type: "rangeBar",
			showInLegend: true,
			dataPoints: [
				//{x: 1, y: [damageRange[1][0],damageRange[1][1]]},
				{x: -9, y: [damageRange[2][0],damageRange[2][1]]},
				//{x: 1, y: [damageRange[3][0],damageRange[3][1]]},
			]
		}
			*/
		]

	});
	var chartB = new CanvasJS.Chart("chartContainerB",
	{
		exportEnabled: true,
		axisY: {
			includeZero:true,
			title: "ダメージ値",
			interval: 10,
		},
		axisX: {
			interval:10,
			title: "Departments",
		},
		data: [
		{
			type: "rangeBar",
			showInLegend: true,
			yValueFormatString: "#0.##",
			indexLabel: "{y[#index]}",
			dataPoints: [   // Y: [Low, High]
				{x: 10, y:itemData[1], label: "Data Scientist"},
				{x: 20, y:itemData[2], label: "Product Manager" },
				{x: 30, y:itemData[3], label: "Web Developer" },
				{x: 40, y:itemData[4], label: "Software Engineer"},
			]
		}
		]
	});
	var chartC = new CanvasJS.Chart("chartContainerC",
	{
		exportEnabled: true,
		axisY: {
			includeZero:true,
			title: "ダメージ値",
			interval: 10,
		},
		axisX: {
			interval:10,
			title: "Departments",
		},
		data: [
		{
			type: "rangeBar",
			showInLegend: true,
			yValueFormatString: "#0.##",
			indexLabel: "{y[#index]}",
			dataPoints: [   // Y: [Low, High]
				{x: 10, y:itemData[1], label: "Data Scientist"},
				{x: 20, y:itemData[2], label: "Product Manager" },
				{x: 30, y:itemData[3], label: "Web Developer" },
				{x: 40, y:itemData[4], label: "Software Engineer"},
			]
		}
		]
	});
	var chartD = new CanvasJS.Chart("chartContainerD",
	{
		exportEnabled: true,
		axisY: {
			includeZero:true,
			title: "ダメージ値",
			interval: 10,
		},
		axisX: {
			interval:10,
			title: "Departments",
		},
		data: [
		{
			type: "rangeBar",
			showInLegend: true,
			yValueFormatString: "#0.##",
			indexLabel: "{y[#index]}",
			dataPoints: [   // Y: [Low, High]
				{x: 10, y:itemData[1], label: "Data Scientist"},
				{x: 20, y:itemData[2], label: "Product Manager" },
				{x: 30, y:itemData[3], label: "Web Developer" },
				{x: 40, y:itemData[4], label: "Software Engineer"},
			]
		}
		]
	});
	chartA.render();
	chartB.render();
	chartC.render();
	chartD.render();

	$("#refresh").click(function () {

	//var length = chart.options.data[0].dataPoints.length;
	var damage = parseInt($("#damageA").val());
	//alert(damage);
	//alert("hoge");
	//alert(damageCal(1950));
	var temperature = $("#temperature").val();
	damageRange = damageCal(temp);
	//alert(damageRange);
	chartA.options.data[0].dataPoints[1].y[1] = damage;
	for(var i = 2; i <= 8; i++){
		chartA.options.data[0].dataPoints[i].y[0] += damage;
		chartA.options.data[0].dataPoints[i].y[1] += damage;
	}
	chartA.render();

	});

}
