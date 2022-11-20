/////////////
// STRINGS
/////////////

// CREATE STRING
// const string1 = "A string primitive";
// const string2 = 'Also a string primitive';
// const string3 = `Yet another string primitive`;
// const string4 = new String("A String object");


// ACCESS STRING
// 'cat'.charAt(1) // gives value "a"
// 'cat'[1] // gives value "a"


///////////////////////////////////////////////////////////////////////////////////////////////
// STRING METHODS: valueOf(): The valueOf() method returns the primitive value of a String object.
// This value is equivalent to String.prototype.toString()

// SAME AS toString()
///////////////////////////////////////////////////////////////////////////////////////////////

// const stringObj = new String('foo');
// console.log(stringObj.toString());
// // expected output: String { "foo" }
//
// console.log(stringObj.valueOf());
// // expected output: "foo"

// const x = new String("Hello world");
// console.log(x.valueOf()); // 'Hello world'







///////////////////////////////////////////////////////////////////////////////////////////////
// STRING METHODS: trimStart(): The trimStart() method removes whitespace from the beginning of a string
// and returns a new string, without modifying the original string.
///////////////////////////////////////////////////////////////////////////////////////////////

// const greeting = '   Hello world!   ';
// console.log(greeting);
// // expected output: "   Hello world!   ";
// console.log(greeting.trimStart());
// // expected output: "Hello world!   ";






///////////////////////////////////////////////////////////////////////////////////////////////
// STRING METHODS: trimEnd(): The trimEnd() method removes whitespace from the end of a string and
// returns a new string, without modifying the original string.
///////////////////////////////////////////////////////////////////////////////////////////////

// const greeting = '   Hello world!   ';
// console.log(greeting);
// // expected output: "   Hello world!   ";
// console.log(greeting.trimEnd());
// // expected output: "   Hello world!";







///////////////////////////////////////////////////////////////////////////////////////////////
// STRING METHODS: trim(): The trim() method removes whitespace from both ends of a string and
// returns a new string, without modifying the original string.
///////////////////////////////////////////////////////////////////////////////////////////////

// const greeting = '   Hello world!   ';
//
// console.log(greeting);
// // expected output: "   Hello world!   ";
//
// console.log(greeting.trim());
// // expected output: "Hello world!";







///////////////////////////////////////////////////////////////////////////////////////////////
// STRING METHODS: toUpperCase(): The toUpperCase() method returns the calling string value converted to uppercase
// (the value will be converted to a string if it isn't one).
///////////////////////////////////////////////////////////////////////////////////////////////

// const sentence = 'The quick brown fox jumps over the lazy dog.';
//
// console.log(sentence.toUpperCase());
// // expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."


// const sentence2 = 'aA1!#'
// console.log(sentence2.toUpperCase());
// // expected output: "AA1!#"









///////////////////////////////////////////////////////////////////////////////////////////////
// STRING METHODS: toLocaleUpperCase(): The toLocaleUpperCase() method returns the calling string value converted
// to upper case, according to any locale-specific case mappings.
///////////////////////////////////////////////////////////////////////////////////////////////

// const city = 'istanbul';
//
// console.log(city.toLocaleUpperCase('en-US'));
// // expected output: "ISTANBUL"
//
// console.log(city.toLocaleUpperCase('TR'));
// // expected output: "İSTANBUL"








///////////////////////////////////////////////////////////////////////////////////////////////
// STRING METHODS: toLowerCase(): The toLowerCase() method returns the calling string value converted to lower case.
///////////////////////////////////////////////////////////////////////////////////////////////

// const sentence = 'The quick brown fox jumps over the lazy dog.';
//
// console.log(sentence.toLowerCase());
// // expected output: "the quick brown fox jumps over the lazy dog."









///////////////////////////////////////////////////////////////////////////////////////////////
// STRING METHODS: toLocaleLowerCase(): The toLocaleLowerCase() method returns the calling string value converted
// to lower case, according to any locale-specific case mappings.
///////////////////////////////////////////////////////////////////////////////////////////////

