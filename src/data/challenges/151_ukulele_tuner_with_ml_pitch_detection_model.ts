import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '151_ukulele_tuner_with_ml_pitch_detection_model',
    number: 151,
    title: 'Ukulele Tuner with ML Pitch Detection Model',
    categoryId: 'neural-networks-ml',
    description: 'ml5.js의 CREPE 피치 감지 모델로 기타/우쿨렐레 튜너를 만듭니다.',
    files: ['sketch.js'],
    libraries: ['p5.sound.min.js', 'ml5.min.js'],
    bodyHtml: '<div id="canvasDiv"></div>',
    references: [
        { title: 'Coding Challenge #151: Ukulele Tuner with ML Pitch Detection Model', url: 'https://thecodingtrain.com/challenges/151-ukulele-tuner' },
    ],
    tags: ['tuner', 'pitch', 'ml5', 'audio'],
    difficulty: 'intermediate',
    explanation: [
        'CREPE는 단음 피치 감지를 위한 딥러닝 모델입니다. ml5.pitchDetection()으로 마이크 입력의 주파수를 실시간 감지하고, 가장 가까운 음(note)을 표시하는 악기 튜너를 구현합니다.',
        'GUITAR_NOTES(E2~E4)와 UKULELE_NOTES(G4,C4,E4,A4) 객체에 표준 주파수를 정의합니다. 감지된 주파수와 각 음의 차이(diff)를 비교하여 가장 가까운 음과 편차를 계산합니다.',
        '시각적 튜너 UI에서 중앙 세로선이 정확한 피치 위치이고, 빨간 인디케이터가 diff/2만큼 좌우로 이동합니다. 편차가 threshold(1Hz) 이내이면 초록색으로 변하여 정확한 튜닝을 알립니다.',
        'createSelect()로 기타/우쿨렐레 전환이 가능합니다. rectMode(CENTER)로 중앙 기준 사각형을 그리고, 편차에 비례하는 투명도(alpha)로 음정이 가까울수록 밝아지는 효과를 줍니다.',
    ],
})
