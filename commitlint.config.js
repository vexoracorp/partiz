/** @type {import('@commitlint/types').UserConfig} */
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 제목의 최대 길이를 100자로 설정
    'subject-max-length': [2, 'always', 100],
    // 제목의 최소 길이를 3자로 설정  
    'subject-min-length': [2, 'always', 3],
    // 제목 끝에 마침표 금지
    'subject-full-stop': [2, 'never', '.'],
    // 타입은 소문자로
    'type-case': [2, 'always', 'lower-case'],
    // 허용되는 타입들
    'type-enum': [
      2,
      'always',
      [
        'feat',     // 새로운 기능
        'fix',      // 버그 수정
        'docs',     // 문서 변경
        'style',    // 코드 스타일 변경 (포맷팅, 세미콜론 등)
        'refactor', // 리팩토링
        'test',     // 테스트 추가/수정
        'chore',    // 빌드, 패키지 매니저 등의 변경
        'perf',     // 성능 개선
        'ci',       // CI 설정 변경
        'build',    // 빌드 시스템 변경
        'revert'    // 이전 커밋 되돌리기
      ]
    ]
  }
};
