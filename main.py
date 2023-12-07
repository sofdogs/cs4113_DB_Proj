from fastapi import FastAPI, Request
from fastapi import HTTPException
from pydantic import BaseModel
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from database import connect, create_user, getUsers


app = FastAPI()
conn = connect()
cursor = conn.cursor()

templates = Jinja2Templates(directory="templates")

class UserData(BaseModel):
    name: str
    age: int

@app.get("/index/", response_class=HTMLResponse)
def index(request: Request):
    context = {'request': request}
    return templates.TemplateResponse("index.html", context)

@app.get("/getData")
async def get_data():
    users = getUsers()
    return users

@app.post("/insertData")
async def add_user(user_data: UserData):
    user_id = create_user(user_data.name, user_data.age)
    if user_id:
        return {"id": user_id, "name": user_data.name, "age": user_data.age}
    else:
        raise HTTPException(status_code=400, detail="User not created")

@app.delete("/deleteData/{user_id}")
async def delete_user(user_id: int):
    conn = connect()
    cursor = conn.cursor()
    query = "DELETE FROM users WHERE id = %s"
    cursor.execute(query, (user_id,))
    conn.commit()
    conn.close()
    return {"message": "User deleted successfully"}
    
