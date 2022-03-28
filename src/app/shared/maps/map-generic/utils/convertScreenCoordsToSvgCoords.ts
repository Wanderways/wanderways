export function convertScreenCoordsToSvgCoords( container : SVGSVGElement, zoomedElement : SVGGElement, x : number, y:number) {
    var pt = container.createSVGPoint();  // An SVGPoint SVG DOM object
    pt.x = x;
    pt.y = y;
    // getScreenCTM tells us the combined transform that determines where 
    // the circle is rendered. Including any viewBox.
    // We use the inverse of that to convert the mouse X and Y to their
    // equivalent values inside the SVG.
    pt = pt.matrixTransform(zoomedElement.getScreenCTM()!.inverse());
    return {'x': pt.x, 'y': pt.y};
}