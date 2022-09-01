import axios from "axios";
const API_URL = 'http://localhost:8000/api/getTenQuestions'

class Helper{

    async getCountriesAndCapitals(){

        try{
            let response = await axios.get(API_URL);
            //console.log("data");
            //console.log(response.data);
            return response.data;
            
        }
        catch(error){
            console.log("ERRORRRRR" + error);
        }
        
    }

    parseJsonQuestionsToJSArray(){
        var result = [];
        let response = this.getCountriesAndCapitals();
        console.log(response.data);
        // for(let i = 0; i < response.data.length; i++){
        //     result.push(JSON.parse(response.data[i]))
        // }

        console.log("RESULT JE:");
        console.log("RESPONSE DATA: " + response.data);
        console.log(result[0]);
        return result;
    }
}

export default new Helper();


// const quizData = async() => {
//   const res = await axios.get('http://localhost:8000/api/getTenQuestions');
//   console.log(res.data);
//   return res.data;
// }