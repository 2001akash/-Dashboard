from app import app, db
from models import CellData
from flask import jsonify

@app.route('/api/soh', methods=['GET'])
def get_soh():
    soh_data = [
        {'cell_id': 5308, 'soh': (2992.02 / 3000) * 100},
        {'cell_id': 5329, 'soh': (2822.56 / 3000) * 100}
    ]
    return jsonify(soh_data)

@app.route('/api/cell/<int:cell_id>', methods=['GET'])
def get_cell_data(cell_id):
    data = CellData.query.filter_by(cell_id=cell_id).all()
    return jsonify([d.serialize() for d in data])
