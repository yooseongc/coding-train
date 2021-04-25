
# Chapter 10. Neural Networks

> Reference : https://natureofcode.com/book/chapter-10-neural-networks/


## Introduction

Some questions are here.
 * What is each object’s decision-making process? 
 * How can it adjust its chinces by learning over time?
 * Can a computational entity process its environment and generate a decision?

The human brain can be described as a biological neural network - an interconnected web of neurons transmitting elaborate patterns of electrical signals. Dendrites receive input signals and, based on those inputs, fire an output signal via an axon. Or something like that. How the human brain actually works is an elaborate and complex mystery.

![Figure 10.1](images/ch10_01.png)

We can simply be inspired by the idea of brain function. In this chapter, we'll begin with a conceptual overview of the properties and features of neural networks and build the simplest possible example of one (a network that consists of a single neuron). Afterwards, we'll examine strategies for creating a `Brain` object that can be inserted into `Vehicle` class and used to determine steering. Finally, we'll also look at techniques for visualizing and animating a network of neurons.

---

## 10.1 Artificial Neural Networks: Introduction and Application

Computer scientists have long been inspired by the human brain. In 1943, Warren S. McCulloch, a neuroscientist, and Walter Pitts, a logician, developed the first conceptual model of an artificial neural network. In their paper, "A logical calculus of the ideas imminent in nervous activity,” they describe the concept of a `neuron`, a __single cell living in a network of cells__ that `receives inputs`, `processes those inputs`, and `generates an output`.   

Their work, and the work of many scientists and researchers that followed, was not meant to accurately describe how the biological brain works. Rather, an artificial neural network was designed as `a computational model based on the brain` to solve certain kinds of problems.

There are problems that are incredibly simple for a computer to solve, but difficult for humans like taking the square root of 964,324. On the other hand, there are problems that are incredibly simple for humans to solve, but not for a computer. But need a machine to perform these tasks? Scientists have already spent entire careers researching and implementing complex solutions.

The most common application of neural networks in computing today is to perform one of these “easy-for-a-human, difficult-for-a-machine” tasks, often referred to as pattern recognition. Applications range from optical character recognition to facial recognition. 

A neural network is a “connectionist” computational system. The computational systems we write are procedural, but a true neural network does not follow a linear path. Rather, information is processed collectively, in parallel throughout a network of nodes (in these case, the nodes being neurons). The individual elements of the network, the neurons, are simple. They read an input, process it, and generate an output. A network of many neurons, however, can exhibit incredibly rich and intelligent behaviors.

![Figure 10.2](images/ch10_02.png)

One of the key elements of a neural network is its ability to *learn*. A neural network is not just a complex system, but a complex __adaptive__ system, meaning it can change its internal structure based on the information flowing through it. Typically, this is achieved through the adjusting of weights.  In the diagram above, each line represents a connection between two neurons and indicates the pathway for the flow of information. Each connection has a __weight__, `a number that controls the signal between the two neurons`. If the network generates a “good” output, there is no need to adjust the weights. However, if the network generates a “poor” output — an error, so to speak — then the system adapts, altering the weights in order to improve subsequent results.

There are several strategies for learning.
 * `Supervised Learning` - A strategy that involves a teacher that is smarter than the network itself. The network can then compare its answers to the known “correct” ones and make adjustments according to its errors.
 * `Unsupervised Learning` - Required when there isn’t an example data set with known answers. Imagine searching for a hidden pattern in a data set. An application of this is clustering, i.e. dividing a set of elements into groups according to some unknown pattern.
 * `Reinforcement Learning` - A strategy built on observation. If the observation is negative, the network can adjust its weights in order to make a different decision the next time. Reinforcement learning is common in robotics. At time t, the robot performs a task and observes the results. 

