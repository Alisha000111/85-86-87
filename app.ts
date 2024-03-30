// 85............
function findCodePosition(str: string): number {
    return str.indexOf("code");
}
console.log(findCodePosition("Learn to code with JavaScript"));
// 86............
function hasJavaScript(str: string): boolean {
    return str.includes("JavaScript"); 
}
console.log(hasJavaScript("I like coding in JavaScript!"));
// 87...................
function extractFirstTenChars(str: string): string {
    return str.substring(0, 10); 
}
console.log(extractFirstTenChars("Hi, JavaScript world!"));



