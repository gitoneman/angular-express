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
	})	
    .directive("map",function(){
    	return {
    		
		 	link: function(scope, elm, attrs) {
		 		var geolocation = new BMap.Geolocation();
		 			
		 		
				geolocation.getCurrentPosition(function(r){
				    if(this.getStatus() == BMAP_STATUS_SUCCESS){
				    	
				    	var point = new BMap.Point(r.point);    // 创建点坐标				
						map.centerAndZoom(point,15);
				        var mk = new BMap.Marker(r.point);
				        map.addOverlay(mk);
				        map.panTo(r.point);
				    }
				    else {
				        // alert('failed'+this.getStatus());
				    } 
				            
				})

				var map = new BMap.Map(elm.attr("id"));            // 创建Map实例
				map.centerAndZoom("杭州",12);               
				map.enableScrollWheelZoom();
				map.addControl(new BMap.NavigationControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT}));
		 		map.addControl(new BMap.MapTypeControl()); 
 		 // 		var traffic = new BMap.TrafficLayer();        // 创建交通流量图层实例    
				// map.addTileLayer(traffic);

				var local = new BMap.LocalSearch(map, {
				  renderOptions:{map: map}
				});
				attrs.$observe("place",function(value){
					local.search(value);
				})
				
				// var transit = new BMap.TransitRoute(map, {    
				// 	renderOptions: {map: map}    
				// });    
				// transit.search("西湖", "武林广场");
				// var driving = new BMap.DrivingRoute(map, {    
				// 	renderOptions: {    
				// 	   map: map,    
				// 	   autoViewport: true    
				// 	}    
				// });    
				// driving.search("中财大厦", "武林广场"); 


 		 		// map.addEventListener("click",function(e){
 		 		// 	var marker = new BMap.Marker(e.point);
 		 		// 	marker.enableDragging();
 		 		// 	marker.setAnimation(BMAP_ANIMATION_BOUNCE);
 		 		// 	map.addOverlay(marker);
 		 		// });

				var myDis = new BMapLib.DistanceTool(map);
				var myDrag = new BMapLib.RectangleZoom(map, {
				    followText: "拖拽鼠标进行操作"
				});
				attrs.$observe("opt",function(value){
					value = JSON.parse(value);


					if(value.rule){
			 			myDis.open();
	 		 		}else{
	 		 			myDis.close();
	 		 		}

	 		 		if(value.RectangleZoom){
						myDrag.open();
	 		 		}else{
						myDrag.close();
	 		 		}
				});
 		 		
	    	}
    	}
    	
    });
  