
// Function to normalize a string by removing spaces and converting to lowercase
export const normalizeString = (str) => {
    return str.replace(/\s/g, '').toLowerCase();
  };
  
  // Function to compare two strings after normalizing them
  export const isEqualNormalized = (str1, str2) => {
    return normalizeString(str1) === normalizeString(str2);
  };
  