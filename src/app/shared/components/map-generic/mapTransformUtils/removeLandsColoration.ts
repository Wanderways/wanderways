export function removeLandsColoration() {
  Array.from(document.getElementsByClassName("selected")).forEach(e => {
    (<HTMLElement>e).classList.remove('selected');
  });

  Array.from(document.getElementsByClassName("group-selected")).forEach(e => {
    (<HTMLElement>e).classList.remove('group-selected');
  });
}
