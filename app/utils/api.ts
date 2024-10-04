export const fetchWordData = async (word: string) => {
  try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (!response.ok) {
          throw new Error('Error getting word');
      }
      return await response.json();
  } catch (error) {
      throw new Error('There was a problem with the API');
  }
};