// const dotted = 'İstanbul';
//
// console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`);
// // expected output: "i̇stanbul"
//
// console.log(`TR: ${dotted.toLocaleLowerCase('tr')}`);
// // expected output: "istanbul"










///////////////////////////////////////////////////////////////////////////////////////////////
// STRING METHODS: toString(): The toString() method returns a string representing the specified string value.
// It has the exact same implementation as String.prototype.valueOf().
///////////////////////////////////////////////////////////////////////////////////////////////

// const stringObj = new String('foo');
//
// console.log(stringObj);
// // expected output: String { "foo" }
//
// console.log(stringObj.toString());
// // expected output: "foo"


// const x = new String("Hello world");
//
// console.log(x.toString()); // "Hello world"










///////////////////////////////////////////////////////////////////////////////////////////////
// STRING METHODS: substring(): The substring() method returns the part of the string between the start and
// end indexes, or to the end of the string.

// substring(indexStart) // inclusive indexStart, from this index to the end of the string
// substring(indexStart, indexEnd) // string between the start and end indexes exclusive indexEnd

// indexStart: The index of the first character to include in the returned substring
// indexEnd: The index of the first character to exclude from the returned substring.

// RETURN: A new string containing the specified part of the given string.
///////////////////////////////////////////////////////////////////////////////////////////////

// const str = 'Mozilla';
//
// console.log(str.substring(1, 3)); // end is exclusive
// // expected output: "oz"
//
// console.log(str); // original string is unchanged
//
// console.log(str.substring(2)); // start is inclusive
// // expected output: "zilla"
//
// console.log(str); // original string is unchanged










///////////////////////////////////////////////////////////////////////////////////////////////
// STRING METHODS: startsWith(): The startsWith() method determines whether a string begins with the characters
// of a specified string, returning true or false as appropriate.

// startsWith(searchString)
// startsWith(searchString, position)

// searchString: The characters to be searched for at the start of this string. Cannot be a regex.
// position: The start position at which searchString is expected to be found
// (the index of searchString's first character). Defaults to 0.

// Return: true if the given characters are found at the beginning of the string; otherwise, false.
///////////////////////////////////////////////////////////////////////////////////////////////

// const str1 = 'Saturday night plans';
//
// console.log(str1.startsWith('Sat'));
// // expected output: true
//
// console.log(str1.startsWith('Sat', 3));
// // expected output: false

// const str = "To be, or not to be, that is the question.";
//
// console.log(str.startsWith("To be")); // true
// console.log(str.startsWith("not to be")); // false
// console.log(str.startsWith("not to be", 10)); // true










///////////////////////////////////////////////////////////////////////////////////////////////
// STRING METHODS: split(): The split() method takes a pattern and divides a String into an ordered list of
// substrings by searching for the pattern, puts these substrings into an array, and returns the array.

// split()
// split(separator)
// split(separator, limit)

// separator: The pattern describing where each split should occur. Can be a string or an object with a
// Symbol.split method — the typical example being a regular expression. If undefined, the original
// target string is returned wrapped in an array.

// limit: A non-negative integer specifying a limit on the number of substrings to be included in the array.
//          If provided, splits the string at each occurrence of the specified separator,
//          but stops when limit entries have been placed in the array.
//          Any leftover text is not included in the array at all.
///////////////////////////////////////////////////////////////////////////////////////////////

// const str = 'The quick brown fox jumps over the lazy dog.';
//
// const words = str.split(' ');
// console.log(words);
// console.log(words[3]);
// // expected output: "fox"
//
// const chars = str.split('');
// console.log(chars);
// console.log(chars[8]);
// // expected output: "k"
//
// const strCopy = str.split();
// console.log(strCopy);
// // expected output: Array ["The quick brown fox jumps over the lazy dog."]
//
// const myString = 'Hello World. How are you doing?'
// const splits = myString.split(' ', 3);
// console.log(splits) // [ 'Hello', 'World.', 'How' ]










