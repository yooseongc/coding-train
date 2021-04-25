
# TensorFlow.js

## Introduction

> https://www.tensorflow.org/js/    
> https://github.com/tensorflow/tfjs   
> https://www.tensorflow.org/js/tutorials

TensorFlow.js is an open-source hardware-accelerated JavaScript library for training and deploying machine learning models.

 * Develop ML in the Browser
 * Develop ML in Node.js
 * Run Existing models
 * Retrain Existing models

APIs:

 * `TensorFlow.js Core`, a flexible low-level API for neural networks and numerical computation.
 * `TensorFlow.js Layers`, a high-level API which implements functionality similar to Keras.
 * `TensorFlow.js Data`, a simple API to load and prepare data analogous to tf.data.
 * `TensorFlow.js Converter`, tools to import a TensorFlow SavedModel to TensorFlow.js
 * `TensorFlow.js Vis`, in-browser visualization for TensorFlow.js models
 * `TensorFlow.js AutoML`, Set of APIs to load and run models produced by AutoML Edge.

Backends/Platforms:

 * `TensorFlow.js CPU Backend`, pure-JS backend for Node.js and the browser.
 * `TensorFlow.js WebGL Backend`, WebGL backend for the browser.
 * `TensorFlow.js WASM Backend`, WebAssembly backend for the browser.
 * `TensorFlow.js WebGPU`, WebGPU backend for the browser.
 * `TensorFlow.js Node`, Node.js platform via TensorFlow C++ adapter.
 * `TensorFlow.js React Native`, React Native platform via expo-gl adapter.

## Getting Started

### Via script tag
```html
<html>
  <head>
    <!-- Load TensorFlow.js -->
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js"> </script>


    <!-- Place your code in the script tag below. You can also use an external .js file -->
    <script>
      // Notice there is no 'import' statement. 'tf' is available on the index-page
      // because of the script tag above.

      // Define a model for linear regression.
      const model = tf.sequential();
      model.add(tf.layers.dense({units: 1, inputShape: [1]}));

      // Prepare the model for training: Specify the loss and the optimizer.
      model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

      // Generate some synthetic data for training.
      const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
      const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

      // Train the model using the data.
      model.fit(xs, ys).then(() => {
        // Use the model to do inference on a data point the model hasn't seen before:
        // Open the browser devtools to see the output
        model.predict(tf.tensor2d([5], [1, 1])).print();
      });
    </script>
  </head>

  <body>
  </body>
</html>
```

### via NPM

> Add TensorFlow.js to your project using yarn or npm.   
> Note: Because we use ES2017 syntax (such as import), this workflow assumes you are using a modern browser or a bundler/transpiler to convert your code to something older browsers understand. See our examples to see how we use Parcel to build our code. However, you are free to use any build tool that you prefer.   

```javascript
import * as tf from '@tensorflow/tfjs';

// Define a model for linear regression.
const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));

// Prepare the model for training: Specify the loss and the optimizer.
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

// Generate some synthetic data for training.
const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

// Train the model using the data.
model.fit(xs, ys).then(() => {
  // Use the model to do inference on a data point the model hasn't seen before:
  model.predict(tf.tensor2d([5], [1, 1])).print();
});

```

## What is Tensors

Tensors are the core datastructure of TensorFlow.js They are a generalization of vectors and matrices to potentially higher dimensions.

### Creation
We have utility functions for common cases like Scalar, 1D, 2D, 3D and 4D tensors, as well a number of functions to initialize tensors in ways useful for machine learning.

#### tf.tensor (values, shape?, dtype?) - function
Creates a tf.Tensor with the provided values, shape and dtype.
Parameters:
 * `values` 
   * TypedArray | Array
   * The values of the tensor. 
   * Can be nested array of numbers, or a flat array, or a `TypedArray`.
   *  If the values are strings, they will be encoded as utf-8 and kept as `Uint8Array[]`.
 * `shape` 
   * number[]
   * The shape of the tensor.
   * If not provided, it is inferred from values. 
   * `Optional`
 * `dtype` 
   * 'float32' | 'int32' | 'bool' | 'complex64' | 'string'
   * The data type. 
   * `Optional`

