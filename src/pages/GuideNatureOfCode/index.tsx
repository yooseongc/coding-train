import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SKETCHES_BASE } from '../../data/challengeRegistry'
import P5CodeView from '../../components/P5Runner/P5CodeView'
import type { SketchFile } from '../../types/challenge'
import { useTitle } from '../../hooks/useTitle'

function useSketchFiles(sketchId: string, fileNames: string[]) {
    const [files, setFiles] = useState<SketchFile[]>([])
    useEffect(() => {
        Promise.all(
            fileNames.map(async (name) => ({
                name,
                content: await fetch(`${SKETCHES_BASE}/${sketchId}/${name}`).then((r) => r.text()),
            })),
        ).then(setFiles)
    }, [sketchId, fileNames.join(',')])
    return files
}

const NOC_10_1_FILES = ['sketch.js']
const NOC_10_2_FILES = ['perceptron.js', 'vehicle.js', 'sketch.js']
const NOC_10_3_FILES = ['connection.js', 'network.js', 'neuron.js', 'sketch.js']
const NOC_10_4_FILES = ['connection.js', 'network.js', 'neuron.js', 'sketch.js']

export default function GuideNatureOfCode() {
    useTitle('Nature of Code')
    const files101 = useSketchFiles('noc_10_1', NOC_10_1_FILES)
    const files102 = useSketchFiles('noc_10_2', NOC_10_2_FILES)
    const files103 = useSketchFiles('noc_10_3', NOC_10_3_FILES)
    const files104 = useSketchFiles('noc_10_4', NOC_10_4_FILES)

    return (
        <div className="max-w-full mx-auto px-3 lg:px-4 py-6">
            {/* Back link */}
            <Link
                to="/"
                className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 mb-6"
            >
                &larr; Home
            </Link>

            {/* Title */}
            <div className="mb-10">
                <div className="inline-block text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-900 rounded-full px-3 py-1 mb-4">
                    Nature of Code - Chapter 10
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
                    Neural Networks
                    <span className="text-purple-600 dark:text-purple-400 ml-3 text-2xl font-normal">
                        신경망의 기초
                    </span>
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-lg max-w-3xl leading-relaxed">
                    Daniel Shiffman의 Nature of Code Chapter 10을 기반으로, 인공 신경망의 핵심 개념인
                    퍼셉트론부터 다층 신경망 시각화까지 단계별로 학습합니다. 각 예제는 p5.js로 구현되어
                    실시간으로 학습 과정을 관찰할 수 있습니다.
                </p>
            </div>

            {/* Section 1: Introduction */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    인공 신경망이란?
                </h2>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                        인간의 뇌는 수십억 개의 뉴런이 서로 연결된 생물학적 신경망입니다.
                        각 뉴런은 수상돌기(dendrite)를 통해 입력 신호를 받고, 이를 처리한 후
                        축삭(axon)을 통해 출력 신호를 전달합니다. 인공 신경망(Artificial Neural Network)은
                        이러한 뇌의 구조에서 영감을 받아, 컴퓨터가 패턴을 인식하고 학습할 수 있도록
                        설계된 계산 모델입니다.
                    </p>
                    <p>
                        인공 신경망은 절차적(procedural)이 아닌 연결주의적(connectionist) 시스템입니다.
                        정보가 순차적으로 처리되는 것이 아니라, 네트워크의 노드(뉴런)들 사이에서
                        병렬적으로 처리됩니다. 개별 뉴런은 단순하지만, 많은 뉴런으로 이루어진 네트워크는
                        매우 복잡하고 지능적인 행동을 보일 수 있습니다.
                    </p>
                    <p>
                        신경망의 핵심 특성 중 하나는 <strong>학습 능력</strong>입니다.
                        네트워크는 정보의 흐름에 따라 내부 구조를 변경할 수 있는 복잡 적응 시스템(complex adaptive system)이며,
                        이는 주로 연결의 <strong>가중치(weight)</strong>를 조정함으로써 이루어집니다.
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mt-4">
                        <h3 className="font-medium text-gray-900 dark:text-white mb-2">학습 전략</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                            <li>
                                <strong>지도 학습 (Supervised Learning)</strong>: 정답이 있는 데이터로 학습하여 오차를 줄여나가는 방식
                            </li>
                            <li>
                                <strong>비지도 학습 (Unsupervised Learning)</strong>: 정답 없이 데이터의 숨겨진 패턴을 찾는 방식 (예: 클러스터링)
                            </li>
                            <li>
                                <strong>강화 학습 (Reinforcement Learning)</strong>: 관찰과 보상을 기반으로 최적의 행동을 학습하는 방식
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 2: Perceptron */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    퍼셉트론 (Perceptron)
                </h2>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    <p>
                        1957년 Frank Rosenblatt이 발명한 퍼셉트론은 가장 단순한 형태의 신경망으로,
                        단일 뉴런의 계산 모델입니다. 퍼셉트론은 하나 이상의 입력, 처리기, 그리고
                        하나의 출력으로 구성됩니다.
                    </p>
                    <p>
                        퍼셉트론은 "피드포워드(feed-forward)" 모델을 따릅니다.
                        입력이 뉴런으로 전달되고, 처리된 후 출력이 생성됩니다.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-2">퍼셉트론 알고리즘</h3>
                        <ol className="list-decimal list-inside space-y-2 text-blue-700 dark:text-blue-400">
                            <li>
                                <strong>입력 수신</strong>: 각 입력값(x)을 받습니다
                            </li>
                            <li>
                                <strong>가중치 적용</strong>: 각 입력에 해당 가중치(w)를 곱합니다
                            </li>
                            <li>
                                <strong>합산</strong>: 가중 입력들의 합을 계산합니다 (sum = x1*w1 + x2*w2 + ...)
                            </li>
                            <li>
                                <strong>활성화 함수</strong>: 합을 활성화 함수에 통과시켜 출력을 생성합니다
                                (예: sign 함수 - 양수면 +1, 음수면 -1)
                            </li>
                        </ol>
                    </div>
                    <p>
                        아래 예제는 퍼셉트론이 2D 평면에서 점을 직선 위/아래로 분류하는 학습 과정을 보여줍니다.
                        훈련이 진행됨에 따라 퍼셉트론이 점차 정확하게 분류하는 것을 관찰할 수 있습니다.
                    </p>
                </div>

                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                    Example 10.1 - Simple Perceptron
                </h3>
                <P5CodeView files={files101} width={600} height={400} />
            </section>

            {/* Section 3: Perceptron with Vehicles */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    퍼셉트론과 자율 주행체
                </h2>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    <p>
                        퍼셉트론을 실제 시뮬레이션에 적용할 수 있습니다.
                        이 예제에서는 차량(Vehicle) 객체에 퍼셉트론 "두뇌"를 심어,
                        차량이 목표 경로를 따라가도록 조향(steering)을 학습합니다.
                    </p>
                    <p>
                        각 차량은 자신의 현재 위치와 목표 위치의 차이를 입력으로 받아,
                        퍼셉트론이 조향력의 방향을 결정합니다. 시간이 지남에 따라
                        가중치가 조정되면서 차량은 점점 더 정확하게 목표를 추적하게 됩니다.
                    </p>
                    <p>
                        이는 신경망의 실용적인 활용을 보여주는 예제로, 로봇 공학에서
                        자율 주행 로봇이 경로를 따라가도록 학습하는 원리와 유사합니다.
                    </p>
                </div>

                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                    Example 10.2 - Perceptron with Vehicles
                </h3>
                <P5CodeView files={files102} width={600} height={400} />
            </section>

            {/* Section 4: Neural Network Visualization */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    신경망 시각화
                </h2>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    <p>
                        퍼셉트론은 단일 뉴런이지만, 실제 신경망은 여러 층(layer)의 뉴런으로 구성됩니다.
                        이 예제는 다층 신경망의 구조를 시각적으로 보여줍니다.
                    </p>
                    <p>
                        시각화에서는 다음 요소들을 확인할 수 있습니다:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 ml-2">
                        <li><strong>뉴런(Neuron)</strong>: 원으로 표현되며, 각 층에 배치됩니다</li>
                        <li><strong>연결(Connection)</strong>: 선으로 표현되며, 가중치에 따라 굵기가 달라집니다</li>
                        <li><strong>입력층(Input Layer)</strong>: 외부 데이터를 받는 첫 번째 층</li>
                        <li><strong>은닉층(Hidden Layer)</strong>: 입력과 출력 사이에서 데이터를 처리하는 중간 층</li>
                        <li><strong>출력층(Output Layer)</strong>: 최종 결과를 내보내는 마지막 층</li>
                    </ul>
                    <p>
                        각 연결의 가중치는 학습을 통해 조정되며, 이 과정에서 네트워크가 점점 더
                        정확한 예측을 하게 됩니다. 가중치가 클수록 해당 연결이 최종 출력에
                        더 큰 영향을 미칩니다.
                    </p>
                </div>

                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                    Example 10.3 - Neural Network Visualization
                </h3>
                <P5CodeView files={files103} width={600} height={400} />
            </section>

            {/* Section 5: Extended Network */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    확장된 신경망
                </h2>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    <p>
                        앞선 예제를 확장하여, 더 복잡한 구조의 신경망을 시각화합니다.
                        뉴런 수를 늘리거나 은닉층을 추가하면 네트워크의 표현력이 증가하여
                        더 복잡한 패턴을 학습할 수 있게 됩니다.
                    </p>
                    <p>
                        그러나 네트워크가 커질수록 학습에 더 많은 데이터와 시간이 필요하며,
                        과적합(overfitting)의 위험도 커집니다. 적절한 네트워크 크기를 선택하는 것은
                        머신러닝에서 중요한 과제 중 하나입니다.
                    </p>
                </div>

                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                    Example 10.4 - Extended Network
                </h3>
                <P5CodeView files={files104} width={600} height={400} />
            </section>

            {/* Summary */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    정리
                </h2>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                        이 챕터에서는 신경망의 가장 기초적인 개념들을 살펴보았습니다:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>퍼셉트론: 입력에 가중치를 곱하고, 합산한 후 활성화 함수를 적용하는 단일 뉴런 모델</li>
                        <li>학습: 출력의 오차를 기반으로 가중치를 점진적으로 조정하는 과정</li>
                        <li>다층 신경망: 여러 층의 뉴런을 연결하여 복잡한 문제를 해결하는 구조</li>
                    </ul>
                    <p>
                        이 기초를 바탕으로, 다음 단계로 Toy Neural Network 프로젝트에서
                        역전파(backpropagation) 알고리즘을 직접 구현해볼 수 있습니다.
                    </p>
                </div>
            </section>

            {/* References */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="text-green-500">&#128206;</span> 참고 자료
                </h2>
                <ul className="space-y-2">
                    <li>
                        <a
                            href="https://natureofcode.com/book/chapter-10-neural-networks/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-pink-600 dark:text-pink-400 hover:underline"
                        >
                            Nature of Code - Chapter 10: Neural Networks &uarr;
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/nature-of-code/noc-examples-p5.js/tree/master/chp10_nn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-pink-600 dark:text-pink-400 hover:underline"
                        >
                            GitHub - NoC p5.js Examples (Chapter 10) &uarr;
                        </a>
                    </li>
                </ul>
            </section>

            <p className="text-center text-xs text-gray-400 dark:text-gray-700 mt-10">
                &copy; 2026 yooseongc &middot; coding-train
            </p>
        </div>
    )
}
