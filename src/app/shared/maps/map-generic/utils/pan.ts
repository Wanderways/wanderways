import { applyTransformMatrix } from "./applyTransformMatrix";
import { Coordinates } from "./coordinates";

/**
 * Pan the given element following the mouse depending on current transform
 * @param param0 The params necessary to calculate the panning
 * @returns The transformed matrice
 */
export function pan({ currentTransform, containerElement, toPanElement, deltaCoordinates }: PanParameters): DOMMatrix {
    // Get the mouse position as SVG coordinates
    const containerElementViewBox = containerElement.viewBox.baseVal;
    const toPanRect = toPanElement.getClientRects().item(0)!;
    
    // Adapt to screen resolution
    deltaCoordinates.x /= window.devicePixelRatio;
    deltaCoordinates.y /= window.devicePixelRatio;

    currentTransform = currentTransform.translate(
        (deltaCoordinates.x  / currentTransform.a) * ((containerElementViewBox.width * currentTransform.a) / toPanRect.width),
        (deltaCoordinates.y / currentTransform.a) *((containerElementViewBox.height * currentTransform.a)/ toPanRect.height),
        );
    // console.log(deltaCoordinates.x /(toPanRect.width * currentTransform.a),deltaCoordinates.y *toPanRect.height*  currentTransform.a);
    console.log(toPanRect.width, toPanRect.height);
    
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