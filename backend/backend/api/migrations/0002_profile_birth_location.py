# Generated by Django 5.2.3 on 2025-06-27 00:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='birth_location',
            field=models.CharField(default=None, max_length=256),
            preserve_default=False,
        ),
    ]
