# Generated by Django 4.2.6 on 2024-01-08 11:56

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('products', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('first_name', models.CharField(max_length=150, verbose_name='First name')),
                ('last_name', models.CharField(max_length=150, verbose_name='Last name')),
                ('phone', models.CharField(max_length=13, validators=[django.core.validators.RegexValidator(message='Wrong phone number', regex='^\\+\\d{12}$')], verbose_name='Phone')),
                ('country', models.PositiveSmallIntegerField(verbose_name='Country')),
                ('message', models.TextField(verbose_name='Message')),
                ('checked', models.BooleanField(default=False, verbose_name='Checked')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='orders', to='products.product', verbose_name='Product')),
            ],
            options={
                'verbose_name': 'Order',
                'verbose_name_plural': 'Orders',
            },
        ),
    ]
