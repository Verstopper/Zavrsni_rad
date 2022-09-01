from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
import requests
import random
import json


# class Country:
#     name: str
#     capital: str

#     def __init__(self, name, capital):
#         self.name = name
#         self.capital = capital


class QuestionObject(object):
    id: int
    text: str
    options: list()
    answer: str

    def __init__(self, id, text, options, answer):
        self.id = id
        self.text = text
        self.options = options
        self.answer = answer

    def convertToDict(self):
        self.options.append(self.answer)
        data = dict()
        data["id"] = self.id
        data["question"] = self.text
        data["options"] = sorted(self.options)
        data["answer"] = self.answer

        # print("DATA JE: ", data)

        return (data)


url = "https://countriesnow.space/api/v0.1/countries/capital"

payload = {}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

json_file = response.json()
print(len(json_file['data']))

number_of_questions = 10
len_of_list = len(json_file['data'])

temp_arr = []
for i in range(0, number_of_questions):
    text_start = "What is the capital of "
    data_idxs = random.sample(range(1, len_of_list), 4)
    temp_idx = data_idxs.pop()
    country_text = json_file['data'][temp_idx]['name']
    correct_answer = json_file['data'][temp_idx]['capital']
    question_element = QuestionObject(
        i, text_start + country_text + "?", [], correct_answer)
    for idx in data_idxs:
        question_element.options.append(json_file['data'][idx]['capital'])

    temp_arr.append(question_element.convertToDict())

json_arr = json.dumps(temp_arr)
print("JSON JE: ", json_arr)


@csrf_exempt
def QuestionsApi(request):
    if request.method == 'GET':
        return JsonResponse(temp_arr, safe=False)
