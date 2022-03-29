import { applyTransformMatrix } from "./applyTransformMatrix";
import { convertScreenCoordsToSvgCoords } from "./convertScreenCoordsToSvgCoords";
import { Coordinates } from "./coordinates";

export function zoom(zoomParameters :ZoomParameters) : DOMMatrix{
    // Get the mouse position as SVG coordinates
    var coords = convertScreenCoordsToSvgCoords(zoomParameters.containerElement, zoomParameters.toScaleElement, {x:zoomParameters.coordinates.x, y:zoomParameters.coordinates.y});
    
    // Calculate an appropriate scale adjustment
    let scale = 1.0 + (zoomParameters.deltaScale * 0.001);
    
    // To scale around the mouse coords, first we transform the coordinate
    // system so that the origin is at the mouse coords.
    zoomParameters.currentTransform = zoomParameters.currentTransform.translate(coords.x, coords.y);
    // Then we apply the scale
    zoomParameters.currentTransform = zoomParameters.currentTransform.scale(scale, scale);
    // Finally we move the coordinate system back to where it was
    zoomParameters.currentTransform = zoomParameters.currentTransform.translate(-coords.x, -coords.y);
    
    // Now we need to update the group's transform
    var transform = zoomParameters.containerElement.createSVGTransform()!;        // An SVGTransform DOM object...
    applyTransformMatrix(transform, zoomParameters.toScaleElement, zoomParameters.currentTransform);
    return  zoomParameters.currentTransform;
}

export interface ZoomParameters{
    deltaScale : number,
    currentTransform : DOMMatrix,
    containerElement : SVGSVGElement,
    toScaleElement : SVGGElement,
    coordinates : Coordinates
}

