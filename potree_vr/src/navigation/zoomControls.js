Potree.ZoomControls = class ZoomControls extends THREE.EventDispatcher{

    constructor(viewer){
        super(viewer);
        
        this.viewer = viewer;
        this.renderer = viewer.renderer;

        this.scene = null;
        this.sceneControls = new THREE.Scene();

        this.rotationSpeed = 10;
        
        this.fadeFactor=20;
        this.radiusDelta = 0;
        this.wheelDelta=0;
        this.zoomDelta = new THREE.Vector3();
        this.camStart = null;

        this.tweens = []; 

        let scroll = (e) => {
            this.wheelDelta += e.delta;
            let resolvedRadius = this.scene.view.radius + this.radiusDelta;
            this.radiusDelta += -e.delta * resolvedRadius * 0.1;
        };

        let drag = (e) => {
            if (e.drag.object !== null) {
                return;
            }

            if (!this.pivot) {
                return;
            }

            if (e.drag.startHandled === undefined) {
                e.drag.startHandled = true;

                this.dispatchEvent({type: 'start'});
            }

            let camStart = this.camStart;
            let view = this.viewer.scene.view;

            let mouse = e.drag.end;
            let domElement = this.viewer.renderer.domElement;

            if (e.drag.mouse === Potree.MOUSE.LEFT) {

                let ray = Potree.utils.mouseToRay(mouse, camStart, domElement.clientWidth, domElement.clientHeight);
                let plane = new THREE.Plane().setFromNormalAndCoplanarPoint(
                    new THREE.Vector3(0, 0, 1),
                    this.pivot);

                let distanceToPlane = ray.distanceToPlane(plane);

                if (distanceToPlane > 0) {
                    let I = new THREE.Vector3().addVectors(
                        camStart.position,
                        ray.direction.clone().multiplyScalar(distanceToPlane));

                    let movedBy = new THREE.Vector3().subVectors(
                        I, this.pivot);

                    let newCamPos = camStart.position.clone().sub(movedBy);

                    view.position.copy(newCamPos);

                    {
                        let distance = newCamPos.distanceTo(this.pivot);
                        view.radius = distance;
                        let speed = view.radius / 2.5;
                        this.viewer.setMoveSpeed(speed);
                    }
                }
            } else if (e.drag.mouse === Potree.MOUSE.RIGHT) {
                let ndrag = {
                    x: e.drag.lastDrag.x / this.renderer.domElement.clientWidth,
                    y: e.drag.lastDrag.y / this.renderer.domElement.clientHeight
                };

                let yawDelta = -ndrag.x * this.rotationSpeed * 0.5;
                let pitchDelta = -ndrag.y * this.rotationSpeed * 0.2;

                let originalPitch = view.pitch;
                let tmpView = view.clone();
                tmpView.pitch = tmpView.pitch + pitchDelta;
                pitchDelta = tmpView.pitch - originalPitch;

                let pivotToCam = new THREE.Vector3().subVectors(view.position, this.pivot);
                let pivotToCamTarget = new THREE.Vector3().subVectors(view.getPivot(), this.pivot);
                let side = view.getSide();

                pivotToCam.applyAxisAngle(side, pitchDelta);
                pivotToCamTarget.applyAxisAngle(side, pitchDelta);

                pivotToCam.applyAxisAngle(new THREE.Vector3(0, 0, 1), yawDelta);
                pivotToCamTarget.applyAxisAngle(new THREE.Vector3(0, 0, 1), yawDelta);

                let newCam = new THREE.Vector3().addVectors(this.pivot, pivotToCam);
                // TODO: Unused: let newCamTarget = new THREE.Vector3().addVectors(this.pivot, pivotToCamTarget);

                view.position.copy(newCam);
                view.yaw += yawDelta;
                view.pitch += pitchDelta;
            }
        };

        let onMouseDown = e => {
            let I = Potree.utils.getMousePointCloudIntersection(
                e.mouse, 
                this.scene.getActiveCamera(), 
                this.viewer, 
                this.scene.pointclouds, 
                {pickClipped: false});

            if (I) {
                this.pivot = I.location;
                this.camStart = this.scene.getActiveCamera().clone();

            }
        };

        let drop = e => {
            this.dispatchEvent({type: 'end'});
        };

        let onMouseUp = e => {
            this.camStart = null;
            this.pivot = null;
        };

        this.addEventListener('drag', drag);
        this.addEventListener('drop', drop);
        this.addEventListener('mousewheel', scroll);
        this.addEventListener('mousedown', onMouseDown);
        this.addEventListener('mouseup', onMouseUp);
        
    }
     
    setScene (scene) {
        this.scene = scene;
    }
    stop(){
        this.radiusDelta = 0;
        this.wheelDelta = 0;
        this.zoomDelta.set(0, 0, 0);
    }

    update (delta) {
        let view = this.scene.view;
        let progression = Math.min(1, this.fadeFactor * delta);
    
        if(this.wheelDelta!==0){
            let camera=this.scene.getActiveCamera();
            let I = Potree.utils.getMousePointCloudIntersection(
                this.viewer.inputHandler.mouse, 
                camera, 
                this.viewer, 
                this.scene.pointclouds);
            
			if (I) {
                let resolvedPos = new THREE.Vector3().addVectors(view.position, this.zoomDelta);
                let distance = I.location.distanceTo(resolvedPos);
                let jumpDistance = distance * 0.2 * this.wheelDelta;
                //console.log(jumpDistance);
                let targetDir = new THREE.Vector3().subVectors(I.location, view.position);
                targetDir.normalize();

                resolvedPos.add(targetDir.multiplyScalar(jumpDistance));
                this.zoomDelta.subVectors(resolvedPos, view.position);
            } else{
                let location=Potree.utils.getMouseWorldCoord(
                    this.viewer.inputHandler.mouse, 
                    camera,
                    this.viewer 
                );

                //console.log(location);
                let resolvedPos = new THREE.Vector3().addVectors(view.position, this.zoomDelta);
                let distance = location.distanceTo(resolvedPos);
                
				if(this.wheelDelta>0)
                {    
                    distance = location.distanceTo(view.position);
                }
				//console.log( distance);

                let jumpDistance = distance *this.wheelDelta;
				//重新计算得到缩放距离
                let targetDir = new THREE.Vector3().subVectors(location, view.position);
                //构建一个新的向量即当前position指向鼠标位置
                targetDir.normalize();
                //单位化
                resolvedPos.add(targetDir.multiplyScalar(jumpDistance));
                //更新resolvedPos的值
                this.zoomDelta.subVectors(resolvedPos, view.position);  
            }
        }

        if(this.zoomDelta.length()!==0){
            let p = this.zoomDelta.clone().multiplyScalar(progression);
           
		    let newPos = new THREE.Vector3().addVectors(view.position, p);
            //得到缩放结束后相机所在位置
            view.position.copy(newPos);
        }

        {   
            view.radius+=progression*this.radiusDelta;
            let speed = view.radius / 2.5;
            this.viewer.setMoveSpeed(speed);
        }

 		// decelerate over time
        {  
            let fade = Math.pow(0.5, this.fadeFactor * delta);
            this.zoomDelta.multiplyScalar(fade);
            //console.log(this.zoomDelta);
            this.wheelDelta=0;
            this.radiusDelta -= progression * this.radiusDelta;
        }
    }
};

