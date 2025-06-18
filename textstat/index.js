/**
 * Event handler for 'Statistics' button.
 * Calculates following values for the given text and displays them in corresponding fields:
 * 1. Count of characters;
 * 2. Count of spaces;
 * 3. Count of chars for vowels and consonants;
 * 4. Count of words.
 * @param {object} event - Event class
 */
function onStatisticsClicked(event) {
    const text = document.getElementById('text').value;
    
    // total number of words
    const totalChars = text.length;
    
    // number of spaces
    const spaces = (text.match(/ /g) || []).length;
    
    // number of_glasnie (a, e, i, o, u, another_registry)
    const vowels = (text.match(/[aeiouAEIOU]/g) || []).length;
    
    // number of_soglasnie (except: glasnie)
    const consonants = (text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || []).length;
    
    // number of words
    const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    
    // refresh fields
    document.getElementById('valCharCount').value = totalChars;
    document.getElementById('valSpacesCount').value = spaces;
    document.getElementById('valVowelsCount').value = vowels;
    document.getElementById('valConsonantsCount').value = consonants;
    document.getElementById('valWordsCount').value = words;
}

/**
 * Event handler for 'Statistics' button.
 * Removes all the even words in the given text (starting from 1) and displays result in corresponding field.
 * @param {object} event - Event class
 */
function onRemoveWordsClicked(event) {
    const text = document.getElementById('text').value;
    
    // diff page to words (withou space symbols)
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    
    // words with (ne4etnie) numbers (1, 3, 5, ...)
    const oddWords = words.filter((word, index) => index % 2 === 0);
    
    // match words back to text
    const result = oddWords.join(' ');
    
    //output, field: "Odd words"
    document.getElementById('valOddWords').value = result;


/**********************************************/

function init() {
    const text = document.getElementById('text');
    text.value = txt;
}

document.addEventListener('DOMContentLoaded', init);
