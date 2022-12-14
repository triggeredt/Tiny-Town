# Generated by Django 4.1.1 on 2022-10-01 18:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('treasurehunt', '0007_rename_location_code_locationdescription_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='code',
            name='AnswerDigit',
            field=models.PositiveIntegerField(blank=True, null=True, verbose_name='Answer digit'),
        ),
        migrations.AlterField(
            model_name='code',
            name='AnswerLocation',
            field=models.CharField(blank=True, max_length=100, verbose_name='Answer location'),
        ),
        migrations.AlterField(
            model_name='code',
            name='HintType',
            field=models.SmallIntegerField(choices=[(1, 'Pointer'), (2, 'Digit')], default=1, verbose_name='Hint type'),
        ),
        migrations.AlterField(
            model_name='code',
            name='LocationDescription',
            field=models.CharField(blank=True, max_length=100, verbose_name='Location description'),
        ),
    ]
