

// https://en.wikipedia.org/wiki/L%C3%A9vy_flight
// https://m.blog.naver.com/jung2381187/220959181465

/* 
    A Levy flight, named for French mathematician Paul Levy,
      is a random walk in which the step-lengths have a Levy distribution,
      a probability distribution that is heavy-tailed.
    When defined as a walk in a space of dimension greater than one,
      the steps made are isotropic random direction.

    The term 'Levy flight' was coined by Benoit Mandelbrot, 
      who used this for one specific definition of the distribution
      of step sizes.
    He used the term Cauchy flight for the case where the distribution
      of step sizes is a Cauchy distribution, and Rayleigh flight
      for when the distribution is a normal distribution.

    Later researchers have extended the use of the term 'Levy flight' to
      include cases where the random walk takes place on a 
      discrete grid rather than on a continuous space.

    The particular case for which Mandelbrot used the term 'Levy flight' is
      defined by the survivor function of the distribution of step-sizes,
      U, being
      
    Pr(U > u) = 1 if u < 1, u^(-D) if u >= 1,
    D is a parameter related to the fractal dimension 
      and the distribution is a particular case of  the Pareto distribution.

    
    * 2차원 랜덤워크 중 이동 방향은 균등분포이지만, 이동거리가 항상 1이 아닌 경우를 생각해보자.
    * Levy Flight은 이동거리 U가 Pr(U < u) = 0 if u < 1, 1 - u^(-D) if u >=1 의 누적확률 분포를
      가지는 랜덤 워크를 말함.
    * D는 1보다 크고 3보다는 작은 실수. (2차원이므로)
    * 보통은 1 정도로 움직이지만 가끔 매우 크게 움직이는 경우가 있음.
    * 가끔씩 먼 거리를 한 번에 이동하면서 군집과 같은 모양이 나옴.
    * 생명체의 이동을 잘 설명해줌. (주변에 먹이가 없다면?)
     
    위 누적분포함수의 역함수를 구하면,
    U(p) = (1 - p)^(-1/D) where 0 <= p < 1

*/

let pos;
let prev;
const D = 2;

function setup() {
    createCanvas(400, 400);
    pos = createVector(width / 2, height / 2);
    prev = pos.copy();
    background(51);
}

function draw() {
    stroke(255);
    strokeWeight(2);
    line(pos.x, pos.y, prev.x, prev.y);
    prev.set(pos);

    const step = p5.Vector.random2D();
    // const r = random(100);
    // if (r < 1) {
    //     step.mult(random(25, 100));
    // } else {
    //     step.setMag(2);
    // }
    const r = pow((1 - Math.random()), (-1 / D)); 
    pos.add(step.setMag(r));
}
