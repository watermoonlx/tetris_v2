import { PieceType } from './PieceType';
import {
    Coordinate,
    Color
} from '../common/CommonEntities';

export class PieceBase {
    type: PieceType;
    shapes: number[][][];
    currentShapeIndex: number;
    position: Coordinate;
    color: Color;
    continue: boolean;

    get currentShape(): number[][] {
        return this.shapes[this.currentShapeIndex];
    }
}