import { Point } from "./Point";
export class FeaturePoint extends Point {
    constructor(point) {
        super(point.getX(), point.getY());
    }
    getFeat_var() {
        return this.feat_var;
    }
    setFeat_var(v) {
        this.feat_var = v;
    }
    getSize_var() {
        return this.size_var;
    }
    setSize_var(v) {
        this.size_var = v;
    }
    getFeat_size() {
        return this.feat_size;
    }
    setFeat_size(v) {
        this.feat_size = v;
    }
    getDis_cost() {
        return this.dis_cost;
    }
    setDis_cost(v) {
        this.dis_cost = v;
    }
    getR_feat_var() {
        return this.r_feat_var;
    }
    setR_feat_var(v) {
        this.r_feat_var = v;
    }
    getL_feat_var() {
        return this.l_feat_var;
    }
    setL_feat_var(v) {
        this.l_feat_var = v;
    }
    isPrepared() {
        return this.prepared;
    }
    setPrepared(v) {
        this.prepared = v;
    }
    getAngle() {
        return this.angle;
    }
    setAngle(v) {
        this.angle = v;
    }
    calculate_Sim_Cost(fp) {
        return 0;
    }
}
export default FeaturePoint;
//# sourceMappingURL=FeaturePoint.js.map