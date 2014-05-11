/*
 * Serve JSON to our AngularJS client
 */

exports.name = function (req, res) {
  res.json({
    name: 'Bob',
    rows: [

    	[
			{
				name:"chart1",
				type:"bar",
				series:[
		            {
		                name:'蒸发量',
		                type:'bar',
		                data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
		            },
		            {
		                name:'降水量',
		                type:'bar',
		                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
		            }
		        ]
			},
			{
				name:"chart3",
				type:"bar",
				series:[
		            {
		                name:'蒸发量',
		                type:'bar',
		                data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
		            },
		            {
		                name:'降水量',
		                type:'bar',
		                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
		            }
		        ]
			}
    	],
    	[
    		
    		{
    			name:"chart2",
    			type:"bar",
    			series:[
		            {
		                name:'蒸发量',
		                type:'bar',
		                data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
		            },
		            {
		                name:'降水量',
		                type:'bar',
		                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
		            }
		        ]
    		}

    	]
    	
    	
    ]
  });
};