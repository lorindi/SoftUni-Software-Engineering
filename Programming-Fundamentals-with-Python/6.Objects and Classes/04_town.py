class Town:
    def __init__(self, name: str):
        self.name = name

    def set_latitude(self, latitude):
        self.latitude = latitude

    def set_longitude(self, longitude):
        self.longitude = longitude

    def __repr__(self):
        result = f"Town: {self.name} | Latitude: {self.latitude} | Longitude: {self.longitude}"
        return result


city = Town("Sofia")
city.set_latitude("42° 41\' 51.04\" N")
city.set_longitude("23° 19\' 26.94\" E")
print(city)