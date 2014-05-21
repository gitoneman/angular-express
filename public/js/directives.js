'use strict';

/* Directives */

angular.module('myApp.directives', []).
  directive('appVersion', function (version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }).
  directive('chart', function (version) {
    return function(scope, elm, attrs) {
    	var myChart = "";

		attrs.$observe("row",function(row){
			var width = 1/row*100;
			elm.parent().css("width",width+"%");
			myChart.resize();
		});

		attrs.$observe('chart', function(value) {
			value = JSON.parse(value);
	
			myChart = echarts.init(elm[0]);
		    var option = {
		    	title : {
		    		text: value.name
		    	},
		        tooltip : {
		            trigger: 'axis'
		        },
		        legend: value.legend,
		        toolbox: {
		            show : true,
		            feature : {
		                
		                dataView : {show: true, readOnly: false},
		                magicType : {show: true, type: ['line', 'bar',]},
		                
		                saveAsImage : {show: true}
		            }
		        },
		        calculable : true,
		        xAxis : value.xAxis,
		        yAxis : value.yAxis,
		        series : value.series
		    }
		    myChart.setOption(option);

		    $(window).on("resize",function(){
		    	myChart.resize();
		    })
		    
		});
    	
    }
  });
  