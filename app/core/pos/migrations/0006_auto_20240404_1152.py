# Generated by Django 3.2.2 on 2024-04-04 16:52

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pos', '0005_auto_20240404_1150'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sale',
            name='initial',
        ),
        migrations.AlterField(
            model_name='box',
            name='hours_close',
            field=models.TimeField(default=datetime.time(16, 52, 56, 909746), verbose_name='Hora de Cierre'),
        ),
    ]
