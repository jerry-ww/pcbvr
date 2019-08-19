Potree.Annotation = class extends THREE.EventDispatcher {
	constructor (args = {}) {
		super();

		let valueOrDefault = (a, b) => {
			if(a === null || a === undefined){
				return b;
			}else{
				return a;
			}
		};

		this.scene = null;
		this._title = args.title || 'No Title';
		this._description = args.description || '';

		if (!args.position) {
			this.position = null;
		} else if (args.position instanceof THREE.Vector3) {
			this.position = args.position;
		} else {
			this.position = new THREE.Vector3(...args.position);
		}

		this.cameraPosition = (args.cameraPosition instanceof Array)
			? new THREE.Vector3().fromArray(args.cameraPosition) : args.cameraPosition;
		this.cameraTarget = (args.cameraTarget instanceof Array)
			? new THREE.Vector3().fromArray(args.cameraTarget) : args.cameraTarget;
		this.radius = args.radius;
		this.view = args.view || null;
		this.keepOpen = false;
		this.descriptionVisible = false;
		this.showDescription = true;
		this.actions = args.actions || [];
		this.isHighlighted = false;
		this._visible = true;
		this.__visible = true;
		this._display = true;
		this._expand = false;
		this.collapseThreshold = [args.collapseThreshold, 100].find(e => e !== undefined);

		this.children = [];
		this.parent = null;
		this.boundingBox = new THREE.Box3();

		let iconClose = Potree.resourcePath + '/icons/close.svg';

		this.domElement = $(`
			<div class="annotation" oncontextmenu="return false;">
				<div class="annotation-titlebar">
					<span class="annotation-label"></span>
				</div>
				<div class="annotation-description">
					<span class="annotation-description-close">
						<img src="${iconClose}" width="16px">
					</span>
					<span class="annotation-description-content">${this._description}</span>
				</div>
			</div>
		`);

		this.elTitlebar = this.domElement.find('.annotation-titlebar');
		this.elTitle = this.elTitlebar.find('.annotation-label');
		this.elTitle.append(this._title);
		this.elDescription = this.domElement.find('.annotation-description');
		this.elDescriptionClose = this.elDescription.find('.annotation-description-close');
		// this.elDescriptionContent = this.elDescription.find(".annotation-description-content");

		this.clickTitle = () => {
			if(this.hasView()){
				this.moveHere(this.scene.getActiveCamera());
			}
			this.dispatchEvent({type: 'click', target: this});
		};

		this.elTitle.click(this.clickTitle);

		this.actions = this.actions.map(a => {
			if (a instanceof Potree.Action) {
				return a;
			} else {
				return new Potree.Action(a);
			}
		});

		for (let action of this.actions) {
			action.pairWith(this);
		}

		let actions = this.actions.filter(
			a => a.showIn === undefined || a.showIn.includes('scene'));

		for (let action of actions) {
			let elButton = $(`<img src="${action.icon}" class="annotation-action-icon">`);
			this.elTitlebar.append(elButton);
			elButton.click(() => action.onclick({annotation: this}));
		}

		this.elDescriptionClose.hover(
			e => this.elDescriptionClose.css('opacity', '1'),
			e => this.elDescriptionClose.css('opacity', '0.5')
		);
		this.elDescriptionClose.click(e => this.setHighlighted(false));
		// this.elDescriptionContent.html(this._description);

		this.domElement.mouseenter(e => this.setHighlighted(true));
		this.domElement.mouseleave(e => this.setHighlighted(false));

		this.domElement.on('touchstart', e => {
			this.setHighlighted(!this.isHighlighted);
		});

		this.display = false;
		//this.display = true;

	}

	get visible () {
		return this._visible;
	}

	set visible (value) {
		if (this._visible === value) {
			return;
		}

		this._visible = value;

		//this.traverse(node => {
		//	node.display = value;
		//});

		this.dispatchEvent({
			type: 'visibility_changed',
			annotation: this
		});
	}

	get display () {
		return this._display;
	}

	set display (display) {
		if (this._display === display) {
			return;
		}

		this._display = display;

		if (display) {
			// this.domElement.fadeIn(200);
			this.domElement.show();
		} else {
			// this.domElement.fadeOut(200);
			this.domElement.hide();
		}
	}

	get expand () {
		return this._expand;
	}

	set expand (expand) {
		if (this._expand === expand) {
			return;
		}

		if (expand) {
			this.display = false;
		} else {
			this.display = true;
			this.traverseDescendants(node => {
				node.display = false;
			});
		}

		this._expand = expand;
	}

	get title () {
		return this._title;
	}

	set title (title) {
		if (this._title === title) {
			return;
		}

		this._title = title;
		this.elTitle.empty();
		this.elTitle.append(this._title);
	}

	get description () {
		return this._description;
	}

	set description (description) {
		if (this._description === description) {
			return;
		}

		this._description = description;

		const elDescriptionContent = this.elDescription.find(".annotation-description-content");
		elDescriptionContent.empty();
		elDescriptionContent.append(this._description);
	}

	add (annotation) {
		if (!this.children.includes(annotation)) {
			this.children.push(annotation);
			annotation.parent = this;

			let descendants = [];
			annotation.traverse(a => { descendants.push(a); });

			for (let descendant of descendants) {
				let c = this;
				while (c !== null) {
					c.dispatchEvent({
						'type': 'annotation_added',
						'annotation': descendant
					});
					c = c.parent;
				}
			}
		}
	}

	level () {
		if (this.parent === null) {
			return 0;
		} else {
			return this.parent.level() + 1;
		}
	}

	hasChild(annotation) {
		return this.children.includes(annotation);
	}

	remove (annotation) {
		if (this.hasChild(annotation)) {
			annotation.removeAllChildren();
			annotation.dispose();
			this.children = this.children.filter(e => e !== annotation);
			annotation.parent = null;
		}
	}

	removeAllChildren() {
		this.children.forEach((child) => {
			if (child.children.length > 0) {
				child.removeAllChildren();
			}

			this.remove(child);
		});
	}

	updateBounds () {
		let box = new THREE.Box3();

		if (this.position) {
			box.expandByPoint(this.position);
		}

		for (let child of this.children) {
			child.updateBounds();

			box.union(child.boundingBox);
		}

		this.boundingBox.copy(box);
	}

	traverse (handler) {
		let expand = handler(this);

		if (expand === undefined || expand === true) {
			for (let child of this.children) {
				child.traverse(handler);
			}
		}
	}

	traverseDescendants (handler) {
		for (let child of this.children) {
			child.traverse(handler);
		}
	}

	flatten () {
		let annotations = [];

		this.traverse(annotation => {
			annotations.push(annotation);
		});

		return annotations;
	}

	descendants () {
		let annotations = [];

		this.traverse(annotation => {
			if (annotation !== this) {
				annotations.push(annotation);
			}
		});

		return annotations;
	}

	setHighlighted (highlighted) {
		if (highlighted) {
			this.domElement.css('opacity', '0.8');
			this.elTitlebar.css('box-shadow', '0 0 5px #fff');
			this.domElement.css('z-index', '1000');

			if (this._description) {
				this.descriptionVisible = true;
				this.elDescription.fadeIn(200);
				this.elDescription.css('position', 'relative');
			}
		} else {
			this.domElement.css('opacity', '0.5');
			this.elTitlebar.css('box-shadow', '');
			this.domElement.css('z-index', '100');
			this.descriptionVisible = false;
			this.elDescription.css('display', 'none');
		}

		this.isHighlighted = highlighted;
	}

	hasView () {
		let hasPosTargetView = this.cameraTarget instanceof THREE.Vector3;
		hasPosTargetView = hasPosTargetView && this.cameraPosition instanceof THREE.Vector3;

		let hasRadiusView = this.radius !== undefined;

		let hasView = hasPosTargetView || hasRadiusView;

		return hasView;
	};

	moveHere (camera) {
		if (!this.hasView()) {
			return;
		}

		let view = this.scene.view;
		let animationDuration = 500;
		let easing = TWEEN.Easing.Quartic.Out;

		let endTarget;
		if (this.cameraTarget) {
			endTarget = this.cameraTarget;
		} else if (this.position) {
			endTarget = this.position;
		} else {
			endTarget = this.boundingBox.getCenter();
		}

		if (this.cameraPosition) {
			let endPosition = this.cameraPosition;

			Potree.utils.moveTo(this.scene, endPosition, endTarget);

			//{ // animate camera position
			//	let tween = new TWEEN.Tween(view.position).to(endPosition, animationDuration);
			//	tween.easing(easing);
			//	tween.start();
			//}

			//{ // animate camera target
			//	let camTargetDistance = camera.position.distanceTo(endTarget);
			//	let target = new THREE.Vector3().addVectors(
			//		camera.position,
			//		camera.getWorldDirection().clone().multiplyScalar(camTargetDistance)
			//	);
			//	let tween = new TWEEN.Tween(target).to(endTarget, animationDuration);
			//	tween.easing(easing);
			//	tween.onUpdate(() => {
			//		view.lookAt(target);
			//	});
			//	tween.onComplete(() => {
			//		view.lookAt(target);
			//		this.dispatchEvent({type: 'focusing_finished', target: this});
			//	});

			//	this.dispatchEvent({type: 'focusing_started', target: this});
			//	tween.start();
			//}
		} else if (this.radius) {
			let direction = view.direction;
			let endPosition = endTarget.clone().add(direction.multiplyScalar(-this.radius));
			let startRadius = view.radius;
			let endRadius = this.radius;

			{ // animate camera position
				let tween = new TWEEN.Tween(view.position).to(endPosition, animationDuration);
				tween.easing(easing);
				tween.start();
			}

			{ // animate radius
				let t = {x: 0};

				let tween = new TWEEN.Tween(t)
					.to({x: 1}, animationDuration)
					.onUpdate(function () {
						view.radius = this.x * endRadius + (1 - this.x) * startRadius;
					});
				tween.easing(easing);
				tween.start();
			}
		}
	};

	dispose () {
		if (this.domElement.parentElement) {
			this.domElement.parentElement.removeChild(this.domElement);
		}
	};

	toString () {
		return 'Annotation: ' + this._title;
	}
};

