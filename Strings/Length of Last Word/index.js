var lengthOfLastWord = function(s) {
    let newString = s.trim()
    let arr = newString.split(' ')
    let answer = arr.pop()

    return answer.length
};