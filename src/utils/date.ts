/**
 * 날짜 관련 유틸리티 함수들
 */

/**
 * 한국어 형식으로 날짜를 포맷팅합니다 (예: 2025.09.31)
 */
export const formatKoreanDate = (date: Date): string => {
  return date
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\. /g, ".")
    .replace(/\.$/, "");
};

/**
 * 두 날짜 사이의 일수 차이를 계산합니다
 */
export const getDaysDifference = (startDate: Date, endDate: Date): number => {
  const timeDiff = endDate.getTime() - startDate.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return daysDiff;
};

/**
 * 현재 날짜부터 특정 날짜까지 남은 일수를 계산합니다
 */
export const getRemainingDays = (targetDate: Date): number => {
  const today = new Date();
  return getDaysDifference(today, targetDate);
};

/**
 * 파티 종료일까지 남은 일수를 계산하고 한국어 형식으로 반환합니다
 */
export const getPartyEndDateText = (endDate: Date): string => {
  const remainingDays = getRemainingDays(endDate);
  const formattedDate = formatKoreanDate(endDate);

  if (remainingDays <= 0) {
    return `${formattedDate}까지(마감)`;
  }

  return `${formattedDate}까지(${remainingDays}일)`;
};
