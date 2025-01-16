from sqlalchemy import create_engine

DATABASE_URL = "postgresql://postgres:postgres@localhost:5432/e_learning"
engine = create_engine(DATABASE_URL)

try:
    with engine.connect() as connection:
        print("Connection successful!")
except Exception as e:
    print(f"Connection failed: {e}")
