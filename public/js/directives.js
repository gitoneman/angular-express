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
			var width = 1/row*100 -2;
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
		        legend: {
		            data:['蒸发量','降水量']
		        },
		        toolbox: {
		            show : true,
		            feature : {
		                mark : {show: true},
		                dataView : {show: true, readOnly: false},
		                magicType : {show: true, type: ['line', 'bar']},
		                restore : {show: true},
		                saveAsImage : {show: true}
		            }
		        },
		        calculable : true,
		        xAxis : [
		            {
		                type : 'category',
		                data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
		            }
		        ],
		        yAxis : [
		            {
		                type : 'value',
		                splitArea : {show : true}
		            }
		        ],
		        series : value.series
		    }
		    myChart.setOption(option);

		    $(window).on("resize",function(){
		    	myChart.resize();
		    })

		    
		});
    	
    };
  });
  