import Point from "../shapes/Point";

export class Covariance {
    public static calculate_center(v): number[] { return null }
    public static covariance(v: Array<Point>): number[][] {
        let matrix: Array<Array<number>> = new Array<Array<number>>();
        let count: number = v.length;
        let center: Array<number> = this.calculate_center(v);
        let x_c = center[0];
        let y_c = center[1];
        let x: number, y: number;
        let a00: number = 0.0, a01: number = 0.0, a11: number = 0.0;
        let p: Point;

        for (let i: number = 0; i < count; i++) {
            p = v[i];
            x = p.getX() - x_c;
            y = p.getY() - y_c;
            a00 += x * y;
            a01 += x * y;
            a11 += y * y;
        }
        a00 /= count;
        a01 /= count;
        a11 /= count;

        matrix[0][0] = a00;
        matrix[1][0] = matrix[0][1] = a01;
        matrix[1][1] = a11;
        return matrix;
    }
    public static dotProduct(a1: number, a2: number, b1: number, b2: number): number { return null }
    public static getBisector(v: Array<Point>): number[] {
        let bisector: Array<number> = new Array<number>();
        let mid: number = v.length / 2;
        let left: Point = v[mid - 1];
        let rigth: Point = v[mid + 1];
        let center: Point = v[mid];

        let center_x: number, center_y: number, left_x: number, left_y: number, right_x: number, right_y: number;

        center_x = center.getX();
        center_y = center.getY();
        left_x = left.getX();
        left_y = left.getY();
        right_x = rigth.getX();
        right_y = rigth.getY();

        let dist1 = Math.sqrt(Math.pow(left_x - center_x, 2) + Math.pow(left_y - center_y, 2));
        let dist2 = Math.sqrt(Math.pow(center_x - right_x, 2) + Math.pow(center_y - right_y, 2));

        let dist_ratio = dist1 / (dist1 + dist2)

        let bisec_x: number = left_x + dist_ratio * (right_x - left_x);
        let bisec_y: number = left_y + dist_ratio * (right_y - left_y);

        bisec_x = bisec_x - center_x;
        bisec_y = bisec_y - center_y;

        bisector[0] = bisec_x;
        bisector[1] = bisec_y;

        return bisector;
    }
}
export default Covariance