Potree.An = class An extends THREE.Object3D {
	constructor () {
		super();

		this.constructor.counter = (this.constructor.counter === undefined) ? 0 : this.constructor.counter + 1;

		this.name = 'Annotation_' + this.constructor.counter;
		this.points = [];
		this._showDistances = true;
		this._showCoordinates = false;
		this._showArea = false;
		this._closed = true;
		this._showAngles = false;
		this._showHeight = false;
		this.maxMarkers = Number.MAX_SAFE_INTEGER;
		//设置指示标签的几何球0.2为半径
		this.sphereGeometry = new THREE.SphereGeometry(0.2, 10, 10);
		this.color = new THREE.Color(0xff0000);

		this.lengthUnit = {code: 'm'};

		this.spheres = [];
		this.edges = [];
		this.sphereLabels = [];
		this.edgeLabels = [];
		this.angleLabels = [];
		this.coordinateLabels = [];
		this.annotations = [];

		this.title = '';
		this.description = '';
	}

	createSphereMaterial () {
		let sphereMaterial = new THREE.MeshLambertMaterial({
			shading: THREE.SmoothShading,
			color: this.color,
			depthTest: false,
			depthWrite: false}
		);

		return sphereMaterial;
	};

	addMarker (point) {
		let that = this;
		if (point instanceof THREE.Vector3) {
			point = {position: point};
		}else if(point instanceof Array){
			point = {position: new THREE.Vector3(...point)};
		}
		that.points.push(point);

		// sphere
		let sphere = new THREE.Mesh(that.sphereGeometry, that.createSphereMaterial());

		that.add(sphere);
		that.spheres.push(sphere);

		{ // Event Listeners
			let drag = (e) => {
				let I = Potree.utils.getMousePointCloudIntersection(
					e.drag.end, 
					e.viewer.scene.getActiveCamera(), 
					e.viewer, 
					e.viewer.scene.pointclouds,
					{pickClipped: true});

				if (I) {
					let i = that.spheres.indexOf(e.drag.object);
					if (i !== -1) {
						let point = that.points[i];
						for (let key of Object.keys(I.point).filter(e => e !== 'position')) {
							point[key] = I.point[key];
						}
						that.setPosition(i, I.location);
					}
				}
			};
            
			let drop = e => {
				let I = Potree.utils.getMousePointCloudIntersection(
					e.drag.end, 
					e.viewer.scene.getActiveCamera(), 
					e.viewer, 
					e.viewer.scene.pointclouds,
					{pickClipped: true});
				let i = that.spheres.indexOf(e.drag.object);
				if (i !== -1) {
					that.dispatchEvent({
						'type': 'marker_dropped',
						'an': that,
						'index': i
					});
				}
			};

			let mouseover = (e) => e.object.material.emissive.setHex(0x888888);
			let mouseleave = (e) => e.object.material.emissive.setHex(0x000000);

			sphere.addEventListener('drag', drag);
			sphere.addEventListener('drop', drop);
			sphere.addEventListener('mouseover', mouseover);
			sphere.addEventListener('mouseleave', mouseleave);
		}

		let event = {
			type: 'marker_added',
			an: that,
			sphere: sphere
		};
		that.dispatchEvent(event);

		that.setMarker(that.points.length - 1, point);
	};

	removeMarker (index) {
		this.points.splice(index, 1);

		this.remove(this.spheres[index]);

		let edgeIndex = (index === 0) ? 0 : (index - 1);
		this.remove(this.edges[edgeIndex]);
		this.edges.splice(edgeIndex, 1);

		this.remove(this.edgeLabels[edgeIndex]);
		this.edgeLabels.splice(edgeIndex, 1);
		this.coordinateLabels.splice(index, 1);

		this.spheres.splice(index, 1);

		this.update();

		this.dispatchEvent({type: 'marker_removed', measurement: this});
	};

	setMarker (index, point) {
		this.points[index] = point;
		console.log(point);
		let event = {
			type: 'marker_moved',
			anno:	this,
			index:	index,
			position: point.position.clone()
		};
		this.dispatchEvent(event);
		let an = new Potree.Annotation();
		an.title = this.title;
		an.description = this.description;
		an.cameraPosition=viewer.scene.getActiveCamera().position;
		an.cameraTarget= viewer.scene.view.getPivot();
		console.log(an.cameraTarget);
		this.annotations.push(an);
		// 错误，应该是viewer.scene
		// sceneSG.annotations.add(an);
		viewer.scene.annotations.add(an);
		this.update();
	}

	setPosition (index, position) {
		let point = this.points[index];
		point.position.copy(position);

		let event = {
			type: 'marker_moved',
			anno:	this,
			index:	index,
			position: position.clone()
		};
		this.dispatchEvent(event);

		this.update();
	};

	getArea () {
		let area = 0;
		let j = this.points.length - 1;

		for (let i = 0; i < this.points.length; i++) {
			let p1 = this.points[i].position;
			let p2 = this.points[j].position;
			area += (p2.x + p1.x) * (p1.y - p2.y);
			j = i;
		}

		return Math.abs(area / 2);
	};

	getTotalDistance () {
		if (this.points.length === 0) {
			return 0;
		}

		let distance = 0;

		for (let i = 1; i < this.points.length; i++) {
			let prev = this.points[i - 1].position;
			let curr = this.points[i].position;
			let d = prev.distanceTo(curr);

			distance += d;
		}

		if (this.closed && this.points.length > 1) {
			let first = this.points[0].position;
			let last = this.points[this.points.length - 1].position;
			let d = last.distanceTo(first);

			distance += d;
		}

		return distance;
	}

	getAngleBetweenLines (cornerPoint, point1, point2) {
		let v1 = new THREE.Vector3().subVectors(point1.position, cornerPoint.position);
		let v2 = new THREE.Vector3().subVectors(point2.position, cornerPoint.position);
		return v1.angleTo(v2);
	};

	getAngle (index) {
		if (this.points.length < 3 || index >= this.points.length) {
			return 0;
		}

		let previous = (index === 0) ? this.points[this.points.length - 1] : this.points[index - 1];
		let point = this.points[index];
		let next = this.points[(index + 1) % (this.points.length)];

		return this.getAngleBetweenLines(point, previous, next);
	};

	update () {
		if (this.points.length === 0) {
			return;
		} else if (this.points.length === 1) {
			let point = this.points[0];
			let position = point.position;
			this.spheres[0].position.copy(position);

			return;
		}

		let lastIndex = this.points.length - 1;

		let centroid = new THREE.Vector3();
		for (let i = 0; i <= lastIndex; i++) {
			let point = this.points[i];
			centroid.add(point.position);
		}
		centroid.divideScalar(this.points.length);

		for (let i = 0; i <= lastIndex; i++) {
			let index = i;
			let nextIndex = (i + 1 > lastIndex) ? 0 : i + 1;
			let previousIndex = (i === 0) ? lastIndex : i - 1;

			let point = this.points[index];
			let nextPoint = this.points[nextIndex];
			let previousPoint = this.points[previousIndex];

			let sphere = this.spheres[index];

			// spheres
			sphere.position.copy(point.position);
			sphere.material.color = this.color;
		}

	};

	raycast (raycaster, intersects) {
		for (let i = 0; i < this.points.length; i++) {
			let sphere = this.spheres[i];

			sphere.raycast(raycaster, intersects);
		}

		for (let i = 0; i < intersects.length; i++) {
			let I = intersects[i];
			I.distance = raycaster.ray.origin.distanceTo(I.point);
		}
		intersects.sort(function (a, b) { return a.distance - b.distance; });
	};

	get showCoordinates () {
		return this._showCoordinates;
	}

	set showCoordinates (value) {
		this._showCoordinates = value;
		this.update();
	}

	get showAngles () {
		return this._showAngles;
	}

	set showAngles (value) {
		this._showAngles = value;
		this.update();
	}

	get showHeight () {
		return this._showHeight;
	}

	set showHeight (value) {
		this._showHeight = value;
		this.update();
	}

	get showArea () {
		return this._showArea;
	}

	set showArea (value) {
		this._showArea = value;
		this.update();
	}

	get closed () {
		return this._closed;
	}

	set closed (value) {
		this._closed = value;
		this.update();
	}

	get showDistances () {
		return this._showDistances;
	}

	set showDistances (value) {
		this._showDistances = value;
		this.update();
	}
};

