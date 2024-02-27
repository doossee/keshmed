import io
 
from PIL import Image
from django.core.files.base import ContentFile
from django.db import models
from django.db.models.fields.files import ImageFieldFile
 
 
class WEBPFieldFile(ImageFieldFile):
 
    def save(self, name, content, save=True):
        content.file.seek(0)
        image = Image.open(io.BytesIO(content.file.read()))  # Read image bytes
        image_bytes = io.BytesIO()
        image.save(image_bytes, format="WEBP")
        image_bytes.seek(0)
        super().save(name, ContentFile(image_bytes.read()), save)
 
 
class WEBPField(models.ImageField):
    attr_class = WEBPFieldFile
