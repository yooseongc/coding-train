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
        { title: 'CREPE: A Convolutional Representation for Pitch Estimation (GitHub)', url: 'https://github.com/marl/crepe' },
        { title: 'ml5.js Pitch Detection Reference', url: 'https://learn.ml5js.org/#/reference/pitch-detection' },
        { title: 'Pitch (music) - Wikipedia', url: 'https://en.wikipedia.org/wiki/Pitch_(music)' },
    ],
    tags: ['tuner', 'pitch', 'ml5', 'audio'],
    difficulty: 'intermediate',
    explanation: [
        'CREPE(Convolutional REPresentation for Pitch Estimation)는 2018년 뉴욕대 MARL(Music and Audio Research Lab)에서 발표한 단음 피치 감지(monophonic pitch detection) 딥러닝 모델입니다. 전통적인 FFT(고속 푸리에 변환) 기반 방법 대신 6층 합성곱 신경망(CNN)을 사용하여 오디오 파형에서 직접 기본 주파수(fundamental frequency)를 추정하며, 기존 방법보다 더 높은 정확도를 보입니다.',
        'ml5.pitchDetection()으로 마이크 입력의 주파수를 실시간 감지합니다. p5.AudioIn()으로 마이크 스트림을 생성하고, Web Audio API의 AudioContext를 통해 CREPE 모델에 전달합니다. 모델은 콜백 패턴으로 연속적으로 주파수를 감지하며, 감지된 주파수를 Hz 단위로 반환합니다.',
        'GUITAR_NOTES(E2=82.41Hz ~ E4=329.63Hz)와 UKULELE_NOTES(G4=392Hz, C4=261.63Hz, E4=329.63Hz, A4=440Hz) 객체에 표준 음높이(standard pitch)를 정의합니다. 국제 표준 음높이는 A4=440Hz를 기준으로 하며, 12평균율(equal temperament)에서 반음 간격은 2의 1/12승(약 1.0595) 비율입니다.',
        '시각적 튜너 UI에서 중앙 세로선이 정확한 피치 위치이고, 빨간 인디케이터가 diff/2만큼 좌우로 이동합니다. 편차가 threshold(1Hz) 이내이면 초록색으로 변하여 정확한 튜닝을 알립니다. 이 시각적 피드백은 실제 상용 튜너 앱과 동일한 UX 패턴입니다.',
        'createSelect()로 기타/우쿨렐레를 전환할 수 있습니다. 기타는 6현(E2, A2, D3, G3, B3, E4), 우쿨렐레는 4현(G4, C4, E4, A4)으로 개방현(open string) 주파수가 다릅니다. rectMode(CENTER)로 중앙 기준 사각형을 그리고, 편차에 비례하는 투명도(alpha)로 음정이 가까울수록 밝아지는 효과를 줍니다.',
        '이 챌린지는 머신러닝이 오디오 처리 분야에서 어떻게 활용되는지를 보여주는 실용적인 예제입니다. 피치 감지 외에도 음성 인식(speech recognition), 음악 장르 분류, 악기 분리(source separation) 등 다양한 오디오 ML 응용이 브라우저에서 가능해지고 있으며, Web Audio API와 TensorFlow.js의 결합이 이를 가능하게 합니다.',
    ],
})
