declare module 'three' {
  export class Points extends Object3D {
    type: 'Points';
    geometry: BufferGeometry;
    material: Material | Material[];
    morphTargetInfluences?: number[];
    morphTargetDictionary?: { [key: string]: number };
    isPoints: true;
    rotation: Euler;
  }

  export class Object3D {
    static DefaultUp: Vector3;
    static DefaultMatrixAutoUpdate: boolean;
    id: number;
    uuid: string;
    name: string;
    type: string;
    parent: Object3D | null;
    children: Object3D[];
    up: Vector3;
    position: Vector3;
    rotation: Euler;
    matrix: Matrix4;
    matrixWorld: Matrix4;
    matrixAutoUpdate: boolean;
    matrixWorldNeedsUpdate: boolean;
    layers: Layers;
    visible: boolean;
    castShadow: boolean;
    receiveShadow: boolean;
    frustumCulled: boolean;
    renderOrder: number;
    animations: AnimationClip[];
    userData: { [key: string]: any };
    customDepthMaterial: Material;
    customDistanceMaterial: Material;
    isObject3D: true;
    onBeforeRender: (
      renderer: WebGLRenderer,
      scene: Scene,
      camera: Camera,
      geometry: BufferGeometry,
      material: Material,
      group: Group
    ) => void;
    onAfterRender: (
      renderer: WebGLRenderer,
      scene: Scene,
      camera: Camera,
      geometry: BufferGeometry,
      material: Material,
      group: Group
    ) => void;
    applyMatrix4(matrix: Matrix4): this;
    applyQuaternion(quaternion: Quaternion): this;
    setRotationFromAxisAngle(axis: Vector3, angle: number): void;
    setRotationFromEuler(euler: Euler): void;
    setRotationFromMatrix(m: Matrix4): void;
    setRotationFromQuaternion(q: Quaternion): void;
    rotateOnAxis(axis: Vector3, angle: number): this;
    rotateOnWorldAxis(axis: Vector3, angle: number): this;
    rotateX(angle: number): this;
    rotateY(angle: number): this;
    rotateZ(angle: number): this;
    translateOnAxis(axis: Vector3, distance: number): this;
    translateX(distance: number): this;
    translateY(distance: number): this;
    translateZ(distance: number): this;
    localToWorld(vector: Vector3): Vector3;
    worldToLocal(vector: Vector3): Vector3;
    lookAt(vector: Vector3 | number, y?: number, z?: number): void;
    add(...object: Object3D[]): this;
    remove(...object: Object3D[]): this;
    removeFromParent(): this;
    clear(): this;
    getObjectById(id: number): Object3D | undefined;
    getObjectByName(name: string): Object3D | undefined;
    getObjectByProperty(name: string, value: any): Object3D | undefined;
    getWorldPosition(target: Vector3): Vector3;
    getWorldQuaternion(target: Quaternion): Quaternion;
    getWorldScale(target: Vector3): Vector3;
    getWorldDirection(target: Vector3): Vector3;
    raycast(raycaster: Raycaster, intersects: Intersection[]): void;
    traverse(callback: (object: Object3D) => void): void;
    traverseVisible(callback: (object: Object3D) => void): void;
    traverseAncestors(callback: (object: Object3D) => void): void;
    updateMatrix(): void;
    updateMatrixWorld(force?: boolean): void;
    updateWorldMatrix(updateParents: boolean, updateChildren: boolean): void;
    toJSON(meta?: { geometries: any; materials: any; textures: any; images: any }): any;
    clone(recursive?: boolean): this;
    copy(source: this, recursive?: boolean): this;
  }

  // Add other essential classes
  export class Vector3 {
    constructor(x?: number, y?: number, z?: number);
    x: number;
    y: number;
    z: number;
  }

  export class Quaternion {
    constructor(x?: number, y?: number, z?: number, w?: number);
    x: number;
    y: number;
    z: number;
    w: number;
  }

  export class Matrix4 {
    elements: number[];
    set(
      n11: number, n12: number, n13: number, n14: number,
      n21: number, n22: number, n23: number, n24: number,
      n31: number, n32: number, n33: number, n34: number,
      n41: number, n42: number, n43: number, n44: number
    ): Matrix4;
  }

  export class Euler {
    constructor(x?: number, y?: number, z?: number, order?: string);
    x: number;
    y: number;
    z: number;
    order: string;
  }

  export class BufferGeometry {
    id: number;
    uuid: string;
    name: string;
    type: string;
    index: BufferAttribute | null;
    attributes: {
      [name: string]: BufferAttribute | InterleavedBufferAttribute;
    };
  }

  export class BufferAttribute {
    constructor(array: ArrayLike<number>, itemSize: number, normalized?: boolean);
    count: number;
    itemSize: number;
    array: ArrayLike<number>;
  }

  export class Material {
    id: number;
    uuid: string;
    name: string;
    type: string;
    transparent: boolean;
    opacity: number;
    visible: boolean;
  }

  export class Scene extends Object3D {
    type: 'Scene';
    background: Color | Texture | null;
    environment: Texture | null;
    fog: any;
    isScene: true;
  }

  export class Camera extends Object3D {
    type: 'Camera';
    matrixWorldInverse: Matrix4;
    projectionMatrix: Matrix4;
    projectionMatrixInverse: Matrix4;
    isCamera: true;
  }

  export class Group extends Object3D {
    type: 'Group';
    isGroup: true;
  }

  export class Layers {
    mask: number;
  }

  export class WebGLRenderer {
    domElement: HTMLCanvasElement;
  }

  export class Raycaster {
    ray: Ray;
  }

  export class Ray {
    origin: Vector3;
    direction: Vector3;
  }

  export interface Intersection {
    distance: number;
    point: Vector3;
    face: { a: number; b: number; c: number; normal: Vector3 };
    object: Object3D;
  }

  export class AnimationClip {
    name: string;
  }

  export class InterleavedBufferAttribute {
    count: number;
    itemSize: number;
  }

  export class Texture {
    id: number;
  }

  export class Color {
    r: number;
    g: number;
    b: number;
  }
} 