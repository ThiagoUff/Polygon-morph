import { Point } from "./Point";
export class FeaturePoint extends Point{

    private feat_var: number;
    private size_var: number;
    private feat_size : number;
    private dis_cost : number;
    private r_feat_var : number;
    private l_feat_var : number;
    private prepared : boolean;
    private angle : number;

    constructor(point: Point){
        super(point.getX(), point.getY());
    }
    

    public getFeat_var(): number 
    {
        return this.feat_var;
    }
    public setFeat_var(v: number)
    {
        this.feat_var = v;
    }

    public getSize_var(): number 
    {
        return this.size_var;
    }
    public setSize_var(v: number) 
    {
        this.size_var = v;
    }

    public getFeat_size() : number 
    {
        return this.feat_size;
    }

    public setFeat_size(v : number) 
    {
        this.feat_size = v;
    }

    public getDis_cost() : number {
        return this.dis_cost;
    }
    public setDis_cost(v : number) {
        this.dis_cost = v;
    }

    public getR_feat_var() : number 
    {
        return this.r_feat_var;
    }
    public setR_feat_var(v : number) 
    {
        this.r_feat_var = v;
    }

    public getL_feat_var() : number 
    {
        return this.l_feat_var;
    }
    public setL_feat_var(v : number) 
    {
        this.l_feat_var = v;
    }

    public isPrepared() : boolean 
    {
        return this.prepared;
    }
    public setPrepared(v : boolean)
    {
        this.prepared = v;
    }

    public getAngle() : number {
        return this.angle;
    }
    public setAngle(v : number) {
        this.angle = v;
    }

    public static calculate_Sim_Cost(s: FeaturePoint, t: FeaturePoint) : number{
        return 0;
    }
}
export default FeaturePoint;