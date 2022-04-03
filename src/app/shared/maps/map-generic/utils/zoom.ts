import { applyTransformMatrix } from "./applyTransformMatrix";
import { convertScreenCoordsToSvgCoords } from "./convertScreenCoordsToSvgCoords";
import { Coordinates } from "./coordinates";

/**
 * Zooms to a given position, applying a given scale to a given element contained in a given parent relative to a precedent transform
 * @param zoomParameters The parameters described above
 * @returns A matrix with the current transform
 */
export function zoom({deltaScale, currentTransform, containerElement, toScaleElement, coordinates} :ZoomParameters) : DOMMatrix{
    // Get the mouse position as SVG coordinates
    var coords = convertScreenCoordsToSvgCoords(containerElement, toScaleElement, {x:coordinates.x, y:coordinates.y});
    
    // Calculate an appropriate scale adjustment
    let scale = 1.0 + (deltaScale * 0.001);
    
    // To scale around the mouse coords, first we transform the coordinate
    // system so that the origin is at the mouse coords.
    currentTransform = currentTransform.translate(coords.x, coords.y);
    // Then we apply the scale
    currentTransform = currentTransform.scale(scale, scale);
    // Finally we move the coordinate system back to where it was
    currentTransform = currentTransform.translate(-coords.x, -coords.y);
    
    // Now we need to update the group's transform
    var transform = containerElement.createSVGTransform()!;        // An SVGTransform DOM object...
    applyTransformMatrix(transform, toScaleElement, currentTransform);
    return  currentTransform;
}

export interface ZoomParameters{
    deltaScale : number,
    currentTransform : DOMMatrix,
    containerElement : SVGSVGElement,
    toScaleElement : SVGGElement,
    coordinates : Coordinates
}

