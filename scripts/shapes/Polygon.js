export class Polygon {
    all_vertices = []
    featurePoints = []
    Polygon(start, factor) {
        this.all_vertices = new Array();
        this.featurePoints = new Array();
        this.all_vertices.push(start);
    }
    Polygon() {
        this.all_vertices = new Array();
        this.featurePoints = new Array();
    }
    addVertex(p) {
        this.all_vertices.push(p);
    }
    getVertex(index) {
        return this.all_vertices[index];
    }
    isVertex(p) {
        return this.all_vertices.find(x => x.equals(p)) == undefined;
    }
    addVertexBehind(p, q) {
        this.all_vertices.splice(this.all_vertices.indexOf(q), 0, p);
    }
    addVertexBefore(p, q) {
        this.all_vertices.splice(this.all_vertices.indexOf(q) + 1, 0, p);
    }
    addVertexBetween(p, q, r) {
        this.addVertexBefore(p, q);
    }
    getFeaturePoints() {
        return this.featurePoints;
    }
    getAllVertices() {
        return this.all_vertices;
    }
    getSample(sample_rate) { }
    getSampleArray(sample_rate) {
        return null;
    }
    getLength() {
        return null;
    }
    close() {
        this.closed = true;
    }
    getFeaturePoint(index) {
        return this.featurePoints[index];
    }
    getFeaturePointIndex(fp) {
        return this.featurePoints.indexOf(fp);
    }
    getIndex(p) {
        return this.all_vertices.indexOf(p);
    }
    getCount() {
        return this.all_vertices.length;
    }
    getFeaturePointCount() {
        return this.featurePoints.length;
    }
    setRegion(region) { }
    getRegion() { return null; }
    contains(p) { return null; }
    isConvex(p) { return null; }
    isClosingPoint(p) { return null; }
    isClosed() {
        return this.all_vertices[0].equals(this.all_vertices[this.all_vertices.length - 1]);
    }
    setAllVerticesToFeaturePoints() { }
    setDashed(dashed) { }
    isDashed() { return null; }
    preparePolygon(sample_rate, range) { }
    changeSize(factor) { }
    deleteCorrespondences() { }
    toString() { return null; }
    paint(g) { }
    clone() { return null; }
    toSVG() { return null; }
    toSVGPath() { return null; }
    toSaveFormat() { return null; }
}
export default Polygon;
//# sourceMappingURL=Polygon.js.map