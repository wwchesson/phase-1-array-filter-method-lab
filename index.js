function findMatching(array, bingo) {
    return array.filter( 
        match => match.toLowerCase() === bingo.toLowerCase()
    )
}

function fuzzyMatch(array, beginning) {
    return array.filter(
        (match) => match.toLowerCase().indexOf(beginning.toLowerCase()) === 0
    );
}

function matchName(array, name) {
    return array.filter(
        match => match.name === name
    );
}
    
