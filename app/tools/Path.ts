export class Path {
    nodes: Array<Node>
    size: number
    costs: number
    min_x: number
    max_x: number
    min_y: number
    max_y: number

    Path(){}
    // Path(original: Path)
    clear(): void{}
    add(node: Node): boolean{return null}
    setCosts(costs: number): void{}
    getCosts(): number{return null}
    toArray(): number[][]{return null}
    setSimCosts(costs: number[][]): void{}
    getNodes():Array<Node>{return null}
    isClosed(): boolean{return null}
    getFinalPath(): Path{return null}
    getNodeAt(i: number): Node{return null}
    getSize(): number{return null}
    toString():string {return null}
}
export default Path