Here are some standard uses of neural networks in software today.
 * `Pattern Recognition` — It’s probably the most common application. Examples are facial recognition, optical character recognition, etc.
 * `Time Series Prediction` - Neural networks can be used to make predictions. Will the stock rise or fall tomorrow? Will it rain or be sunny?
 * `Signal Processing` - Neural networks can be trained to process an audio signal and filter it appropriately.
 * `Control` - Neural networks are often used to manage steering decisions of physical vehicles (or simulated ones).
 * `Soft Sensors` - A soft sensor refers to the process of analyzing a collection of many measurements. A thermometer can tell you the temperature of the air, but what if you also knew the humidity, barometric pressure, dewpoint, air quality, air density, etc.? Neural networks can be employed to process the input data from many individual sensors and evaluate them as a whole.
 * `Anomaly Detection` - Because neural networks are so good at recognizing patterns, they can also be trained to generate an output when something occurs that doesn’t fit the pattern. Think of a neural network monitoring your daily routine over a long period of time. After learning the patterns of your behavior, it could alert you when something is amiss.


## 10.2 The Perceptron

Invented in 1957 by Frank Rosenblatt at the Cornell Aeronautical Laboratory, a __perceptron__ is the simplest neural network possible: `a computational model of a single neuron`. A perceptron consists of one or more inputs, a processor, and a single output. 

![Figure 10.3](images/ch10_03.png)

A perceptron follows the “feed-forward” model, meaning inputs are sent into the neuron, are processed, and result in an output. In the diagram above, this means the network (one neuron) reads from left to right: inputs come in, output goes out.

Let's follow each of these steps in more detail.

 * Step 1: Receive inputs.  
    ```
    Input 0: x1 = 12
    Input 1: x2 = 4
    ```
 * Step 2: Weight inputs.  
    Each input that is sent into the neuron must first be weighted. When creating a perceptron, we’ll typically begin by assigning random weights. 
    ```
    Weight 0: 0.5
    Weight 1: -1

    Input 0 * Weight 0 ⇒ 12 * 0.5 = 6
    Input 1 * Weight 1 ⇒ 4 * -1 = -4
    ```
 * Step 3: Sum inputs.   
    ```
    Sum = 6 + -4 = 2
    ```
 * Step 4: Generate output.  
    The output of a perceptron is generated by passing that sum through an `activation function`. In the case of a simple binary output, the activation function is what tells the perceptron whether to “fire” or not.  
    Let’s make the activation function the sign of the sum. In other words, if the sum is a positive number, the output is 1; if it is negative, the output is -1.
    ```
    activation function : sign()

    Output = sign(sum) ⇒ sign(2) ⇒ +1
    ```

Summary of the percepton algorithm:
 1.  For every input, multiply that input by its weight.
 2.  Sum all of the weighted inputs.
 3.  Compute the output of the perceptron based on that sum passed through an activation function.

```typescript

const inputs = [ 12, 4 ];
const weights = [ 0.5, -1 ];
const activationFunction = (value: number) => value > 0 ? 1 : -1;
const perceptron = new Perceptron(weights, activationFunction);

const output = perceptron.process(inputs);

class Perceptron {

    private weights: number[];
    private activationFunction: number => number;

    constructor(weights: number[], activationFunction: number => number) {
        this.weights = weights;
        this.activationFunction = activationFunction;
    }

    public process(inputs: number[]): number {    // receive inputs
        if (inputs.length !== this.weight.length) {
            throw new Error('dimension not matches.');
        }
        let sum = 0;
        for (let i = 0; i < inputs.length; i++) {
            sum += inputs[i] * this.weights[i];  // weight input & sum input
        }
        return this.activationFunction(sum);     // apply activation function and generate output
    }

}

```

--- 

## 10.3 Simple Pattern Recognition Using a Perceptron

Now that we understand the computational process of a perceptron, we can look at an example of one in action. Even simple perceptrons can demonstrate the basics of classification, as in the following example.

Consider a line in two-dimensional space. Points in that space can be classified as living on either one side of the line or the other. This example shows how a perceptron can be trained to recognize points on one side versus another.

![Figure 10.4](images/ch10_04.png)

Let’s say a perceptron has 2 inputs (the x- and y-coordinates of a point). Using a sign activation function, the output will either be -1 or 1 — i.e., the input data is classified according to the sign of the output. In the above diagram, we can see how each point is either below the line (-1) or above (+1).

The perceptron itself can be diagrammed as follows:
![Figure 10.5](images/ch10_05.png)

We can see how there are two inputs (x and y), a weight for each input (weight_x and weight_y), as well as a processing neuron that generates the output.

