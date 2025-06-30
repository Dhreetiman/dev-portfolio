declare module 'three' {
  export class Points extends Object3D {
    type: "Points";
    morphTargetInfluences?: number[] | null;
    morphTargetDictionary?: { [key: string]: number } | null;
    isPoints: true;
    geometry: BufferGeometry;
    material: Material | Material[];
  }

  export class Object3D {
    rotation: { x: number; y: number; z: number };
  }

  export class BufferGeometry {}
  export class Material {}
} 