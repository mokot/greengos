import requests
from napkin import response, request

prompt = "Write Haiku about Dragonhack"
model = "gpt-3.5-turbo"
token = "xdObkiozmz1x6utakPC8ICp0MZ6kNR"

def get_answer(prompt,model,token):

    default_prompt = "If the next prompt is related to agriculture return the answer, else return this: I'm sorry this question is out my knowledge scope. This is the prompt:"

    if prompt == "":
        return "Hi, I am Greengo, your artificial agriculture assistant!"

    res = requests.post(
    "https://openai-api.meetings.bio/api/openai/chat/completions",
    headers={"Authorization": f"Bearer {token}"},
    json={
        # specification of all options: https://platform.openai.com/docs/api-reference/chat/create
        "model": model,
        "messages": [{"role": "user", "content": default_prompt + prompt}],
    },
    )
    if res.ok:
        return(res.json()["choices"][0]["message"]["content"])

def main():

    prompt = request.body["prompt"]
    #prompt = "What is the fastest car in the world?"
    model = "gpt-3.5-turbo"
    token = "xdObkiozmz1x6utakPC8ICp0MZ6kNR"
    answer = get_answer(prompt,model,token)
    response.body = {"answer":answer}

main()
