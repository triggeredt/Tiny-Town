# Generated by Django 4.1.1 on 2022-10-01 13:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('treasurehunt', '0003_remove_code_latitude_remove_code_longitude_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='code',
            name='Order',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
    ]