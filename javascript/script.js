window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer",
	{
		title:{
			text: itemData[0][0],
		},
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
	chart.render();

	$("#refresh").click(function () {

	//var length = chart.options.data[0].dataPoints.length;
	var damage = $("#damage").val();
	alert(damage);
	//alert("hoge");
	chart.options.title.text = "Last DataPoint Updated";
	chart.options.data[0].dataPoints[0].y = [80, parseInt(damage) ];
	chart.render();

	});

}
