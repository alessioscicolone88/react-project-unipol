export const areAllPropertiesNotNullOrEmpty = (obj: {
  [key: string]: any;
}): boolean => {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];

      // Check if the value is null or empty
      if (value === null || value === undefined || value === "") {
        return false;
      }
    }
  }

  // If all properties are not null or empty
  return true;
};