There is a pretty significant problem here, however. Let’s consider the point (0,0). What if we send this point into the perceptron as its input: x = 0 and y = 0? What will the sum of its weighted inputs be? No matter what the weights are, the sum will always be 0! But this can’t be right — after all, the point (0,0) could certainly be above or below various lines in our two-dimensional world.

`To avoid this dilemma, our perceptron will require a third input, typically referred to as a bias input`. `A bias input always has the value of 1 and is also weighted`. Here is our perceptron with the addition of the bias:
![Figure 10.6](images/ch10_06.png) 

Let’s go back to the point (0,0). Here are our inputs:
```
0 * weight for x = 0
0 * weight for y = 0
1 * weight for bias = weight for bias
```

The output is the sum of the above `three values`, 0 plus 0 plus the `bias’s weight`. Therefore, the bias, on its own, answers the question as to where (0,0) is in relation to the line. If the bias’s weight is positive, (0,0) is above the line; negative, it is below. It “biases” the perceptron’s understanding of the line’s position relative to (0,0).

---

## 10.4 Coding the Perceptron

A perceptron needs to be able to receive inputs and generate an output. We can package these requirements into a function called feedforward(). In this example, we’ll have the perceptron receive its inputs as an array (which should be the same length as the array of weights) and return the output as an integer.

Presumably, we could now create a `Perceptron` object and ask it to `make a guess` for any given point.

![Figure 10.7](images/ch10_07.png) 

```typescript

class Perceptron {

    private weights: number[];
    private bias: number;

    constructor(n: number) {
        this.weights = new Array(n).fill(0).map(v => Math.random(-1, 1));
        this.bias = Math.random(-1, 1);
    }

    public feedForward(inputs: number[]): number {
        if (inputs.length !== this.weights.length + 1) {
            throw new Error('dimension not matches.');
        }
        let sum = 0;
        for (let i = 0; i < inputs.length; i++) {
            sum += inputs[i] * this.weights[i];  // weight input & sum input
        }
        return activate(sum + this.bias);     // apply activation function and generate output
    }

    private activate(value): float {    // receive inputs
        return value > 0 ? 1 : -1;
    }

}

const perceptron = new Perceptron(5);
const pointCoord = [ 12, 4 ];
const result = perceptron.feedForward(pointCoord);

```

Did the perceptron get it right? At this point, the perceptron has no better than a 50/50 chance of arriving at the right answer. Remember, when we created it, we gave each weight a random value. A neural network isn’t magic. It’s not going to be able to guess anything correctly unless we teach it how to! 

