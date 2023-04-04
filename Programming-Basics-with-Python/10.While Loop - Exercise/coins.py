import pyqrcode
import png
from pyqrcode import QRCode

link = 'https://www.onworks.net/onworkssession.php'
url = pyqrcode.create(link)
url.png('qr.png', scale=8)