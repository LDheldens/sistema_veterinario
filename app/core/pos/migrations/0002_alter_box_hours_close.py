# Generated by Django 3.2.2 on 2024-04-04 16:16

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pos', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='box',
            name='hours_close',
            field=models.TimeField(default=datetime.time(16, 16, 26, 247926), verbose_name='Hora de Cierre'),
        ),
    ]
