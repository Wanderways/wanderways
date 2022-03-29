import { Coordinates } from "./coordinates";

/**
 * Takes absolute mouse coordinates, transformed element and its container. Serves to return the coordinates relative to the transformed element in the transformed context
 * @param container The transformed element container
 * @param zoomedElement The transformed element
 * @param coordinates The absolute coordinates to process
 * @returns The processed coordinates
 */
export function convertScreenCoordsToSvgCoords( container : SVGSVGElement, zoomedElement : SVGGElement, coordinates : Coordinates) : Coordinates {
    var pt = container.createSVGPoint();  // An SVGPoint SVG DOM object
    pt.x = coordinates.x;
    pt.y = coordinates.y;
    // getScreenCTM tells us the combined transform that determines where 
    // the circle is rendered. Including any viewBox.
    // We use the inverse of that to convert the mouse X and Y to their
    // equivalent values inside the SVG.
    pt = pt.matrixTransform(zoomedElement.getScreenCTM()!.inverse());
    return {x: pt.x, y: pt.y};
}