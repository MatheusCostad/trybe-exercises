from fastapi import FastAPI, Header
from pydantic import BaseModel

app = FastAPI()


class Item(BaseModel):
    name: str


@app.get("/")
def read_root():
    return "Hello World!"


@app.post("/")
async def create_item(item: Item, msg: str = Header(None)):
    return f"Hello {item.name}! {msg}"