Returns: `tf.Tensor`

```javascript
// Pass an array of values to create a vector.
tf.tensor([1, 2, 3, 4]);

// Pass a nested array of values to make a matrix or a higher
// dimensional tensor.
tf.tensor([[1, 2], [3, 4]])

// Pass a flat array and specify a shape yourself.
tf.tensor([1, 2, 3, 4], [2, 2])
```
#### tf.scalar (values, dtype?) - function
Creates rank-0 tf.Tensor (scalar) with the provided value and dtype.
 * `values` 
   * number|boolean|string|Uint8Array
   * The values of the scalar. 
 * `dtype` 
   * 'float32'|'int32'|'bool'|'complex64'|'string'
   * The data type. 
   * `Optional`

Returns: `tf.Scalar`

```javascript
tf.scalar(3.14);
```

#### others
 * tf.tensor1d(values, dtype?) -> tf.Tensor1D
 * tf.tensor2d(values, shape?, dtype?) -> tf.Tensor2D
 * tf.tensor3d(values, shape?, dtype?) -> tf.Tensor3D
 * tf.tensor4d(values, shape?, dtype?) -> tf.Tensor4D
 * tf.tensor5d(values, shape?, dtype?) -> tf.Tensor5D
 * tf.tensor6d(values, shape?, dtype?) -> tf.Tensor6D
 * tf.buffer(shape, dtype?, values?) -> tf.TensorBuffer
 * tf.clone(x) -> tf.Tensor
 * tf.complex(real, imag) -> tf.Tensor
 * tf.eye(numRows, numColumns?, batchShape?, dtype?) -> Tensor2D : Create an identity matrix
 * tf.fill(shape, value, dtype?)
 * tf.imag(input) -> tf.Tensor : return imaginary part of a complex tensor
 * tf.linspace(start, stop, num) -> tf.Tensor1D
 * tf.oneHot(indices, depth, onValue?, offValue?) -> tf.Tensor
 * tf.ones(shape, dtype?) -> tf.Tensor
 * tf.onesLike(x) -> tf.Tensor : with all elements set to 1
 * tf.print(x, verbose?) -> void
 * tf.range(start, stop, step?, dtype?) -> tf.Tensor1D
 * tf.real(input) -> tf.Tensor : return real part of a complex tensor
 * tf.truncatedNormal(shape, mean?, stdDev?, dtype?, seed?) -> tf.Tensor
 * tf.variable(initialValue, trainable?, name?, dtype?) -> tf.Variable
 * tf.zeros(shape, dtype?) -> tf.Tensor
 * tf.zerosLike(x) -> tf.Tensor

#### Tensors/Classes
 * tf.Tensor
   * buffer() -> tf.TensorBuffer
   * bufferSync() -> tf.TensorBuffer
   * array() -> Promise<number[]>
   * arraySync() -> number[]
   * data() -> Promise<DataTypeMap[NumericDataType]>
   * dataSync() -> DataTypeMap[NumericDataType]
   * dispose() -> void : disposes tf.Tensor from memory
   * print(verbose?) -> void
   * clone() -> tf.Tensor
   * toString(verbose?) -> string
 * tf.Variable extends tf.Tensor
   * assign(newValue) -> void
 * tf.TensorBuffer : a mutable object that allow users to set values at locations before convierting to an immutable tf.Tensor
   * set(value, ...locs) -> void
   * get(...locs) -> SingleValueMap[D]
   * toTensor() -> tf.Tensor



## Variables & Operations

### Memory Managements

텐서들은 기본적으로 메모리 공간에 따로 저장되고, 따라서 비동기로 동작하게 됨. 위의 `tf.Tensor.data()`가 `Promise`를 리턴하는 것을 보면 알 수 있음.

```javascript
const values = [];
for (let i = 0; i < 30; i++) {
    values[i] = Math.random(0, 100);
}
const shape = [2, 5, 3];
const ts = tf.tensor3d(values, shape, 'int32');
ts.data().then(data => {
    console.log(data); // -> Int32Array(30)
});
```

