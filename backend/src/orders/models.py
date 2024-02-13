from django.db import models
from django.core.validators import RegexValidator
from django.utils.translation import gettext_lazy as _

from src.products.models import TimeStampedModel, Product


phone_regex = RegexValidator(
    regex=r'^\+\d{12}$', message='Wrong phone number'
)

class Order(TimeStampedModel):

    """Order Model"""

    product = models.ForeignKey(
        to=Product,
        verbose_name=_('Product'),
        related_name='orders',
        on_delete=models.CASCADE,
    )
    first_name = models.CharField(_('First name'), max_length=150)
    last_name = models.CharField(_('Last name'), max_length=150)
    phone = models.CharField(_('Phone'), max_length=13, validators=[phone_regex,])
    country = models.PositiveSmallIntegerField(_('Country'))
    message = models.TextField(_('Message'))
    checked = models.BooleanField(_('Checked'), default=False)

    class Meta:
        verbose_name = _('Order')
        verbose_name_plural = _('Orders')

    def __str__(self):
        return f"{self.first_name}-{self.last_name}-{self.product}"
