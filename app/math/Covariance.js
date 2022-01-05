import Point from "../shapes/Point.js";

export const Covariance = {
    calculate_center(v) { return null; },
    covariance(v){
        let matrix =[2][2];
        let count = v.length;
        let center = this.calculate_center(v);
        let x_c = center[0];
        let y_c = center[1];
        let x, y;
        let a00 = 0.0, a01 = 0.0, a11 = 0.0;
        let p = new Point;

        for (let i = 0; i < count; i++) {
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
    },
    dotProduct(a1, a2, b1, b2) { return a1*b1 + a2*b2; },
    getBisector(v) {   
        let bisector = [2];
        let mid = v.length / 2;
        let left = v[mid - 1];
        let rigth = v[mid + 1];
        let center = v[mid];

        let center_x, center_y, left_x, left_y, right_x, right_y;

        center_x = center.getX();
        center_y = center.getY();
        left_x = left.getX();
        left_y = left.getY();
        right_x = rigth.getX();
        right_y = rigth.getY();

        let dist1 = Math.sqrt(Math.pow(left_x - center_x, 2) + Math.pow(left_y - center_y, 2));
        let dist2 = Math.sqrt(Math.pow(center_x - right_x, 2) + Math.pow(center_y - right_y, 2));

        let dist_ratio = dist1 / (dist1 + dist2)

        let bisec_x = left_x + dist_ratio * (right_x - left_x);
        let bisec_y = left_y + dist_ratio * (right_y - left_y);

        bisec_x = bisec_x - center_x;
        bisec_y = bisec_y - center_y;

        bisector[0] = bisec_x;
        bisector[1] = bisec_y;

        return bisector;
    }
}
export default Covariance;