To train a neural network to answer correctly, we’re going to employ the method of supervised learning that we described in [section 10.1](#101-artificial-neural-networks-introduction-and-application).

With this method, the network is provided with inputs for which there is a known answer. This way the network can find out if it has made a correct guess. If it’s incorrect, `the network can learn from its mistake and adjust its weights`. The process is as follows:
 1. Provide the perceptron with inputs for which there is a known answer.
 2. Ask the perceptron to guess an answer.
 3. Compute the error. (Did it get the answer right or wrong?)
 4. Adjust all the weights according to the error.
 5. Return to Step 1 and repeat!

Steps 1 through 4 can be packaged into a function. Before we can write the entire function, however, we need to examine Steps 3 and 4 in more detail. How do we `define the perceptron’s error`? And how should we `adjust the weights according to this error`?

The perceptron’s error can be defined as the difference between the desired answer and its guess.
```
    ERROR = DESIRED OUTPUT - GUESS OUTPUT
```
In the case of the perceptron, the output has only two possible values: +1 or -1. This means there are only three possible errors. If the perceptron guesses the correct answer, then the guess equals the desired output and the error is 0. If the correct answer is -1 and we’ve guessed +1, then the error is -2. If the correct answer is +1 and we’ve guessed -1, then the error is +2.  

|  Desired  | Guess | Error |
| ---       | ---   | ---   |
| -1        | -1    |  0    |
| -1        | +1    | -2    |
| +1        | -1    | +2    |
| +1        | +1    |  0    |

The error is the determining factor in how the perceptron’s weights should be adjusted. For any given weight, what we are looking to calculate is the change in weight, often called Δweight (or “delta” weight, delta being the Greek letter Δ). Δweight is calculated as the error multiplied by the input.

```
    NEW WEIGHT = WEIGHT + ΔWEIGHT
    ΔWEIGHT = ERROR * INPUT

    Therefore,
    NEW WEIGHT = WEIGHT + ERROR * INPUT
```

To understand why this works, we can again return to steering. `A steering force is essentially an error in velocity`. If we apply that force as our acceleration (Δvelocity), then we adjust our velocity to move in the correct direction. This is what we want to do with our neural network’s weights. We want to adjust them in the right direction, as defined by the error. 

With steering, however, we had an `additional variable that controlled the vehicle’s ability to steer: the maximum force`. With a high maximum force, the vehicle was able to accelerate and turn very quickly; with a lower force, the vehicle would take longer to adjust its velocity.  The neural network will employ a similar strategy with a variable called the “learning constant.” We’ll add in the learning constant as follows:  
```
    NEW WEIGHT = WEIGHT + ERROR * INPUT * LEARNING CONSTANT
```

Notice that a high learning constant means the weight will change more drastically. This may help us arrive at a solution more quickly, but with such large changes in weight it’s possible we will overshoot the optimal weights. With a small learning constant, the weights will be adjusted slowly, requiring more training time but allowing the network to make very small adjustments that could improve the network’s overall accuracy. 

Assuming the addition of a variable *learningRate* for the learning constant, we can now write a `training function` for the perceptron following the above steps.


```typescript

class Perceptron {

    private weights: number[];
    private bias: number;
    private learningRate: number = 0.01;

    constructor(n: number) {
        this.weights = new Array(n).fill(0).map(v => Math.random(-1, 1));
        this.bias = Math.random(-1, 1);
    }

    public feedForward(inputs: number[]): number {
        if (inputs.length !== this.weights.length) {
            throw new Error('dimension not matches.');
        }
        let sum = 0;
        for (let i = 0; i < inputs.length; i++) {
            sum += inputs[i] * this.weights[i];  // weight input & sum input
        }
        return activate(sum + this.bias);     // apply activation function and generate output
    }

    private activate(value): float {    // receive inputs
        return value > 0 ? 1 : -1;
    }

    public setLearningConstant(value: number) {
        this.learningRate = value;
    }

    public train(inputs: number[], desired: number) {
        const guess = this.feedForward(inputs);
        const error = desired - guess;
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] += this.learningRate * error * inputs[i];
        }
        this.bias += this.learningRate * error;
    }

}



const perceptron = new Perceptron(5);
const pointCoord = [ 12, 4 ];
const result = perceptron.feedForward(pointCoord);

```

To train the perceptron, we need a set of inputs with a known answer. We could package this up in a class like so:

```typescript
class Trainer {

    private input: number[];
    private answer: number;

    constructor(x: number, y: number, answer: number) {
        this.inputs = [x, y];
        this.answer = answer;
    }

    public getInput(): number[] {
        return this.input;
    }

    public getAnswer(): number {
        return this.answer;
    }
    
}
```

Now the question becomes, how do we pick a point and know whether it is above or below a line? Let’s start with the formula for a line, where y is calculated as a function of x:

![Figure 10.8](images/ch10_08.png) 

```typescript
// y = f(x),

// In generic terms, a line can be described as:
//    y = ax + b
// In this case, 
//    let y = 2 * x + 1

// a function to calculate y based on x along a line
const f = (x: number) => 2 * x + 1;

const width = 400;
const height = 400;

const x = Math.random(width);
const y = Math.random(height);
const yline = f(x); // the y position on the line

const answer = (y < yline) ? -1 : 1;
const trainer = new Trainer(x, y, answer);

perceptron.train(t.getInput(), t.getAnswer());

```

Now, it’s important to remember that this is just a demonstration. We don’t need a perceptron to tell us whether a point is above or below a line; we can do that with simple math. We are using this scenario, one that we can easily solve without a perceptron, to demonstrate the perceptron’s algorithm as well as easily confirm that it is working properly.


### DEMO

Let’s look at how the perceptron works with an array of many training points. Use p5.js to visualize this example.

[Example 10.1: The Perceptron Demo](./10_1/index.html)  
[Example 10.1: The Perceptron Code](./10_1/sketch.js)


---


## 10.5 A Steering Perceptron

