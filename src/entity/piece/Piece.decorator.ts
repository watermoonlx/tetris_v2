import { PieceType } from './PieceType';
import { PieceBase } from './PieceBase';

export let PieceMap: Map<PieceType, Function> = new Map<PieceType, Function>();

export type PieceParam = {
    type: PieceType,
    shapes: number[][][]
}

type PieceConstructor = { new (initialShpaeIndex: number): PieceBase };

export function Piece(param: PieceParam) {

    return function (constructor: any) {
        let original = constructor as PieceConstructor;

        let f: any = function (initialShpaeIndex: number = 0) {
            let instance = new original(initialShpaeIndex);

            instance.type = param.type;
            instance.shapes = param.shapes;
            instance.currentShapeIndex = initialShpaeIndex;
            instance.continue = true;
 
            return instance;
        }

        f.prototype = constructor.prototype;
        
        PieceMap.set(param.type, f);

        return f;
    }
}