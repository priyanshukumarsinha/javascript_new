// Array of Objects

const languages = [
    {
        languageName : "javascript",
        languageFileName : "js",
    },
    {
        languageName : "java",
        languageFileName : "java",
    },
    {
        languageName : "python",
        languageFileName : "python",
    }
]

languages.forEach((item)=>{
    console.log(item.languageName)
})