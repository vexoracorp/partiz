// 배경색의 밝기를 계산하는 함수
function getLuminance(hexColor: string): number {
  // # 제거
  const hex = hexColor.replace("#", "");

  // RGB 값 추출
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  // 상대 휘도 계산 (WCAG 2.0 기준)
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

// 배경색에 따라 적절한 텍스트 색상을 반환하는 함수
export function getContrastTextColor(backgroundColor: string): string {
  const luminance = getLuminance(backgroundColor);

  // 밝기가 0.5보다 크면 어두운 텍스트, 작으면 밝은 텍스트
  return luminance > 0.5 ? "#151515" : "#FFFFFF";
}

// 배경색에 따라 적절한 설명 텍스트 색상을 반환하는 함수 (약간 투명도 추가)
export function getContrastDescriptionColor(backgroundColor: string): string {
  const luminance = getLuminance(backgroundColor);

  // 밝기가 0.5보다 크면 어두운 텍스트, 작으면 밝은 텍스트
  // 설명 텍스트는 약간 투명도를 추가
  return luminance > 0.5 ? "rgba(21, 21, 21, 0.9)" : "rgba(255, 255, 255, 0.9)";
}
