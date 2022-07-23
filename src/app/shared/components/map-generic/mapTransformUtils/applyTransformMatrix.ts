/**
 * Apply a matrix to an element
 * @param svgTransform The transform to apply
 * @param svgGElement The svg on which to apply the transforms
 * @param newMatrix The parents matrix newly generated
 */
export function applyTransformMatrix(svgTransform : SVGTransform, svgGElement : SVGGraphicsElement, newMatrix : DOMMatrix){
    svgTransform.setMatrix(newMatrix); // set to the new groupTransform...
    svgGElement.transform.baseVal.initialize(svgTransform); // and used to update the circle transform property
}