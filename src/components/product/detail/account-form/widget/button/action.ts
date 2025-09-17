export function handleButtonAction(actionTypeId: string) {
  switch (actionTypeId) {
    case "joinParty":
      window.open("https://www.google.com", "_blank");
      break;
    default:
      break;
  }
}