///////////////////////////////////////////////////////////////////////////////////////////////
// STRING METHODS: slice(): The slice() method extracts a section of a string and returns it as a new string,
// without modifying the original string.

// slice(indexStart)
// slice(indexStart, indexEnd)

// indexStart: The index of the first character to include in the returned substring.
// indexEnd (Optional): The index of the first character to exclude from the returned substring.

// RETURN: A new string containing the extracted section of the string.

///////////////////////////////////////////////////////////////////////////////////////////////

// const str = 'The quick brown fox jumps over the lazy dog.';
//
// console.log(str.slice(31));
// // expected output: "the lazy dog."
//
// console.log(str.slice(4, 19));
// // expected output: "quick brown fox"
//
// console.log(str.slice(-4));
// // expected output: "dog."
//
// console.log(str.slice(-9, -5));
// // expected output: "lazy"
//
//
// // Using slice() to create a new string
// const str1 = "The morning is upon us."; // The length of str1 is 23.
// const str2 = str1.slice(1, 8);
// const str3 = str1.slice(4, -2);
// const str4 = str1.slice(12);
// const str5 = str1.slice(30);
// console.log(str2); // he morn
// console.log(str3); // morning is upon u
// console.log(str4); // is upon us.
// console.log(str5); // ""
//
//
// // Using slice() with negative indexes
// const str = "The morning is upon us.";
// str.slice(-3); // 'us.'
// str.slice(-3, -1); // 'us'
// str.slice(0, -1); // 'The morning is upon us'
// str.slice(4, -1); // 'morning is upon us'










///////////////////////////////////////////////////////////////////////////////////////////////
// STRING METHODS: search(): The search() method executes a search for a match between a regular expression
// and this String object.

// search(regexp)

// RETURN: The index of the first match between the regular expression and the given string,
// or -1 if no match was found.
///////////////////////////////////////////////////////////////////////////////////////////////

// const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
//
// // any character that is not a word character or whitespace
// const regex = /[^\w\s]/g;
//
// console.log(paragraph.search(regex));
// // expected output: 43
//
// console.log(paragraph[paragraph.search(regex)]);
// // expected output: "."
//
//
// const str = "hey JudE";
// const re = /[A-Z]/;
// const reDot = /[.]/;
// console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
// console.log(str.search(reDot)); // returns -1 cannot find '.' dot punctuation













///////////////////////////////////////////////////////////////////////////////////////////////
// STRING METHODS: replaceAll(): The replaceAll() method returns a new string with all matches of a pattern
// replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string
// or a function to be called for each match. The original string is left unchanged.

// replaceAll(pattern, replacement)

// pattern: Can be a string or an object with a Symbol.replace method — the typical example being a regular expression
// replacement: Can be a string or a function.

// RETURN: A new string, with all matches of a pattern replaced by a replacement.
///////////////////////////////////////////////////////////////////////////////////////////////

// const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
//
// console.log(p.replaceAll('dog', 'monkey'));
// // expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"
//
//
// // global flag required when calling replaceAll with regex
// const regex = /Dog/ig;
// console.log(p.replaceAll(regex, 'ferret'));
// // expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

// "xxx".replaceAll("", "_"); // "_x_x_x_"

// "aabbcc".replaceAll("b", ".");
// // 'aa..cc'

// "aabbcc".replaceAll(/b/g, ".");
// ("aa..cc");












///////////////////////////////////////////////////////////////////////////////////////////////
// STRING METHODS: replace(): The replace() method returns a new string with one, some, or all matches of a
// pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a
// string or a function called for each match. If pattern is a string, only the first occurrence will be replaced.
// The original string is left unchanged.

///////////////////////////////////////////////////////////////////////////////////////////////
// const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
//
// console.log(p.replace('dog', 'monkey'));
// // expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
//
//
// const regex = /Dog/i;
// console.log(p.replace(regex, 'ferret'));
// // expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"