위 예제에서 보듯, 실제 데이터의 저장은 3D tensor임에도 1D로 저장됨을 알 수 있음. 그냥 출력을 원하면 `ts.print()`를 사용하면 콘솔 창에서 3차원 배열 형태로 볼 수 있음. 혹은 `ts.dataSync()`를 사용할 수도 있음.

메모리를 해제하고 싶다면 `ts.dispose()`와 같은 식으로 할당을 해제할 수 있음.

#### Memory API
 * tf.memory() -> MemoryInfo
   * numBytes
   * numTensors
   * numDataBuffers
   * unreliable
   * reasons (when unreliable is true)
   * numBytesInGPU
 * tf.tidy(nameOrFn, fn?) : Executes the provided function fn and after it is executed, cleans up all intermediate tensors allocated by fn except those returned by fn. Using this method helps avoid memory leaks. In general, wrap calls to operations in tf.tidy() for automatic memory cleanup.
 * tf.dispose(container) -> void : dispose any tf.Tensors found within the provided object.
 * tf.keep(result) -> tf.Tensor : keeps a tf.Tensor generated inside a tf.tidy() from being disposed automatically

### Variables

텐서는 기본적으로 `immutable`이며, 값을 바꾸고 싶다면 `tf.Variable`을 사용한다.  
```javascript
const tv = ts.variable(0);
```

