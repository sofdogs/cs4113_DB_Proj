import mysql.connector
import os

# Load environment variables


MYSQL_HOST='localhost'
MYSQL_USER='root'
MYSQL_PASSWORD='password'
MYSQL_DB='movie_database'

# Connect to MySQL
def connect():
    return mysql.connector.connect(
        host=MYSQL_HOST,
        user=MYSQL_USER,
        password=MYSQL_PASSWORD,
        database=MYSQL_DB
    )

def create_user(name, age):
    conn = connect()
    cursor = conn.cursor()
    query = "INSERT INTO users (name, age) VALUES (%s, %s)"
    values = (name, age)
    cursor.execute(query, values)
    conn.commit()
    conn.close()
    return cursor.lastrowid

def getUsers():
    conn = connect()
    cursor = conn.cursor(dictionary=True)
    query = "SELECT * FROM users"
    cursor.execute(query)
    users = cursor.fetchall()
    conn.close()
    return users
