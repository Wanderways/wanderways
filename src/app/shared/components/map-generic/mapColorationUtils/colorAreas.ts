  /**
   * Color selected group, but not the selected area
   * @param id The land id to colour
   * @param className The group to color
   */
export function colorAreas(id :string, className: string) {
  let elements: HTMLCollectionOf<Element> = document.getElementsByClassName(className);
  Array.from(elements).forEach(e => {
    if (id !== (<HTMLElement>e).id) {
      (<HTMLElement>e).classList.add("group-selected");
    }
  })
}
