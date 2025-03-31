// Returns a random DNA base from an array
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []; // Initialize an empty array to hold the DNA strand
  // **For loop**: Iterates 15 times to generate 15 random DNA bases
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase()); // Add a random DNA base to the strand
  }
  return newStrand; // Return the completed DNA strand
};

// Factory function to create multiple objects
// This is a **factory function** because it returns a new object each time it is called.
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,

    // Method to mutate a random base in the DNA strand
    // This is a **method** because it is a function defined inside an object.
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      // **While loop**: Ensures the new base is different from the current base at the selected index
      while (this.dna[randIndex] === newBase) {
        newBase = returnRandBase(); // Keep generating a new base until it's different
      }
      this.dna[randIndex] = newBase; // Replace the old base with the new base
      return this.dna;
    },

    // Method to compare DNA with another organism
    // This is a **higher-order function** because it uses the `reduce` method, which takes a callback function as an argument.
    compareDNA(pAequor) {
      // **Reduce method**: Iterates over the DNA strand and accumulates the number of matching bases
      const similarities = this.dna.reduce((acc, curr, idx) => {
        // **Callback function**: The function passed to `reduce` is a callback that runs on each element of the array
        if (curr === pAequor.dna[idx]) {
          return acc + 1; // Increment the count if the bases match
        } else {
          return acc;
        }
      }, 0);

      const percentOfDNAShared = (similarities / this.dna.length) * 100;
      const percentageTo2Deci = percentOfDNAShared.toFixed(2);

      console.log(
        `${this.specimenNum} and ${pAequor.specimenNum} have ${percentageTo2Deci}% DNA in common.`
      );
    },

    // Method to determine if the organism is likely to survive
    // This is a **method** that uses the `filter` method, which is a **higher-order function**.
    willLikelySurvive() {
      // **Filter method**: Creates a new array containing only the "C" and "G" bases
      const cOrG = this.dna.filter((el) => el === "C" || el === "G");
      // **Arrow function**: The function passed to `filter` is an arrow function, 
      // which is a concise way to write anonymous functions
      // Calculate the proportion of "C" and "G" bases and check if it's at least 60%
      return cOrG.length / this.dna.length >= 0.6;
    },
  };
};
