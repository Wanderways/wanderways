import { applyTransformMatrix } from "./applyTransformMatrix";
import { Coordinates } from "./coordinates";

/**
 * Pan the given element following the mouse depending on current transform
 * @param param0 The 
 * @returns The transformed matrice
 */
export function pan({ currentTransform, containerElement, toPanElement, deltaCoordinates }: PanParameters): DOMMatrix {
    // Get the mouse position as SVG coordinates
    const containerElementRect = containerElement.getClientRects().item(0)!;
    const containerElementViewBox = containerElement.viewBox.baseVal;
    currentTransform = currentTransform.translate(
        (deltaCoordinates.x / containerElementRect.width * containerElementViewBox.width / currentTransform.a),
        (deltaCoordinates.y / containerElementRect.height * containerElementViewBox.height / currentTransform.a));
    // Now we need to update the group's transform
    var transform = containerElement.createSVGTransform()!;        // An SVGTransform DOM object...
    applyTransformMatrix(transform, toPanElement, currentTransform);
    return currentTransform;
}

export interface PanParameters {
    currentTransform: DOMMatrix,
    containerElement: SVGSVGElement,
    toPanElement: SVGGElement,
    deltaCoordinates: Coordinates
}