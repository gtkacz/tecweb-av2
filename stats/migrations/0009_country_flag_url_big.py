# Generated by Django 3.2 on 2021-05-13 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stats', '0008_auto_20210506_1851'),
    ]

    operations = [
        migrations.AddField(
            model_name='country',
            name='flag_url_big',
            field=models.URLField(null=True),
        ),
    ]
