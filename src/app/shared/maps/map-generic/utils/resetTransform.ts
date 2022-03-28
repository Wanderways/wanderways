import { applyTransformMatrix } from "./applyTransformMatrix";

export function resetTransform(containerElement : SVGSVGElement, toScaleElement : SVGGElement,){
    applyTransformMatrix(containerElement.createSVGTransform(), toScaleElement, containerElement.createSVGMatrix());
}