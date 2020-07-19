#! /usr/bin/python3
# Dairy Database Constructor
# By: Jacob van Tol

import pymysql
import json
import csv

class DBConnector:
    def __init__(self, host, user, passwd, db_name):
        # Connect
        self.connection = pymysql.connect(
          host=host,
          user=user,
          passwd=passwd,
        )
        self.cursor = self.connection.cursor()
        if (self.cursor.execute(f"SHOW DATABASES LIKE '%{db_name}%;'")):
            self.cursor.execute("CREATE DATABASE " + db_name)
        self.cursor.execute("USE " + db_name)
        self.connection.commit()

    def __parse(self, filepath, type):
        # Read in a file and convert it to an array
        contents = []
        type = type.upper()
        f = open(filepath, 'r')

        if type == "SQL":
            # Convert SQL to array of strings (statements)
            contents = f.read().split(';')
            contents.pop()
        elif type == "CSV":
            # Convert CSV to array of dictionaries (rows)
            reader = csv.DictReader(f)
            for row in reader:
                for col in row:
                    if row[col] == '':
                        row[col] = None
                contents.append(row)
        else:
            print("Error: File type '", type, "' is not supported")

        f.close()
        return contents

    def createRelations(self, schema):
        # Parse a schema and execute each statement
        sql = self.__parse(schema, 'sql')
        for statement in sql:
            self.cursor.execute(statement)
        self.connection.commit()
        return

def main():
    host = input("Enter MySQL host: ")
    user = input("Enter MySQL username: ")
    passwd = input("Enter MySQL password: ")
    db_name = input("Enter MySQL database to create/use: ")
    conn = DBConnector(host, user, passwd, db_name)
    print("Creating cow-related tables...")
    conn.createRelations("cow_tables.sql")

	# print("Creating job-related tables...")
    # conn.createRelations("job_tables.sql")

	# print("Creating individual tables...")
    # conn.createRelations("misc_tables.sql")

    # print("Parsing and inserting cow related data...")

if __name__ == '__main__':
    main()
