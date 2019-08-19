
Potree.Panorama = class Panorama extends THREE.Object3D {
	constructor () {
		super();

		this.parentDir = "";
		this.accessibleNodes = [];
		this.name = "test1_011";
		this.panotype = "faroscene";
		this.index = 3;
		this.deltastart = 0;
		this.deltaend = 2.63894;
		//this.position = new THREE.Vector3(1.13149, 73.81, 8.72333);
		this.pos = new THREE.Vector3(1.13149, 0.81, 0.72333);
		this.compassdirection = 60.272488336;
		this.gps = new THREE.Vector3(-81, 1.89418e-316, 1.89418e-316);
		this.time = "1.3.2018 14:34:50:776";
		this.angle = 0.641357;
		this.eulerangle = new THREE.Vector3(0.0155167, -0.00567989, 0.641357);
		//this.quaternion = {"w": 0.948996, "x": 0.00646759, "y": -0.00514057, "z": 0.315179};
		this.quat = {"w": 0.948996, "x": 0.00646759, "y": -0.00514057, "z": 0.315179};

		////////////////////////////////////////////////////////////
		//panorama images
		//this.panoShape = this.createSphereGeometry();
		//this.panoMaterial = this.createSphereMaterial();
		//this.panoMesh = new THREE.Mesh( this.panoShape, this.panoMaterial );
		//this.panoMesh.visible = true;
		//this.add(this.panoMesh);

		////////////////////////////////////////////////////////////
		//label
		this._showLabel = false;
		this.label = new Potree.TextSprite(this.name);
		this.label.setBorderColor({r: 0, g: 0, b: 0, a: 0.8});
		this.label.setBackgroundColor({r: 0, g: 0, b: 0, a: 0.3});
		this.label.setTextColor({r: 180, g: 220, b: 180, a: 1.0});
		this.label.material.depthTest = false;
		this.label.material.opacity = 1;
		this.label.visible = true;
		this.add(this.label);

		this._useThumbnail = true;
	}

	fromJSON (parentDir, jsData) {
		var iiii = 1;
		this.parentDir = parentDir;
		this.accessibleNodes = jsData.accessibleNodes;
		this.name = jsData.name;
		this.panotype = jsData.panotype;
		this.index = jsData.index;
		this.deltastart = jsData.deltastart;
		this.deltaend = jsData.deltaend;
		//this.position = new THREE.Vector3(1.13149, 73.81, 8.72333);
		this.pos = new THREE.Vector3(jsData.position[0], jsData.position[1], jsData.position[2]);
		this.compassdirection = jsData.compassdirection;
		this.gps = new THREE.Vector3(jsData.gps[0], jsData.gps[1], jsData.gps[2]);
		this.time = "1.3.2018 14:34:50:776";
		this.angle = jsData.angle;
		this.eulerangle = new THREE.Vector3(jsData.eulerangle[0], jsData.eulerangle[1], jsData.eulerangle[2]);
		//this.quaternion = {"w": 0.948996, "x": 0.00646759, "y": -0.00514057, "z": 0.315179};
		this.quat = {"w": 0.948996, "x": 0.00646759, "y": -0.00514057, "z": 0.315179};

		this.update();
	}

	toJSON ()
	{
		var jsData;

		return jsData;
	}

	createSphereMaterial () {
		if(this._useThumbnail)
			var matPath = this.getMaterialPathThumbnail(this.parentDir, this.name);
		else
			var matPath = this.getMaterialPath(this.parentDir, this.name);

		var skyMaterial = new THREE.MeshBasicMaterial({
			//map: THREE.ImageUtils.loadTexture( Potree.resourcePath + '/panorama/pano_1/test1_000.jpg' ),
			map: THREE.ImageUtils.loadTexture( matPath ),
			//map: THREE.ImageUtils.loadTexture( path + pictureName[i] + format ),
			//side: THREE.BackSide
			side:THREE.DoubleSide,
			transparent: true,
			opacity: 0.8,
		});

		return skyMaterial;
	};

	getMaterialPath(parentPath, name)
	{
		var matPath = parentPath + "/";
		matPath = matPath + name + ".jpg";
		return matPath;
	}

	getMaterialPathThumbnail(parentPath, name)
	{
		var matPath = parentPath + "/";
		matPath = matPath + name + "_thumbnail.jpg";
		return matPath;
	}

	createSphereGeometry () {
		var skyGeometry = new THREE.SphereGeometry( 1, 64, 64 );

		return skyGeometry;
	};

	setPosition (index, position,vectorX,vectorY,vectorZ) {
		let point = this.points[index];
		if(this.ifz&&(index === 1)) {
			position.x = this.points[0].position.x;
			position.y = this.points[0].position.y;		
		}
		if(this.normalVectorDistances&&(index === 1)){
			//以x坐标生成新点
			position.z = ((position.x - this.points[0].position.x)*vectorZ/vectorX) + this.points[0].position.z;
			position.y = ((position.x - this.points[0].position.x)*vectorY/vectorX) + this.points[0].position.y;
			
		}
		point.position.copy(position);

		let event = {
			type: 'marker_moved',
			measure:	this,
			index:	index,
			position: position.clone()
		};
		this.dispatchEvent(event);

		this.update();
	};

	update () {
		this.panoShape = this.createSphereGeometry();
		this.panoMaterial = this.createSphereMaterial();
		this.panoMesh = new THREE.Mesh( this.panoShape, this.panoMaterial );
		var rot = this.eulerangle;
		this.panoMesh.rotation.set(Math.PI/2 + rot.x, rot.z, 0 - rot.y);
		this.panoMesh.scale.x = -1;
//		this.panoMesh.rotation.copy(this.eulerangle);
		//this.panoMesh.visible = true;
		this.add(this.panoMesh);

		this.position.copy(this.pos);
		this.label.setText(this.name);
	};

	raycast (raycaster, intersects) {
		for (let i = 0; i < this.points.length; i++) {
			let sphere = this.spheres[i];

			sphere.raycast(raycaster, intersects);
		}

		// recalculate distances because they are not necessarely correct
		// for scaled objects.
		// see https://github.com/mrdoob/three.js/issues/5827
		// TODO: remove this once the bug has been fixed
		for (let i = 0; i < intersects.length; i++) {
			let I = intersects[i];
			I.distance = raycaster.ray.origin.distanceTo(I.point);
		}
		intersects.sort(function (a, b) { return a.distance - b.distance; });
	};

	get showLabel () {
		return this._showLabel;
	}

	set showLabel (value) {
		this._showLabel = value;
		this.update();
	}

	get useThumbnail() {
		return this._useThumbnail;
	}

	setuseThumbnail (value) {
		if(value !== this._useThumbnail) {
			this._useThumbnail = value;
			this.update();
		}
	}
};
