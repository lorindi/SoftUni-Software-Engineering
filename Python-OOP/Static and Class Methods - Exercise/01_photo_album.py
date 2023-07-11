from math import ceil

class PhotoAlbum:
    PHOTOS_PER_PAGE = 4

    def __init__(self, pages):
        self.pages = pages
        self.photos = self.build_photos()

    @classmethod
    def from_photos_count(cls, photos_count):
        pages = ceil(photos_count / PhotoAlbum.PHOTOS_PER_PAGE)
        return cls(pages)


    def add_photo(self, label):
        for row, page in enumerate(self.photos):
            if len(page) < PhotoAlbum.PHOTOS_PER_PAGE:
                page.append(label)
        # for page in range(self.pages):
        #     for position in range(PhotoAlbum.PHOTOS_PER_PAGE):
        #         if self.photos[page][position] is None:
        #             self.photos[page][position] = label
                return f"{label} photo added successfully on page {row + 1} slot {len(page)}"
        return 'No more free slots'


    def display(self):
        delimiter = '-' * 11
        result = delimiter + '\n'

        for page in self.photos:
            page_str = ' '.join(['[]' for _ in page])
            result += page_str + '\n' + delimiter + '\n'

        return result.strip()

    def build_photos(self):
        result = []
        for _ in range(self.pages):
            result.append([])
        return result


album = PhotoAlbum(2)

print(album.add_photo("baby"))
print(album.add_photo("first grade"))
print(album.add_photo("eight grade"))
print(album.add_photo("party with friends"))
print(album.photos)
print(album.add_photo("prom"))
print(album.add_photo("wedding"))

print(album.display())