///////////////////////////////////////////////////////////////////////////////////////////////
// STRING METHODS: repeat(): The repeat() method constructs and returns a new string which contains the specified
// number of copies of the string on which it was called, concatenated together.

// repeat(count)
// count: An integer between 0 and +Infinity, indicating the number of times to repeat the string.

// RETURN: A new string containing the specified number of copies of the given string.
///////////////////////////////////////////////////////////////////////////////////////////////

// const chorus = 'Because I\'m happy. ';
//
// console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);
//
// // expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy.
// Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy.
// Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy.
// Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy.
// Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy.
// Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. "







///////////////////////////////////////////////////////////////////////////////////////////////
// STRING METHODS: padStart(): The padStart() method pads the current string with another string
// (multiple times, if needed) until the resulting string reaches the given length.
// The padding is applied from the start of the current string.

// padStart(targetLength)
// padStart(targetLength, padString)

// targetLength: The length of the resulting string once the current str has been padded.
// If the value is less than str.length, then str is returned as-is.

// padString: The string to pad the current str with. If padString is too long to stay within the targetLength,
// it will be truncated from the end. The default value is the unicode "space" character (U+0020).

// RETURN: A String of the specified targetLength with padString applied from the start.

///////////////////////////////////////////////////////////////////////////////////////////////

// const str1 = '5';
//
// console.log(str1.padStart(2, '0'));
// // expected output: "05"
//
// console.log(str1.padStart(3, '0'));
// // expected output: "005"
//
// const fullNumber = '2034399002125581';
// const last4Digits = fullNumber.slice(-4);
// const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

// console.log(maskedNumber);
// expected output: "************5581"



// "abc".padStart(10); // "       abc"
// "abc".padStart(10, "foo"); // "foofoofabc"
// "abc".padStart(6, "123465"); // "123abc"
// "abc".padStart(8, "0"); // "00000abc"
// "abc".padStart(1); // "abc"









///////////////////////////////////////////////////////////////////////////////////////////////
// STRING METHODS: padEnd(): The padEnd() method pads the current string with a given string (repeated, if needed)
// so that the resulting string reaches a given length. The padding is applied from the end of the current string.

// padEnd(targetLength)
// padEnd(targetLength, padString)
///////////////////////////////////////////////////////////////////////////////////////////////

// const str1 = 'Breaded Mushrooms';
//
// console.log(str1.padEnd(25, '.'));
// // expected output: "Breaded Mushrooms........"
//
// const str2 = '200';
//
// console.log(str2.padEnd(5));
// // expected output: "200  "


// "abc".padEnd(10); // "abc       "
// "abc".padEnd(10, "foo"); // "abcfoofoof"
// "abc".padEnd(6, "123456"); // "abc123"
// "abc".padEnd(1); // "abc"










///////////////////////////////////////////////////////////////////////////////////////////////
// STRING METHODS: indexOf(): The indexOf() method, given one argument: a substring to search for,
// searches the entire calling string, and returns the index of the first occurrence of the specified substring.
// Given a second argument: a number, the method returns the first occurrence of the specified substring
// at an index greater than or equal to the specified number.

// indexOf(searchString)
// indexOf(searchString, position)

// RETURN: The index of the first occurrence of searchString found, or -1 if not found.

///////////////////////////////////////////////////////////////////////////////////////////////

// const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
//
// const searchTerm = 'dog';
// const indexOfFirst = paragraph.indexOf(searchTerm);
//
// console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// // expected output: "The index of the first "dog" from the beginning is 40"
//
// console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// // expected output: "The index of the 2nd "dog" is 52"



// 'Blue Whale'.indexOf('Blue')      // returns  0
// 'Blue Whale'.indexOf('Blute')     // returns -1
// 'Blue Whale'.indexOf('Whale', 0)  // returns  5
// 'Blue Whale'.indexOf('Whale', 5)  // returns  5
// 'Blue Whale'.indexOf('Whale', 7)  // returns -1
// 'Blue Whale'.indexOf('')          // returns  0
// 'Blue Whale'.indexOf('', 9)       // returns  9
// 'Blue Whale'.indexOf('', 10)      // returns 10
// 'Blue Whale'.indexOf('', 11)      // returns 10









