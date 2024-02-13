from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth import get_user_model
from django.core.validators import MaxValueValidator, MinValueValidator
from django.utils.translation import gettext_lazy as _

from mptt.models import MPTTModel, TreeForeignKey
from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFill

from src.base.models import TimeStampedModel


User = get_user_model() # Get user model


class Brand(models.Model):

    """Brand Model"""

    name = models.CharField(_('Brand name'), max_length=100)

    description_en = models.TextField(_('Brand description'))
    description_ru = models.TextField(_('Описание бренда'))
    description_uz = models.TextField(_('Brend tavsifi'))

    country = models.PositiveSmallIntegerField(_('Brand country'))

    image = models.ImageField(
        verbose_name=_('Image'),
        upload_to='brands/',
    )
    thumbnail = ImageSpecField(
        source='image',
        processors=[ResizeToFill(100, 100)],
        format='JPEG',
        options={'quality': 60}
    )
    medium_square_crop = ImageSpecField(
        source='image',
        processors=[ResizeToFill(400, 400)],
        format='JPEG',
        options={'quality': 80}
    )

    class Meta:
        verbose_name = _('Brand')
        verbose_name_plural = _('Brands')

    def __str__(self):
        return self.name


class Category(MPTTModel):

    """Category Model"""

    name_en = models.CharField('Category name',max_length=150)
    name_ru = models.CharField('Название категории',max_length=150)
    name_uz = models.CharField('Kategoriya nomi',max_length=150)

    parent = TreeForeignKey(
        to='self',
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )

    class MPTTMeta:
        order_insertion_by = ['name_en', 'name_ru', 'name_uz']
    
    class Meta:
        verbose_name = _('Category')
        verbose_name_plural = _('Categories')

    def __str__(self):
        return self.name_en


class Product(TimeStampedModel):

    """Product Model"""

    CONDITION_CHOICES = (
        ('new', _('New')),
        ('used', _('Used')),
        ('openbox', _('OpenBox')),
        ('refurbished', _('Refurbished'))
    )

    model = models.CharField(_('Product model'), max_length=150)

    title_en = models.CharField('Product title', max_length=250)
    title_ru = models.CharField('Заголовок товара', max_length=250)
    title_uz = models.CharField('Mahsulot sarlavhasi', max_length=250)

    description_en = models.TextField('Product description')
    description_ru = models.TextField('Описание товара')
    description_uz = models.TextField('Mahsulot tavsifi')
    
    brand = models.ForeignKey(
        to=Brand,
        verbose_name=_('Product brand'),
        related_name='products',
        on_delete=models.SET_NULL,
        null=True
    )
    category = models.ForeignKey(
        to=Category,
        verbose_name=_('Product category'),
        related_name='products',
        on_delete=models.SET_NULL,
        null=True
    )

    condition = models.CharField(_('Product condition'), max_length=11, choices=CONDITION_CHOICES)
    year = models.PositiveSmallIntegerField(_('Procuct year'), validators=[MinValueValidator(1000),MaxValueValidator(9999)])
    warranty = models.PositiveSmallIntegerField(_('Product warranty'))

    shipping_from = models.PositiveSmallIntegerField(_('Shipping Country'))
    sales_areas = ArrayField(models.PositiveSmallIntegerField(), verbose_name=_('Sales Areas'),)

    characteristics = models.JSONField(_('Product characteristics'))
    
    is_part = models.BooleanField(_('Is part'), default=False)
    for_sale = models.BooleanField(_('For Sale'), default=False)

    price = models.DecimalField(_('Product price'), max_digits=9, decimal_places=2)

    class Meta:
        verbose_name = _('Product')
        verbose_name_plural = _('Products')

    def __str__(self):
        return self.title_en


class Image(models.Model):

    """Image Model"""

    product = models.ForeignKey(
        to=Product,
        verbose_name=_('Image product'),
        related_name='images',
        on_delete=models.CASCADE
    )
    
    image = models.ImageField(
        verbose_name=_('Image'),
        upload_to='products/',
    )
    thumbnail = ImageSpecField(
        source='image',
        processors=[ResizeToFill(100, 100)],
        format='JPEG',
        options={'quality': 60}
    )
    medium_square_crop = ImageSpecField(
        source='image',
        processors=[ResizeToFill(400, 400)],
        format='JPEG',
        options={'quality': 80}
    )

    class Meta:
        verbose_name = _('Image')
        verbose_name_plural = _('Images')

    

    def __str__(self):
        return f'{self.product.title_en}-{self.id} image'


class Rating(TimeStampedModel):

    """Rating model"""

    RATE_CHOICES = (
        (1, _('Ok')),
        (2, _('Fine')),
        (3, _('Good')),
        (4, _('Amazing')),
        (5, _('Incredible'))
    )
    user = models.ForeignKey(
        to=User,
        verbose_name=_('Rated user'),
        related_name='ratings',
        on_delete=models.CASCADE
    )
    product = models.ForeignKey(
        to=Product,
        verbose_name=_('Rated product'),
        related_name='ratings',
        on_delete=models.CASCADE
    )
    rate = models.PositiveSmallIntegerField(_('Rate'),choices=RATE_CHOICES)
    review = models.TextField(_('Review text'))

    class Meta:
        verbose_name = _('Rating')
        verbose_name_plural = _('Ratings')

    def __str__(self):
        return f'{self.user}-{self.product}-{self.rate}'