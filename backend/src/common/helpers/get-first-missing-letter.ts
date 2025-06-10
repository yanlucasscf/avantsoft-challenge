export const getFirstMissingAlphabetLetter = (product: string) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (const letter of alphabet) {
        if (!product.toLowerCase().includes(letter)) {
            return letter;
        }
    }
    return "_";
};
