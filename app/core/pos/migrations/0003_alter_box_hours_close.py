# Generated by Django 3.2.2 on 2024-04-04 16:50

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pos', '0002_alter_box_hours_close'),
    ]

    operations = [
        migrations.AlterField(
            model_name='box',
            name='hours_close',
            field=models.TimeField(default=datetime.time(16, 50, 2, 498607), verbose_name='Hora de Cierre'),
        ),
    ]
