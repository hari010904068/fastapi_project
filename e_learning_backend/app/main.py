# Create `main.py` to start the app and initialize the database
from fastapi import FastAPI
from database import engine, Base
from routers import users, courses, progress, quizzes

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(users.router)
app.include_router(courses.router)
app.include_router(progress.router)
app.include_router(quizzes.router)
