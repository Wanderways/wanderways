export function applyTransformMatrix(svgTransform : SVGTransform, svgGElement : SVGGraphicsElement, newMatrix : DOMMatrix){
    svgTransform.setMatrix(newMatrix); // set to the new groupTransform...
    svgGElement.transform.baseVal.initialize(svgTransform); // and used to update the circle transform property
}