///////////////////////////////////////////////////////////////////////////////////////////////
// STRING METHODS: includes(): The includes() method performs a case-sensitive search to determine whether
// one string may be found within another string, returning true or false as appropriate.

// includes(searchString)
// includes(searchString, position)

// RETURN: true if the search string is found anywhere within the given string; otherwise, false if not.
///////////////////////////////////////////////////////////////////////////////////////////////

// const sentence = 'The quick brown fox jumps over the lazy dog.';
//
// const word = 'fox';
//
// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// // expected output: "The word "fox" is in the sentence"




// The includes() method is case sensitive. For example, the following expression returns false:
//
// "Blue Whale".includes("blue"); // returns false

// "Blue Whale".toLowerCase().includes("blue"); // returns true



// const str = "To be, or not to be, that is the question.";
//
// console.log(str.includes("To be")); // true
// console.log(str.includes("question")); // true
// console.log(str.includes("nonexistent")); // false
// console.log(str.includes("To be", 1)); // false
// console.log(str.includes("TO BE")); // false
// console.log(str.includes("")); // true



///////////////////////////////////////////////////////////////////////////////////////////////
// STRING METHODS: fromCharCode(): The static String.fromCharCode() method returns a string created
// from the specified sequence of UTF-16 code units.

///////////////////////////////////////////////////////////////////////////////////////////////

// String.fromCharCode(65, 66, 67); // returns "ABC"
// String.fromCharCode(0x2014); // returns "—"
// String.fromCharCode(0x12014); // also returns "—"; the digit 1 is truncated and ignored
// String.fromCharCode(8212); // also returns "—"; 8212 is the decimal form of 0x2014




///////////////////////////////////////////////////////////////////////////////////////////////
// STRING METHODS: endsWith(): The endsWith() method determines whether a string ends with the characters of a
// specified string, returning true or false as appropriate.

// endsWith(searchString)
// endsWith(searchString, endPosition)
///////////////////////////////////////////////////////////////////////////////////////////////

// const str1 = 'Cats are the best!';
//
// console.log(str1.endsWith('best!'));
// // expected output: true
//
// console.log(str1.endsWith('best', 17));
// // expected output: true
//
// const str2 = 'Is this a question?';
//
// console.log(str2.endsWith('question'));
// // expected output: false



// const str = "To be, or not to be, that is the question.";
//
// console.log(str.endsWith("question.")); // true
// console.log(str.endsWith("to be")); // false
// console.log(str.endsWith("to be", 19)); // true


///////////////////////////////////////////////////////////////////////////////////////////////
// STRING METHODS: concat(): The concat() method concatenates the string arguments to the calling string
// and returns a new string.

// concat(str1)
// concat(str1, str2)
// concat(str1, str2, /* …, */ strN)
///////////////////////////////////////////////////////////////////////////////////////////////


// const str1 = 'Hello';
// const str2 = 'World';
//
// console.log(str1.concat(' ', str2));
// // expected output: "Hello World"
//
// console.log(str2.concat(', ', str1));
// // expected output: "World, Hello"










///////////////////////////////////////////////////////////////////////////////////////////////
// STRING METHODS: at(): The at() method takes an integer value and returns a new String consisting of the
// single UTF-16 code unit located at the specified offset. This method allows for positive and negative integers.
// Negative integers count back from the last string character.

// at(index)
///////////////////////////////////////////////////////////////////////////////////////////////

// const sentence = 'The quick brown fox jumps over the lazy dog.';
//
// let index = 5;
//
// console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
// // expected output: "Using an index of 5 the character returned is u"
//
// index = -4;
//
// console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
// // expected output: "Using an index of -4 the character returned is d"