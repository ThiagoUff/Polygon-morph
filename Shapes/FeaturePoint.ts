import { Point } from "./Point";
export class FeaturePoint extends Point{

    private _feat_var: number;
    private _size_var: number;
    private _feat_size : number;
    private _dis_cost : number;
    private _r_feat_var : number;
    private _l_feat_var : number;
    private _prepared : boolean;
    private _angle : number;

    constructor(point: Point){
        super(point.x, point.y);
    }
    

    public get feat_var(): number 
    {
        return this._feat_var;
    }
    public set feat_var(v: number)
    {
        this._feat_var = v;
    }

    public get size_var(): number 
    {
        return this._size_var;
    }
    public set size_var(v: number) 
    {
        this._size_var = v;
    }

    public get feat_size() : number 
    {
        return this._feat_size;
    }

    public set feat_size(v : number) 
    {
        this._feat_size = v;
    }

    public get dis_cost() : number {
        return this._dis_cost;
    }
    public set dis_cost(v : number) {
        this._dis_cost = v;
    }

    public get r_feat_var() : number 
    {
        return this._r_feat_var;
    }
    public set r_feat_var(v : number) 
    {
        this._r_feat_var = v;
    }

    public get l_feat_var() : number 
    {
        return this._l_feat_var;
    }
    public set l_feat_var(v : number) 
    {
        this._l_feat_var = v;
    }

    public get prepared() : boolean 
    {
        return this._prepared;
    }
    public set prepared(v : boolean)
    {
        this._prepared = v;
    }

    public get angle() : number {
        return this._angle;
    }
    public set angle(v : number) {
        this._angle = v;
    }

    calculate_Sim_Cost(fp : FeaturePoint) : number{
        return 0;
    }
}
export default FeaturePoint;