### Operations
 * Arithmetic -> all operations always return new Tensors, supports broadcasting
   * tf.add(a, b) -> tf.Tensor : element-wise
   * tf.sub(a, b) -> tf.Tensor : element-wise
   * tf.mul(a, b) -> tf.Tensor : element-wise
   * tf.div(a, b) -> tf.Tensor : element-wise
   * tf.addN(tensors) -> tf.Tensor : element-wise
   * tf.divNoNan(a, b) -> tf.Tensor : element-wise, 0 if denominator is 0
   * tf.floorDiv(a, b) -> tf.Tensor : element-wise
   * tf.maximum(a, b) -> tf.Tensor : element-wise
   * tf.minimum(a, b) -> tf.Tensor : element-wise
   * tf.mod(a, b) -> tf.Tensor : element-wise
   * tf.pow(base, exp) -> tf.Tensor : element-wise
   * tf.squaredDifference(a, b) -> tf.Tensor : element-wise
 * Basic math - element-wise, broadcasting
   * tf.abs(x)
   * tf.acos(x)
   * tf.acosh(x)
   * tf.asin(x)
   * tf.asinh(x)
   * tf.atan(x)
   * tf.atan2(a, b)
   * tf.atanh(x)
   * tf.ceil(x)
   * tf.clipByValue(x, clipValueMin, clipValueMax)
   * tf.cos(x)
   * tf.cosh(x)
   * tf.elu(x) : exponential linear (x > 0 ? e^x - 1 : 0)
   * tf.erf(x) : gauss error function
   * tf.exp(x)
   * tf.expm1(x) : e^x - 1
   * tf.floor(x)
   * tf.isFinite(x) : booleans
   * tf.isInf(x) : booleans
   * tf.isNaN(x) : booleans
   * tf.leakyRelu(x, alpha?) : leaky rectified linear 
   * tf.log(x)
   * tf.log1p(x) : ln(1 + x)
   * tf.logSigmoid : logSigmoid(x) = -tf.softplus(-x)
   * tf.neg(x) : -1 * x
   * tf.prelu(x, alpha) : leaky rectified linear with parametric alpha
   * tf.reciprocal(x) : 1 / x
   * tf.relu(x) : rectified linear = max(x, 0)
   * tf.relu6(x) : rectified linear 6 = min(max(x, 0), 6)
   * tf.round(x)
   * tf.rsqrt(x) : reciprocal of square root = 1 / sqrt(x)
   * tf.selu(x) : scaled exponential linear = x < 0 ? scale * alpha * (exp(x) - 1) : x
   * tf.sigmoid(x) : sigmoid = 1 / (1 + exp(-x))
   * tf.sign(x)
   * tf.sin(x)
   * tf.sinh(x)
   * tf.softplus(x) : softplus = log(exp(x) + 1)
   * tf.sqrt(x)
   * tf.square(x) : x ^ 2
   * tf.step(x, alpha?) : x > 0 ? 1 : alpha * x
   * tf.tan(x)
   * tf.tanh(x)
 * Matrices
   * tf.dot(t1, t2)
   * tf.matMul(a, b, transposeA?, transposeB?)
   * tf.norm(x, ord?, axis?, keepDims?)
   * tf.outerProduct(v1, v2)
   * tf.transpose(x, perm?)
 * Convolution
   * tf.avgPool3d(x, filterSize, strides, pad, dimRoundingMode? dataFormat?)
   * tf.conv1d(x, filter, strides, pad, dataFormat?, dilation?, dimRoundingMode?)
   * tf.conv2d(x, filter, strides, pad, dataFormat?, dilations?, dimRoundingMode?)
   * tf.conv2dTranspose(x, filter, outputShape, strides, pad, dimRoundingMode?)
   * tf.conv3d(x, filter, strides, pad, dataFormat?, dilations?)
   * tf.conv3dTranspose(x, filter, outputshape, strides, pad)
   * tf.depthwiseConv2d(x, filter, strides, pad, dataFormat?, dilations?, dimRoundingMode?)
   * tf.dilation2d(x, filter, strides, pad, dilations?, dataFormat?)
   * tf.maxPool3d(x, filterSize, strides, pad, dimRoundingMode?, dataFormat?)
   * tf.maxPoolWithArgmax(x, filterSize, strides, pad, includeBatchIndex?)
   * tf.pool(input, windowShape, poolingType, pad, dilations?, strides?)
   * tf.separableConv2d(x, depthwiseFilter, pointwiseFilter, strides, pad, dilation?, dataFormat?)
 * Reduction
 * Normalization
 * Images
 * RNN
 * Logical
 * Evaluation
 * Scan
   * tf.cumsum(x, axis?, exclusive?, reverse?) : cumulative sum along axis
 * Slicing and Joining
 * spectral -> Fast Fourier Transformation
 * Segment
 * Moving Average
   * tf.movingAverage(v, x, decay, step?, zeroDebias?)
 * Dropout
   * tf.dropout(x, rate, noiseShape?, seed?)
 * Signal
   * tf.signal.frame
   * tf.signal.hammingWindow
   * tf.signal.hannWindow
   * tf.signal.stft
 * Linear Algebra
   * tf.linalg.bandPart
   * tf.linalg.gramSchmidt : Gram-Schmidt orthogonalization
   * tf.linalg.qr : QR decomposition


## Layers API

> Similar to Keras (Keras API를 모델로 함)  
> You can architect NeuralNetwork using Layers API.   
> https://www.tensorflow.org/js/guide/models_and_layers

### 개요
 * 머신러닝에서 `모델`은 입력을 출력에 매핑하는 학습 가능한 `매개변수`가 있는 함수.
 * 최적의 매개변수는 데이터에서 모델을 훈련하여 얻음.
 * 잘 훈련된 모델은 입력에서 원하는 출력으로 정확한 매핑을 제공함.
 * `TensorFlow.js`는 기계 학습 모델을 만드는 두 가지 방법을 제공
   1. 레이어를 사용하여 모델을 만드는 `Layers API` 사용
   2. `tf.matMul()`이나 `tf.add()` 등과 같은 하위 수준 연산과 함께 `Core API` 사용

