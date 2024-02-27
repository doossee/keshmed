import os
from PIL import Image

from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.files.images import ImageFile

from .models import Brand, Image as ProductImage

@receiver(post_save, sender=Brand)
@receiver(post_save, sender=ProductImage)
def convert_to_webp(sender, instance, **kwargs):
    if instance.image and instance.image.path.endswith(('.jpg', '.jpeg', '.png')):
        image_path = instance.image.path
        img = Image.open(image_path)

        webp_path = os.path.splitext(image_path)[0] + '.webp'
        img.save(webp_path, 'WEBP', quality=100)

        with open(webp_path, 'rb') as webp_file:
            instance.image.save(os.path.basename(webp_path), ImageFile(webp_file))

        os.remove(webp_path)
