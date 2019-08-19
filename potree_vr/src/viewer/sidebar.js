initSidebar = (viewer) => {
	let createToolIcon = function (icon, title, callback) {
		let element = $(`
			<img src="${icon}"
				style="width: 32px; height: 32px"
				class="button-icon"
				data-i18n="${title}" 
				onclick="$(this).click(function() {
					$('.button-icon').removeClass('button-icon-active');
					$(this).addClass('button-icon-active');
				})"/>
		`);

		element.click(callback);

		return element;
	};

	let createInput = function () {
		let element = $(`
			<div class="annotation-wrapper">
				<div class="annotation-title-wrapper"><label>Title：</label><input id="annotation-title" type="text" name="" placeholder="Click this input title."/></div>
				<div class="annotation-description-wrapper"><label>Description：</label><textarea id="annotation-description" name="" placeholder="Click this input description."></textarea></div>
				<div id="annotation-submit">SUBMIT</div>
				<div id="annotation-cancel">CANCEL</div>
			</div>
			<div class="mask"></div>
		`);

		return element;
	};

	let measuringTool = new Potree.MeasuringTool(viewer);
	let profileTool = new Potree.ProfileTool(viewer);
	let volumeTool = new Potree.VolumeTool(viewer);
	let annotationTool = new Potree.AnnotationTool(viewer);

	function initToolbar () {

		// ANNOTATION
		let an = $("#annotation");
		an.append(createToolIcon(
			Potree.resourcePath + '/icons/annotations.png',
			'[title]tt.annotation'
		));
		$(".potree_container").append(createInput());
		$("#annotation img").click(function() {
			$(".mask").css("display", "block");
			$(".annotation-wrapper").css("display", "block");	
		})
		// submit按钮点击函数
		$("#annotation-submit").click(function() {
			let title = $("#annotation-title").val();
			let description = $("#annotation-description").val();
			let an = annotationTool.startInsertion({
				showDistances: false,
				showAngles: false,
				showCoordinates: true,
				showArea: false,
				closed: true,
				maxMarkers: 1,
				name: 'Annotation',
				title: title,
				description: description});
			$(".mask").css("display", "none");
			$(".annotation-wrapper").css("display", "none");
		});
		// 取消按钮
		$("#annotation-cancel").click(function() {
			$(".mask").css("display", "none");
			$(".annotation-wrapper").css("display", "none");
		});	
		// ANGLE
		let elToolbar = $('#tools');
		elToolbar.append(createToolIcon(
			Potree.resourcePath + '/icons/angle.png',
			'[title]tt.angle_measurement',
			function () {
				$('#menu_measurements').next().slideDown();
				let measurement = measuringTool.startInsertion({
					showDistances: false,
					showAngles: true,
					showArea: false,
					closed: true,
					maxMarkers: 3,
					name: 'Angle'});

				let measurementsRoot = $("#jstree_scene").jstree().get_json("measurements");
				let jsonNode = measurementsRoot.children.find(child => child.data.uuid === measurement.uuid);
				$.jstree.reference(jsonNode.id).deselect_all();
				$.jstree.reference(jsonNode.id).select_node(jsonNode.id);
			}
		));

		// POINT
		elToolbar.append(createToolIcon(
			Potree.resourcePath + '/icons/point.svg',
			'[title]tt.point_measurement',
			function () {
				$('#menu_measurements').next().slideDown();
				let measurement = measuringTool.startInsertion({
					showDistances: false,
					showAngles: false,
					showCoordinates: true,
					showArea: false,
					closed: true,
					maxMarkers: 1,
					name: 'Point'});

				let measurementsRoot = $("#jstree_scene").jstree().get_json("measurements");
				let jsonNode = measurementsRoot.children.find(child => child.data.uuid === measurement.uuid);
				$.jstree.reference(jsonNode.id).deselect_all();
				$.jstree.reference(jsonNode.id).select_node(jsonNode.id);
			}
		));

		// DISTANCE
		elToolbar.append(createToolIcon(
			Potree.resourcePath + '/icons/distance.svg',
			'[title]tt.distance_measurement',
			function () {
				$('#menu_measurements').next().slideDown();
				let measurement = measuringTool.startInsertion({
					showDistances: true,
					showArea: false,
					closed: false,
					name: 'Distance'});

				let measurementsRoot = $("#jstree_scene").jstree().get_json("measurements");
				let jsonNode = measurementsRoot.children.find(child => child.data.uuid === measurement.uuid);
				$.jstree.reference(jsonNode.id).deselect_all();
				$.jstree.reference(jsonNode.id).select_node(jsonNode.id);
			}
		));

		// HEIGHT
		elToolbar.append(createToolIcon(
			Potree.resourcePath + '/icons/height.svg',
			'[title]tt.height_measurement',
			function () {
				$('#menu_measurements').next().slideDown();
				let measurement = measuringTool.startInsertion({
					showDistances: false,
					showHeight: true,
					showArea: false,
					closed: false,
					maxMarkers: 2,
					name: 'Height'});

				let measurementsRoot = $("#jstree_scene").jstree().get_json("measurements");
				let jsonNode = measurementsRoot.children.find(child => child.data.uuid === measurement.uuid);
				$.jstree.reference(jsonNode.id).deselect_all();
				$.jstree.reference(jsonNode.id).select_node(jsonNode.id);
			}
		));

		//Z_HEIGHT
		elToolbar.append(createToolIcon(
			Potree.resourcePath + '/icons/z-height.png',
			'[title]tt.z_height_measurement',
			function () {
				$('#menu_measurements').next().slideDown();
				let measurement = measuringTool.startInsertion({
					showDistances: false,
					showHeight: true,
					showArea: false,
					closed: false,
					maxMarkers: 2,
					name: 'Height',
					ifz: true});

				let measurementsRoot = $("#jstree_scene").jstree().get_json("measurements");
				let jsonNode = measurementsRoot.children.find(child => child.data.uuid === measurement.uuid);
				$.jstree.reference(jsonNode.id).deselect_all();
				$.jstree.reference(jsonNode.id).select_node(jsonNode.id);
			}
		));

		//NORMAL_VECTOR
		elToolbar.append(createToolIcon(
			Potree.resourcePath + '/icons/normalVector.svg',
			'[title]tt.normalVector_measurement',
			function () {
				$('#menu_measurements').next().slideDown();
				let measurement = measuringTool.startInsertion({
					showDistances: true,
					showHeight: false,
					showArea: false,
					closed: false,
					maxMarkers: 2,
					name: 'NORMAL_VECTOR',
					normalVectorDistances: true
				});

				let measurementsRoot = $("#jstree_scene").jstree().get_json("measurements");
				let jsonNode = measurementsRoot.children.find(child => child.data.uuid === measurement.uuid);
				$.jstree.reference(jsonNode.id).deselect_all();
				$.jstree.reference(jsonNode.id).select_node(jsonNode.id);
			}
		));
		
		// AREA
		elToolbar.append(createToolIcon(
			Potree.resourcePath + '/icons/area.svg',
			'[title]tt.area_measurement',
			function () {
				$('#menu_measurements').next().slideDown();
				let measurement = measuringTool.startInsertion({
					showDistances: true,
					showArea: true,
					closed: true,
					name: 'Area'});

				let measurementsRoot = $("#jstree_scene").jstree().get_json("measurements");
				let jsonNode = measurementsRoot.children.find(child => child.data.uuid === measurement.uuid);
				$.jstree.reference(jsonNode.id).deselect_all();
				$.jstree.reference(jsonNode.id).select_node(jsonNode.id);
			}
		));

		// VOLUME
		elToolbar.append(createToolIcon(
			Potree.resourcePath + '/icons/volume.svg',
			'[title]tt.volume_measurement',
			function () { 
				let volume = volumeTool.startInsertion(); 

				let measurementsRoot = $("#jstree_scene").jstree().get_json("measurements");
				let jsonNode = measurementsRoot.children.find(child => child.data.uuid === volume.uuid);
				$.jstree.reference(jsonNode.id).deselect_all();
				$.jstree.reference(jsonNode.id).select_node(jsonNode.id);
			}
		));

		// PROFILE
		elToolbar.append(createToolIcon(
			Potree.resourcePath + '/icons/profile.svg',
			'[title]tt.height_profile',
			function () {
				$('#menu_measurements').next().slideDown(); ;
				let profile = profileTool.startInsertion();

				let measurementsRoot = $("#jstree_scene").jstree().get_json("measurements");
				let jsonNode = measurementsRoot.children.find(child => child.data.uuid === profile.uuid);
				$.jstree.reference(jsonNode.id).deselect_all();
				$.jstree.reference(jsonNode.id).select_node(jsonNode.id);
			}
		));

		// REMOVE ALL
		elToolbar.append(createToolIcon(
			Potree.resourcePath + '/icons/reset_tools.svg',
			'[title]tt.remove_all_measurement',
			function () {
				viewer.scene.removeAllMeasurements();
			}
		));

	}

	function initcameraset () {
		let cameraset = $('#camera_tools');
		let elScene = $("#point_exprt");
		let elProperties = elScene.next().find("#piont_data");
		//添加点轨迹功能

			cameraset.append(createToolIcon(
			Potree.resourcePath + '/icons/animate_path.svg',
			'[title]tt.animate_path',
			function () {
				$('#menu_measurements').next().slideDown(100); //slideDown 显示隐藏的被选元素
				let measurement = measuringTool.beginInsertion({
					closed:false
				});
				let measurementsRoot = $("#jstree_scene").jstree().get_json("measurements");
				let jsonNode = measurementsRoot.children.find(child => child.data.uuid === measurement.uuid);
				$.jstree.reference(jsonNode.id).deselect_all();//获取一个已存在实例的引用--全部取消
				$.jstree.reference(jsonNode.id).select_node(jsonNode.id);//选取点
			}))
		
		//删除点轨迹功能
	
		let propertiesPanel = new Potree.PropertiesPanel(elProperties, viewer);
		propertiesPanel.setScene(viewer.scene);

		//撤销功能
			
		cameraset.append(createToolIcon(
			Potree.resourcePath + '/icons/reset_tools.svg',//全部取消所做点和折线
			'[title]tt.remove_all_path_point',
			function () {
				viewer.scene.removeAllPathPoints();
			}
		));


		//下载功能，getjson

		let geoJSONIcon = `${Potree.resourcePath}/icons/file_geojson.svg`;
		elScene.append(`
			<br>
			<a href="#" download="measure.json"><img name="geojson_export_button" src="${geoJSONIcon}"
			class="button-icon" style="height: 24px" /></a>
		`);
		let elDownloadJSON = elScene.find("img[name=geojson_export_button]").parent();
		elDownloadJSON.click( () => {
			$('#animate_control').css("display","block");
			let scene = viewer.scene;
			let pathpoints = [...scene.pathpoints, ...scene.profiles, ...scene.volumes];//获取场景信息
			let position2 = [];//用不到了，关键是point_pos
			let geoJson = Potree.GeoJSONExporter.toString(pathpoints);//获取当前场景中的工具测量的数据信息——返回鼠标确认点的坐标
			
			var geoJson_obj =  JSON.parse(geoJson);//将json字符串转换成json数组
			let point_pos=geoJson_obj.features[0].geometry.coordinates;
		
			let url = window.URL.createObjectURL(new Blob([geoJson], {type: 'data:application/octet-stream'}));
			elDownloadJSON.attr('href', url);
			position2.concat(GetJson(url));

			initanimationPath(point_pos);
		})
			
		//getjson函数原型
		function GetJson(url){
			$(function(){
			$.getJSON(url, function (data){
				var $jsontip = $("#jsonTip");
				var strHtml = [];
				var position1 = [];
				//存储数据的变量
				$.each(data, function (infoIndex, info){
					strHtml.concat(info["coordinates"]); 
				}) 
				position1.concat(strHtml);
				return position1;
				})
			})
    	}

	//动画路径函数
	function initanimationPath (array)
	{
		console.log("执行了动画函数");
		let path=array.map(v => new THREE.Vector3(...v));;
		console.log(path);
		
		let animationPath = new Potree.AnimationPath(path);
		animationPath.closed = true;
		{ //渲染路径    (把各个点用线连起来
			let geometry = animationPath.getGeometry();
			let material = new THREE.LineBasicMaterial();
			let line = new THREE.Line(geometry, material, {closed: animationPath.closed});
			viewer.scene.scene.add(line);
			
		}

		{ // 渲染路径的控制点  （把各个点红色标记出来
			for(let pos of path){
				let sg = new THREE.SphereGeometry(0.2, 32, 32);
				let sm = new THREE.MeshBasicMaterial({color: 0xff0000});
				let s = new THREE.Mesh(sg, sm); 
				s.position.copy(pos);
				viewer.scene.scene.add(s);
				
			}
		}

		let sphere = new THREE.Mesh(
			new THREE.SphereGeometry(0.5, 32, 32),
			new THREE.MeshNormalMaterial()
		);
		viewer.scene.scene.add(sphere);
		let camera = viewer.scene.getActiveCamera();


		{ // 以一定速度从头到尾进行动画制作  （使小球运动
			let start = 0;
			let end = Infinity; 
			let speed = 0.4;    //运动速度
			let animation = animationPath.animate(start, end, speed, t => {
				animation.repeat = true;

				// t是介于0和1之间的值。
				// 使用getPoint（t）从t映射到动画路径上的位置
				let point = animation.getPoint(t);
				sphere.position.copy(point);

				camera.position.x = sphere.position.x;
				camera.position.y = sphere.position.y;
				camera.position.z = sphere.position.z;
				
				viewer.renderer.render(viewer.scene.scene, camera);
				
			});
			window.animation = animation;
		} 
		window.animationPath = animationPath;
		}
	}

	function initScene(){

		let elScene = $("#menu_scene");
		let elObjects = elScene.next().find("#scene_objects");
		let elProperties = elScene.next().find("#scene_object_properties");
		

		{
			let elExport = elScene.next().find("#scene_export");

			let geoJSONIcon = `${Potree.resourcePath}/icons/file_geojson.svg`;
			let dxfIcon = `${Potree.resourcePath}/icons/file_dxf.svg`;

			elExport.append(`
				<span data-i18n="elsecontrol.Export"></span> <br>
				<a href="#" download="annotation.json"><img name="anjson_export_button" src="${geoJSONIcon}" class="button-icon" style="height: 24px" /></a>
				<a href="#" download="measure.json"><img name="geojson_export_button" src="${geoJSONIcon}" class="button-icon" style="height: 24px" /></a>
				<a href="#" download="measure.dxf"><img name="dxf_export_button" src="${dxfIcon}" class="button-icon" style="height: 24px" /></a>
			`);

			let anDownloadJSON = elExport.find("img[name=anjson_export_button]").parent();
			anDownloadJSON.click( () => {
				let scene = viewer.scene;
				let annotations = scene.annotations;

				let anJson = Potree.GeoJSONExporter.anJSON(annotations);
				let url = window.URL.createObjectURL(new Blob([anJson], {type: 'data:application/octet-stream'}));
				anDownloadJSON.attr('href', url);
			});	

			let elDownloadJSON = elExport.find("img[name=geojson_export_button]").parent();
			elDownloadJSON.click( () => {
				let scene = viewer.scene;
				let measurements = [...scene.measurements, ...scene.profiles, ...scene.volumes];

				let geoJson = Potree.GeoJSONExporter.toString(measurements);

				let url = window.URL.createObjectURL(new Blob([geoJson], {type: 'data:application/octet-stream'}));
				elDownloadJSON.attr('href', url);
			});

			let elDownloadDXF = elExport.find("img[name=dxf_export_button]").parent();
			elDownloadDXF.click( () => {
				let scene = viewer.scene;
				let measurements = [...scene.measurements, ...scene.profiles, ...scene.volumes];

				let dxf = Potree.DXFExporter.toString(measurements);

				let url = window.URL.createObjectURL(new Blob([dxf], {type: 'data:application/octet-stream'}));
				elDownloadDXF.attr('href', url);
			});
		}

		let propertiesPanel = new Potree.PropertiesPanel(elProperties, viewer);
		propertiesPanel.setScene(viewer.scene);
		
		localStorage.removeItem('jstree');

		let tree = $(`<div id="jstree_scene"></div>`);
		elObjects.append(tree);

		tree.jstree({
			'plugins': ["checkbox", "state"],
			'core': {
				"dblclick_toggle": false,
				"state": {
					"checked" : true
				},
				'check_callback': true,
				"expand_selected_onload": true
			},
			"checkbox" : {
				"keep_selected_style": true,
				"three_state": false,
				"whole_node": false,
				"tie_selection": false,
			},
		});

		let createNode = (parent, text, icon, object) => {
			let nodeID = tree.jstree('create_node', parent, { 
					"text": text, 
					"icon": icon,
					"data": object
				}, 
				"last", false, false);
			
			if(object.visible){
				tree.jstree('check_node', nodeID);
			}else{
				tree.jstree('uncheck_node', nodeID);
			}

			return nodeID;
		}

		let pcID = tree.jstree('create_node', "#", { "text": "<b>Point Clouds</b>", "id": "pointclouds"}, "last", false, false);
		let measurementID = tree.jstree('create_node', "#", { "text": "<b>Measurements</b>", "id": "measurements" }, "last", false, false);
		let annotationsID = tree.jstree('create_node', "#", { "text": "<b>Annotations</b>", "id": "annotations" }, "last", false, false);
		let panoramaID = tree.jstree('create_node', "#", { "text": "<b>Panoramas</b>", "id": "panoramas" }, "last", false, false);
		let otherID = tree.jstree('create_node', "#", { "text": "<b>Other</b>", "id": "other" }, "last", false, false);

		tree.jstree("check_node", pcID);
		tree.jstree("check_node", measurementID);
		tree.jstree("check_node", annotationsID);
		tree.jstree("check_node", panoramaID);
		tree.jstree("check_node", otherID);

		tree.on('create_node.jstree', function(e, data){
			tree.jstree("open_all");
		});

		tree.on("select_node.jstree", function(e, data){
			let object = data.node.data;
			propertiesPanel.set(object);

			viewer.inputHandler.deselectAll();

			if(object instanceof Potree.Volume){
				viewer.inputHandler.toggleSelection(object);
			}

			$(viewer.renderer.domElement).focus();
		});

		tree.on("deselect_node.jstree", function(e, data){
			propertiesPanel.set(null);
		});

		tree.on("delete_node.jstree", function(e, data){
			propertiesPanel.set(null);
		});

		tree.on('dblclick','.jstree-anchor', function (e) {
			let instance = $.jstree.reference(this);
			let node = instance.get_node(this);
			let object = node.data;

			// ignore double click on checkbox
			if(e.target.classList.contains("jstree-checkbox")){
				return;
			}

			if(object instanceof Potree.PointCloudTree){
				let box = viewer.getBoundingBox([object]);
				let node = new THREE.Object3D();
				node.boundingBox = box;
				viewer.zoomTo(node, 1, 500);
			}else if(object instanceof Potree.Measure){
				let points = object.points.map(p => p.position);
				let box = new THREE.Box3().setFromPoints(points);
				if(box.getSize().length() > 0){
					let node = new THREE.Object3D();
					node.boundingBox = box;
					viewer.zoomTo(node, 2, 500);
				}
			}else if(object instanceof Potree.Profile){
				let points = object.points;
				let box = new THREE.Box3().setFromPoints(points);
				if(box.getSize().length() > 0){
					let node = new THREE.Object3D();
					node.boundingBox = box;
					viewer.zoomTo(node, 1, 500);
				}
			}else if(object instanceof Potree.Volume){
				
				let box = object.boundingBox.clone().applyMatrix4(object.matrixWorld);

				if(box.getSize().length() > 0){
					let node = new THREE.Object3D();
					node.boundingBox = box;
					viewer.zoomTo(node, 1, 500);
				}
			}else if(object instanceof Potree.Annotation){
				object.moveHere(viewer.scene.getActiveCamera());
			}else if(object instanceof Potree.PolygonClipVolume){
				let dir = object.camera.getWorldDirection();
				let target;

				if(object.camera instanceof THREE.OrthographicCamera){
					dir.multiplyScalar(object.camera.right)
					target = new THREE.Vector3().addVectors(object.camera.position, dir);
					viewer.setCameraMode(Potree.CameraMode.ORTHOGRAPHIC);
				}else if(object.camera instanceof THREE.PerspectiveCamera){
					dir.multiplyScalar(viewer.scene.view.radius);
					target = new THREE.Vector3().addVectors(object.camera.position, dir);
					viewer.setCameraMode(Potree.CameraMode.PERSPECTIVE);
				}
				
				viewer.scene.view.position.copy(object.camera.position);
				viewer.scene.view.lookAt(target);
			}else if(object instanceof THREE.SpotLight){
				let distance = (object.distance > 0) ? object.distance / 4 : 5 * 1000;
				let position = object.position;
				let target = new THREE.Vector3().addVectors(
					position, 
					object.getWorldDirection().multiplyScalar(distance));

				viewer.scene.view.position.copy(object.position);
				viewer.scene.view.lookAt(target);
			}else if(object instanceof Potree.Panorama){
				let box = new THREE.Box3().setFromObject(object);
				//object.setuseThumbnail(false);
				viewer.scene.zoomToPano(object);

				if(box.getSize().length() > 0){
					let node = new THREE.Object3D();
					node.boundingBox = box;
					viewer.zoomToPano(node, 1, 500);
					viewer.setNavigationMode(Potree.FirstPersonControls);
					viewer.fpControls.lockElevation = true;
				}
			} else if(object instanceof THREE.Object3D){
				let box = new THREE.Box3().setFromObject(object);

				if(box.getSize().length() > 0){
					let node = new THREE.Object3D();
					node.boundingBox = box;
					viewer.zoomTo(node, 1, 500);
				}
			}
		});

		tree.on("uncheck_node.jstree", function(e, data){
			let object = data.node.data;

			if(object){
				object.visible = false;
			}
		});

		tree.on("check_node.jstree", function(e, data){
			let object = data.node.data;

			if(object){
				object.visible = true;
			}
		});


		let onPointCloudAdded = (e) => {
			let pointcloud = e.pointcloud;
			let cloudIcon = `${Potree.resourcePath}/icons/cloud.svg`;
			createNode(pcID, pointcloud.name, cloudIcon, pointcloud);
		};

		let onMeasurementAdded = (e) => {
			let measurement = e.measurement;
			let icon = Potree.getMeasurementIcon(measurement);
			createNode(measurementID, measurement.name, icon, measurement);
		};

		let onVolumeAdded = (e) => {
			let volume = e.volume;
			let icon = Potree.getMeasurementIcon(volume);
			let node = createNode(measurementID, volume.name, icon, volume);

			volume.addEventListener("visibility_changed", () => {
				if(volume.visible){
					tree.jstree('check_node', node);
				}else{
					tree.jstree('uncheck_node', node);
				}
			});
		};

		let onProfileAdded = (e) => {
			let profile = e.profile;
			let icon = Potree.getMeasurementIcon(profile);
			createNode(measurementID, profile.name, icon, profile);
		};

		let onAnnotationAdded = (e) => {
			let annotation = e.annotation;

			let annotationIcon = `${Potree.resourcePath}/icons/annotation.svg`;
			let parentID = this.annotationMapping.get(annotation.parent);
			let annotationID = createNode(parentID, annotation.title, annotationIcon, annotation);
			this.annotationMapping.set(annotation, annotationID);

			//let node = createNode(annotationsID, annotation.name, icon, volume);
			//oldScene.annotations.removeEventListener('annotation_added', this.onAnnotationAdded);
		};

		let onPanoramaAdded = (e) => {
			let panorama = e.panorama;
			//let icon = Potree.getMeasurementIcon(panorama);
			let icon = `${Potree.resourcePath}/icons/sphere.svg`;
			createNode(panoramaID, panorama.name, icon, panorama);
		};

		viewer.scene.addEventListener("pointcloud_added", onPointCloudAdded);
		viewer.scene.addEventListener("measurement_added", onMeasurementAdded);
		viewer.scene.addEventListener("profile_added", onProfileAdded);
		viewer.scene.addEventListener("volume_added", onVolumeAdded);
		viewer.scene.addEventListener("polygon_clip_volume_added", onVolumeAdded);
		viewer.scene.annotations.addEventListener("annotation_added", onAnnotationAdded);
		viewer.scene.addEventListener("panorama_added", onPanoramaAdded);

		let onMeasurementRemoved = (e) => {
			let measurementsRoot = $("#jstree_scene").jstree().get_json("measurements");
			let jsonNode = measurementsRoot.children.find(child => child.data.uuid === e.measurement.uuid);
			
			tree.jstree("delete_node", jsonNode.id);
		};

		let onVolumeRemoved = (e) => {
			let measurementsRoot = $("#jstree_scene").jstree().get_json("measurements");
			let jsonNode = measurementsRoot.children.find(child => child.data.uuid === e.volume.uuid);
			
			tree.jstree("delete_node", jsonNode.id);
		};

		let onProfileRemoved = (e) => {
			let measurementsRoot = $("#jstree_scene").jstree().get_json("measurements");
			let jsonNode = measurementsRoot.children.find(child => child.data.uuid === e.profile.uuid);
			
			tree.jstree("delete_node", jsonNode.id);
		};

		let onPanoramaRemoved = (e) => {
			let panoramasRoot = $("#jstree_scene").jstree().get_json("panoramas");
			let jsonNode = panoramasRoot.children.find(child => child.data.uuid === e.panorama.uuid);
			
			tree.jstree("delete_node", jsonNode.id);
		};

		viewer.scene.addEventListener("measurement_removed", onMeasurementRemoved);
		viewer.scene.addEventListener("volume_removed", onVolumeRemoved);
		viewer.scene.addEventListener("profile_removed", onProfileRemoved);
		viewer.scene.addEventListener("panorama_removed", onPanoramaRemoved);

		{
			let annotationIcon = `${Potree.resourcePath}/icons/annotation.svg`;
			this.annotationMapping = new Map(); 
			this.annotationMapping.set(viewer.scene.annotations, annotationsID);
			viewer.scene.annotations.traverseDescendants(annotation => {
				let parentID = this.annotationMapping.get(annotation.parent);
				let annotationID = createNode(parentID, annotation.title, annotationIcon, annotation);
				this.annotationMapping.set(annotation, annotationID);
			});
		}

		for(let pointcloud of viewer.scene.pointclouds){
			onPointCloudAdded({pointcloud: pointcloud});
		}

		for(let measurement of viewer.scene.measurements){
			onMeasurementAdded({measurement: measurement});
		}

		for(let volume of [...viewer.scene.volumes, ...viewer.scene.polygonClipVolumes]){
			onVolumeAdded({volume: volume});
		}

		for(let profile of viewer.scene.profiles){
			onProfileAdded({profile: profile});
		}

		for(let panorama of viewer.scene.panoramas){
			onPanoramaAdded({panorama: panorama});
		}

		{
			createNode(otherID, "Camera", null, new THREE.Camera());
		}

		viewer.addEventListener("scene_changed", (e) => {
			propertiesPanel.setScene(e.scene);

			e.oldScene.removeEventListener("pointcloud_added", onPointCloudAdded);
			e.oldScene.removeEventListener("measurement_added", onMeasurementAdded);
			e.oldScene.removeEventListener("profile_added", onProfileAdded);
			e.oldScene.removeEventListener("volume_added", onVolumeAdded);
			e.oldScene.removeEventListener("polygon_clip_volume_added", onVolumeAdded);
			e.oldScene.removeEventListener("measurement_removed", onMeasurementRemoved);
			e.oldScene.removeEventListener("panorama_added", onPanoramaAdded);

			e.scene.addEventListener("pointcloud_added", onPointCloudAdded);
			e.scene.addEventListener("measurement_added", onMeasurementAdded);
			e.scene.addEventListener("profile_added", onProfileAdded);
			e.scene.addEventListener("volume_added", onVolumeAdded);
			e.scene.addEventListener("polygon_clip_volume_added", onVolumeAdded);
			e.scene.addEventListener("measurement_removed", onMeasurementRemoved);
			e.scene.addEventListener("panorama_added", onPanoramaAdded);
		});

	}

	function initClippingTool() {


		viewer.addEventListener("cliptask_changed", function(event){
			console.log("TODO");
		});

		viewer.addEventListener("clipmethod_changed", function(event){
			console.log("TODO");
		});

		{
			let elClipTask = $("#cliptask_options");
			elClipTask.selectgroup({title: ""});

			elClipTask.find("input").click( (e) => {
				viewer.setClipTask(Potree.ClipTask[e.target.value]);
			});

			let currentClipTask = Object.keys(Potree.ClipTask)
				.filter(key => Potree.ClipTask[key] === viewer.clipTask);
			elClipTask.find(`input[value=${currentClipTask}]`).trigger("click");
		}

		{
			let elClipMethod = $("#clipmethod_options");
			elClipMethod.selectgroup({title: ""});

			elClipMethod.find("input").click( (e) => {
				viewer.setClipMethod(Potree.ClipMethod[e.target.value]);
			});

			let currentClipMethod = Object.keys(Potree.ClipMethod)
				.filter(key => Potree.ClipMethod[key] === viewer.clipMethod);
			elClipMethod.find(`input[value=${currentClipMethod}]`).trigger("click");
		}

		let clippingToolBar = $("#clipping_tools");

		// CLIP VOLUME
		clippingToolBar.append(createToolIcon(
			Potree.resourcePath + '/icons/clip_volume.svg',
			'[title]tt.clip_volume',
			() => {
				let item = volumeTool.startInsertion({clip: true}); 

				let measurementsRoot = $("#jstree_scene").jstree().get_json("measurements");
				let jsonNode = measurementsRoot.children.find(child => child.data.uuid === item.uuid);
				$.jstree.reference(jsonNode.id).deselect_all();
				$.jstree.reference(jsonNode.id).select_node(jsonNode.id);
			}
		));

		// CLIP POLYGON
		clippingToolBar.append(createToolIcon(
			Potree.resourcePath + "/icons/clip-polygon.svg",
			"[title]tt.clip_polygon",
			() => {
				let item = viewer.clippingTool.startInsertion({type: "polygon"});

				let measurementsRoot = $("#jstree_scene").jstree().get_json("measurements");
				let jsonNode = measurementsRoot.children.find(child => child.data.uuid === item.uuid);
				$.jstree.reference(jsonNode.id).deselect_all();
				$.jstree.reference(jsonNode.id).select_node(jsonNode.id);
			}
		));

		{// SCREEN BOX SELECT
			let boxSelectTool = new Potree.ScreenBoxSelectTool(viewer);

			clippingToolBar.append(createToolIcon(
				Potree.resourcePath + "/icons/clip-screen.svg",
				"[title]tt.screen_clip_box",
				() => {
					if(!(viewer.scene.getActiveCamera() instanceof THREE.OrthographicCamera)){
						viewer.postMessage(`Switch to Orthographic Camera Mode before using the Screen-Box-Select tool.`, 
							{duration: 2000});
						return;
					}
					
					let item = boxSelectTool.startInsertion();

					let measurementsRoot = $("#jstree_scene").jstree().get_json("measurements");
					let jsonNode = measurementsRoot.children.find(child => child.data.uuid === item.uuid);
					$.jstree.reference(jsonNode.id).deselect_all();
					$.jstree.reference(jsonNode.id).select_node(jsonNode.id);
				}
			));
		}

		{ // REMOVE CLIPPING TOOLS
			clippingToolBar.append(createToolIcon(
				Potree.resourcePath + "/icons/remove.svg",
				"[title]tt.remove_all_measurement",
				() => {

					viewer.scene.removeAllClipVolumes();
				}
			));
		}

	}

	function initClassificationList () {
		let elClassificationList = $('#classificationList');

		let addClassificationItem = function (code, name) {
			let inputID = 'chkClassification_' + code;

			let element = $(`
				<li>
					<label style="whitespace: nowrap">
						<input id="${inputID}" type="checkbox" checked/>
						<span>${name}</span>
					</label>
				</li>
			`);

			let elInput = element.find('input');

			elInput.click(event => {
				viewer.setClassificationVisibility(code, event.target.checked);
			});

			for (var classID in this.viewer.classifications) {
				addClassificationItem(classID, this.viewer.classifications[classID].name);
			}
			elClassificationList.append(element);
		};

		addClassificationItem(0, 'never classified');
		addClassificationItem(1, 'unclassified');
		addClassificationItem(2, 'ground');
		addClassificationItem(3, 'low vegetation');
		addClassificationItem(4, 'medium vegetation');
		addClassificationItem(5, 'high vegetation');
		addClassificationItem(6, 'building');
		addClassificationItem(7, 'low point(noise)');
		addClassificationItem(8, 'key-point');
		addClassificationItem(9, 'water');
		addClassificationItem(12, 'overlap');
	}

	function initAccordion () {
		$('.accordion > h3').each(function () {
			let header = $(this);
			let content = $(this).next();

			//header.addClass('accordion-header ui-widget');
			//content.addClass('accordion-content ui-widget');

			content.hide();

			header.click(function () {
				content.slideToggle();
			});
		});

		let languages = [
			["CN", "cn"],
			["EN", "en"],
			["FR", "fr"],
			["DE", "de"],
			["JP", "jp"]
		];

		let elLanguages = $('#potree_languages');
		for(let i = 0; i < languages.length; i++){
			let [key, value] = languages[i];
			let element = $(`<a>${key}</a>`);
			element.click(() => viewer.setLanguage(value));

			if(i === 0){
				element.css("margin-left", "30px");
			}
			
			elLanguages.append(element);

			if(i < languages.length - 1){
				elLanguages.append($(document.createTextNode(' - ')));	
			}
		}


		// to close all, call
		// $(".accordion > div").hide()

		// to open the, for example, tool menu, call:
		// $("#menu_tools").next().show()
	}

	function initAppearance () {

		$('#sldPointBudget').slider({
			value: viewer.getPointBudget(),
			min: 100 * 1000,
			max: 10 * 1000 * 1000,
			step: 1000,
			slide: function (event, ui) { viewer.setPointBudget(ui.value); }
		});

		$('#sldFOV').slider({
			value: viewer.getFOV(),
			min: 20,
			max: 100,
			step: 1,
			slide: function (event, ui) { viewer.setFOV(ui.value); }
		});

		$('#sldEDLRadius').slider({
			value: viewer.getEDLRadius(),
			min: 1,
			max: 4,
			step: 0.01,
			slide: function (event, ui) { viewer.setEDLRadius(ui.value); }
		});

		$('#sldEDLStrength').slider({
			value: viewer.getEDLStrength(),
			min: 0,
			max: 5,
			step: 0.01,
			slide: function (event, ui) { viewer.setEDLStrength(ui.value); }
		});

		viewer.addEventListener('point_budget_changed', function (event) {
			$('#lblPointBudget')[0].innerHTML = Potree.utils.addCommas(viewer.getPointBudget());
			$('#sldPointBudget').slider({value: viewer.getPointBudget()});
		});

		viewer.addEventListener('fov_changed', function (event) {
			$('#lblFOV')[0].innerHTML = parseInt(viewer.getFOV());
			$('#sldFOV').slider({value: viewer.getFOV()});
		});

		viewer.addEventListener('edl_radius_changed', function (event) {
			$('#lblEDLRadius')[0].innerHTML = viewer.getEDLRadius().toFixed(1);
			$('#sldEDLRadius').slider({value: viewer.getEDLRadius()});
		});

		viewer.addEventListener('edl_strength_changed', function (event) {
			$('#lblEDLStrength')[0].innerHTML = viewer.getEDLStrength().toFixed(1);
			$('#sldEDLStrength').slider({value: viewer.getEDLStrength()});
		});

		viewer.addEventListener('background_changed', function (event) {
			$("input[name=background][value='" + viewer.getBackground() + "']").prop('checked', true);
		});

		$('#lblPointBudget')[0].innerHTML = Potree.utils.addCommas(viewer.getPointBudget());
		$('#lblFOV')[0].innerHTML = parseInt(viewer.getFOV());
		$('#lblEDLRadius')[0].innerHTML = viewer.getEDLRadius().toFixed(1);
		$('#lblEDLStrength')[0].innerHTML = viewer.getEDLStrength().toFixed(1);
		$('#chkEDLEnabled')[0].checked = viewer.getEDLEnabled();
		$('#chkVREnabled')[0].checked=viewer.getVREnabled();
		{
			let elBackground = $(`#background_options`);
			elBackground.selectgroup();

			elBackground.find("input").click( (e) => {
				viewer.setBackground(e.target.value);
			});

			let currentBackground = viewer.getBackground();
			$(`input[name=background_options][value=${currentBackground}]`).trigger("click");
		}

		$('#chkEDLEnabled').click( () => {
			viewer.setEDLEnabled($('#chkEDLEnabled').prop("checked"));
		});
	}

	function initNavigation () {
		let elNavigation = $('#navigation');
		let sldMoveSpeed = $('#sldMoveSpeed');
		let lblMoveSpeed = $('#lblMoveSpeed');

		elNavigation.append(createToolIcon(
			Potree.resourcePath + '/icons/earth_controls_1.png',
			'[title]tt.earth_control',
			function () { viewer.setNavigationMode(Potree.EarthControls); }
		));

		elNavigation.append(createToolIcon(
			Potree.resourcePath + '/icons/fps_controls.svg',
			'[title]tt.flight_control',
			function () {
				viewer.setNavigationMode(Potree.FirstPersonControls);
				viewer.fpControls.lockElevation = false;
			}
		));

		elNavigation.append(createToolIcon(
			Potree.resourcePath + '/icons/helicopter_controls.svg',
			'[title]tt.heli_control',
			() => { 
				viewer.setNavigationMode(Potree.FirstPersonControls);
				viewer.fpControls.lockElevation = true;
			}
		));

		elNavigation.append(createToolIcon(
			Potree.resourcePath + '/icons/orbit_controls.svg',
			'[title]tt.orbit_control',
			function () { viewer.setNavigationMode(Potree.OrbitControls); }
		));
		
		elNavigation.append(createToolIcon(
			Potree.resourcePath + '/icons/eye_2.png',
			'[title]tt.zoom_control',
			function () { viewer.setNavigationMode(Potree.ZoomControls); }
		));

		elNavigation.append(createToolIcon(
			Potree.resourcePath + '/icons/focus.svg',
			'[title]tt.focus_control',
			function () { viewer.fitToScreen(); }
		));
		

		
		elNavigation.append(createToolIcon(
			Potree.resourcePath + "/icons/navigation_cube.svg",
			"[title]tt.navigation_cube_control",
			function(){viewer.toggleNavigationCube()}
		));

		elNavigation.append("<br>");


		elNavigation.append(createToolIcon(
			Potree.resourcePath + "/icons/left.svg",
			"[title]tt.left_view_control",
			function(){viewer.setLeftView()}
		));

		elNavigation.append(createToolIcon(
			Potree.resourcePath + "/icons/right.svg",
			"[title]tt.right_view_control",
			function(){viewer.setRightView()}
		));

		elNavigation.append(createToolIcon(
			Potree.resourcePath + "/icons/front.svg",
			"[title]tt.front_view_control",
			function(){viewer.setFrontView()}
		));

		elNavigation.append(createToolIcon(
			Potree.resourcePath + "/icons/back.svg",
			"[title]tt.back_view_control",
			function(){viewer.setBackView()}
		));

		elNavigation.append(createToolIcon(
			Potree.resourcePath + "/icons/top.svg",
			"[title]tt.top_view_control",
			function(){viewer.setTopView()}
		));

		elNavigation.append(createToolIcon(
			Potree.resourcePath + "/icons/bottom.svg",
			"[title]tt.bottom_view_control",
			function(){viewer.setBottomView()}
		));





		let elCameraProjection = $(`
			<selectgroup id="camera_projection_options">
				<option id="camera_projection_options_perspective" value="PERSPECTIVE"><span data-i18n="elsecontrol.Perspective"></span></option>
				<option id="camera_projection_options_orthigraphic" value="ORTHOGRAPHIC"><span data-i18n="elsecontrol.orthographic"></span></option>
			</selectgroup>
		`);
		elNavigation.append(elCameraProjection);
		elCameraProjection.selectgroup({title: ""});
		elCameraProjection.find("input").click( (e) => {
			viewer.setCameraMode(Potree.CameraMode[e.target.value]);
		});
		let cameraMode = Object.keys(Potree.CameraMode)
			.filter(key => Potree.CameraMode[key] === viewer.scene.cameraMode);
		elCameraProjection.find(`input[value=${cameraMode}]`).trigger("click");

		let speedRange = new THREE.Vector2(1, 10 * 1000);

		let toLinearSpeed = function (value) {
			return Math.pow(value, 4) * speedRange.y + speedRange.x;
		};

		let toExpSpeed = function (value) {
			return Math.pow((value - speedRange.x) / speedRange.y, 1 / 4);
		};

		sldMoveSpeed.slider({
			value: toExpSpeed(viewer.getMoveSpeed()),
			min: 0,
			max: 1,
			step: 0.01,
			slide: function (event, ui) { viewer.setMoveSpeed(toLinearSpeed(ui.value)); }
		});

		viewer.addEventListener('move_speed_changed', function (event) {
			lblMoveSpeed.html(viewer.getMoveSpeed().toFixed(1));
			sldMoveSpeed.slider({value: toExpSpeed(viewer.getMoveSpeed())});
		});

		lblMoveSpeed.html(viewer.getMoveSpeed().toFixed(1));
	}


	let initSettings = function () {

		{
			$('#sldMinNodeSize').slider({
				value: viewer.getMinNodeSize(),
				min: 0,
				max: 1000,
				step: 0.01,
				slide: function (event, ui) { viewer.setMinNodeSize(ui.value); }
			});

			viewer.addEventListener('minnodesize_changed', function (event) {
				$('#lblMinNodeSize').html(parseInt(viewer.getMinNodeSize()));
				$('#sldMinNodeSize').slider({value: viewer.getMinNodeSize()});
			});
			$('#lblMinNodeSize').html(parseInt(viewer.getMinNodeSize()));
		}

		{
			let elSplatQuality = $("#splat_quality_options");
			elSplatQuality.selectgroup({title: ""});

			elSplatQuality.find("input").click( (e) => {
				if(e.target.value === "standard"){
					viewer.useHQ = false;
				}else if(e.target.value === "hq"){
					viewer.useHQ = true;
				}
			});

			let currentQuality = viewer.useHQ ? "hq" : "standard";
			elSplatQuality.find(`input[value=${currentQuality}]`).trigger("click");
		}

		$('#show_bounding_box').click(() => {
			viewer.setShowBoundingBox($('#show_bounding_box').prop("checked"));
		});

		$('#set_freeze').click(function(){
			viewer.setFreeze($('#set_freeze').prop("checked"));
		});
		

		
	};

	initAccordion();
	initAppearance();
	initToolbar();
	initcameraset();
	initScene();
	initNavigation();
	initClassificationList();
	initClippingTool();
	initSettings();
	
	$('#potree_version_number').html(Potree.version.major + "." + Potree.version.minor + Potree.version.suffix);
	$('.perfect_scrollbar').perfectScrollbar();
};
