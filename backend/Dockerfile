# syntax=docker/dockerfile:1

FROM python:3.12-alpine

COPY ./requirements.txt /requirements.txt
RUN pip install -r requirements.txt
COPY ./app.py /app.py
ENTRYPOINT [ "python" ]
CMD ["-m", "flask", "--app", "app.py", "run", "-p", "7070", "--host=0.0.0.0"]
EXPOSE 7070