### Layers API

 * `순차형 모델`과 `기능적 모델` 두 가지가 있음
 * 순차형 모델
    ```javascript
    // tf.sequential({layers: [inputLayers, outputLayers, ...]})
    const model = tf.sequential({
        layers: [
            tf.layers.dense({inputShape: [784], units: 32, activation: 'relu'}),
            tf.layers.dense({units: 10, activation: 'softmax'}),
        ]
    });

    // tf.sequential().add()
    const model = tf.sequential();
    model.add(tf.layers.dense({inputShape: [784], units: 32, activation: 'relu'}));
    model.add(tf.layers.dense({units: 10, activation: 'softmax'}));
    ```
    * 모델의 첫 번째 레이어에는 `inputShape`가 필요
    * `inputShape`에 배치 크기는 제외 

 * 기능적 모델
    ```javascript
    // Create an arbitrary graph of layers, 
    // by connecting them via the apply() method.
    const input = tf.input({shape: [784]});
    const dense1 = tf.layers.dense({units: 32, activation: 'relu'}).apply(input);
    const dense2 = tf.layers.dense({units: 10, activation: 'softmax'}).apply(dense1);
    const model = tf.model({inputs: input, outputs: dense2});
    ```
   * `tf.model()` 함수를 통해 직접 생성
   * `tf.apply()`를 이용해 위 순차형과 동일한 모델 구조 생성
   * `inputShape` 대신 `tf.input()`으로 input layer를 정의함
   * 레이어를 분리하여 테스트하고 출력을 볼 때 유용할 수 있음
 * 두 모델 모두 `LayersModel` 클래스의 인스턴스임
 * `LayersModel`은 데이터가 레이어를 통과할 때 자동 형상 추론을 수행함.
 * 형상을 미리 알면 모델이 자동으로 매개변수를 생성할 수 있으며, 두 개의 연속된 레이어가 서로 호환되지 않는지 여부를 알 수 있음.
 * `model.summary()`를 호출하면 아래와 같은 모델 요약 정보를 알 수 있음
   * 모델에 있는 모든 레이어의 이름과 유형
   * 각 레이어의 출력 모양
   * 각 레이어의 가중치 매개 변수 수
   * 모델에 일반 토폴로지가 있는 경우 각 레이어가 수신하는 입력
   * 모델의 학습 가능 및 불가능 매개 변수의 총 수
 * `LayersModel`을 사용하면 모델의 저장과 로드를 할 수 있음
    ```javascript
    const saveResult = await model.save('localstorage://my-model-1');
    const model = await tf.loadLayersModel('localstorage://my-model-1');
    ```
   * 위 예시는 모델을 브라우저의 로컬 저장소에 저장함. 
   * 파일 저장소, IndexedDB, 다운로드 트리거 등 다른 방법도 존재.

### Custom Layer

 * 레이어는 모델의 구성 요소로, 사용자 지정 레이어를 정의할 수 있음.
 * 단, Custom Layer 사용 시 모델 직렬화를 할 수 없음.
  ```javascript
    class SquaredSumLayer extends tf.layers.Layer {
        constructor() {
            super({});
        }
        // In this case, the output is a scalar.
        computeOutputShape(inputShape) { return []; }

        // call() is where we do the computation.
        call(input, kwargs) { return input.square().sum();}

        // Every layer needs a unique name.
        getClassName() { return 'SquaredSum'; }
    }

    const t = tf.tensor([-2, 1, 0, 5]);
    const o = new SquaredSumLayer().apply(t);
    o.print(); // prints 30
  ```

## Core API

 * 아래와 같은 경우 사용함
   * 최대한의 유연성 또는 제어가 필요할 때
   * 직렬화가 필요하지 않거나 자체적으로 직렬화 논리를 구현 가능할 때
 * Core API의 모델은 하나 이상의 Tensor를 사용하고 Tensor를 반환하는 함수임.
 * 아래는 Core API로 작성된 모델의 예시   
    ```javascript
    // The weights and biases for the two dense layers.
    const w1 = tf.variable(tf.randomNormal([784, 32]));
    const b1 = tf.variable(tf.randomNormal([32]));
    const w2 = tf.variable(tf.randomNormal([32, 10]));
    const b2 = tf.variable(tf.randomNormal([10]));

    function model(x) {
    return x.matMul(w1).add(b1).relu().matMul(w2).add(b2).softmax();
    }
    ```
 * 이 방법을 사용하면, 직접 모델의 가중치를 만들고 초기화할 책임이 생김.
 * `tf.Variable()`과 input tensor를 사용. 
