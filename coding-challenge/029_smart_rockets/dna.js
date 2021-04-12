
class DNA {

    constructor(genes) {
        if (genes) {
            this.genes = genes;
        } else {
            this.genes = [];
            for (let i = 0; i < lifespan; i++) {
                this.genes.push(p5.Vector.random2D().setMag(maxForce));
            }
        }
    }

    crossover(partner) {
        // Performs a crossover with another member of the species
        const newGenes = [];
        // Picks a random midpoint.
        const midIdx = floor(random(this.genes.length));
        // If i is greater than mid, the new gene should come from this partner
        // If i < mid, new gene should come from other partners gene's
        for (let i = 0; i < this.genes.length; i++) {
            newGenes.push((i > midIdx) ? this.genes[i] : partner.genes[i]);
        }
        // Gives newgenes DNA object
        return new DNA(newGenes);
    }

    mutation() {
        for (let i = 0; i < this.genes.length; i++) {
            if (random(1) < 0.01) {
                this.genes[i] = p5.Vector.random2D().setMag(maxForce);
            }
        }
    }

}