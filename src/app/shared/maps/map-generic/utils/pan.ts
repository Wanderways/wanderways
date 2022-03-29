import { applyTransformMatrix } from "./applyTransformMatrix";
import { convertScreenCoordsToSvgCoords } from "./convertScreenCoordsToSvgCoords";
import { Coordinates } from "./coordinates";

export function pan(panParameters :PanParameters) : DOMMatrix{
    // Get the mouse position as SVG coordinates
    panParameters.currentTransform = panParameters.currentTransform.translate( panParameters.deltaCoordinates.x / panParameters.currentTransform.a ,  panParameters.deltaCoordinates.y / panParameters.currentTransform.a);
    
    // Now we need to update the group's transform
    var transform = panParameters.containerElement.createSVGTransform()!;        // An SVGTransform DOM object...
    applyTransformMatrix(transform, panParameters.toPanElement, panParameters.currentTransform);
    return  panParameters.currentTransform;
}

export interface PanParameters{
    currentTransform : DOMMatrix,
    containerElement : SVGSVGElement,
    toPanElement : SVGGElement,
    coordinates : Coordinates,
    deltaCoordinates : Coordinates
}