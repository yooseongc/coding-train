import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '096_visualizing_the_digits_of_pi',
    number: 96,
    title: 'Visualizing the Digits of Pi',
    categoryId: 'data-visualization',
    description: 'PI의 100만 자리 숫자를 원 위의 점으로 시각화합니다. 연속된 두 숫자를 원 위의 각도로 매핑하여 선으로 연결합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #96: Visualizing the Digits of Pi', url: 'https://thecodingtrain.com/challenges/96-visualizing-the-digits-of-pi' },
        { title: 'Pi Day - One Million Digits of Pi', url: 'https://www.piday.org/million/' },
        { title: 'Martin Krzywinski - Pi Art', url: 'http://mkweb.bcgsc.ca/pi/art/' },
        { title: 'Wikipedia - Pi', url: 'https://en.wikipedia.org/wiki/Pi' },
    ],
    tags: ['pi', 'digits', 'visualization', 'path'],
    difficulty: 'beginner',
    explanation: [
        '원주율 Pi(3.14159...)는 원의 둘레와 지름의 비율로, 수학에서 가장 유명한 무리수이자 초월수입니다. Pi의 소수점 이하 자릿수는 무한히 계속되며 반복 패턴이 없는 것으로 알려져 있습니다. 이 챌린지에서는 Pi의 100만 자리 숫자를 시각적 패턴으로 변환하여, 숫자열의 분포 특성을 직관적으로 탐구합니다.',
        'loadStrings()로 Pi의 100만 자리를 텍스트 파일에서 로드하고, split("")으로 각 문자를 배열로 변환한 뒤 int()로 정수 배열로 만듭니다. 원의 둘레를 10등분(TWO_PI/10)하여 0~9의 각 숫자를 원 위의 고정된 각도 위치에 매핑합니다.',
        'draw() 함수에서 연속된 두 숫자(digit, nextDigit)를 0~TWO_PI 범위의 각도로 map()하고, random(-diff, diff)로 약간의 무작위 변위를 추가합니다. cos()와 sin()으로 두 각도의 원 위 좌표를 계산하고 line()으로 반투명(alpha=50) 선으로 연결합니다. 변위를 추가하는 이유는 같은 숫자 쌍의 선들이 완전히 겹치지 않도록 하여 밀도를 시각화하기 위함입니다.',
        '수만 개의 반투명 선이 겹치면서 숫자 쌍(예: 1->4, 5->9)의 출현 빈도에 따라 밝기가 달라집니다. Pi가 정규 수(Normal Number)라면 모든 숫자 쌍의 빈도가 균등해야 하며, 시각화를 통해 이를 직관적으로 확인할 수 있습니다. Martin Krzywinski의 Pi Art 프로젝트에서 영감을 받은 시각화 방식입니다.',
        '이러한 숫자 시각화 기법은 Pi뿐 아니라 e(자연상수), sqrt(2), 난수열 등 다양한 수열의 통계적 특성을 탐구하는 데 활용할 수 있습니다. 또한 암호학에서 의사 난수 생성기의 출력이 충분히 무작위한지 검증하는 시각적 테스트 도구로도 응용됩니다.',
    ],
})
