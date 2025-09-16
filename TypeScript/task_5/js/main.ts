// Interfaces avec propriété "brand" pour différencier les types

interface MajorCredits {
  credits: number;
  brand: "major";  // propriété unique de branding
}

interface MinorCredits {
  credits: number;
  brand: "minor";  // propriété unique de branding
}

// Somme des crédits majeurs
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "major",
  };
}

// Somme des crédits mineurs
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "minor",
  };
}