Potree.AnnotationTool = class AnnotationTool extends THREE.EventDispatcher {
	constructor (viewer) {
		super();

		this.viewer = viewer;
		this.renderer = viewer.renderer;

		this.addEventListener('start_inserting_annotation', e => {
			this.viewer.dispatchEvent({
				type: 'cancel_insertions'
			});
		});

		this.scene = new THREE.Scene();
		this.scene.name = 'scene_annotation';
		this.light = new THREE.PointLight(0xffffff, 1.0);
		this.scene.add(this.light);

		this.viewer.inputHandler.registerInteractiveScene(this.scene);

		this.onRemove = (e) => { this.scene.remove(e.an);};
		this.onAdd = e => {this.scene.add(e.an);};

		for(let an of viewer.scene.ans){
			this.onAdd({an: an});
		}

		viewer.addEventListener("update", this.update.bind(this));
		viewer.addEventListener("render.pass.perspective_overlay", this.render.bind(this));
		viewer.addEventListener("scene_changed", this.onSceneChange.bind(this));

		viewer.scene.addEventListener('an_added', this.onAdd);
		viewer.scene.addEventListener('an_removed', this.onRemove);
	}

	onSceneChange(e){
		if(e.oldScene){
			e.oldScene.removeEventListener('an_added', this.onAdd);
			e.oldScene.removeEventListener('an_removed', this.onRemove);
		}

		e.scene.addEventListener('an_added', this.onAdd);
		e.scene.addEventListener('an_removed', this.onRemove);
	}

	startInsertion (args = {}) {
		let domElement = this.viewer.renderer.domElement;
		let anno = new Potree.An();

		this.dispatchEvent({
			type: 'start_inserting_annotation',
			anno: anno
		});
		anno.showDistances = (args.showDistances === null) ? true : args.showDistances;
		anno.showArea = args.showArea || false;
		anno.showAngles = args.showAngles || false;
		anno.showCoordinates = args.showCoordinates || false;
		anno.showHeight = args.showHeight || false;
		anno.closed = args.closed || false;
		anno.maxMarkers = args.maxMarkers || Infinity;
		anno.name = args.name || 'Annoment';
		anno.title = args.title || '';
		anno.description = args.description || '';
		this.scene.add(anno);
		let cancel = {
			removeLastMarker: anno.maxMarkers > 3,
			callback: null
		};
		let insertionCallback = (e) => {
			alert(6);
			if (e.button === THREE.MOUSE.LEFT) {
				
				anno.addMarker(anno.points[anno.points.length - 1].position.clone());
				if (anno.points.length >= anno.maxMarkers) {
					cancel.callback();
				}

				this.viewer.inputHandler.startDragging(
					anno.spheres[anno.spheres.length - 1]);
			} else if (e.button === THREE.MOUSE.RIGHT) {
				cancel.callback();
			}
		};

		cancel.callback = e => {
			if (cancel.removeLastMarker) {
				anno.removeMarker(anno.points.length - 1);
			}
			domElement.removeEventListener('mouseup', insertionCallback, true);
			this.viewer.removeEventListener('cancel_insertions', cancel.callback);
		};

		if (anno.maxMarkers > 1) {
			this.viewer.addEventListener('cancel_insertions', cancel.callback);
			domElement.addEventListener('mouseup', insertionCallback, true);
		}

		anno.addMarker(new THREE.Vector3(0, 0, 0));
		this.viewer.inputHandler.startDragging(
			anno.spheres[anno.spheres.length - 1]);
       
		this.viewer.scene.addAn(anno);

		return anno;
	}
	
	update(){
		let camera = this.viewer.scene.getActiveCamera();
		// console.log(camera); 
		let domElement = this.renderer.domElement;
		let ans = this.viewer.scene.ans;

		let clientWidth = this.renderer.getSize().width;
		let clientHeight = this.renderer.getSize().height;

		this.light.position.copy(camera.position);

		// make size independant of distance
		for (let anno of ans) {
			anno.lengthUnit = this.viewer.lengthUnit;
			anno.update();

			// spheres
			for(let sphere of anno.spheres){			
				let distance = camera.position.distanceTo(sphere.getWorldPosition());
				let pr = Potree.utils.projectedRadius(1, camera, distance, clientWidth, clientHeight);
				let scale = (15 / pr);
				sphere.scale.set(scale, scale, scale);
			}

			// labels
			let labels = anno.edgeLabels.concat(anno.angleLabels);
			for(let label of labels){
				let distance = camera.position.distanceTo(label.getWorldPosition());
				let pr = Potree.utils.projectedRadius(1, camera, distance, clientWidth, clientHeight);
				let scale = (70 / pr);
				label.scale.set(scale, scale, scale);
			}

			// coordinate labels
			for (let j = 0; j < anno.annotations.length; j++) {
				let label = anno.annotations[j];
				let sphere = anno.spheres[j];
				// measure.points[j]
				let distance = camera.position.distanceTo(sphere.getWorldPosition());

				let screenPos = sphere.getWorldPosition().clone().project(camera);
				screenPos.x = Math.round((screenPos.x + 1) * clientWidth / 2);
				screenPos.y = Math.round((-screenPos.y + 1) * clientHeight / 2);
				screenPos.z = 0;
				screenPos.y -= 30;

				let labelPos = new THREE.Vector3( 
					(screenPos.x / clientWidth) * 2 - 1, 
					-(screenPos.y / clientHeight) * 2 + 1, 
					0.5 );
				labelPos.unproject(camera);
				if(this.viewer.scene.cameraMode == Potree.CameraMode.PERSPECTIVE) {
					let direction = labelPos.sub(camera.position).normalize();
					labelPos = new THREE.Vector3().addVectors(
						camera.position, direction.multiplyScalar(distance));
				}
				label.position = labelPos;
			}
		}
	}

	render(){
		this.viewer.renderer.render(this.scene, this.viewer.scene.getActiveCamera());
	}
}