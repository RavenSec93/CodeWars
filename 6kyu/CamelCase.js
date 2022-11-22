function solution(string) {
    return string.replace(/([A-Z])/g, ' $1')
    return string.replace(/^./, function(str){ return str.toUpperCase(); })
 }
 