/* eslint-disable standard/no-callback-literal */
Potree.loadPanoJason = function (path, name, callback) {
	let loaded = function (pointcloud) {
		pointcloud.name = name;
		callback({type: 'pointcloud_loaded', pointcloud: pointcloud});
	};

	//path = Potree.resourcePath + "/panorama/pano_1/pano_1.json";
	parentPath = path.substring(0, path.lastIndexOf('/'));

	// load panorama
	if (!path) {
		// TODO: callback? comment? Hello? Bueller? Anyone?
	} else if (path.indexOf('.json') > 0) {
		var panoramas = [];

		//$.getJSON("../resources/panorama/pano_1/pano_1.json", function (data){
		$.getJSON( path, function (data){
			for (var i = 0; i < data.Registration.length; i++) {
				var pano = new Potree.Panorama();
				var jsData = data.Registration[i];
				pano.fromJSON(parentPath, jsData);
				panoramas.push(pano);
			}

			callback(panoramas);
		});

		//callback(panoramas);
	} else {
		//callback({'type': 'loading_failed'});
		console.error(new Error(`failed to load point cloud from URL: ${path}`));
	}
};