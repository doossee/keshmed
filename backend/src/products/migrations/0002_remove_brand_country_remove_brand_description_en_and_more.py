# Generated by Django 4.2.6 on 2024-03-03 15:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='brand',
            name='country',
        ),
        migrations.RemoveField(
            model_name='brand',
            name='description_en',
        ),
        migrations.RemoveField(
            model_name='brand',
            name='description_ru',
        ),
        migrations.RemoveField(
            model_name='brand',
            name='description_uz',
        ),
        migrations.RemoveField(
            model_name='product',
            name='is_part',
        ),
        migrations.AddField(
            model_name='product',
            name='slug',
            field=models.SlugField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='brand',
            name='image',
            field=models.ImageField(upload_to='brands', verbose_name='Image'),
        ),
        migrations.AlterField(
            model_name='category',
            name='name_uz',
            field=models.CharField(max_length=150, verbose_name='Toifa nomi'),
        ),
        migrations.AlterField(
            model_name='image',
            name='image',
            field=models.ImageField(upload_to='brands', verbose_name='Image'),
        ),
        migrations.AlterField(
            model_name='product',
            name='characteristics',
            field=models.JSONField(blank=True, null=True, verbose_name='Product characteristics'),
        ),
        migrations.AlterField(
            model_name='product',
            name='year',
            field=models.PositiveSmallIntegerField(verbose_name='Procuct year'),
        ),
        migrations.DeleteModel(
            name='Rating',
        ),
    ]
