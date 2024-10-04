export interface License {
  name: string;
  url: string;
}

export interface Phonetic {
  text: string;
  audio?: string;
  sourceUrl?: string;
  license?: License;
}

export interface Definition {
  definition: string; 
  example?: string;
  synonyms?: string[]; 
  antonyms?: string[]; 
}

export interface Meaning {
  partOfSpeech: string; 
  definitions: Definition[]; 
  synonyms?: string[]; 
  antonyms?: string[]; 
}

export interface WordData {
  word: string; 
  phonetic: string; 
  phonetics?: Phonetic[];
  meanings: Meaning[]; 
  origin?: string; 
  audio?: string; 
  license?: License; 
  sourceUrls?: string[]; 
}
