from app import db

class CellData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    cell_id = db.Column(db.String(10))
    voltage = db.Column(db.Float)
    current = db.Column(db.Float)
    capacity = db.Column(db.Float)
    temperature = db.Column(db.Float)
    time = db.Column(db.Float)

    def serialize(self):
        return {
            'cell_id': self.cell_id,
            'voltage': self.voltage,
            'current': self.current,
            'capacity': self.capacity,
            'temperature': self.temperature,
            'time': self.time
        }
