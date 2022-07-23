  /**
   * Color selected group, but not the selected area
   * @param identifier The land identifier to colour
   * @param className The group to color
   */
export function colorAreas(identifier :string, className: string) {
  let elements: HTMLCollectionOf<Element> = document.getElementsByClassName(className);
  Array.from(elements).forEach(e => {
    if (identifier !== (<HTMLElement>e).id) {
      (<HTMLElement>e).classList.add("group-selected");
    }
  })
}
