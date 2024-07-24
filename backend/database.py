from app import db
from models import CellData
import pandas as pd

def add_data():
    # Load data from Excel files
    files = ['5308.xls', '5329.xls']
    for file in files:
        cell_id = file.split('.')[0]
        data = pd.read_excel(file, sheet_name=None)
        for sheet_name, sheet_data in data.items():
            for index, row in sheet_data.iterrows():
                cell_data = CellData(
                    cell_id=cell_id,
                    voltage=row['Voltage'],
                    current=row['Current'],
                    capacity=row['Capacity'],
                    temperature=row['Temperature'],
                    time=row['Time']
                )
                db.session.add(cell_data)
        db.session.commit()

if __name__ == '__main__':
    db.create_all()
    add_data()
